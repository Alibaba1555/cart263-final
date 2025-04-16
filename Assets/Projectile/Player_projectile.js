class Player_projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.key = key;
        this.speed = 1000; 
        this.maxDistance = 2000; 
        this.traveledDistance = 0;

        this.damage = 80; 
        this.coolDown = 500; 
        this.projectileWdith = 70;
        this.projectileHeight = 100;

        this.effectManager = new effectManager(this.scene);

        this.setBlendMode(Phaser.BlendModes.ADD);

        this.skillSound = this.scene.sound.add("skill");

        this.body.allowGravity = false;
        this.setImmovable(true);
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        this.traveledDistance += this.body.deltaAbsX();

        if (this.active) {
            const trail = this.scene.add.sprite(this.x, this.y - 10, "jump-cross")
                .setScale(0.15)
                .setAlpha(0.6)
                .setDepth(90)
                .setBlendMode(Phaser.BlendModes.ADD);
            this.scene.tweens.add({
                targets: trail,
                alpha: 0,
                scale: 0.3,
                duration: 300,
                onComplete: () => trail.destroy()
            });
        }

        if (this.isOutOfRange()) {
            this.body.reset(0, 0);
            this.activeProjectile(false);
            this.traveledDistance = 0;
        }
    }

    fire(x, y) {
        this.setDisplaySize(this.projectileWdith, this.projectileHeight);
        this.activeProjectile(true);
        this.body.reset(x, y);

        this.play(this.key, true);
        this.setVelocityX(this.speed);

        const flash = this.scene.add.rectangle(this.x, this.y, 40, 40, 0xffffff, 0.5)
            .setBlendMode(Phaser.BlendModes.ADD)
            .setDepth(91);
        this.scene.tweens.add({
            targets: flash,
            alpha: 0,
            scale: 2,
            duration: 200,
            onComplete: () => flash.destroy()
        });


        this.scene.cameras.main.shake(200, 0.01);

        if (this.skillSound) {
            this.skillSound.play({ volume: 0.8 });
        }
    }

    deliverHit(target) {
        const impact = this.scene.add.sprite(this.x, this.y - 10, "jump-cross")
            .setScale(0.3)
            .setAlpha(0.7)
            .setDepth(91)
            .setBlendMode(Phaser.BlendModes.ADD);
        this.scene.tweens.add({
            targets: impact,
            alpha: 0,
            scale: 0.5,
            duration: 300,
            onComplete: () => impact.destroy()
        });

        const hitFlash = this.scene.add.rectangle(
            this.scene.cameras.main.centerX,
            this.scene.cameras.main.centerY,
            this.scene.cameras.main.width,
            this.scene.cameras.main.height,
            0xffffff,
            0.6
        ).setScrollFactor(0).setDepth(999).setBlendMode(Phaser.BlendModes.ADD);

        this.scene.tweens.add({
            targets: hitFlash,
            alpha: 0,
            duration: 400,
            onComplete: () => hitFlash.destroy()
        });

        this.scene.time.timeScale = 0.1;
        this.scene.time.delayedCall(200, () => {
            this.scene.time.timeScale = 1;
        });

        this.activeProjectile(false);
        this.traveledDistance = 0;
        this.body.reset(0, 0);


        // this.effectManager.playEffectOn("enemyDead", target);
    }

    activeProjectile(isActive) {
        this.setActive(isActive);
        this.setVisible(isActive);
    }

    isOutOfRange() {
        return this.traveledDistance && this.traveledDistance >= this.maxDistance;
    }
}

window.Player_projectile = Player_projectile;