export const questions = [
  {
    type: "input",
    name: "key",
    message:
      "Please input your api key found at https://platform.openai.com/account/api-keys :",
    validate(value) {
      return isValidKey(value) ? true : "Please input a valid key";
    },
  },
];
