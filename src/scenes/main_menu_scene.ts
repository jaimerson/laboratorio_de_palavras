import { Application, Text, Container, Point, Sprite } from 'pixi.js';
import Scene from '../interfaces/scene';
import SentenceRepository from '../repositories/sentence_repository';
import SceneManager from '../scene_manager';
import GameScene from './game_scene';
import { fontSizes, colors } from '../../config';

export default class MainMenuScene implements Scene {
  public identifier: string = 'main_menu';

  public setup(container: Container){

    const start = this.makeButton('INICIAR', this.onButtonClick);

    start.position.set(window.innerWidth / 2 - start.width / 2, window.innerHeight / 2 - start.height / 2);

    container.addChild(start);
  }

  public render(container: PIXI.Container, app: Application) {
    const scientist = this.getScientist();
    scientist.position = new Point(0, window.innerHeight - scientist.height);
    container.addChild(scientist);
  }

  private onButtonClick(): any {
    SceneManager.setCurrentScene(new GameScene(SentenceRepository.randomSentence()));
  }

  private makeButton(buttonText: string, callback: () => any) : Container {
    let container = new Container();
    let sprite = Sprite.from('assets/images/placa.png');
    let text = new Text(
      buttonText,
      { fontFamily: 'Arial', fontSize: fontSizes.menuButton, fill: colors.text } 
    )
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

  private getScientist() : Sprite {
    let sprite = Sprite.from('assets/images/clara.png');

    sprite.scale = new Point(0.5, 0.5);

    return sprite;
  }
}
