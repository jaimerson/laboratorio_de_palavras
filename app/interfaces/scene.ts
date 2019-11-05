import { Application, Container } from 'pixi.js';

interface Scene {
  identifier: string;

  setup(container: Container): any;

  render(container: Container, app: Application): any;
}

export default Scene;
