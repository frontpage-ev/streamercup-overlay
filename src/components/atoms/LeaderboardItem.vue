<template>
  <div
      :class="[
          'flex text-3xl text-primary items-center h-full',
          {'-order-4': placement.order === 1},
          {'-order-3': placement.order === 2},
          {'-order-2': placement.order === 3},
          {'-order-1': placement.order === 4},
          {'order-1': placement.order === 5},
          {'order-2': placement.order === 6},
          {'order-3': placement.order === 7},
          {'order-4': placement.order === 8},
      ]"
  >
    <div class="relative">
      <iframe
          v-if="fugiUrl"
          :src="fugiUrl"
          width="55"
          height="55"
          :class="[
            'h-[55px] rounded-full border-solid border-4',
            {'border-[#ffca5f]': place === 1},
            {'border-[#c0c0c0]': place === 2},
            {'border-[#cd7f32]': place === 3},
            {'border-[#bfabff]': place > 3},
          ]"
      />
      <span
          v-if="order <= 3"
          :class="[
              'absolute rounded-full h-[20px] w-[20px] text-white text-center -right-1 -bottom-1 text-sm',
              {'bg-[#ffca5f]': place === 1},
              {'bg-[#c0c0c0]': place === 2},
              {'bg-[#cd7f32]': place === 3},
          ]"
      >
        {{ place }}
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
import {Placement, Places} from "../../types";

const props = defineProps({
  placement: {
    type: Object as PropType<Placement>,
    required: true,
  },
  places: {
    type: Object as PropType<Places>,
    required: true,
  },
})

const order = computed(() => {
  return props.placement.order
})

const place = computed(() => {
  return props.places[props.placement.name]
})

const fugiUrl = computed(() => {
  const discord = getDiscordId(props.placement.name)
  if (!discord) {
    return null
  }

  return `https://reactive.fugi.tech/individual/${discord}?layer-width=55&layer-height=55`
})

function getDiscordId(name: string): string|null {
  switch (name.toLocaleLowerCase()) {
      // Tester
    case 'katzen48':
      return '179291321058590720'
    case 'deradihab':
      return '258284059208318977'
    case 'gunterlol':
      return '381593309367238671'
    case 'goldi2002':
      return '406529472855015458'
    case 'mr_magic_skull':
      return '527177604034330671'
    case 'ghostzerottv':
      return '81989081143181312'
    case 'chrotos':
      return '81989081143181312'

      // Teilnehmer
    case 'jinjaowo':
      return '238969745586520065'
    case 'latwyla':
      return '257888336788586498'
    case 'nayamichan':
      return '211981116393914369'
    case 'sillyemy':
      return '217342495774736384'
    case 'lunywoo':
      return '957647519041613904'
    case 'finstey':
      return '980142017432678460'
    case 'monaeuphelia':
      return '738807411237715991'
    case 'fuxel':
      return '430447041248886794'
    case 'clym':
      return '231339277139705857'

    default:
      return null
  }
}
</script>