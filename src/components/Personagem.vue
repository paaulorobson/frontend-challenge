<template>
  <div class="card-personagem">
    <div class="card-personagem__content">
      <h2>Paulo Robson</h2>

      <h3>Nascimento</h3>
      <p>Data: 19 BBY</p>
      <p>Planeta: Tatooine</p>

      <h3>Descrição física</h3>
      <p>Espécie: Humano</p>
      <p>Altura: 1,98 metro</p>

      <h3>Veículos usados</h3>
      <p>Snowspeeder</p>
      <p>Imperial Speeder bike</p>

      <div class="card-personagem__action">
        <button>Ver detalhes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personagem",
};
</script>

<style scoped>
.card-personagem {
  width: 273px;
  height: 450px;
  border: 2px solid #606060;
  background: #303030 0% 0% no-repeat padding-box;
}

.card-personagem__content {
  padding: 24px 16px;
  text-align: left;
  font-family: "Stars", sans-serif;
}

.card-personagem__content h2 {
  color: #ffe81f;
  font-weight: normal;
}

.card-personagem__content h3,
.card-personagem__content p {
  color: #fff;
  font-weight: normal;
}

.card-personagem__content h3 {
  margin-top: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}

.card-personagem__content p {
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  margin: 0.5rem 0;
}

.card-personagem__action button {
  width: 100%;
  max-width: 241px;
  height: 42px;
  color: #ffe81f;
  border: 2px solid #ffe81f;
  background-color: transparent;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 1.5rem;
  cursor: pointer;
}
</style>
