import { Router } from "express"

import { getCharacters } from "../controllers";

const router = Router()

router.get("/characters", getCharacters);

router.post("/quiz/answers", (req, res) => {
  console.log("/quiz/answers")
  console.log("req.body=======")
  console.log(req.body)
});

module.exports = router;
