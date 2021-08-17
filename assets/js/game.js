var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



//game states
// "WIN" - player robot has defeated all enemy-robots
// * fight all enemy-robots
// * defeat each enemy-robot



// "LOSE" -player robot's health is zero or less

var fight = function(enemyName) {
  //fight function statements
while(playerHealth > 0 && enemyHealth > 0) {
  //alert players that they are starting the round
  
  var promptFight = window.prompt("would you like to fight or skip this battle? Enter 'fight' or 'skip' to choose.");

  if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
  var confirmSkip = window.confirm("are you sure you'd like to quit?");
  //if yes is tru, leave the fight
  if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!!");
      //subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
  }
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    break;
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
} 
  else {
      fight()
  }
}

 

  enemyHealth = enemyHealth -playerAttack;
  console.log(playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining");

  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

  }

  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left ");
  }


  playerHealth = playerHealth - enemyAttack;
  console.log(enemyName + " attacked " + playerName + " . " + playerName + "  now has " + playerHealth + " health remaining");

  if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
  }

  else {
      window.alert (playerName + " still has " + playerHealth + " health left");
  }
}


    
}




for(var i = 0; i < enemyNames.length; i++){
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}


//fight();


