<template>
  <div
    v-if="component === 'leaderboard'"
    class="relative w-[746px] h-[143px]"
  >
    <div class="absolute z-[2] w-full h-full">
        <div class="flex flex-col gap-3">
          <div class="h-[91px]">
            <LeaderboardPanel v-if="showLeaderboard" />
          </div>
          <div class="flex justify-center">
            <TimerPanel v-if="showLeaderboardTimer" />
            <TimerPanel v-if="showVotingTimer" />
          </div>
        </div>
    </div>

    <div class="absolute z-[1] w-full h-full">
        <GlobalLeaderboardPanel />
    </div>
  </div>

  <template v-if="component === 'voting'">
    <AppCenterElement
        class="absolute z-[3]"
    >
      <VotingPanel />
    </AppCenterElement>
  </template>

  <template v-if="component === 'donation-panel'">
    <DonationPanel />
  </template>

  <template v-if="component === 'branding'">
    <BrandingPanel />
  </template>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue'
import VotingPanel from './components/organisms/VotingPanel.vue'
import TimerPanel from './components/organisms/TimerPanel.vue'
import LeaderboardPanel from './components/organisms/LeaderboardPanel.vue'
import DonationPanel from './components/organisms/DonationPanel.vue'
import GlobalLeaderboardPanel from './components/organisms/GlobalLeaderboardPanel.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from './store/app'
import AppCenterElement from './components/atoms/AppCenterElement.vue'
import BrandingPanel from "./components/organisms/BrandingPanel.vue";

const params = new URLSearchParams(window.location.search)
const component: Ref<string | null> = ref(params.get('component'))

const appStore = useAppStore()
const {state} = storeToRefs(appStore)

//const showGlobalLeaderboard = computed(() => state.value?.current_game?.timer_main_ms == 0)
const showLeaderboard = computed(() => state.value?.current_game?.timer_main_ms != 0 && state.value?.current_game?.id)
const showLeaderboardTimer = computed(() => state.value?.current_game ? state.value?.current_game?.timer_main_ms > 0 : false)
const showVotingTimer = computed(() => state.value?.vote?.counter_ms ? state.value.vote?.counter_ms > 0 : false)
</script>