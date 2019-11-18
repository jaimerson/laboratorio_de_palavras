import { Sentence } from '../../src/model/sentence'
import { Result } from '../../src/model/result'

describe('withValues', () =>{
  it('returns the base interpolated with the given values', () => {
    const sentence = new Sentence(
      'O {} bateu no {}',
      ['chico', 'bode'],
      {
        'O chico bateu no bode': new Result(
          'O chico bateu no bode', 'path/to/image'
        ),
        'O bode bateu no chico': new Result(
          'O bode bateu no chico', 'path/to/image'
        )
      }
    )

    expect(sentence.withValues([])).toEqual('O _____ bateu no _____')
    expect(sentence.withValues(['chico'])).toEqual('O chico bateu no _____')
    expect(sentence.withValues(['chico', 'bode'])).toEqual('O chico bateu no bode')
  })
})

describe('resultFor', () =>{
  it('returns the result for the given values', () => {
    const result1 = new Result('O chico bateu no bode', 'path/to/image')
    const result2 = new Result('O bode bateu no chico', 'path/to/image')

    const sentence = new Sentence(
      'O {} bateu no {}',
      ['chico', 'bode'],
      {
        'O chico bateu no bode': result1,
        'O bode bateu no chico': result2
      }
    )

    expect(sentence.resultFor(['chico', 'bode'])).toEqual(result1)
    expect(sentence.resultFor(['bode', 'chico'])).toEqual(result2)
    expect(() => sentence.resultFor(['bode'])).toThrow
  })
})