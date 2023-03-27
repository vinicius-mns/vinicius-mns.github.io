<script setup lang="ts">
import { marked } from 'marked'

const txt = '# V i n í c i u s\n\nSou de uma cidade do interior de São Paulo chamada [Miguelopolis](https://pt.wikipedia.org/wiki/Miguel%C3%B3polis), hoje aos 24 anos moro com a minha família em São Joaquim da barra.\n\nQuando criança eu amava quebrar os meus brinquedos para entender como eles funcionavam, aprendia que os motores do meu carrinho de controle remoto eram responsáveis por fazê-lo andar e como os ímãs interagiam com o metal, percebi também como era complexa aquela plaquinha verde cheia de fios.\n\nNa minha pré-adolescência procurei novos desafios como, por exemplo: jogos de quebra cabeça (meu passatempo favorito na época). Me recordo muito bem de um chamado Strata (que consistia em usar fitas na ordem correta para passar de fase). Eu me desafiava fazer testes de QI gratuitos na internet regularmente, acreditava que se eu fosse inteligente as pessoas gostariam de mim.\n\nAtualmente formando como desenvolvedor web Full Stack pela Trybe. Onde desenvolvi as minhas habilidades de hards skills e aprimorei as minhas habilidades de soft skils.\n\nSou uma pessoa muito calma, cooperativa, curiosa e extrovertida. A minha filosofia de vida sempre foi deixar em aberto a hipótese de eu estar errado. Estou sempre de mente aberta para conhecer pessoas e culturas novas.\n\nTambém sou uma pessoa muito caprichosa. Sempre foi muito difícil para mim, entregar algo que eu não considerasse excelente.jogos de quebra cabeça (meu passatempo favorito na época). Me recordo muito bem de um chamado Strata (que consistia em usar fitas na ordem correta para passar de fase). Eu me desafiava fazer testes de QI gratuitos na internet regularmente, acreditava que se eu fosse inteligente as pessoas gostariam de mim.\n\nAtualmente formando como desenvolvedor web Full Stack pela Trybe. Onde desenvolvi as minhas habilidades de hards skills e aprimorei as minhas habilidades de soft skils.\n\nSou uma pessoa muito calma, cooperativa, curiosa e extrovertida. A minha filosofia de vida sempre foi deixar em aberto a hipótese de eu estar errado. Estou sempre de mente aberta para conhecer pessoas e culturas novas.\n\nTambém sou uma pessoa muito caprichosa. Sempre foi muito difícil para mim, entregar algo que eu não considerasse excelente.'

const markdownTxt = marked(txt)
</script>

<template>
  <main>
    <div class="img-container"></div>
    <div class="content" v-html="markdownTxt"></div>
  </main>
</template>

<style scoped lang="scss">
  main {
    width: 100%;
    display: flex;
    flex-direction: column;

    & .img-container {
      background-color: red;
      width: 100%;
      height: 10rem;
    }

    & .content {
      text-align: justify;
      margin: 1rem;
      font-size: 1.2rem;
    }
  }
</style>
