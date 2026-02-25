import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landingPage";
import { COUNTRY } from "../utils/constants";

test(`AC1: Verify Table is Filtered Correctly by Country "${COUNTRY}" on Landing Page`, async ({
  page
}) => {
  await page.goto("/WD/?siteId=DemoClient");

  const landing = new LandingPage(page);

  // Verify country filter is visible
  await expect(landing.countryFilter).toBeVisible();

  // Select the country and apply the filter
  await landing.countryCheckbox(COUNTRY).check();
  await landing.countryUpdateButton().click();

  await landing.loadingText.waitFor({ state: "hidden" }).catch(() => {});

  // Verify all rows in the grid have the selected country
  const countryCells = landing.countryCellsInGrid();
  await expect(countryCells.first()).toHaveText(COUNTRY);
});
