import { test, expect } from "@playwright/test";

const companyName = "Activision Blizzard Inc";

test(`AC2: Verify User Can Search and Navigate to Vote Card Page for "${companyName}"`, async ({
  page
}) => {
  await page.goto("/WD/?siteId=DemoClient");

  // Search for the company
  const searchBox = page
    .getByRole("banner")
    .getByRole("combobox", { name: "Search for a company" });

  await expect(searchBox).toBeVisible();
  await searchBox.fill(companyName);

  await page.getByRole("option", { name: companyName }).click();

  // Verify vote table is visible
  const expectedHeaders = [
    "Item",
    "Proposal Description",
    "Management Recommendation",
    "Vote Decision",
    "For / Against Management",
    "Proponent"
  ];

  const headers = page.getByRole("columnheader");

  await expect(headers).toHaveText(expectedHeaders);

  // Verify company name is visible as top banner
  await expect(page.getByRole("heading", { level: 2, name: companyName })).toBeVisible();
});
