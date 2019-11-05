import { Application, Text } from 'pixi.js';
import Scene from '../interfaces/scene';
import { Sentence } from '../model/sentence';

export default class GameScene implements Scene {
  public identifier: string = 'game';

  constructor(public sentence: Sentence) {}

  public setup(container: PIXI.Container) {
    console.log('setup');
  }

  public render(container: PIXI.Container, app: Application) {
    const message: Text = new Text(
            this.sentence.base.replace(/{}/g, '_______'),
            { fontFamily: 'Arial', fontSize: 32, fill: 'white' }
        );

    message.position.set(app.view.width / 2 - message.width / 2, app.view.height / 2 - message.height / 2);

    container.addChild(message);
  }
}
