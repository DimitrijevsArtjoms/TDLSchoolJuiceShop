import report from "multiple-cucumber-html-reporter";

report.generate({
  jsonDir: "./reports/json",
  reportPath: "./reports/cucumber",
  metadata: {
    browser: {
      name: "chrome",
      version: "142.0.7444.176",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  durationInMs: true,
});
