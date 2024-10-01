<template>
  <div
      class="flex text-3xl text-primary items-center h-full"
  >
    <div class="relative">
      <iframe
          v-if="discord"
          :src="fugiUrl"
          width="55"
          height="55"
          :class="[
            'h-[55px] rounded-full border-solid border-4',
            {'border-[#ffca5f]': props.place === 1},
            {'border-[#c0c0c0]': props.place === 2},
            {'border-[#cd7f32]': props.place === 3},
            {'border-[#bfabff]': props.place > 3},
          ]"
      />
      <span
          v-if="props.place <= 3"
          :class="[
              'absolute rounded-full h-[20px] w-[20px] text-white text-center -right-1 -bottom-1 text-sm',
              {'bg-[#ffca5f]': props.place === 1},
              {'bg-[#c0c0c0]': props.place === 2},
              {'bg-[#cd7f32]': props.place === 3},
          ]"
      >
        {{ props.place }}
      </span>
    </div>
    <!--
    <div class="w-[50px]">
      <i v-if="props.place === 1" class="fas fa-trophy-star text-[#ffd700]" />
      <i v-else-if="props.place === 2" class="fas fa-trophy text-[#c0c0c0]" />
      <i v-else-if="props.place === 3" class="fas fa-trophy text-[#cd7f32]" />
      <div v-else>
        {{ props.place }}
      </div>
    </div>
    <div
        :class="{
          'font-bold' : props.place <= 3,
        }"
    >
      {{ props.name }}
    </div>
    -->
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({
  place: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  discord: {
    type: String as PropType<string | null>,
    required: true,
  },
})

const fugiUrl = computed(() => {
  return `https://reactive.fugi.tech/individual/${props.discord}?layer-width=55&layer-height=55`
})
</script>