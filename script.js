// Constructor function for creating new CricketPlayer objects,
// initializing name, role, and matchesPlayed.
function CricketPlayer(name, role, matchesPlayed) {
  this.name = name;
  this.role = role;
  this.matchesPlayed = matchesPlayed;
}

// Adding setStats method to CricketPlayer prototype so it's shared across all instances.
CricketPlayer.prototype.setStats = function (runs, wickets) {
  this.runs = runs;
  this.wickets = wickets;
};

// Adding getDetails method to CricketPlayer prototype so all instances
// can retrieve formatted player statistics.
CricketPlayer.prototype.getDetails = function () {
  return `${this.name} (${this.role}) - Matches: ${this.matchesPlayed}, Runs: ${this.runs}, Wickets: ${this.wickets}`;
};

const players = [
  new CricketPlayer("Sachin Tendulkar", "Batter", 463),
  new CricketPlayer("Rahul Dravid", "Batter", 344),
  new CricketPlayer("Zaheer Khan", "Bowler", 200),
];

// Setting individual player statistics using the shared prototype method.
players[0].setStats(18426, 154);
players[1].setStats(10889, 0);
players[2].setStats(627, 282);

const container = document.getElementById("playerCards");
players.forEach((player) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${player.name} <i class="fas fa-cricket-bat-ball"></i></h2>
    <p>Role: ${player.role}</p>
    <p>Matches: ${player.matchesPlayed}</p>
    <p>Runs: ${player.runs}</p>
    <p>Wickets: ${player.wickets}</p>
    <button class="btn">Show Details</button>
    <p class="details"></p>
  `;
  const button = card.querySelector(".btn");
  const details = card.querySelector(".details");
  button.addEventListener("click", () => {
    details.textContent = player.getDetails();
  });
  container.appendChild(card);
});
