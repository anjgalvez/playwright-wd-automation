import { type Locator, type Page } from "@playwright/test";

export class LandingPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder("Search for a company...");
    this.updateButton = page.getByRole("button", { name: "Update" }).first();
  }

  async selectCountry(country: string) {
    await this.page.getByRole("checkbox", { name: country }).check();
  }

  async clickUpdate() {
    await this.updateButton.click();
  }

  async searchAndSelectCompany(company: string) {
    await this.searchInput.fill(company);
    await this.page.getByRole("option", { name: company }).click();
  }
}
