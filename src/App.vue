<template>
  <VotingPanel
      v-if="component === 'voting-panel'"
  />
  <TimerPanel
      v-else-if="component === 'timer-panel'"
  />
  <LeaderboardPanel
      v-else-if="component === 'leaderboard-panel'"
  />
  <DonationPanel
      v-else-if="component === 'donation-panel'"
  />
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
import VotingPanel from './components/organisms/VotingPanel.vue'
import TimerPanel from './components/organisms/TimerPanel.vue'
import LeaderboardPanel from './components/organisms/LeaderboardPanel.vue'
import DonationPanel from './components/organisms/DonationPanel.vue'

const params = new URLSearchParams(window.location.search)
const component: Ref<string | null> = ref(params.get('component'))
</script>