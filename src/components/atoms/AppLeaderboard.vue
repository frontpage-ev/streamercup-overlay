<template>
  <div
      class="w-full grid grid-cols-9 bg-primary h-[91px] rounded-md"
  >
    <!-- Left Participants -->
    <div class="w-full flex items-end col-span-4 justify-evenly">
      <template
          v-for="(placement, key) in props.placements.slice(0, 4)"
          :key="key"
      >
        <LeaderboardItem
            :index="key"
            :place="placement.place"
            :name="placement.name"
            :discord="getDiscordId(placement.name)"
        />
      </template>
    </div>
    <!--------- Logo --------->
    <div class="w-full flex flex-col items-center justify-center align-middle h-full col-span-1">
      <img src="/assets/Logo-White-Clean-Modern@2x.png" class="h-[80px]" alt="">
    </div>
    <!-- Right Participants -->
    <div class="w-full flex items-start col-span-4 justify-evenly">
      <template
          v-for="(placement, key) in props.placements.slice(4, 8)"
          :key="key"
      >
        <LeaderboardItem
            :index="key"
            :place="placement.place"
            :name="placement.name"
            :discord="getDiscordId(placement.name)"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeaderboardItem from './LeaderboardItem.vue'
import { Placement } from '../../types'
import { PropType } from 'vue'

const props = defineProps({
  placements: {
    type: Array as PropType<Placement[]>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
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
      return '258284059208318977'

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