import { type Locator, type Page } from "@playwright/test";

export class LandingPage {
  readonly page: Page;
  readonly countryFilter: Locator;
  readonly loadingText: Locator;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;

    this.countryFilter = page.getByRole("region", { name: "Country Filter" });
    this.loadingText = page.locator("text=Loading...").first();

    this.searchBox = page
      .getByRole("banner")
      .getByRole("combobox", { name: "Search for a company" });
  }

  countryCheckbox(country: string): Locator {
    return this.countryFilter.getByRole("checkbox", { name: country });
  }

  countryUpdateButton(): Locator {
    return this.countryFilter.getByRole("button", { name: "Update" });
  }

  countryCellsInGrid(): Locator {
    return this.page.locator(".k-grid-content.k-auto-scrollable tbody tr td:nth-child(5)");
  }

  companyOption(company: string): Locator {
    return this.page.getByRole("option", { name: company });
  }
}
