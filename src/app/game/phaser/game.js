import Phaser from 'phaser';

// JavaScript version of your Phaser game
export class MainGame extends Phaser.Game {
  constructor(parent) {
    super({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent,
      scene: {
        preload: preload,
        create: create
      }
    });
  }
}

function preload() {
  this.load.image('spaceship', 'assets/spaceship.png');
}

function create() {
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