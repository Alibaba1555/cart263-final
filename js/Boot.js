class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: 'boot'
        });
    }

    preload() {
        //load Player Assets
        this.load.spritesheet("avatar-idle", "Assets/Player/_Idle.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 9
        });

        this.load.spritesheet("avatar-run", "Assets/Player/_Run.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 9
        });

        this.load.spritesheet("attack1", "Assets/Player/_Attack.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 3
        });

        this.load.spritesheet("attack2", "Assets/Player/_Attack2.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 5
        });

        this.load.spritesheet("roll", "Assets/Player/_Roll.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 11
        });

        this.load.spritesheet("avatar-jump", "Assets/Player/_Jump.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 2
        });

        this.load.spritesheet('avatar-jump2', 'Assets/Player/_Jump2.png', {
            frameWidth: 120,
            frameHeight: 80
          });
          

        this.load.spritesheet("avatar-fall", "Assets/Player/_Fall.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 2
        });

        this.load.spritesheet("avatar-Jumpfall", "Assets/Player/_JumpFall.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 1
        });

        this.load.spritesheet("avatar-wallslide", "Assets/Player/_WallSlide.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 2
        });

        this.load.spritesheet("avatar-crouchDown", "Assets/Player/_CrouchAll.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 1
        });

        this.load.spritesheet("avatar-up", "Assets/Player/_CrouchAll.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            startFrame: 1,
            endFrame: 2
        });

        this.load.spritesheet("avatar-jump2", "Assets/Player/_Jump2.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 11
        });

        this.load.spritesheet("avatar-death", "Assets/Player/_Death.png", {
            frameWidth: 120,
            frameHeight: 80,
            spacing: 0,
            endFrame: 9
        });

        this.load.spritesheet("wind1", "Assets/Player/wind.png", {
            frameWidth: 64,
            frameHeight: 64,
            spacing: 0,
            endFrame: 12
        });

        this.load.image("avatar-takesHit", "Assets/Player/_Hit.png");

        // Enemy
        this.load.spritesheet("Boar-idle", "Assets/enemy/Boar_normal/Idle-Sheet.png", {
            frameWidth: 48,
            frameHeight: 32,
            spacing: 0,
            endFrame: 3
        });

        this.load.spritesheet("Boar-walk", "Assets/enemy/Boar_normal/Walk-Base-Sheet.png", {
            frameWidth: 48,
            frameHeight: 32,
            spacing: 0,
            endFrame: 5
        });

        this.load.spritesheet("Boar-run", "Assets/enemy/Boar_normal/Run-Sheet.png", {
            frameWidth: 48,
            frameHeight: 32,
            spacing: 0,
            endFrame: 5
        });

        this.load.spritesheet("Mushroom-run", "Assets/enemy/Mushroom/Run.png", {
            frameWidth: 150,
            frameHeight: 39,
            endFrame: 7
        });

        this.load.spritesheet("Mushroom-idle", "Assets/enemy/Mushroom/Idle.png", {
            frameWidth: 150,
            frameHeight: 39,
            endFrame: 3
        });

        // Map and tiles
        this.load.tilemapTiledJSON('level_1', "Assets/Map/Level1.json");
        this.load.tilemapTiledJSON('level_2', "Assets/Map/Level2.json");
        this.load.image('tiles-1', 'Assets/Tiles/ForestTiles.png');
        this.load.image('tiles-2', 'Assets/Tiles/ForestTiles2.png');
        this.load.image("Test-tile", "Assets/Tiles/Forest/Tiles.png");

        // Bonfire and portal
        this.load.image('bonfire', "Assets/bonfire/bonfire.png");
        this.load.spritesheet("portal-1", "Assets/Portal/Portal_1.png", {
            frameWidth: 32,
            frameHeight: 32,
            endFrame: 2
        });
        this.load.spritesheet("portal-2", "Assets/Portal/Portal_2.png", {
            frameWidth: 32,
            frameHeight: 32,
            endFrame: 2
        });

        // Collectables
        this.load.image('redDiamond', "Assets/collectables/red_diamond.png");
        this.load.image('blueDiamond', "Assets/collectables/blue_diamond.png");
        this.load.image('redPotion', "Assets/collectables/red_potion.png");
        this.load.image('bluePotion', "Assets/collectables/blue_potion.png");

        // Projectiles
        this.load.spritesheet("player_Projectile", "Assets/Effect/Projectile/Player_projectile1.png", {
            frameWidth: 32,
            frameHeight: 31,
            spacing: 0,
            endFrame: 3
        });

        this.load.spritesheet("mushroom_Projectile", "Assets/Effect/Projectile/Mushroom_Projectile.png", {
            frameWidth: 50,
            frameHeight: 50,
            endFrame: 7
        });

        this.load.spritesheet("enemy_dead", "Assets/Effect/Enemy_Dead/Enemies_dead.png", {
            frameWidth: 32,
            frameHeight: 32,
            spacing: 0,
            endFrame: 3
        });

        // Attack box and background
        this.load.image("attack-box", "Assets/AttackBox/attackBox_Sprite.png");
        this.load.image("forest-bg", "Assets/Map/background forest.png");

        // Audio
        this.load.audio("swingsword", "Assets/Audio/swingsword.mp3");
        this.load.audio("flying-attack-enemy", "Assets/Audio/Flying Attack_Enemy.mp3");
        this.load.audio("heal", "Assets/Audio/heal.mp3");
        this.load.audio("hit", "Assets/Audio/hit.mp3");
        this.load.audio("hit2", "Assets/Audio/hit2.mp3");
        this.load.audio("injuried", "Assets/Audio/Injuried.mp3");
        this.load.audio("jump1", "Assets/Audio/jump1.mp3");
        this.load.audio("jump2", "Assets/Audio/jump2.mp3");
        this.load.audio("skill", "Assets/Audio/skill.mp3");
        this.load.audio('bgm-forest', 'Assets/Music/forest.mp3');
        this.load.audio('pickup', "Assets/Audio/coin_pickup.wav");
        this.load.audio('stepSound', "Assets/Audio/step_mud.wav");

        this.load.on('complete', () => {
            this.startGame();
        });
    }

    startGame() {
        this.registry.set('level', 1);
        this.scene.start('scene1');
    }

    create() {


    }

    update() {

    }
}