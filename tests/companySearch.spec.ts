import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landingPage";
import { VoteCardPage } from "../pages/voteCardPage";
import { COMPANY_NAME, VOTE_TABLE_HEADERS, MEETING_DETAIL_URL_REGEX } from "../utils/constants";

test(`AC2: Verify User Can Search and Navigate to Vote Card Page for "${COMPANY_NAME}"`, async ({
  page
}) => {
  await page.goto("/WD/?siteId=DemoClient");

  const landing = new LandingPage(page);
  const voteCard = new VoteCardPage(page);

  // Search for the company
  await expect(landing.searchBox).toBeVisible();
  await landing.searchBox.fill(COMPANY_NAME);
  await landing.companyOption(COMPANY_NAME).click();

  // Verify URL navigated to vote card page
  await expect(page).toHaveURL(MEETING_DETAIL_URL_REGEX);

  // Verify vote table is visible
  await expect(voteCard.headers).toContainText(VOTE_TABLE_HEADERS);

  // Verify company name is visible as top banner
  await expect(voteCard.companyHeading(COMPANY_NAME)).toBeVisible();
});
