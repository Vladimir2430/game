var heigth_screen = window.innerHeight;
var width_screen = window.innerWidth;

var game = new Phaser.Game(width_screen, heigth_screen, Phaser.AUTO, '', { preload: preload, create: create, update: update });

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

var player;
var platforms;
var cursors;
var keyR;
var keySpace;
var nextJump = 0;
var left = false;
var right = false;
var jump = false;
var lol;
var score = 0;
var scoreText;

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.tileSprite(0, 0, width_screen, heigth_screen, 'sky');

  platforms = game.add.group();
  platforms.enableBody = true;
  var platform = platforms.create(0, game.world.height - 32, 'ground');
  platform.scale.setTo(5, 1);
  platform.body.immovable = true;

  player = game.add.sprite(30, game.world.height - 80, 'Alina');
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 600;
  player.body.collideWorldBounds = true;
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);

  lols = game.add.group();
  lols.enableBody = true;

  for (var i = 0; i < 20; i++) {
    var lol = lols.create(i * width_screen/19.5, 0, 'lol');
    lol.body.gravity.y = 300;
    lol.body.bounce.y = 0.7 + Math.random() * 0.2;
  }

  scoreText = game.add.text(16, 16, 'score: '+score, { fontSize: '32px', fill: '#fdf' });
  levelText = game.add.text(width_screen - 116, 16, 'Level 1', { fontSize: '32px', fill: '#fdf' });
  cursors = game.input.keyboard.createCursorKeys();
  keyR = game.input.keyboard.addKey(Phaser.Keyboard.R);
  keySpace = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  buttonleft = game.add.button(width_screen * 0.01, heigth_screen * 0.83, 'buttonhorizontal', null, this, 0, 1, 0, 1);
  buttonleft.fixedToCamera = true;
  buttonleft.events.onInputOver.add(function(){left=true;});
  buttonleft.events.onInputOut.add(function(){left=false;});
  buttonleft.events.onInputDown.add(function(){left=true;});
  buttonleft.events.onInputUp.add(function(){left=false;});

  buttonright = game.add.button(width_screen * 0.1, heigth_screen * 0.83, 'buttonhorizontal', null, this, 0, 1, 0, 1);
  buttonright.fixedToCamera = true;
  buttonright.events.onInputOver.add(function(){right=true;});
  buttonright.events.onInputOut.add(function(){right=false;});
  buttonright.events.onInputDown.add(function(){right=true;});
  buttonright.events.onInputUp.add(function(){right=false;});

  buttonjump = game.add.button(width_screen * 0.85, heigth_screen * 0.8, 'buttonjump', null, this, 0, 1, 0, 1);
  buttonjump.fixedToCamera = true;
  buttonjump.events.onInputOver.add(function(){jump=true;});
  buttonjump.events.onInputOut.add(function(){jump=false;});
  buttonjump.events.onInputDown.add(function(){jump=true;});
  buttonjump.events.onInputUp.add(function(){jump=false;});
	
	var sound = this.game.add.audio('sound');
  sound.play();
}

function update() {
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(lols, platforms);
  game.physics.arcade.overlap(player, lols, collectLol, null, this);
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
	    setTimeout(() => end(), 50);
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
	
	if (keyR.isDown) {
    restartGame();
  }
}

function restartGame() {
  this.game.state.restart();
  score = 0;
}

function win() {
	game.add.sprite(-50, -150, 'win');
	var game_win = "YOU'VE GOT ALL COLLECTION\n\n" + '\n\nCLICK FOR RESTART!';
  overTxt = game.add.text(game.world.centerX, game.world.centerY, game_win, { fill: '#08f', fontSize: '64px' , align: 'center'});
	overTxt.anchor.x = 0.5;
  overTxt.anchor.y = 0.5;
	game.paused = true;
}

function end() {
	var game_end = 'GAME OVER\n\n' + '\n\nHIT THE DOWN ARROW FOR RESTART!';
  overTxt = game.add.text(game.world.centerX, game.world.centerY, game_end, { fill: '#fdf', fontSize: '64px' , align: 'center'});
	overTxt.anchor.x = 0.5;
  overTxt.anchor.y = 0.5;
}

function collectLol (player, lol) {
  lol.kill();
  score += 1;
	var sound = this.game.add.audio('lol');
  sound.play();
  scoreText.text = 'Score: ' + score;
  if        (score === 20) {create_level_2();
	} else if (score === 40) {create_level_3();
	} else if (score === 60) {create_level_4();
	} else if (score === 80) {create_level_5();
	} else if (score === 100) {create_level_6();
	} else if (score === 114) {create_level_7();
	} else if (score === 125) {create_level_8();
 	} else if (score === 145) {create_level_9();
	} else if (score === 165) {create_level_10();
	} else if (score === 185) {win(); }
}
