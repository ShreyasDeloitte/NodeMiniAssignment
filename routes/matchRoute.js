const express = require("express");
const router = express.Router();
const matchController = require("../controller/matchController");

router.get('/',matchController.getAllMatches);
router.get('/today',matchController.getMatchByDate);
router.post('/addData',matchController.addMatch);
router.put('/updateDate',matchController.updateMatch);
router.get('/matchbydate/:date',matchController.getMatchByDate);
router.delete('/cancel/:id',matchController.cancelMatch)


module.exports = router;