<template>
  <div>
    <v-btn to="/">Inicio</v-btn>
    <div class="mt-3">
      <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-black">Área de concentração</v-expansion-panel-header>
          <v-expansion-panel-content>Língua Portuguesa</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-black">Anos Recomendados</v-expansion-panel-header>
          <v-expansion-panel-content>3º ao 5º ano do ensino fundamental</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-black">Descrição da atividade</v-expansion-panel-header>
          <v-expansion-panel-content>Aqui, os alunos deverão completar as frases e avaliar sua coerência após a visualização da imagem formada diante da ideia apresentada.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header
            class="font-weight-black"
          >O que o aplicativo proporciona ao usuário</v-expansion-panel-header>
          <v-expansion-panel-content>Permite ao usuário um aprendizado de leitura e compreensão a partir da visualização lúdica da frase</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-black">Professores Responsáveis</v-expansion-panel-header>
          <v-expansion-panel-content>Dennys Leite Maia</v-expansion-panel-content>
          <v-expansion-panel-content>Eli Sales Muniz Lima</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-black">Equipe Pedagógica</v-expansion-panel-header>
          <v-expansion-panel-content>Ana Luiza Dantas Galvão (Coordenadora)</v-expansion-panel-content>
          <v-expansion-panel-content>Allan Christian Dantas Gomes</v-expansion-panel-content>
          <v-expansion-panel-content>Jean Vicente de Oliveira</v-expansion-panel-content>
          <v-expansion-panel-content>Rodolfo Dantas Oliveira Bezerra</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-black">Equipe de Design</v-expansion-panel-header>
          <v-expansion-panel-content>Joicy Daliane Silva Oliveira (Coordenadora)</v-expansion-panel-content>
          <v-expansion-panel-content>Bruno da Fonseca Dumaresq</v-expansion-panel-content>
          <v-expansion-panel-content>Wanderson Alves de Oliveira</v-expansion-panel-content>
          <v-expansion-panel-content>Willian Talles Marcolino Dantas</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-black">Equipe de Programação</v-expansion-panel-header>
          <v-expansion-panel-content>Jaimerson Leandro Amaro de Araújo (Coordenador)</v-expansion-panel-content>
          <v-expansion-panel-content>Bruno César Lopes da Silva</v-expansion-panel-content>
          <v-expansion-panel-content>Daniel de Oliveira Silva</v-expansion-panel-content>
          <v-expansion-panel-content>Denilson Barboza da Silva</v-expansion-panel-content>
          <v-expansion-panel-content>Ítalo Gomes Vieira</v-expansion-panel-content>
          <v-expansion-panel-content>João Paulo Nunes de Lima</v-expansion-panel-content>
          <v-expansion-panel-content>Pedro de Paiva Barbosa Neto</v-expansion-panel-content>
          <v-expansion-panel-content>Péricles Gomes da Costa</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
export default {
  name: "credits",
  data: () => ({
    panel: [0, 1, 2, 3, 4, 5, 6, 7],
    disabled: false,
    readonly: false
  })
};
</script>
