function createElementsGame() {
  if (player) {
    player.kill();
    scoreText.kill();
    levelText.kill();
  }
  levelGame ? levelGame += 1 : levelGame = 1;
  createSky();
  createGroung();
  createPlayer();
  createLols();
  createButtotns();
  createText();
}

function createSky() {
  // game.add.tileSprite(0, 0, width_screen, heigth_screen, 'sky');
  game.stage.backgroundColor = '#697e96';
  var i = game.add.image(game.world.centerX, game.world.centerY, 'sky');
  i.anchor.set(0.5);
  // game.add.tileSprite(0,
  //   game.height - game.cache.getImage('sky').height,
  //   game.width,
  //   game.cache.getImage('sky').height,
  //   'sky'
  // );
  platforms = game.add.group();
  platforms.enableBody = true;
}

function createGroung() {
  var platform = platforms.create(0, game.world.height - 32, 'ground');
  platform.scale.setTo(5, 1);
  platform.body.immovable = true;
}

function createPlayer() {
  player = game.add.sprite(10, game.world.height - 180, 'Alina');
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 600;
  player.body.collideWorldBounds = true;
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);
}

function createLols() {
  lols = game.add.group();
  lols.enableBody = true;
  for (var i = 0; i < 20; i++) {
    var lol = lols.create(i * width_screen/19.5, 0, 'lol');
    lol.body.gravity.y = 300;
    lol.body.bounce.y = 0.7 + Math.random() * 0.2;
  }
}

function createButtotns() {
  cursors = game.input.keyboard.createCursorKeys();
  
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
}

function createText() {
  levelText = game.add.text(width_screen - 126, 16, `Level ${levelGame}`, { fontSize: '32px', fill: '#fdf' });
  scoreText = game.add.text(16, 16, `Score: ${score}`, { fontSize: '32px', fill: '#fdf' });
}
