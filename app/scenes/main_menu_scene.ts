import { Application, Text } from 'pixi.js';
import Scene from '../interfaces/scene';
import quotes from '../model/quotes';
import { Result } from '../model/result';
import { Sentence } from '../model/sentence';
import SceneManager from '../scene_manager';
import GameScene from './game_scene';

export default class MainMenuScene implements Scene {
  public identifier: string = 'main_menu';

  public render(container: PIXI.Container, app: Application) {
    const message: Text = new Text(
      'Main Menu',
      { fontFamily: 'Arial', fontSize: 32, fill: 'white' }
    );

    const button: Text = new Text(
      'Iniciar',
      { fontFamily: 'Arial', fontSize: 42, fill: 'red', stroke: '#666AFFFF', strokeThickness: 1 }
    );

    button.interactive = true;
    button.buttonMode = true;
    button.on('pointerdown', this.onButtonClick);

    message.position.set(app.view.width / 2 - message.width / 2, app.view.height / 2 - message.height / 2);

    button.position.set(message.position.x, message.position.y + 50);

    const quotesTestButton = new Text(
      'Test quotes',
      { fontSize: 30, fill: 'white' }
    );

    quotesTestButton.position.set(button.position.x, button.position.y + 50);
    quotesTestButton.interactive = true;
    quotesTestButton.buttonMode = true;
    quotesTestButton.on('pointerdown', this.testQuotes);

    [message, button, quotesTestButton].forEach((x) => { container.addChild(x); });
  }

  private onButtonClick(event: PIXI.interaction.InteractionEvent): any {
    SceneManager.setCurrentScene(new GameScene());
  }

  private testQuotes(event: PIXI.interaction.InteractionEvent) {
    console.log(quotes[0].resultFor(['carro', 'menino', 'skate']));
    console.log(quotes[1].resultFor(['menino', 'carro', 'skate']));
  }
}
