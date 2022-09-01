<template>
  <div class="personagens">
    <h1>Personagens</h1>

    <Personagem />
  </div>
</template>

<script>
import Personagem from "@/components/Personagem.vue";
export default {
  name: "Personagens",
  components: {
    Personagem,
  },
};
</script>

<style scoped>
.personagens h1 {
  margin-top: 3rem;
  text-align: center;
  font-family: "Stars", sans-serif;
  color: #ffe81f;
}
</style>
