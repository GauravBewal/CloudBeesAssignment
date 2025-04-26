import { test, expect, Page } from '@playwright/test';

test.describe('CloudBees Website Tests', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.cloudbees.com');
    await page.waitForLoadState('domcontentloaded');
  });

  test('Verify CloudBees Website pages', async () => {
    // Click Products > CloudBees CD/RO
    await page.locator("//button[contains(text(),'Products')]").click();
    await page.locator("//a[@data-test='navbar.menuLink.products.otherProducts.cloudbeesCD']").click();
    await page.locator("//p[contains(text(),'Cost Savings')]/parent::div//span").waitFor({state: "visible", timeout: 5000});

    // Verify Cost Savings value is $2m
    const costSavingsText = await page.locator("//p[contains(text(),'Cost Savings')]/parent::div//span").textContent();
    expect(costSavingsText).toContain('$2m');

    // Scroll down and click Auditors / Security
    await Promise.all([
      await page.locator("//span[contains(text(),'Auditors / Security')]/ancestor::button").scrollIntoViewIfNeeded(),
      await page.locator("//span[contains(text(),'Auditors / Security')]/ancestor::button").click(),
      await page.waitForTimeout(5000)
    ]);

    // Verify text under Release Governance
    const releaseGovernanceText = await page.locator("//p[contains(text(),'Release Governance')]/following-sibling::h4").textContent();
    expect(releaseGovernanceText).toContain('Generate single-click audit reports');

    // Click Resources > Documentation and verify new tab opens
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator("//button[contains(text(),'Resources')]").click(),
      page.locator("//a[@data-test='navbar.menuLink.resources.supportDocumentation.documentation']").click(),
      page.waitForTimeout(5000)
    ]);
    expect(newPage.url()).not.toBe(page.url());
    await newPage.bringToFront();
    page = newPage; // Bring the new tab to focus
    await page.locator("//input[@placeholder='Search all CloudBees Resources']").waitFor({state: "visible", timeout: 10000});

    // Click in the Search field and verify new page opens

    await page.locator("//input[@placeholder='Search all CloudBees Resources']").click();
    await page.locator("//input[@placeholder='Search']").waitFor({state: "visible", timeout: 10000});


    // Search for "Installation" and verify pagination
    await page.locator("//input[@placeholder='Search']").fill('Installation');
    await page.locator("//ul[contains(@class,'pagination')]").waitFor({state: "visible", timeout: 10000});
    const pagination = page.locator("//ul[contains(@class,'pagination')]");
    expect(await pagination.isVisible()).toBe(true);
  });
});
