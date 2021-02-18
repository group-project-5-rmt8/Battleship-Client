<template>
  <div class="container">
    <div class="grid-display">
      <div
        class="ship destroyer-container"
        :class="{ 'destroyer-container-vertical': isVertical }"
        draggable="true"
      >
        <div id="destroyer-0"></div>
        <div id="destroyer-1"></div>
      </div>
      <div
        class="ship submarine-container"
        :class="{ 'submarine-container-vertical': isVertical }"
        draggable="true"
      >
        <div id="submarine-0"></div>
        <div id="submarine-1"></div>
        <div id="submarine-2"></div>
      </div>
      <div
        class="ship cruiser-container"
        :class="{ 'cruiser-container-vertical': isVertical }"
        draggable="true"
      >
        <div id="cruiser-0"></div>
        <div id="cruiser-1"></div>
        <div id="cruiser-2"></div>
      </div>
      <div
        class="ship battleship-container"
        :class="{ 'battleship-container-vertical': isVertical }"
        draggable="true"
      >
        <div id="battleship-0"></div>
        <div id="battleship-1"></div>
        <div id="battleship-2"></div>
        <div id="battleship-3"></div>
      </div>
      <div
        class="ship carrier-container"
        :class="{ 'carrier-container-vertical': isVertical }"
        draggable="true"
      >
        <div id="carrier-0"></div>
        <div id="carrier-1"></div>
        <div id="carrier-2"></div>
        <div id="carrier-3"></div>
        <div id="carrier-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Battleship',
  data () {
    return {}
  },
  computed: {
    isVertical () {
      return this.$store.state.isVertical
    }
  }
}
</script>

<style></style>
