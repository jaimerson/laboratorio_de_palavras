import { Application, Text } from 'pixi.js';
import Scene from '../interfaces/scene';

export default class GameScene implements Scene {
  public identifier: string = 'game';

  public render(container: PIXI.Container, app: Application) {
    const message: Text = new Text(
            'Game',
            { fontFamily: 'Arial', fontSize: 32, fill: 'white' }
        );

    message.position.set(app.view.width / 2 - message.width / 2, app.view.height / 2 - message.height / 2);

    container.addChild(message);
  }
}
