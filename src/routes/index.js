const {
  connect,
  get_enviarmensaje,
  post_enviarmensaje,
} = require("../app/index");
const { Router } = require("express");
const router = Router();


connect();
router.get("/enviarmensaje", async (req, res) => {
  await get_enviarmensaje(req, res);
});


router.post("/enviarmensaje", post_enviarmensaje);

module.exports = router;
