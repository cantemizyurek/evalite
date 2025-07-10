import { expect, it, vitest } from "vitest";
import { runVitest } from "evalite/runner";
import { captureStdout, loadFixture } from "./test-utils.js";
import { createDatabase, getEvalsAsRecord } from "evalite/db";

it("Should set exitCode to 1 if there is a timeout", async () => {
  using fixture = loadFixture("timeout");

  const captured = captureStdout();
  const exit = vitest.fn();
  globalThis.process.exit = exit as any;

  await runVitest({
    cwd: fixture.dir,
    path: undefined,
    testOutputWritable: captured.writable,
    mode: "run-once-and-exit",
  });

  expect(captured.getOutput()).toContain("timeout");
  expect(exit).toHaveBeenCalledWith(1);
});

it("Should handle timeouts gracefully", async () => {
  using fixture = loadFixture("timeout");

  const captured = captureStdout();
  const exit = vitest.fn();
  globalThis.process.exit = exit as any;

  await runVitest({
    cwd: fixture.dir,
    path: undefined,
    testOutputWritable: captured.writable,
    mode: "run-once-and-exit",
  });

  // Should indicate a failure in the output
  expect(captured.getOutput()).toContain("Score  ✖ (1 failed)");
  expect(captured.getOutput()).toContain("Eval Files  1");
  expect(captured.getOutput()).toContain("Evals  1");

  expect(captured.getOutput()).not.toContain("No result present");
});

it("Should record timeout information in the database", async () => {
  using fixture = loadFixture("timeout");

  const captured = captureStdout();
  const exit = vitest.fn();
  globalThis.process.exit = exit as any;

  await runVitest({
    cwd: fixture.dir,
    path: undefined,
    testOutputWritable: captured.writable,
    mode: "run-once-and-exit",
  });

  const db = createDatabase(fixture.dbLocation);
  const evals = await getEvalsAsRecord(db);

  expect(evals.Timeout?.[0]).toMatchObject({
    name: "Timeout",
    results: [
      {
        status: "fail",
      },
    ],
  });
});
