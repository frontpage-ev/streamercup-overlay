import { defineStore } from 'pinia'
import { onMounted, onUnmounted, ref, Ref } from 'vue'
import { GameSetup, GameState } from '../types'
import Pusher from 'pusher-js'

export const useAppStore = defineStore('app', () => {
    const state: Ref<GameState | null> = ref(null)
    const setup: Ref<GameSetup | null> = ref(null)

    const socketKey = 'KEY'
    const socketBaseUrl = 'streamercup-socket.chrotos.net'
    const socketPort = 6001
    const pusher = new Pusher(socketKey, {
        wsHost: socketBaseUrl,
        wsPort: socketPort,
        cluster: '',
        forceTLS: false,
        disableStats: true,
        enabledTransports: ['ws', 'wss'],
    })

    onMounted(() => {
        const channel = pusher.subscribe('cache-host')
        channel.bind('gamestate', (data: any) => {
            if (data.setup.crew.game_host.listed.uuid !== '00000000-0000-0000-0000-000000000000') {
                state.value = data.state as GameState
                setup.value = data.setup as GameSetup
                console.log(data)
            }
        })
    })

    onUnmounted(() => {
        pusher.disconnect()
    })

    return {
        state,
        setup,
    }
})
