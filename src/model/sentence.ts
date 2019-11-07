import { MalformedSentence } from '../utils/exceptions/malformed-sentence'
import { SentenceNotValid } from '../utils/exceptions/sentence-not-valid'
import { Result } from './result'

export class Sentence {
  public base: string;
  private values: string[];
  private results: { [id: string]: Result };

  constructor (base: string, values: string[], results: { [id: string]: Result }) {
    this.runValidations(base, values, results)

    this.base = base
    this.values = values
    this.results = results
  }

  public resultFor (values: string[]): Result {
    let resultStr: string = this.base

    values.forEach((v) => {
      resultStr = resultStr.replace(/{}/, v)
    })

    const result = this.results[resultStr]

    if (result) {
      return result
    }

    throw new MalformedSentence(`Undefined result for "${resultStr}"`)
  }

  private runValidations (base: string, values: string[], results: { [a: string]: any }) {
    const numberOfPlaceholders: number = (base.match(/{}/g) || []).length

    if (numberOfPlaceholders < 2) {
      throw new SentenceNotValid('Must have at least two placeholders.')
    }

    if (values.length !== numberOfPlaceholders) {
      throw new SentenceNotValid(`Expected ${numberOfPlaceholders} values, got ${values.length}.`)
    }

    if (Object.keys(results).length !== this.factorial(numberOfPlaceholders)) {
      throw new SentenceNotValid(`Expected ${this.factorial(numberOfPlaceholders)} results, got ${Object.keys(results).length}`)
    }
  }

  private factorial (n: number): number {
    let rval = 1

    for (let i = 2; i <= n; i++) { rval = rval * i }

    return rval
  }
}
