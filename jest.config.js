module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setUpTests.ts"],
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
};
