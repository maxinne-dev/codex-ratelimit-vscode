const HEX_COLOR_PATTERN = /^#(?:[a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/;
const RGB_NUMBER = '(?:[01]?\\d?\\d|2[0-4]\\d|25[0-5])';
const ALPHA_VALUE = '(?:0|0?\\.\\d+|1(?:\\.0+)?)';
const RGB_COLOR_PATTERN = new RegExp(`^rgba?\\(\\s*${RGB_NUMBER}\\s*,\\s*${RGB_NUMBER}\\s*,\\s*${RGB_NUMBER}(?:\\s*,\\s*${ALPHA_VALUE})?\\s*\\)$`);
const HUE_COMPONENT = '(?:360(?:\\.0+)?|3[0-5]\\d(?:\\.\\d+)?|[12]?\\d?\\d(?:\\.\\d+)?)';
const HSL_PERCENT = '(?:100|[0-9]{1,2})(?:\\.\\d+)?%';
const HSL_COLOR_PATTERN = new RegExp(`^hsla?\\(\\s*${HUE_COMPONENT}\\s*,\\s*${HSL_PERCENT}\\s*,\\s*${HSL_PERCENT}(?:\\s*,\\s*${ALPHA_VALUE})?\\s*\\)$`);

export function sanitizeColor(input: string | undefined, fallback: string): string {
  if (!input) {
    return fallback;
  }

  const trimmed = input.trim();

  if (trimmed.length > 50) {
    return fallback;
  }

  if (
    HEX_COLOR_PATTERN.test(trimmed) ||
    RGB_COLOR_PATTERN.test(trimmed) ||
    HSL_COLOR_PATTERN.test(trimmed)
  ) {
    return trimmed;
  }

  return fallback;
}
