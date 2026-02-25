import { test, expect } from "@playwright/test";

const country = "Belgium";

test(`AC1: Verify Meetings Grid Filters Correctly by Country "${country}" on Landing Page`, async ({
  page
}) => {
  await page.goto("/WD/?siteId=DemoClient");

  // Verify country filter is visible
  const countryFilter = page.getByRole("region", { name: "Country Filter" });
  await expect(countryFilter).toBeVisible();

  await countryFilter.getByRole("checkbox", { name: country }).check();
  await countryFilter.getByRole("button", { name: "Update" }).click();

  // Wait for loading overlay to disappear
  await page
    .locator("text=Loading...")
    .first()
    .waitFor({ state: "hidden" })
    .catch(() => {});

  // Verify all rows show the selected country
  const countryCells = page.locator(".k-grid-content.k-auto-scrollable tbody tr td:nth-child(5)");
  await expect(countryCells.first()).toHaveText(country);

  const values = (await countryCells.allTextContents()).map((t) => t.trim());
  expect(values.every((v) => v === country)).toBeTruthy();
});
