/**
 * Dynamic Image Layout Generator for Project Detail Pages
 * 
 * Visual Progression Goal:
 * 1 (SINGLE) → 2 (DOUBLE) → 1 (SINGLE) → 3 (TRIPLE) → 1 (SINGLE) → 2 (DOUBLE) → 1 (SINGLE)
 * 
 * Priorities:
 * 1. Use every image exactly once (no duplicates, no lost images).
 * 2. Maximum 3 images per row (NEVER 4/QUAD).
 * 3. TRIPLE (3) occurs AT MOST ONCE per project.
 * 4. Layout visually grows toward TRIPLE and decreases afterward.
 * 5. First row is preferably SINGLE (1).
 * 6. Final row is preferably SINGLE (1).
 * 7. Respects exact uploaded image order.
 */

/**
 * Calculates the exact row distribution pattern for N images.
 * Returns an array of numbers representing how many images each row should contain.
 */
export function calculateRowPattern(N: number): number[] {
  if (N <= 0) return [];
  if (N === 1) return [1];
  if (N === 2) return [1, 1];
  if (N === 3) return [1, 2];
  if (N === 4) return [1, 2, 1];
  if (N === 5) return [1, 2, 1, 1];
  if (N === 6) return [1, 2, 1, 2];

  // For N >= 7, build toward a single TRIPLE: [1, 2, 1, 3] (sum = 7)
  const pattern: number[] = [1, 2, 1, 3];
  let rem = N - 7;
  let nextVal = 1; // After 3, ramp down with 1, then 2, 1, 2...

  while (rem > 0) {
    if (rem === 1) {
      pattern.push(1);
      rem -= 1;
    } else if (rem === 2) {
      if (nextVal === 2) {
        pattern.push(2);
        rem -= 2;
      } else {
        pattern.push(1);
        pattern.push(1);
        rem -= 2;
      }
    } else {
      // rem >= 3
      pattern.push(nextVal);
      rem -= nextVal;
      nextVal = nextVal === 1 ? 2 : 1;
    }
  }

  return pattern;
}

/**
 * Groups an array of items (e.g. project images) into dynamic rows.
 * 
 * @param images Ordered array of image items
 * @returns Array of rows, where each row is an array of image items
 */
export function generateProjectImageRows<T>(images: T[]): T[][] {
  if (!images || images.length === 0) return [];

  const pattern = calculateRowPattern(images.length);
  const rows: T[][] = [];
  let currentIndex = 0;

  for (const count of pattern) {
    const rowChunk = images.slice(currentIndex, currentIndex + count);
    if (rowChunk.length > 0) {
      rows.push(rowChunk);
      currentIndex += rowChunk.length;
    }
  }

  // Safety fallback: if any remaining images exist for any unforeseen edge case, add as single rows
  while (currentIndex < images.length) {
    rows.push([images[currentIndex]]);
    currentIndex++;
  }

  return rows;
}
