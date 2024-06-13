import { Assets, Container, Sprite, Texture } from "pixi.js";
import Game from "../core/Game";
import Background from "../sprites/Background";
import Door from "../sprites/Door";
import Handle from "../sprites/Handle";

export default class Vault extends Container {
  private background: Background;
  private door: Door;
  private game: Game;
  private handle: Handle;
  constructor(game: Game) {
    super();
    this.game = game;
    this.background = new Background(this);
    this.door = new Door(this);
    this.handle = new Handle(this);
    this.setupPositions();
    this.setupInteractions();
  }
  setupPositions() {
    this.onResize();
    this.addChild(this.background);
    this.addChild(this.door);
    this.addChild(this.handle);
  }
  setupInteractions() {}
  onResize() {
    this.background.onResize();
  }
  onWheelSpin(input: number) {
    this.game.addNumber(input);
  }
  reset() {}
  onVictory() {
    this.handle.visible = false;
  }
}
