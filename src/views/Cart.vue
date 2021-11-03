<template>
<div v-if="this.$root.$data.cart.length > 0">
  <div class="wrapper">
  </div>
  <h1 id = "yourCart">Your Cart</h1>
  <hr>
  <CartList :cart="cart" />
</div>
<div v-else class="cartEmpty">
  <h1>Your cart is empty :(</h1>
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Home',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.cartEmpty {
  text-align: center;
}

#yourCart {
  text-align: center;
}
</style>
