import { Result } from '../model/result'
import { Sentence } from '../model/sentence'

export default class SentenceRepository {
  public static randomSentence (): Sentence {
    if (!this.loaded) {
      this.loadSentences()
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
      this.loadSentences()
    }
    return this.sentences
  }

  public static loadSentences (): Sentence[] {
    this.sentences = this.rawSentences.map((s: any) => {
      const results = s.results.reduce((result: {[id: string]: Result}, r: any) => {
        result[r.title] = new Result(r.title, r.imagePath, r.comment)
        return result
      }, {})
      return new Sentence(s.base, s.values, results)
    })

    this.loaded = true
    return this.sentences
  }

  private static loaded: boolean = false
  private static sentences: Array<Sentence>
  private static sentencesPlayed : Array<Sentence> = []

  private static readonly rawSentences = [
    {
      "base": "O {} toma o {}",
      "values": [
        "menino",
        "sorvete"
      ],
      "results": [
        {
          "title": "O menino toma o sorvete",
          "imagePath": "meninosorvete.png",
          "comment": "O menino toma o sorvete pelo calor que está fazendo na praia"
        },
        {
          "title": "O sorvete toma o menino",
          "imagePath": "sorvetemenino.png",
          "comment": "O sorvete tomou o menino"
        }
      ]
    },
    {
      "base": "{} foi no {}",
      "values": [
        "João",
        "Carro"
      ],
      "results": [
        {
          "title": "João foi no Carro",
          "imagePath": "carrojose1.png",
          "comment": "João foi no carro para o jogo de futebol"
        },
        {
          "title": "Carro foi no João",
          "imagePath": "carrojose2.png",
          "comment": "O carro foi nas costas de João"
        }
      ]
    },
    {
      "base": "A {} jogou a {}",
      "values": [
        "pessoa",
        "bola"
      ],
      "results": [
        {
          "title": "A pessoa jogou a bola",
          "imagePath": "meninobola.png",
          "comment": "A pessoa jogou a bola na cesta"
        },
        {
          "title": "A bola jogou a pessoa",
          "imagePath": "bolamenino.png",
          "comment": "A bola jogou a pessoa na cesta"
        }
      ]
    },
    {
      "base": "A {} viu a {}",
      "values": [
        "menina",
        "cadeira"
      ],
      "results": [
        {
          "title": "A menina viu a cadeira",
          "imagePath": "meninacadeira.png",
          "comment": "A menina viu a cadeira se mexer"
        },
        {
          "title": "A cadeira viu a menina",
          "imagePath": "cadeiramenina.png",
          "comment": "A cadeira viu a menina brincar"
        }
      ]
    },
    {
      "base": "O {} está no {}",
      "values": [
        "barco",
        "mar"
      ],
      "results": [
        {
          "title": "O barco está no mar",
          "imagePath": "barcomar.png",
          "comment": "O barco está no mar sem rumo"
        },
        {
          "title": "O mar está no barco",
          "imagePath": "marbarco.png",
          "comment": "O mar navega no barco"
        }
      ]
    },
    {
      "base": "A {} saiu com a {} nas costas",
      "values": [
        "Joaquina",
        "bolsa"
      ],
      "results": [
        {
          "title": "A Joaquina saiu com a bolsa nas costas",
          "imagePath": "meninabolsa.png",
          "comment": "A Joaquina saiu com a bolsa nas costas para o colégio"
        },
        {
          "title": "A bolsa saiu com a Joaquina nas costas",
          "imagePath": "bolsamenina.png",
          "comment": " A bolsa saiu com a joaquina nas costa, pois estava com pressa"
        }
      ]
    },
    {
      "base": "O {} pegou o {}.",
      "values": [
        "menino",
        "carrinho"
      ],
      "results": [
        {
          "title": "O menino pegou o carrinho.",
          "imagePath": "meninocarrinho.png",
          "comment": "O menino pegou o carrinho para brincar"
        },
        {
          "title": "O carrinho pegou o menino.",
          "imagePath": "carrinhomenino.png",
          "comment": "O carrinho pegou o menino na parada de ônibus"
        }
      ]
    },
    {
      "base": "{} passeiam no jardim carregando {}.",
      "values": [
        "formiguinhas",
        "folhas"
      ],
      "results": [
        {
          "title": "formiguinhas passeiam no jardim carregando folhas.",
          "imagePath": "formigas1.png",
          "comment": "Formigas caminham no jardim carregando folhas em direção ao formigueiro."
        },
        {
          "title": "folhas passeiam no jardim carregando formiguinhas.",
          "imagePath": "formigas2.png",
          "comment": "Folhas andam pelo jardim carregando formigas em direção a árvore."
        }
      ]
    },
    {
      "base": "O {} mostrou o cartão vermelho ao {}.",
      "values": [
        "árbitro",
        "jogador"
      ],
      "results": [
        {
          "title": "O árbitro mostrou o cartão vermelho ao jogador.",
          "imagePath": "juizjogador.png",
          "comment": "O árbitro aplicou um cartão vermelho no jogador pela ação cometida."
        },
        {
          "title": "O jogador mostrou o cartão vermelho ao árbitro.",
          "imagePath": "jogadorjuiz.png",
          "comment": "O jogador mostrou o cartão vermelho para o árbitro, pois não gostou de ser chamado a atenção."
        }
      ]
    },
    {
      "base": "O {} correu atrás do {}.",
      "values": [
        "cachorro",
        "graveto"
      ],
      "results": [
        {
          "title": "O cachorro correu atrás do graveto.",
          "imagePath": "cachorrovareta.png",
          "comment": "O cachorro está correndo atrás do graveto."
        },
        {
          "title": "O graveto correu atrás do cachorro.",
          "imagePath": "varetacachorra.png",
          "comment": "O graveto humanóide está correndo atrás do cachorro."
        }
      ]
    }
  ]
}
