import { Sentence } from "../src/model/sentence";
import SentenceRepository from "../src/repositories/sentence_repository";

describe("Sentence loading to Result", () => {
    it('loads sentences from yml file', () => {
        const result = SentenceRepository.getSentences();
        expect(result[0].base).toEqual("O {} toma o {}");
    });

    it('calculates results', () => {
        const sentence : Sentence = SentenceRepository.getSentences()[0];
        expect(sentence.resultFor(['menino', 'sorvete']).title).toEqual('O menino toma o sorvete');
        expect(sentence.resultFor(['sorvete', 'menino']).title).toEqual('O sorvete toma o menino');
        expect(() => sentence.resultFor(['cachorro', 'gato']).title).toThrowError(/Undefined result/);
    });
});
