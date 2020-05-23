var heigth_screen = window.innerHeight;
var width_screen = window.innerWidth;
var player;
var platforms;
var cursors;
// var keyR;
var keySpace;
var nextJump = 0;
var left = false;
var right = false;
var jump = false;
var lol;
var score = 0;
var scoreText;
var levelGame;
var game = new Phaser.Game(width_screen, heigth_screen, Phaser.AUTO, '', { preload, create, update });

function preload() {
  game.load.image('sky', 'images/clouds.jpg');
  game.load.image('win', 'images/win.jpg');
  game.load.image('ground', 'images/ground.png');
  game.load.image('platform', 'images/platform.png');
  game.load.image('lol', 'images/lol.png');
  game.load.spritesheet('Alina', './images/roblox_sprite.svg', 40, 48);
  game.load.audio('sound', 'sound/sound.mp3');
  game.load.audio('jump', 'sound/jump.mp3');
  game.load.audio('lol', 'sound/lol.mp3');
  game.load.audio('hurt', 'sound/hurt.mp3');
  game.load.spritesheet('buttonhorizontal', 'images/button-horizontal.png',96,64);
  game.load.spritesheet('buttonjump', 'images/button-round-b.png',96,96);
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  createElementsGame();
  // keyR = game.input.keyboard.addKey(Phaser.Keyboard.R);
  keySpace = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	var sound = this.game.add.audio('sound');
  sound.play();
}

function update() {
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(lols, platforms);
  game.physics.arcade.overlap(player, lols, levelControl, null, this);
  player.body.velocity.x = 0;

  if (cursors.left.isDown) {
    player.body.velocity.x = -150;
    player.animations.play('left');
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 150;
    player.animations.play('right');
  } else {
    player.animations.stop();
    player.frame = 4;
  }

  if (keySpace.isDown && player.body.touching.down) {
    player.body.velocity.y = -350;
    var sound = this.game.add.audio('jump');
    sound.play();
  }
	
	if (player.body.y > heigth_screen-50) {
		var sound = this.game.add.audio('hurt');
      setTimeout(() => finishGame(), 50);
      setTimeout(() => restartGame(), 5000);
    }

    if (left) {
      player.body.velocity.x = -150;
      player.animations.play('left');
    } else if (right) {
      player.body.velocity.x = 150;
      player.animations.play('right');
    }
    
    if (jump) {
      if (game.time.now > nextJump ){
        player.body.velocity.y = -350;
        var sound = this.game.add.audio('jump');
        sound.play();
        nextJump = game.time.now + 1200;
      }
    } 
	
	// if (keyR.isDown) {
  //   restartGame();
  // }
}

function restartGame() {
  this.game.state.restart();
  score = 0;
}

function winGame() {
	game.add.sprite(-50, -150, 'win');
	var game_win = "YOU'VE GOT ALL COLLECTION";
  overTxt = game.add.text(game.world.centerX, game.world.centerY, game_win, { fill: '#08f', fontSize: '64px' , align: 'center'});
	overTxt.anchor.x = 0.5;
  overTxt.anchor.y = 0.5;
	game.paused = true;
  setTimeout(() => restartGame(), 10000);
}

function finishGame() {
	var game_end = 'GAME OVER :(\n' + '\nTRY AGAINE!';
  overTxt = game.add.text(game.world.centerX, game.world.centerY, game_end, { fill: '#fdf', fontSize: '64px' , align: 'center'});
	overTxt.anchor.x = 0.5;
  overTxt.anchor.y = 0.5;
}

function levelControl (player, lol) {
  lol.kill();
  score += 1;
	var sound = this.game.add.audio('lol');
  sound.play();
  scoreText.text = `Score: ${score}`;
  if        (score === 20) {level2();
	} else if (score === 40) {level3();
	} else if (score === 60) {level4();
	} else if (score === 80) {level5();
	} else if (score === 100) {level6();
	} else if (score === 114) {level7();
	} else if (score === 124) {level8();
 	} else if (score === 140) {level9();
	} else if (score === 160) {level10();
	} else if (score === 174) {winGame(); }
}
