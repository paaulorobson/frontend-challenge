<template>
  <div class="personagens">
    <h1>Personagens</h1>

    <div class="personagens__wrapper">
      <Personagem />
    </div>
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
  font-weight: normal;
}

.personagens__wrapper {
  max-width: 1366px;
  margin: 0 auto;
  margin-top: 2.5rem;
}
</style>
