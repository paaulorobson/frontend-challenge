<template>
  <div class="header">
    <div class="header__content">
      <div class="header__logo">
        <div>
          <span>Stars</span>
          <span>Wars</span>
        </div>
        <p>Casting</p>
      </div>

      <div class="header__nav">
        <router-link to="/">Personagens</router-link>
        <router-link to="/filmes">Filmes</router-link>
      </div>

      <div class="header__call-to-action">
        <router-link to="/cadatrar">Cadastrar-se</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: #0f0f0f;
  width: 100%;
  height: 100px;
  font-family: "Stars", sans-serif;
}

.header__content {
  max-width: 1366px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.header__logo {
  display: flex;
  align-items: center;
  color: #ffe81f;
}

.header__logo div {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.8;
  font-size: 2rem;
}

.header__logo p {
  margin-left: 1rem;
  font-size: 1rem;
}

.header__content a {
  color: #fff;
  text-decoration: none;
}

.header__nav a {
  padding: 0.5rem 5rem;
}

.header__nav a:hover,
.router-link-exact-active {
  background: #303030 0% 0% no-repeat padding-box;
  padding: 0.5rem 5rem;
  border-radius: 1.563rem;
}

.header__call-to-action {
  border: 1px solid #ffe81f;
  padding: 0.5rem 1rem;
}
</style>
