<template>
  <div>
    <PlayerStatus />
    <Board />
    <SetupButton />
    <Battleship />
  </div>
</template>

<script>
import Board from '../components/Board'
import PlayerStatus from '../components/PlayerStatus'
import SetupButton from '../components/SetupButton'
import Battleship from '../components/Battleship'

export default {
  name: 'battleground',
  components: {
    Board,
    PlayerStatus,
    SetupButton,
    Battleship
  }
}
</script>

<style></style>
