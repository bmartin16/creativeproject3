<template>
  <div>
    <h3>Please explore our wide selection of hilarious t-shirts below!</h3>
    <ShirtList :shirts="shirts" />
  </div>
</template>

<script>
import ShirtList from "../components/ShirtList.vue"
export default {
  name: 'Home',
  components: {
    ShirtList
  },
  data() {
    return {
      currentId: 1,
    }
  },
  computed: {
    shirts() {
      return this.$root.$data.shirts.filter(shirt => shirt.id == this.$root.$data.currentId);
    }
  },
}
</script>

<style>
h3 {
  text-align: center;
}
</style>
