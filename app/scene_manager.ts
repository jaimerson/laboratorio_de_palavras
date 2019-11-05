import { Application, Container } from 'pixi.js';
import Scene from './interfaces/scene';

export default class SceneManager {
  public static instance: SceneManager | null;

  public static setCurrentScene(scene: Scene): any {
    this.instance.setCurrentScene(scene);
  }
  public currentScene: Scene;
  public app: Application;
  public container: Container;

  constructor(app: Application, container: Container, currentScene: Scene) {
    this.app = app;
    this.container = container;
    this.currentScene = currentScene;
    this.runSetup(currentScene, container);
    // gambiarra para singleton pattern
    SceneManager.instance = this;
  }

  public setCurrentScene(scene: Scene): any {
    this.runSetup(scene, this.container);
    this.container.removeChildren();
    this.currentScene = scene;
  }

  public renderCurrentScene() {
    this.currentScene.render(this.container, this.app);
  }

  private runSetup(scene: Scene, container: Container) {
    if (scene.setup) {
      scene.setup(container);
    }
  }
}
