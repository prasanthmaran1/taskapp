// this is simple funtion for unit test cases
export const calculateExportCost = (unitsNeeded) => {
  let exportCostPerBlock = 5000;
  const blocks = Math.ceil(unitsNeeded / 10);
  return blocks * exportCostPerBlock;
};
