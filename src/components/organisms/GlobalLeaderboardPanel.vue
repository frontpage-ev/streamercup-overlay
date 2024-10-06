<template>
  <!-- TODO Host -->
  <AppLeaderboard
      title="Gesamtwertung"
      :placements="placements"
  />
</template>

<script setup lang="ts">
import { useAppStore } from '../../store/app'
import { storeToRefs } from 'pinia'
import { ref, watch} from 'vue'
import { Placements } from '../../types'
import AppLeaderboard from '../atoms/AppLeaderboard.vue'

const appStore = useAppStore()
const {state} = storeToRefs(appStore)
const placements = ref<Placements>({})

watch(state, (newState) => {
  if (newState?.total?.players?.length && newState.total.players.length > 0) {
    newState.total.players.forEach((player) => {
      if (!placements.value[player.player.uuid]) {
        placements.value[player.player.uuid] = {
          name: player.player.name,
          order: player.presentation_order,
          points: player.score
        }
      }

      placements.value[player.player.uuid].order = player.presentation_order
      placements.value[player.player.uuid].points = player.score
    })
  }
})

    /*
const placements = computed(() => {
  let players = state.value?.total.players?.sort((a: Player, b: Player) => a.presentation_order - b.presentation_order)
  if (!players) {
    return []
  }

  let placements: Placement[] = []
  let place: number = 0, score: number = 0
  players.forEach(player => {
    if (player.score != score || place == 0) {
      place++
    }
    score = player.score

    placements.push({
      name: player.player.name,
      place,
    })
  })

  return placements
})
*/
</script>
