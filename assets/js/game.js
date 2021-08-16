var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    //alert players that they are starting the round
    window.alert("welcome to robot gladiators!");
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

