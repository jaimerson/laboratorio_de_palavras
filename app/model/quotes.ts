import { Result } from './result';
import { Sentence } from './sentence';

const dataQuotes = [
  {
    base: 'O {} atropelou o {}',
    values: ['carro', 'menino'],
    results: [
      {
        key: 'O carro atropelou o menino',
        image: 'http://placekitten.com/200/300'
      }, {
        key: 'O menino atropelou o carro',
        image: 'http://placekitten.com/300/200'
      }
    ]
  },
  {
    base: 'O {} atropelou o {} com um {}',
    values: ['carro', 'menino', 'skate'],
    results: [
      {
        key: 'O carro atropelou o menino com um skate',
        image: 'http://placekitten.com/200/300'
      }, {
        key: 'O carro atropelou o skate com um menino',
        image: 'http://placekitten.com/300/200'
      }, {
        key: 'O menino atropelou o carro com um skate',
        image: 'http://placekitten.com/200/300'
      }, {
        key: 'O menino atropelou o skate com um carro',
        image: 'http://placekitten.com/300/200'
      }, {
        key: 'O skate atropelou o menino com um carro',
        image: 'http://placekitten.com/200/300'
      }, {
        key: 'O skate atropelou o carro com um menino',
        image: 'http://placekitten.com/300/200'
      },
    ]
  }
];

const quotes: Sentence[] = dataQuotes.map((q) =>
  new Sentence(
    q.base,
    q.values,
    q.results.reduce(
      (acc: { [id: string]: Result }, cur) => {
        acc[cur.key] = new Result(cur.key, cur.image);
        return acc;
      }, {}
    )
  )
);

export default quotes;
