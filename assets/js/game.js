var playerInfo = {
  name: window.prompt("what is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth:function() {
    if (this.money >=7){
      window.alert("refilling player's health by 20 for 7 dollars.")
    this.health +=20;
    this.money -=7;
    }else{
      window.alert("you dont have enough money!")
    }
  },
  upgradeAttack: function() {
    if (this.money <=7){
      window.alert("upgradeing player's attack by 6 for 7 dollars.")
    this.attack += 6;
    this.money -= 7;
   }else{
     window.alert("you dont have enough money!")
   }
  }

};


var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack:randomNumber(10, 14)
  }
];

//game states
// "WIN" - player robot has defeated all enemy-robots
// * fight all enemy-robots
// * defeat each enemy-robot



// "LOSE" -player robot's health is zero or less

var fight = function(enemy) {
 
  //fight function statements
while(playerInfo.health > 0 && enemy.health > 0) {
  //alert players that they are starting the round
  
  var promptFight = window.prompt("would you like to fight or skip this battle? Enter 'fight' or 'skip' to choose.");

  if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
  var confirmSkip = window.confirm("are you sure you'd like to quit?");
  //if yes is tru, leave the fight
  if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!!");
      //subtract money from playerMoney for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      console.log("playerMoney", playerInfo.money);
      break;
  }
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemy.health = enemy.health - playerInfo.attack;
  console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
  );

  // check enemy's health
  if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");
    break;
  } else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerInfo.health = playerInfo.health - enemy.attack;
  console.log(
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
  );

  // check player's health
  if (playerInfo.health <= 0) {
    for(var i = 0; i < enemyNames.length; i++){
  if (playerInfo.health > 0) {
    window.alert("welcome to robot gladiators! round " + (i + 1 ));
  }
  var pickedEnemyName = enemyNames[i];
  enemy.health = 50;
  fight(pickedEnemyName);
}
    window.alert(playerInfo.name + " has died!");
  } else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
  }
  // if player choses to skip
} 
  else {
      fight()
  }
}

 
var damge = rndomNumber(playerInfo.attack - 3, playerInfo.attack);

  enemy.health = Math.max(0, enemy.health - damage);
  console.log(playerInfo.name + " attacked " + enemy.name + " . " + enemy.name + " now has " + enemy.health + " health remaining");

  if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

  }

  else {
      window.alert(enemy.name + " still has " + enemy.health + " health left ");
  }

  var damege = randomNumber(enemy.attack -3, enemy.attack);

  playerInfo.health = Math.max(0, playerInfo.health - damage);
  console.log(enemyName + " attacked " + playerInfo.name + " . " + playerInfo.name + "  now has " + playerInfo.health + " health remaining");

  if (playerHealth <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
  }

  else {
      window.alert (playerInfo.name + " still has " + playerInfo.health + " health left");
  }
}


for(var i = 0; i < enemyNames.length; i++){
  if (playerInfo.health > 0) {
    window.alert("welcome to robot gladiators! round " + (i + 1 ));
    var pickedEnemyName = enemyNames[i];
  enemy.health = 50;
  fight(pickedEnemyName);
  }

  else {
    window.alert("you have lost your robot in battle! game over");
    break;
  }
  
}
}


// start game
 var startGame = function() { 
  playerInfo.reset();
  for (var i = 0; i < enemyInfo.length; i++){
if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
  window.alert("welcome to robot gladiators round " + (i + 1));
  var storeConfirm = window.alert("the fight is over, visit the store?");
if (storeConfirm){
  shop()
}

  var pickedEnemyObj = enemyInfo[i];
  pickedEnemyObj.health = randomNumber(40, 60);
  fight(pickedEnemyObj);
  if (i < enemyNames.length - 1) {
    shop();
  }
}
else {
  window.alert("you have lost your robot in battle, Game Over!");
  break;
    } 
  }
  endGame();
  startGame();
}




// end game
var endGame = function() {
  window.alert("the game has now ended, lets see how you did! ")
  if (playerInfo.health > 0) {
    window.alert("great job, you survived the game!, you now have a score of" + playerInfo.money + " . ");
  } else {
    window.alert("you've lost your robot in battle!")
  }

  var playAgainConfirm = window.alert("would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("thank you for playing robot gladiators, come back soon!");
  }

}


// shop section
var shop = function() {
var shopOptionPromtp = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
switch(shopOptionPromtp){
case "refill":
  case "REFILL":
playerInfo.refillHealth();
break;
  playerInfo.health = playerInfo.health + 20;
  playerInfo.money = playerInfo.money - 7;
  break;

break;
case "upgrade":
case "UPGRADE":
  playerInfo.upgradeAttack();
break;
    playerInfo.attack = playerInfo.attack + 6;
    playerInfo.money = playerInfo.money -7;
  

break;
case "leave":
  case "LEAVE":
window.alert("leaving the store.")

shop();
break;
}
}

// function to generate a random numeric value
var randomNumber = function() {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};