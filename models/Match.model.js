const { Schema, model } = require("mongoose");
const matchSchema = new Schema(
  {
    match: [
      {
        id: String,
        teams: [
          {
            members: [
              {
                id: { type: Schema.Types.ObjectId, ref: "users" },
                name: String,
                // id: Number,
                skills: Number,
                points: Number,
              },
            ],

            points: Number,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Match = model("Match", matchSchema);
module.exports = Match;
