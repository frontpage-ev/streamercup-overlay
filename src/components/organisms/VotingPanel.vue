<style>
/*
 * Slide left transition
 */
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}

.slide-leave-active {
  transition-delay: 10s;
}

.slide-enter-from {
  transform: translate(-100%, 0);
}

.slide-leave-to {
  transform: translate(-100%, 0);
}

.fade-leave-active,
.fade-enter-active {
  transition: 0.5s;
}

.fade-leave-active {
  transition-delay: 10s;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <Transition name="fade">
    <div
        v-show="visible"
        class="h-full bg-primary p-[25px]"
    >
      <div class="flex flex-col justify-between h-full text-center">
        <AppCard class="text-primary font-bold">
          Voting
        </AppCard>

        <template v-if="state && state.vote && state.vote.counter_ms > 0">
          <AppTimer :ms="state.vote.counter_ms" />

          <div class="grid gap-5">
            <template
                v-for="option in state.vote.options"
                :key="option.game.id"
            >
              <VoteOption
                  :name="option.game.display_name"
                  :description="option.game.description"
                  :votes="option.votes"
              />
            </template>
          </div>
        </template>

        <div
            v-else
            class="h-full flex items-center"
        >
          <div class="text-4xl w-full">
            <div class="text-white mb-8 font-bold">
              Voting beendet!
            </div>

            <VoteOption
                v-if="result"
                :name="result.game.display_name"
                :description="result.game.description"
                :votes="result.votes"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import AppCard from '../AppCard.vue'
import AppTimer from '../atoms/AppTimer.vue'
import VoteOption from '../VoteOption.vue'
import { useAppStore } from '../../store/app'
import { storeToRefs } from 'pinia'
import { computed, ComputedRef, Ref, ref, watch } from 'vue'
import { GameState, GameVoteOption } from '../../types'

const appStore = useAppStore()
const {state} = storeToRefs(appStore)

const visible = ref(true)
const lastState: Ref<GameState | null> = ref(null)

const result: ComputedRef<GameVoteOption | undefined> = computed(() => {
  lastState.value?.vote?.options.sort((a, b) => b.votes - a.votes)
  return lastState.value?.vote?.options[0]
})

watch(() => state.value, (newState) => {
  if (newState?.vote && newState.vote.counter_ms > 0) {
    lastState.value = state.value
    visible.value = true
  } else {
    visible.value = false
  }
}, {deep: true, immediate: true})
</script>