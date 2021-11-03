<template>
<div class="wrapper">
  <div class="shirts">
    <div class="shirt">
      <div class="info">
      </div>
      <div class="image">
        <img v-if="this.$root.$data.color == ''" src='/images/Products/black.jpg'>
        <img v-else :src="'/images/products/'+this.$root.$data.color">
        <div class="forms">
          <div class="color-buttons">
            <button type="button" v-on:click="blueShirt" class="btn btn-primary">Blue</button>
            <button type="button" v-on:click="grayShirt" class="btn btn-secondary">Gray</button>
            <button type="button" v-on:click="redShirt" class="btn btn-danger">Red</button>
            <button type="button" v-on:click="whiteShirt" class="btn btn-light">White</button>
            <button type="button" v-on:click="blackShirt" class="btn btn-dark">Black</button>
          </div>
          <form class="pure-form">
            <h3>Shirt Text</h3>
            <input v-model="shirtNameText" />
          </form>
        </div>
      </div>
      <div class="price">
        <h2>$18.50</h2>
        <button @click = "addToCart(shirtNameText)" class="auto">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'ShirtList',
  props: {
    shirts: Array
  },
  methods: {
    blackShirt() {
      this.$root.$data.color = 'black.jpg';
    },
    blueShirt() {
      this.$root.$data.color = 'blue.jpg';
    },
    redShirt() {
      this.$root.$data.color = 'red.jpg';
    },
    grayShirt() {
      this.$root.$data.color = 'gray.jpg';
    },
    whiteShirt() {
      this.$root.$data.color = 'white.jpg';
    },
    addToCart(shirtNameText) {
      const shirt = {
      shirt_name: shirtNameText,
      price: "$18.50",
      country: "The United States",
      img: this.$root.$data.color,
      }
      this.$root.$data.cart.push(shirt);
      console.log(this.$root.$data.cart);
    }
  },
}
</script>


<style>
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
  border: 2px solid #333;
  height: 350px;
  width: 300px;
  object-fit: cover;
}

.shirt .image {
  display: flex;
  flex: wrap;
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
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
.forms {
  display: flex;
  flex-direction: column;
}
#leftArrow {
  background-image: url("/images/LeftArrow.jpg");
  width: 20%;
  height: 20%;
  background: #fff;
  border: none;
}
.color-buttons {
  display: flex;
  justify-content: space-between;
}
#rightArrow {
  width: 20%;
  height: 20%;
  background: white;
  border: none;
}
.btn {
  margin-right: 10px;
}
.pure-form {
  display: flex;
  margin-top: 50px;
}
</style>
