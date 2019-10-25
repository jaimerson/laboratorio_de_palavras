import { Application, Container, Text } from 'pixi.js';
import SceneManager from './scene_manager';
import MainMenuScene from './scenes/main_menu_scene';

const app: Application = new Application(800, 600, { backgroundColor : 0x000000 });
app.view.style.position = 'absolute';
app.view.style.display = 'block';
document.body.appendChild(app.view);

const stage: Container = new Container();

const sceneManager: SceneManager = new SceneManager(app, stage, new MainMenuScene());

function gameLoop(): void {
  requestAnimationFrame(gameLoop);
  sceneManager.renderCurrentScene();
  app.renderer.render(stage);
}

gameLoop();
