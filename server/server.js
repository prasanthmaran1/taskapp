import express from "express";
import cors from "cors";
import { calculateExportCost } from "./util/order.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let stock = {
  India: 100,
  SriLanka: 100,
};

let costIndia = 30000;
let costSriLanka = 25000;

app.post("/orders", (req, res) => {
  const { country, units } = req.body;

  if (units > 200 || units < 1) {
    return res.status(400).send({
      message:
        "Invalid number of units. Please request between 1 and 200 units.",
    });
  }

  if (stock.India + stock.SriLanka < units) {
    return res.status(400).send({
      message: "Not enough stock is available",
    });
  }

  let totalCost = 0;
  if (country === "India") {
    if (units <= stock.India) {
      totalCost = units * costIndia;
      stock.India -= units;
    } else {
      const availableUnits = stock.India;

      let importUnits = units - availableUnits;
      importUnits = Math.ceil(importUnits / 10) * 10; // get the no of import units eg if avi unit is 10 and order unit is 12 then it will import 10
      if (importUnits > stock.SriLanka) {
        return res.status(400).send({
          message: "Not enough stock is available",
        });
      }
      const importCost = calculateExportCost(importUnits);

      let importcostperUnit = importCost / importUnits;

      let extraImportedUnit = units - availableUnits;

      let totalextraimportunitCost =
        extraImportedUnit * (importcostperUnit + costSriLanka);

      totalCost = availableUnits * costIndia + totalextraimportunitCost;

      costIndia = importcostperUnit + costSriLanka;

      stock.India += importUnits;
      stock.India -= units;
      stock.SriLanka -= importUnits;
    }
  } else if (country === "SriLanka") {
    if (units <= stock.SriLanka) {
      totalCost = units * costSriLanka;
      stock.SriLanka -= units;
    } else {
      const availableUnits = stock.SriLanka;
      let importUnits = units - availableUnits;
      importUnits = Math.ceil(importUnits / 10) * 10;
      if (importUnits > stock.India) {
        return res.status(400).send({
          message: "Not enough stock is available",
        });
      }
      const importCost = calculateExportCost(importUnits);

      let importcostperUnit = importCost / importUnits;

      let extraImportedUnit = units - availableUnits;

      let totalextraimportunitCost =
        extraImportedUnit * (importcostperUnit + costIndia);

      totalCost = availableUnits * costSriLanka + totalextraimportunitCost;
      stock.SriLanka += importUnits;
      stock.SriLanka -= units;
      stock.India -= importUnits;
    }
  } else {
    return res.status(400).send({ message: "Invalid country specified." });
  }

  res.send({
    message: `Order placed successfully for ${units} units from ${country} with total cost: Rs.${totalCost}`,
    stockIndia: stock.India,
    stockSriLanka: stock.SriLanka,
    totalCost,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
