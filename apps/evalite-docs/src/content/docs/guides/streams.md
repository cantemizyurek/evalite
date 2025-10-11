---
title: Streams
---

You can handle streams in Evalite by returning any async iterable (including a `ReadableStream`) from your task. This means you can test functions like the AI SDK `streamText` function easily:

```ts
import { evalite } from "evalite";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { Factuality } from "autoevals";

evalite("My Eval", {
  data: [{ input: "What is the capital of France?", expected: "Paris" }],
  task: async (input) => {
    const result = await streamText({
      model: openai("your-model"),
      system: `Answer the question concisely.`,
      prompt: input,
    });

    return result.textStream;
  },
  scorers: [Factuality],
});
```
