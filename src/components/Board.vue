<template>
  <div class="container">
    <div class="battleship-grid grid-user">
      <div v-for="n in wide" :key="n" :data-id="n"></div>
    </div>
    <div class="battleship-grid grid-computer">
      <div v-for="n in wide" :key="n" :data-id="n"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'board',
  data () {
    return {
      wide: 100
    }
  }
}
</script>

<style></style>
