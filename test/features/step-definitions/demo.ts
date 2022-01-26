import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"


Given(/^Google page is opened$/, async function(){
    browser.url("https://www.google.com")
    browser.pause(1000)
})

When(/Search with (.*)/, async function (searchItem) {
  console.log(">> searchItem: ${searchItem}");
  let ele = await $("[name=q]");
  await ele.setValue(searchItem);
  await browser.keys("Enter");
})

Then(/^Click on the first search result$/, async function () {
  let ele = await $("<h3>");
  ele.click();
})

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(">> expectedURL:  ${expectedURL}");
  let url = await browser.getUrl()
  chai.expect(url).to.equal(expectedURL)
})