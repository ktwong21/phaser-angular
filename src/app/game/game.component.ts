import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { MainGame } from './phaser/game.js';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  standalone: true
  //styleUrls: ['./game.component.scss']
})
export class GameComponent implements AfterViewInit, OnDestroy {
  private game!: Phaser.Game;

  ngAfterViewInit() {
    this.game = new MainGame('game-container');
  }

  ngOnDestroy() {
    this.game?.destroy(true);
  }
}
