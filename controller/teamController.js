const teamService = require("../service/teamService");
const teams = require("../data/Teams");

function getAllTeamAndPlayers(req, res) {
  if (teams.length != 0) {
    return res.status(200).json({
      message: "team info found",
      data: teams,
    });
  } else {
    return res.status(400).json({
      message: "team info not found",
      data: null,
    });
  }
}

function getAllPlayersbyTeam(req, res) {
  const { id } = req.params;
  let resTeam = teams.filter((team) => team.id == id);
  if (resTeam.length != 0) {
    return res.status(200).send({
      message: "team player info found",
      data: resTeam,
    });
  } else {
    return res.status(400).send({
      message: "team player info not found",
      data: [],
    });
  }
}

function getTopScoreAndWicket(req,res) {
    let topRes = [];
    for(let i=0;i<teams.length;i++){
        let players = teams[i].players;
        let topScorer=0;
        let topWickets= 0;
        for(let j=0;j<players.length;j++){
            if(topScorer<players[j].score){
                topScorer = players[j].score
            }
            if(topWickets<players[j].wickets){
                topWickets = players[j].wickets
            }
        }
        let topScorerList = players.filter(player=>player.score===topScorer);
        let topWicketTakerList = players.filter(player=>player.wickets===topWickets);
        topRes.push(
            {
                "Team Id":teams[i].id,
                "Team Name":teams[i].name,
                "TopScorer":topScorerList,
                "TopWicketTaker":topWicketTakerList,
            }
        )

    }

    res.send({
        message:"top scorer and wicket takers found",
        data:topRes
    });

}


module.exports = {
  getAllTeamAndPlayers,
  getAllPlayersbyTeam,
  getTopScoreAndWicket,
};
