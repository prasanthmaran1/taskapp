import { calculateExportCost } from "../util/order";

test("Export cost for 12 units should be 10000, assuming cost is calculated per pack of up to 10 units", () => {
  expect(calculateExportCost(12)).toBe(10000);
});

test("Export cost for 34 units should be 20000, assuming cost is calculated per pack of up to 10 units", () => {
  expect(calculateExportCost(34)).toBe(20000);
});
