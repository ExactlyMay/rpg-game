var defenders = [
    {name: "Pearl", image: "pearl.png", hp: 100},
    {name: "Stevonnie", image: "stevonnie.png", hp: 120},
    {name: "Amethyst", image: "amethyst.png", hp: 150},
    {name: "Garnet", image: "garnet.png", hp: 180}
  ];
var enemies = [
    {name: "Aquamarine", image: "aquamarine.png", hp: 100},
    {name: "Agate", image: "agate.png", hp: 120},
    {name: "Jasper", image: "jasper.png", hp: 150},
    {name: "Topaz", image: "topaz.png", hp: 180}
  ];
var characterChosen = false;
var enemyChosen = false;
var healthPoints, attackPower, counterAttackPower;

function game () {
    
    defenders.forEach(function(obj) {
        var defenderImage = $("<img>");
        defenderImage.attr("src", "assets/images/" + obj.name + ".png").height(225).width(200);
        $( "#" + obj.name.toLowerCase() ).append("<p>" + obj.name + "</p>");
        $( "#" + obj.name.toLowerCase() ).append(defenderImage);
        $( "#" + obj.name.toLowerCase() ).append("<p>" + obj.hp + "</p>");
    });

    enemies.forEach(function(obj) {
        var enemyImage = $("<img>");
        enemyImage.attr("src", "assets/images/" + obj.name + ".png").height(225).width(200);
        $( "#" + obj.name.toLowerCase() ).append("<p>" + obj.name + "</p>");
        $( "#" + obj.name.toLowerCase() ).append(enemyImage);
        $( "#" + obj.name.toLowerCase() ).append("<p>" + obj.hp + "</p>");
        $( "#" + obj.name.toLowerCase() ).hide();
    });

    // $('#myButton').click(function() {
    //     $.each(myArray, function() {
    //         $(this).hide();
    //     });
    //  });

    $(".defender").on("click", function(){
        $( "#chosen-character" ).html("<p>Your Character: </p>");
        characterChosen = true;        
        var charString = this.id;
        defenders.forEach(function(obj) {
            if( charString !== (obj.name.toLowerCase()))
            {
                $( "#" + obj.name.toLowerCase() ).hide();
            }
        });
        showEnemies();
    });

    $(".enemy").on("click", function(){
        $( "#chosen-enemy" ).html("<p>Your Enemy: </p>");
        $("#fight").html("<br/><button id='attack'><p>Attack</p></button>");
        enemyChosen = true;
        var enemString = this.id;
        enemies.forEach(function(obj) {
            if( enemString !== (obj.name.toLowerCase()))
            {
                $( "#" + obj.name.toLowerCase() ).hide();
            }
        });
    });

    

    // $("#number").html("<p id='number-text'>Random Number:<br/>" + randomNumber + "</p>");
    // $("#wins-losses").html("<p id='wins-losses-text'>Wins:  " + wins + "<br/>Losses: " + losses + "</p>");
    // $("#total-score").html("<p id='score-text'>Your total score is:  <br/>" + score + "</p>");
    
    // $("button").on("click", function(){
    //     switch(this.id)
    //     {
    //         case "stevonnie":
    //             console.log("You picked Stevonnie!");
    //             break;
    //         case "garnet":
    //             console.log("You picked Garnet!");
    //             break;
    //         case "amethyst":
    //             console.log("You picked Amethyst!");
    //             break;
    //         case "pearl":
    //             console.log("You picked Pearl!");
    //             break;
    //     }
    //     $("#total-score").html("<p id='score-text'>Your total score is:  <br/>" + score + "</p>");
    //     calculateScore();
    // })

};

// function calculateAttack(){
//     if (score === randomNumber){
//         wins++;
//         $("#wins-losses").html("<p id='wins-losses-text'>You win! (^0^)<br/>Wins:  " + wins + "<br/>Losses: " + losses + "</p>");
//         reset();
//     }
//     if (score > randomNumber){
//         losses++;
//         $("#wins-losses").html("<p id='wins-losses-text'>You lose! (T^T)<br/>Wins:  " + wins + "<br/>Losses: " + losses + "</p>");
//         reset();
//     }
// };

// function reset(){
//     rose = Math.floor(Math.random() * 12) + 1;
//     amethyst = Math.floor(Math.random() * 12) + 1;
//     ruby = Math.floor(Math.random() * 12) + 1;
//     sapphire = Math.floor(Math.random() * 12) + 1;
//     randomNumber = Math.floor(Math.random() * 109) + 12;
//     score = 0;
//     $("#number").html("<p id='number-text'>Random Number:<br/>" + randomNumber + "</p>");
//     $("#total-score").html("<p id='score-text'>Your total score is:  <br/>" + score + "</p>");
// };
// Health Points, Attack Power and Counter Attack Power.
function defenderStats(hp, ap, cap) {
    healthPoints = hp; 
    attackPower = ap;
    counterAttackPower = cap;
  };

function showEnemies() {
    $( "#chosen-enemy" ).html("<p>Enemies Available To Attack: </p>");
    enemies.forEach(function(obj) {
        $( "#" + obj.name.toLowerCase() ).show();
    });
  };
  