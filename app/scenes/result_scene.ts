import { Application } from 'pixi.js';
import Scene from '../interfaces/scene';
import { setupMaster } from 'cluster';
import { Sentence } from '../model/sentence';


export default class ResultScene implements Scene {
  public identifier: string = 'result';

  constructor( public setence: Sentence ){}

  public render(container: PIXI.Container, app: Application) {
    //let Application = PIXI.Application
    app = new Application({
      //width: 512,
      //height: 512,
      antialias: true,
      transparent: false,
      resolution: 1,
      backgroundColor: 0x58D3F7
    });

    const loader = PIXI.loader;
	  loader.add( '../assets/atlasLabWord.json' ).load( setup );

    //[message, button].forEach((x) => { container.addChild(x); });
    //throw new Error('Method not implemented.');

    function setup(){}
  }
}
