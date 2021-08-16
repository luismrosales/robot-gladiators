var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    //alert players that they are starting the round
    window.alert("welcome to robot gladiators!");
    var promptFight = window.prompt("would you like to fight or skip this battle? Enter 'fight' or 'skip' to choose.");

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
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
    var comfirmSkip = window.confirm("are you sure you'd like to quit?");
    //if yes is tru, leave the fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
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
    }

    else {
        window.alert (playerName + " still has " + playerHealth + " health left");
    }
}



//subtract the value of player attack from the 

fight();


/*
1 Alert players that they're starting the round (this is already done).

2 Subtract the value of playerAttack from the value of enemyHealth, and use that result to update the value in the enemyHealth variable.

3 Log a resulting message to the console to confirm that it worked.

4 Subtract the value of enemyAttack from the value of playerHealth, and use that result to update the value in the playerHealth variable.

5 Log a resulting message to the console to confirm that it worked. */

