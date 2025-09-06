export const convertHexToRgba = (hex: string, alpha: number): string => {
  let cleaned = hex.replace('#', '');

  if (cleaned.length === 3) {
    cleaned = cleaned
      .split('')
      .map(char => char + char)
      .join('');
  }

  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
