import { Sentence } from "../src/model/sentence";
import SentenceRepository from "../src/repositories/sentence_repository";

describe("Sentence loading to Result", () => {
    beforeAll(() => {
        SentenceRepository.loadFromFile();
    });

    it('loads sentences from yml file', () => {
        const result = SentenceRepository.getSentences();
        expect(result[0].base).toEqual("O {} correu atrás do {}");
    });

    it('calculates results', () => {
        const sentence : Sentence = SentenceRepository.getSentences()[0];
        expect(sentence.resultFor(['menino', 'cachorro']).title).toEqual('O menino correu atrás do cachorro');
        expect(sentence.resultFor(['cachorro', 'menino']).title).toEqual('O cachorro correu atrás do menino');
        expect(() => sentence.resultFor(['cachorro', 'gato']).title).toThrowError(/Undefined result/);
    });
});
