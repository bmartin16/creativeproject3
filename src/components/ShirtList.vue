<template>
<div class="wrapper">
  <div class="shirts">
    <div class="shirt" v-for="shirt in shirts" :key="shirt.id">
      <div class="info">
        <h1>{{shirt.shirt_name}}</h1>
        <p>Made in {{shirt.country}}</p>
      </div>
      <div class="image">
        <button v-on:click="previousShirt" id = "leftArrow"><img id = "leftArrow" src='/images/LeftArrow.jpg'></button>
        <img id="shirtPic" :src="'/images/Products/'+shirt.img">
        <button v-on:click="nextShirt" id = "rightArrow"><img id = "rightArrow" src='/images/RightArrow.jpg'></button>
      </div>
      <div class="price">
        <h2>{{shirt.price}}</h2>
        <button @click = "addToCart(shirt)" class="auto">Add to Cart</button>
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
    nextShirt() {
      if(this.$root.$data.currentId < 20){
        this.$root.$data.currentId += 1;
      }
      else{
        this.$root.$data.currentId = 20;
      }
    },
    previousShirt() {
      if(this.$root.$data.currentId > 1){
        this.$root.$data.currentId -= 1;
      }
      else{
        this.$root.$data.currentId = 1;
      }
    },
    addToCart(shirt) {
      console.log(event);
      this.$root.$data.cart.push(shirt);
      console.log(this.$root.$data.cart);
    }
  },
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
  border: 2px solid #333;
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
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
#shirtPic {
  margin-left: 10px;
}
#leftArrow {
  background-image: url("/images/LeftArrow.jpg");
  width: 80px;
  height: 80px;
  background: #fff;
  border: none;
}
#rightArrow {
  width: 80px;
  height: 80px;
  background: white;
  border: none;
}
</style>
