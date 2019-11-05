import { Application } from 'pixi.js';
import Scene from '../interfaces/scene';

export default class ResultScene implements Scene {
  public identifier: string = 'result';

  public setup(container: PIXI.Container) {
    console.log('setup');
  }

  public render(container: PIXI.Container, app: Application) {
    console.log('setup');
  }
}
