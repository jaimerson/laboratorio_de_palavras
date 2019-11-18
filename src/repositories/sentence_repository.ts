import { readFileSync, realpathSync } from 'fs'
import * as YAML from 'yaml'
import { Result } from '../model/result'
import { Sentence } from '../model/sentence'

export default class SentenceRepository {
  private static sentencesPlayed : Array<Sentence> = []

  public static getSentence (): Sentence {
    let base = 'O {} correu atrás do {}'
    let values = ['menino', 'cachorro']
    let sentence = new Sentence(base, values, {})
    return sentence
  }

  public static randomSentence (): Sentence {
    if (!this.loaded) {
      this.loadFromFile()
    }
    let sentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
    if(!this.sentencesPlayed.includes(sentence)){
      this.sentencesPlayed.push(sentence)

      if(this.sentencesPlayed.length == this.sentences.length){
        this.sentencesPlayed = []
      }

      return sentence
    } else {
      return this.randomSentence()
    }
  }

  public static getSentences (): Array<Sentence> {
    if (!this.loaded) {
      this.loadFromFile()
    }
    return this.sentences
  }

  public static loadFromFile (filePath: string = this.filePath): Sentence[] {
    const rawData: string = readFileSync(realpathSync(filePath)).toString()
    const data = YAML.parse(rawData)
    this.sentences = data.map((s: any) => {
      const results = s.results.reduce((result: {[id: string]: Result}, r: any) => {
        result[r.title] = new Result(r.title, r.imagePath, r.comment)
        return result
      }, {})
      return new Sentence(s.base, s.values, results)
    })

    this.loaded = true
    return this.sentences
  }
  private static readonly filePath = './config/sentences.yml'
  private static loaded: boolean = false
  private static sentences: Array<Sentence>
}
