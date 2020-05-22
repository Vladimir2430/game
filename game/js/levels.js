//levels from 2 to 10

function create_level_2() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.tileSprite(0, 0, width_screen, heigth_screen, 'sky');
  platforms = game.add.group();
  platforms.enableBody = true;
  var platform = platforms.create(0, game.world.height - 32, 'ground');
  platform.scale.setTo(5, 1);
  platform.body.immovable = true;

  //  Now let's create 4 ledges
  var ledge = platforms.create(width_screen*0.5, heigth_screen-120, 'platform');
  ledge.body.immovable = true;
  ledge = platforms.create(width_screen*0.35, heigth_screen-200, 'platform');
  ledge.body.immovable = true;
  ledge = platforms.create(width_screen*0.7, heigth_screen-200, 'platform');
  ledge.body.immovable = true;
  ledge = platforms.create(width_screen*0.55, heigth_screen-280, 'platform');
  ledge.body.immovable = true;

  player = game.add.sprite(10, game.world.height - 80, 'Alina');
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
  levelText = game.add.text(width_screen - 116, 16, 'Level 2', { fontSize: '32px', fill: '#fdf' });
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

function create_level_3() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    platform = platforms.create(0, game.world.height - 32, 'ground');
    platform.scale.setTo(5, 1);
    platform.body.immovable = true;
    ledge = platforms.create(500, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(300, heigth_screen-200, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(800, heigth_screen-200, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(500, heigth_screen-280, 'platform');
    ledge.body.immovable = true;
    player = game.add.sprite(10, game.world.height - 80, 'Alina');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    lols = game.add.group();
    lols.enableBody = true;
    for (var i = 0; i < 20; i++)
    {
        var lol = lols.create(i * 70, 0, 'lol');
        lol.body.gravity.y = 300;
        lol.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    scoreText = game.add.text(16, 16, 'score: '+score, { fontSize: '32px', fill: '#fdf' });
    levelText = game.add.text(width_screen - 116, 16, 'Level 3', { fontSize: '32px', fill: '#fdf' });
    cursors = game.input.keyboard.createCursorKeys();
}

function create_level_4() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    var platform = platforms.create(0, game.world.height - 32, 'ground');
    platform.scale.setTo(5, 1);
    platform.body.immovable = true;
    var ledge = platforms.create(100, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(300, heigth_screen-200, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(500, heigth_screen-280, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(700, heigth_screen-360, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(900, heigth_screen-100, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(900, heigth_screen-150, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(900, heigth_screen-200, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(900, heigth_screen-250, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(900, heigth_screen-300, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1300, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    player = game.add.sprite(10, game.world.height - 80, 'Alina');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    lols = game.add.group();
    lols.enableBody = true;
    for (var i = 0; i < 20; i++)
    {
        var lol = lols.create(i * 70, 0, 'lol');
        lol.body.gravity.y = 300;
        lol.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    scoreText = game.add.text(16, 16, 'score: '+score, { fontSize: '32px', fill: '#fdf' });
    levelText = game.add.text(width_screen - 116, 16, 'Level 4', { fontSize: '32px', fill: '#fdf' });
    cursors = game.input.keyboard.createCursorKeys();
}

function create_level_5() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    var platform = platforms.create(0, game.world.height - 32, 'ground');
    platform.scale.setTo(5, 1);
    platform.body.immovable = true;
    ledge = platforms.create(0, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(400, heigth_screen-100, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-150, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-200, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-250, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-300, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(600, heigth_screen-360, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(800, heigth_screen-280, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1000, heigth_screen-200, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1200, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    player = game.add.sprite(10, game.world.height - 80, 'Alina');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    lols = game.add.group();
    lols.enableBody = true;
    for (var i = 0; i < 20; i++)
    {
        var lol = lols.create(i * 70, 0, 'lol');
        lol.body.gravity.y = 300;
        lol.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    scoreText = game.add.text(16, 16, 'score: '+score, { fontSize: '32px', fill: '#fdf' });
    levelText = game.add.text(width_screen - 116, 16, 'Level 5', { fontSize: '32px', fill: '#fdf' });
    cursors = game.input.keyboard.createCursorKeys();
}

function create_level_6() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    var platform = platforms.create(0, game.world.height - 32, 'ground');
    platform.scale.setTo(1, 1);
    platform.body.immovable = true;
    ledge = platforms.create(0, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(400, heigth_screen-100, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-150, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-200, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-250, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-300, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(600, heigth_screen-360, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(800, heigth_screen-280, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1000, heigth_screen-200, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1200, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    player = game.add.sprite(10, game.world.height - 80, 'Alina');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    lols = game.add.group();
    lols.enableBody = true;
    for (var i = 0; i < 20; i++)
    {
        var lol = lols.create(i * 70, 0, 'lol');
        lol.body.gravity.y = 300;
        lol.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    scoreText = game.add.text(16, 16, 'score: '+score, { fontSize: '32px', fill: '#fdf' });
    levelText = game.add.text(width_screen - 116, 16, 'Level 6', { fontSize: '32px', fill: '#fdf' });
    cursors = game.input.keyboard.createCursorKeys();
}

function create_level_7() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    var platform = platforms.create(0, game.world.height - 32, 'ground');
    platform.scale.setTo(0, 0);
    platform.body.immovable = true;
    ledge = platforms.create(0, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(250, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-70, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-170, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-220, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-270, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-320, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(600, heigth_screen-360, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(800, heigth_screen-280, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1000, heigth_screen-200, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1250, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    player = game.add.sprite(10, game.world.height - 170, 'Alina');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    lols = game.add.group();
    lols.enableBody = true;
    for (var i = 0; i < 20; i++)
    {
        var lol = lols.create(i * 70, 0, 'lol');
        lol.body.gravity.y = 300;
        lol.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    scoreText = game.add.text(16, 16, 'score: '+score, { fontSize: '32px', fill: '#fdf' });
    levelText = game.add.text(width_screen - 116, 16, 'Level 7', { fontSize: '32px', fill: '#fdf' });
    cursors = game.input.keyboard.createCursorKeys();
}

function create_level_8() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    var platform = platforms.create(0, game.world.height - 32, 'ground');
    platform.scale.setTo(0, 0);
    platform.body.immovable = true;
    ledge = platforms.create(0, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(200, heigth_screen-200, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(0, heigth_screen-280, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(100, heigth_screen-380, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(290, heigth_screen-460, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(400, heigth_screen-350, 'platform');
	ledge.body.immovable = true;
	ledge = platforms.create(550, heigth_screen-240, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(650, heigth_screen-140, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(860, heigth_screen-220, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(1070, heigth_screen-300, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(970, heigth_screen-400, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(760, heigth_screen-480, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1280, heigth_screen-380, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1280, heigth_screen-430, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1280, heigth_screen-480, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1180, heigth_screen-580, 'platform');
    ledge.body.immovable = true;
    player = game.add.sprite(30, game.world.height - 170, 'Alina');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    lols = game.add.group();
    lols.enableBody = true;
    for (var i = 0; i < 20; i++)
    {
        var lol = lols.create(i * 70, 0, 'lol');
        lol.body.gravity.y = 300;
        lol.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    scoreText = game.add.text(16, 16, 'score: '+score, { fontSize: '32px', fill: '#fdf' });
    levelText = game.add.text(width_screen - 116, 16, 'Level 8', { fontSize: '32px', fill: '#fdf' });
    cursors = game.input.keyboard.createCursorKeys();
}

function create_level_9() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    var platform = platforms.create(0, game.world.height - 32, 'ground');
    platform.scale.setTo(0, 0);
    platform.body.immovable = true;
    ledge = platforms.create(40, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(270, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(530, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(760, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(990, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1210, heigth_screen-200, 'platform');
	ledge.body.immovable = true;
	ledge = platforms.create(1320, heigth_screen-300, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1120, heigth_screen-380, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(920, heigth_screen-460, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(720, heigth_screen-540, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(620, heigth_screen-400, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(420, heigth_screen-480, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(190, heigth_screen-510, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(120, heigth_screen-300, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(-80, heigth_screen-410, 'platform');
    ledge.body.immovable = true;
    player = game.add.sprite(30, game.world.height - 170, 'Alina');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    lols = game.add.group();
    lols.enableBody = true;
    for (var i = 0; i < 20; i++)
    {
        var lol = lols.create(i * 70, 0, 'lol');
        lol.body.gravity.y = 300;
        lol.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    scoreText = game.add.text(16, 16, 'score: '+score, { fontSize: '32px', fill: '#fdf' });
    levelText = game.add.text(width_screen - 116, 16, 'Level 9', { fontSize: '32px', fill: '#fdf' });
    cursors = game.input.keyboard.createCursorKeys();
}

function create_level_10() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    var platform = platforms.create(0, game.world.height - 32, 'ground');
    platform.scale.setTo(0, 0);
    platform.body.immovable = true;
    ledge = platforms.create(0, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(260, heigth_screen-120, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(260, heigth_screen-170, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(260, heigth_screen-220, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(260, heigth_screen-270, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(260, heigth_screen-320, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(40, heigth_screen-400, 'platform');
	ledge.body.immovable = true;
	ledge = platforms.create(140, heigth_screen-580, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(240, heigth_screen-480, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(440, heigth_screen-560, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(640, heigth_screen-480, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(890, heigth_screen-400, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1140, heigth_screen-320, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1250, heigth_screen-240, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(1000, heigth_screen-100, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(780, heigth_screen-100, 'platform');
    ledge.body.immovable = true;
	ledge = platforms.create(560, heigth_screen-100, 'platform');
    ledge.body.immovable = true;
    player = game.add.sprite(10, game.world.height - 170, 'Alina');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    lols = game.add.group();
    lols.enableBody = true;
    for (var i = 0; i < 20; i++)
    {
        var lol = lols.create(i * 70, 0, 'lol');
        lol.body.gravity.y = 300;
        lol.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    scoreText = game.add.text(16, 16, 'score: '+score, { fontSize: '32px', fill: '#fdf' });
    levelText = game.add.text(width_screen - 126, 16, 'Level 10', { fontSize: '32px', fill: '#fdf' });
    cursors = game.input.keyboard.createCursorKeys();
}