const wdio = require("webdriverio");

const opts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    platformName: "iOS",
    platformVersion: "13.7",
    deviceName: "iPhone 11",
    bundleId: "org.reactjs.native.example.mobile-app",
    automationName: "XCUITest",
    app:
      "/Users/hinodi/DEV/auto_test/mobile_app/ios/build/Build/Products/Debug-iphonesimulator/mobile_app.app",
  },
  timeout: 5000,
};

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

async function main() {
  const client = await wdio.remote(opts);

  await timeout(1000);
  const button_1 = await client.$('[name="button_1"]');
  button_1.click();
}

main();
