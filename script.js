    let enemies = [
    {
    health: 300,
    name: "Bear",
    image: "bear.png",
    },
    {
    health: 2000,
    name: "Alduin",
    image: "alduin.png",
    },
    {
    health: 100,
    name: "Chicken",
    image: "chicken.png",
    }
]

let player = {
    health: 150,
    name: "Mr.Skyrim",
    image: "dragonborn.png",
}
let chosenEnemy

let app = document.getElementById("app");
        
        updateView()
        function updateView(){
            app.innerHTML  = `
      
            <div class="btns">
            <button onclick="fightView()">Fight an enemy</button>
            <button onclick="dagothWave()">???</button>
            <button onclick="playSong()">Play some fine tunes</button>
            <audio id="audio" src="Skyrim - Music & Ambience - Day.mp3"></audio>
            </div>

    `;
        }

        function playSong(){
       let music = new Audio()
       music.src =  "Skyrim - Music & Ambience - Day.mp3"
       music.play()
       }

function dagothWave(){
    let wave = new Audio();
    wave.src = "dagoth urs perform dagothwave live on stage for you.mp3"
    wave.play();
    app.innerHTML = `
    <div class="btns">
        <button onclick="onwards()">Move on?</button>
        </div>
<div class="enemies">
    <img src="dagoth.gif" class="img">
    </div>
`;
    }
    function onwards(){
        app.innerHTML = `
        <div class="btns">
        <button onclick="onwards()">Move on?</button>
        </div>
        <div class="dagoth">
        <div>No recall or intervention will work in this place. THERE IS NO ESCAPE</div>
        <img src="dagoth.gif" class="img">
    </div>
        </div>

        `;
    }
    
    function fightView(){
        getRandomEnemies()
        app.innerHTML = `
        <div class="enemies">
        <div>${chosenEnemy.name}</div>
        <div>HP:${chosenEnemy.health}</div>
        <img src="${chosenEnemy.image}">
        <button onclick="attack()">Attack enemy</button>
        <button onclick="healPlayer()">Heal</button>
        </div>

        <div class="player">
        <div>${player.name}</div>
        <div>${player.health}</div>
        <img src="${player.image}">
        </div>
        `;
        if(chosenEnemy.health <= 0){
        app.innerHTML = `
        <div class="winOrLoseContainer">
        <div>All hail the dragonborn: Slayer of the mighty ${chosenEnemy.name}</div>
        </div>
        `;
    } else if(player.health <= 0){
        app.innerHTML = `
        <div class="winOrLoseContainer">
        <div>You have died. May your soul find peace in Sovngarde</div>
        </div>
        `;

    }
}

    function attack(){
        chosenEnemy.health -= 10;
        player.health -= 10;
        fightView()
    }
    function healPlayer(){
        player.health += 10;
        fightView()
    }

    
    
    function getRandomEnemies(){
        let randomNum = Math.floor(Math.random()* enemies.length);
        chosenEnemy = enemies[randomNum];
    }