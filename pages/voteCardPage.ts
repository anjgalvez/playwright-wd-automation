import { expect, type Locator, type Page } from "@playwright/test";

export class VoteCardPage {
  readonly page: Page;
  readonly voteTable: Locator;
  readonly headers: Locator;

  constructor(page: Page) {
    this.page = page;
    this.voteTable = page.locator("table, [role=table], [role=grid]").first();
    this.headers = page.getByRole("columnheader");
  }

  async expectCompanyVisible(company: string): Promise<void> {
    await expect(this.page.getByRole("heading")).toContainText(company);
  }

  async expectVoteTableVisible(): Promise<void> {
    await expect(this.voteTable).toBeVisible();
  }

  companyHeading(company: string): Locator {
    return this.page.getByRole("heading", { level: 2, name: company });
  }
}
