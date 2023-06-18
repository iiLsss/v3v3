import type { Config } from "jest"

const config: Config = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  testMatch: ["<rootDir>/src/**/*.spec.(t|j)s"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"]
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: ["src/**/*.{js,vue}", "!src/main.ts", "!src/App.vue"],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 80,
      lines: 90,
      statements: 80
    }
  }
}
export default config
