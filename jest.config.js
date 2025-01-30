module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.css$": "jest-transform-css", // CSSファイルをモック
    "^.+\\.tsx?$": "babel-jest", // TypeScriptファイルをbabel-jestで変換
    "^.+\\.jsx?$": "babel-jest", // JSXファイルをbabel-jestで変換
  },
  transformIgnorePatterns: ["/node_modules/(?!.*\\.(css|scss))"],
};
