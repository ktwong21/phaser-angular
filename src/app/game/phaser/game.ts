import Phaser from 'phaser';

export class MainGame extends Phaser.Game {
  constructor(parent: string) {
    super({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent,
      scene: {
        preload,
        create
      }
    });
  }
}

function preload(this: Phaser.Scene) {
  this.load.image('spaceship', 'assets/spaceship.png');
}

function create(this: Phaser.Scene) {
  const spaceship = this.add.image(400, 300, 'spaceship');
  this.tweens.add({
    targets: spaceship,
    y: 450,
    duration: 2000,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  });
}
