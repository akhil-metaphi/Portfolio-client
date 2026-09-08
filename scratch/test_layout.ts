import { calculateRowPattern, generateProjectImageRows } from '../src/utils/imageLayout.ts';

const testCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 20, 30];

console.log("=== TESTING DYNAMIC IMAGE LAYOUT ALGORITHM ===");

let allPassed = true;

for (const n of testCounts) {
  const dummyImages = Array.from({ length: n }, (_, i) => `img-${i + 1}`);
  const pattern = calculateRowPattern(n);
  const rows = generateProjectImageRows(dummyImages);

  const sumPattern = pattern.reduce((a, b) => a + b, 0);
  const totalInRows = rows.reduce((acc, row) => acc + row.length, 0);
  const maxPerRow = Math.max(...pattern);
  const triplesCount = pattern.filter(c => c === 3).length;
  const quadsCount = pattern.filter(c => c >= 4).length;

  const validSum = sumPattern === n && totalInRows === n;
  const validMax = maxPerRow <= 3;
  const validTriples = triplesCount <= 1;
  const validQuads = quadsCount === 0;

  const status = (validSum && validMax && validTriples && validQuads) ? "OK" : "FAIL";
  if (status === "FAIL") allPassed = false;

  console.log(`N = ${n.toString().padStart(2, ' ')} | Status: ${status} | Pattern: [${pattern.join(', ')}] | Rows: ${rows.length}`);
}

console.log(`\nOVERALL TEST RESULT: ${allPassed ? "ALL TESTS PASSED!" : "SOME TESTS FAILED!"}`);
