const express = require("express");
const router = express.Router();
const docController = require("../controller/docController");
const validation = require("../middleware/validation");


// Get All Docs Of Specific Model
router.get("/readDoc/:modelName", docController.getDocByModelName);

// Create a new Docs For Specific Model
router.post("/createDoc/:modelName", validation.validatonCheck, validation.checkDocSchema, docController.addData);

// Create a new Docs For Specific Model by id
router.get("/readDoc/:modelName/:id", docController.getDocByModelNameAndID);

// Update Docs Of Specific Model
router.put("/updateDoc/:modelName/:docId", validation.validatonCheck, validation.checkDocSchema, docController.updateData)

// Delete Docs From Database
router.delete("/deleteDoc/:docId", docController.deleteData)

module.exports = router;
