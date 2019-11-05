import { Application, Container, Point, Sprite, Text } from 'pixi.js';
import { colors, fontSizes } from '../config';
import Scene from '../interfaces/scene';
import SentenceRepository from '../repositories/sentence_repository';
import SceneManager from '../scene_manager';
import GameScene from './game_scene';

export default class MainMenuScene implements Scene {
  public identifier: string = 'main_menu';
  public logged: boolean = false;

  public setup(container: Container) {
    const start = this.makeButton('INICIAR', this.onButtonClick);
    const exit = this.makeButton('SAIR', () => close());

    start.position.set(window.innerWidth / 2 - start.width / 2, window.innerHeight / 2 - start.height / 2);
    exit.position.set(start.position.x + start.width + 100, start.position.y);

    container.addChild(start);
    container.addChild(exit);

    this.getScientist((s) => {
      s.position.set(0, window.innerHeight - s.height);
      container.addChild(s);
    });
  }

  public render(container: PIXI.Container, app: Application) {
    console.log('setup');
  }

  private onButtonClick(): any {
    SceneManager.setCurrentScene(new GameScene(SentenceRepository.randomSentence()));
  }

  private makeButton(buttonText: string, callback: () => any): Container {
    const container = new Container();
    const sprite = Sprite.from('assets/images/placa.png');
    const text = new Text(
      buttonText,
      { fontFamily: 'Arial', fontSize: fontSizes.menuButton, fill: colors.text }
    );
    sprite.addChild(text);
    // center both
    sprite.anchor.set(0.5, 0.5);
    text.anchor.set(0.5, 0.5);
    container.addChild(sprite);

    container.interactive = true;
    container.buttonMode = true;
    container.on('pointerdown', callback);

    return container;
  }

  private getScientist(callback: (s: Sprite) => any) {
    PIXI.loader.add('assets/images/clara.png').load(() => {
      const sprite = new PIXI.Sprite(PIXI.loader.resources['assets/images/clara.png'].texture);
      sprite.scale = new Point(0.5, 0.5);
      callback(sprite);
    });
  }
}
