<template>
  <div class="container hidden-info">
    <div class="setup-buttons" id="setup-buttons">
      <button id="start" class="btn" @click="startGame">Start Game</button>
      <button id="rotate" class="btn" @click="rotateShip">
        Rotate Your Ships
      </button>
    </div>
    <h3 id="whose-go" class="info-text">Your Go</h3>
    <h3 id="info" class="info-text"></h3>
  </div>
</template>

<script>
export default {
  name: 'SetupButton',
  data () {
    return {}
  },
  methods: {
    startGame () {
      this.$store.dispatch('startGame')
    },
    rotateShip () {
      console.log(this.$store.state)
      this.$store.dispatch('rotateShip', !this.$store.state.isVertical)
    }
  }
}
</script>

<style>
.btn {
  margin-left: 10px;
}
</style>
