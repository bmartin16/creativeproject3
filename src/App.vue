<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <h1>Funny Fashion</h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/makeYourOwn">
        <div class="menu-item browse">
          <img src="/images/shirt.png">
          <p>Make Your Own</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/cart.png">
          <p>{{ numberOfItems }} items</p>
        </div>
      </router-link>
    </div>
  </div>
    <router-view/>

    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">&copy; 2021 Funny Fashion, Inc</p>

        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        </a>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item"><a href="https://github.com/bmartin16/creativeproject3.git" class="nav-link px-2 text-muted">Github</a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    numberOfItems() {
      return this.$root.$data.cart.length;
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #1EA1A1;
  text-decoration: none;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 100px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
  margin-top: 5px;
  align-items: center;
}
</style>
