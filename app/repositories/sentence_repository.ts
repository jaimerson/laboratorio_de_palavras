import { readFileSync, realpathSync } from 'fs';
import * as YAML from 'yaml';
import { Result } from '../model/result';
import { Sentence } from '../model/sentence';

export default class SentenceRepository {
  public static randomSentence(): Sentence {
    if (!this.loaded) {
      this.loadFromFile();
    }
    return this.sentences[Math.floor(Math.random() * this.sentences.length)];
  }

  public static getSentences(): Array<Sentence> {
    if (!this.loaded) {
      this.loadFromFile();
    }
    return this.sentences;
  }

  public static loadFromFile(filePath: string = this.filePath): Sentence[] {
    const rawData: string = readFileSync(realpathSync(filePath)).toString();
    const data = YAML.parse(rawData);
    this.sentences = data.map((s: any) => {
      const results = s.results.reduce((result: {[id: string]: Result}, r: any) => {
        result[r.title] = new Result(r.title, r.imagePath, r.comment);
        return result;
      }, {});
      return new Sentence(s.base, s.values, results);
    });

    this.loaded = true;
    return this.sentences;
  }
  private static readonly filePath = 'config/sentences.yml';
  private static loaded: boolean = false;
  private static sentences: Array<Sentence>;
}
