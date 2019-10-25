import { Application, Container } from 'pixi.js';

interface Scene {
  identifier: string;

  render(container: Container, app: Application): any;
}

export default Scene;
