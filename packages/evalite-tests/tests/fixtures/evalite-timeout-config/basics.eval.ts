import { evalite } from "evalite";
import { Levenshtein } from "autoevals";

evalite("Basics", {
  data: () => {
    return [
      {
        input: "abc",
        expected: "abcdef",
      },
    ];
  },
  task: async (input) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return input + "def";
  },
  scorers: [Levenshtein],
});
