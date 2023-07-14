const { getAllPlayersbyTeam } = require("../controller/teamController");

describe("Team", () => {
  describe("getAllPlayersByTeam", () => {
    
    it("team player details found", () => {
      const req = { params: { id: "1" } };
      const res = { json: jest.fn() };

      getAllPlayersbyTeam(req, res);

      expect(res.json).toHaveBeenCalledWith({
        data: {
          players: [
            { id: "1", name: "Virat Kohli", score: 120, wickets: 0 },
            { id: "2", name: "Rohit Sharma", score: 90, wickets: 1 },
            { id: "3", name: "Jasprit Bumrah", score: 10, wickets: 4 },
            { id: "4", name: "KL Rahul", score: 70, wickets: 0 },
            { id: "5", name: "Ravindra Jadeja", score: 40, wickets: 2 },
            { id: "6", name: "Mohammed Shami", score: 5, wickets: 3 },
            { id: "7", name: "Shikhar Dhawan", score: 100, wickets: 0 },
            { id: "8", name: "Hardik Pandya", score: 60, wickets: 1 },
            { id: "9", name: "Yuzvendra Chahal", score: 20, wickets: 5 },
            { id: "10", name: "Bhuvneshwar Kumar", score: 30, wickets: 2 },
            { id: "11", name: "Ishan Kishan", score: 50, wickets: 0 },
          ],
        },
      });
    });

    it("team player details not found", () => {
      const req = { params: { teamId: "123" } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      getTeamById(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "match info not found" });
    });
  });
});
