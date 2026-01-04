const SAFE_COLOR_PATTERN = /^[#a-zA-Z0-9(),.%\s-]{1,50}$/;

export function sanitizeColor(input: string | undefined, fallback: string): string {
  if (!input) {
    return fallback;
  }

  const trimmed = input.trim();

  if (SAFE_COLOR_PATTERN.test(trimmed)) {
    return trimmed;
  }

  return fallback;
}
