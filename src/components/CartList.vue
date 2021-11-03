<template>
<div class="wrapper">
  <div class="shirts">
    <div class="shirt" v-for="shirt in cart" :key="shirt.id">
      <div class="info">
        <h1>{{shirt.shirt_name}}</h1>
        <p>Made in {{shirt.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+shirt.img">
      </div>
      <div class="price">
        <h2>{{shirt.price}}</h2>
        <button @click = "removeFromCart(shirt)" class="auto">Remove From Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ShirtList',
  props: {
    cart: Array,
  },
  methods: {
    removeFromCart(shirt) {
      this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(shirt), 1);
    },
  }
}


</script>

<style scoped>
.wrapper {
}

.shirts {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.shirt {
  margin: 10px;
  margin-top: 50px;
  width: 100%;
}

.shirt img {
  border: none;
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.shirt .image {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px;
}

.info {
  background: #1EA1A1;
  color: #000;
  padding: 10px 30px;
  height: 80px;
  width: 100%;
  text-align: center;
}

.info h1 {
  font-size: 30px;
}

.info h2 {
  font-size: 20px;
}

.info p {
  margin: 0px;
  font-size: 15px;
}


.price {
  background: #1EA1A1;
  text-align: center;
}

button {
  height: 50px;
  background: white;
  color: black;
  border: 2px solid #1EA1A1;
}

.auto {
  margin-left: auto;
}
#leftArrow {
  background-image: url("/images/LeftArrow.jpg");
  width: 20%;
  height: 20%;
  background: #fff;
  border: none;
}
#rightArrow {
  width: 20%;
  height: 20%;
  background: white;
  border: none;
}
</style>
