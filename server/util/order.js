// this is simple funtion for unit test case
export const calculateExportCost = (unitsNeeded) => {
  let exportCostPerBlock = 10;
  const blocks = Math.ceil(unitsNeeded / 10);
  return blocks * exportCostPerBlock;
};
