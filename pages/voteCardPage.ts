import { expect, type Locator, type Page } from "@playwright/test";

export class VoteCardPage {
  readonly page: Page;
  readonly voteTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.voteTable = page.locator("table, [role=table], [role=grid]").first();
  }

  async expectCompanyVisible(company: string): Promise<void> {
    await expect(this.page.getByRole("heading")).toContainText(company);
  }

  async expectVoteTableVisible(): Promise<void> {
    await expect(this.voteTable).toBeVisible();
  }
}
