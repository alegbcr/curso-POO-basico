// Literal Object
const alessandro = {
  name: "Alessandro",
  age: 11,
  favoriteGames: ["Fornite", "Free Fire", "Clash Royal"],
  /*
  // This is the same like below
  addGameName: function (newGame) {this.favoriteGames.push(newGame);},
  */
  addGameName(newGame) {
    this.favoriteGames.push(newGame);
  },
};
/* 
// This function create a new game into list
alessandro.addGameName.push("FIFA 22");
 */

// Prototype
function Gamer(name, age, favoriteGames) {
  this.name = name;
  this.age = age;
  this.favoriteGames = favoriteGames;
  /* 
  // This is the same like the outsite function
  this.addGameName = function (newGame) {
      this.favoriteGames.push(newGame);
    };
    */
}
Gamer.prototype.addGameName = function (newGame) {
  this.favoriteGames.push(newGame);
};
// Create a Instance
const Alexander = new Gamer("Alexander González", 37, [
  "FIFA 22",
  "Final Fantasy X",
]);

// Prototypes built with Classes
class Gamer2 {
  constructor(name, age, device, favoriteGames) {
    this.name = name;
    this.age = age;
    this.device = device;
    this.favoriteGames = favoriteGames;
  }

  addGameName(newGame) {
    this.favoriteGames.push(newGame);
  }
}
// Create a Instance
const Lucia = new Gamer2("Lucia Lucas", 17, "PC", ["Spiderman", "Bomberman"]);

/* 
    This prototype is better than above
    because it doesn't care the order of arguments
 */
class Gamer3 {
  constructor({ name, age, device, favoriteGames }) {
    this.name = name;
    this.age = age;
    this.device = device;
    this.favoriteGames = favoriteGames;
  }

  addGameName(newGame) {
    this.favoriteGames.push(newGame);
  }
}
// Create a Instance
const anastacia = new Gamer2({
  favoriteGames: ["Spiderman", "Bomberman"],
  name: "Alessandro González",
  age: 17,
  device: "mobile",
});
