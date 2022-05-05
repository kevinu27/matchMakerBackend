const express = require("express");
const router = express.Router();

const Match = require("../models/Match.model");

// router.get("/getAllCoasters", (req, res) => {
//   Coaster.find()
//     .select("title imageUrl")
//     .sort({ createdAt: 1 })
//     .then((response) => setTimeout(() => res.json(response), 200))
//     .catch((err) =>
//       res
//         .status(500)
//         .json({ code: 500, message: "Error fetching coasters", err })
//     );
// });

router.get("/profile/:_id", (req, res) => {
  const idFromParam = req.params._id;
  console.log("params", req.params._id);
  // Match.find({ match: [ { teams: [{ members: $in: [_id: idFromParam ] } ] ] }})
  Match.find({ Members: { _id: idFromParam } })
    .populate("users")
    .then((response) => {
      res.json(response);
      console.log("response", response);
    })
    .catch((err) =>
      res.status(500).json({ code: 500, message: "Error fetching", err })
    );
});

router.post("/newMatch", (req, res) => {
  const matches = req.body;
  // console.log("matches", matches);
  console.log("req.body", req.body);

  Match.create(matches)
    .then((response) => res.json(response))
    .catch((err) =>
      res.status(500).json({ code: 500, message: "Error saving", err })
    );
});

// router.put("/editCoaster/:coaster_id", (req, res) => {
//   const coaster = req.body;

//   Coaster.findByIdAndUpdate(req.params.coaster_id, coaster)
//     .then((response) => res.json(response))
//     .catch((err) =>
//       res
//         .status(500)
//         .json({ code: 500, message: "Error editing coasters", err })
//     );
// });

module.exports = router;
