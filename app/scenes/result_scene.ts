import { Application } from 'pixi.js';
import Scene from '../interfaces/scene';

export default class ResultScene implements Scene {
  public identifier: string = 'result';

  public render(container: PIXI.Container, app: Application) {
    throw new Error('Method not implemented.');
  }
}
