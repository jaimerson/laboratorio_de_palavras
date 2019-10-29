import { Application, Text } from 'pixi.js';
import Scene from '../interfaces/scene';
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

    button.position.set(message.position.x, message.position.y + 100);
    [message, button].forEach((x) => { container.addChild(x); });
  }

  private onButtonClick(event: PIXI.interaction.InteractionEvent): any {
    SceneManager.setCurrentScene(new GameScene());

    const sentence1 = new Sentence(
      'O {} atropelou o {}',
      ['carro', 'menino'],
      {
        'O carro atropelou o menino': new Result('O carro atropelou o menino', 'http://placekitten.com/200/300'),
        'O menino atropelou o carro': new Result('O menino atropelou o carro', 'http://placekitten.com/300/200')
      }
    );

    console.log(sentence1.resultFor(['carro', 'menino']));
    console.log(sentence1.resultFor(['menino', 'carro']));

    const sentence2 = new Sentence(
      'O {} atropelou o {} com um {}',
      ['carro', 'menino', 'skate'],
      {
        'O carro atropelou o menino com um skate': new Result('O carro atropelou o menino', 'http://placekitten.com/200/300'),
        'O carro atropelou o skate com um menino': new Result('O carro atropelou o menino', 'http://placekitten.com/200/300'),
        'O menino atropelou o carro com um skate': new Result('O menino atropelou o carro', 'http://placekitten.com/300/200'),
        'O menino atropelou o skate com um carro': new Result('O menino atropelou o carro', 'http://placekitten.com/300/200'),
        'O skate atropelou o menino com um carro': new Result('O menino atropelou o carro', 'http://placekitten.com/300/200'),
        'O skate atropelou o carro com um menino': new Result('O menino atropelou o carro', 'http://placekitten.com/300/200'),
      }
    );

    console.log(sentence2.resultFor(['carro', 'menino', 'skate']));
    console.log(sentence2.resultFor(['menino', 'carro', 'skate']));
  }
}
