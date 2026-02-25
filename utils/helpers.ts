import { expect, type Locator } from "@playwright/test";

function toError(err: unknown): Error {
  return err instanceof Error ? err : new Error(String(err));
}

function withCause(message: string, err: unknown): Error {
  const cause = toError(err);
  // Attach the original error without relying on ErrorOptions (keeps TS happy on older targets)
  return Object.assign(new Error(message), { cause });
}

export async function click(locator: Locator, description?: string): Promise<void> {
  try {
    await locator.click();
  } catch (err) {
    throw withCause(`Failed to click ${description ?? locator.toString()}`, err);
  }
}

export async function fillInput(
  locator: Locator,
  value: string,
  description?: string
): Promise<void> {
  try {
    await locator.fill(value);
  } catch (err) {
    throw withCause(`Failed to fill ${description ?? locator.toString()} with "${value}"`, err);
  }
}

export async function selectOptionByLabel(
  locator: Locator,
  label: string,
  description?: string
): Promise<void> {
  try {
    await locator.selectOption({ label });
  } catch (err) {
    throw withCause(`Failed to select "${label}" on ${description ?? locator.toString()}`, err);
  }
}

export async function expectText(
  locator: Locator,
  expected: string,
  description?: string
): Promise<void> {
  try {
    await expect(locator).toHaveText(expected);
  } catch (err) {
    throw withCause(`Expected "${expected}" in ${description ?? locator.toString()}`, err);
  }
}
