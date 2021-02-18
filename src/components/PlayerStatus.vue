<template>
  <div class="container">
    <div class="player p1">
      Player 1
      <div class="connected" :class="{ active: userIsConnected }">
        Connected
      </div>
      <div class="ready" :class="{ active: userIsReady }">Ready</div>
    </div>

    <div class="player p2">
      Player 2
      <div class="connected" :class="{ active: opponentIsConnected }">
        Connected
      </div>
      <div class="ready" :class="{ active: opponentIsReady }">Ready</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerStatus',
  data () {
    return {}
  },
  computed: {
    userIsConnected () {
      return this.$store.state.userIsConnected
    },

    userIsReady () {
      return this.$store.state.userIsReady
    },
    opponentIsConnected () {
      return this.$store.state.opponentIsConnected
    },
    opponentIsReady () {
      return this.$store.state.opponentIsReady
    }
  }
}
</script>

<style></style>
