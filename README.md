# WD Automation Test Suite

End-to-end automated tests for the Web Disclosure (WD) site using
Playwright and TypeScript.

This project validates: 
- AC1: Verify Table is Filtered Correctly by Country "Belgium" on Landing Page
- AC2: Verify User Can Search and Navigate to Vote Card Page for Company "Activision Blizzard Inc"

------------------------------------------------------------------------

## Tech Stack

-   Playwright
-   TypeScript
-   Node.js
-   ESLint & Prettier
-   Dotenv
-   Playwright HTML Reporter

------------------------------------------------------------------------

## Prerequisites

Before running the project, ensure the following are installed:

### 1. Node.js

-   Node.js version 18 or higher
-   npm version 9 or higher

Check your version: node -v npm -v

Download Node.js from: https://nodejs.org/

### 2. Playwright Browsers

Playwright browsers must be installed after dependency setup.

------------------------------------------------------------------------

## Setup Instructions

1.  Clone the repository: git clone `<repository-url>`{=html} cd
    wd-automation

2.  Install dependencies: npm install

3.  Install Playwright browsers: npx playwright install

------------------------------------------------------------------------

## Environment Configuration

Create a `.env.example` file in the root directory:

BASE_URL=https://viewpoint.glasslewis.com
WD_PATH=/WD/?siteId=DemoClient

Ensure `playwright.config.ts` references the environment variable:

baseURL: process.env.BASE_URL

This prevents hardcoding application URLs in test files.

------------------------------------------------------------------------

## Running Tests

Run all tests (headless mode): npx playwright test

Run tests in headed mode: npx playwright test --headed

Run tests in a specific browser: npx playwright test --project=chromium
npx playwright test --project=firefox

Run a specific test file: npx playwright test
tests/companySearch.spec.ts

------------------------------------------------------------------------

## Test Reporting

After test execution, open the HTML report: npx playwright show-report

Features: - Interactive HTML report - Screenshots captured on failure -
Videos retained on failure

Artifacts are stored in the `test-results` directory.

------------------------------------------------------------------------

## Project Structure

wd-automation/ 
├── pages/ 
├── tests/ 
├── utils/ 
├── playwright.config.ts
├── .env 
├── package.json 
└── README.md

------------------------------------------------------------------------

## Design & Best Practices

-   Page Object Model (POM) architecture
-   No hardcoded waits (uses Playwright auto-waiting)
-   Clear test naming conventions
-   Descriptive assertions
-   Environment-based configuration
-   Headless-ready and CI compatible
-   ESLint and Prettier enforced for clean code

------------------------------------------------------------------------

## Linting

Check lint issues: npm run lint

Auto-fix lint issues: npm run lint:fix

------------------------------------------------------------------------

## Summary

This project follows automation best practices including clean
structure, environment configuration, proper synchronization, reporting,
and maintainable test design.
