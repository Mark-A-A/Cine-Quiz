import { Router } from "express"

import { getCharacters, handleQuizSubmission} from "../controllers";

const router = Router()

router.get("/characters", getCharacters);

router.post("/quiz/answers", handleQuizSubmission);

module.exports = router;
