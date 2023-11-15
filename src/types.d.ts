export interface Vote {
    counter_ms: number
    options: {
        game: {
            id: number
            name: string
            display_name: string
            description: string
        }
        votes: number
    }[]
}

export interface Player {
    player: {
        uuid: string
        name: string
    }
    score: number
}

export interface GameState {
    active: boolean
    current_game: {
        id: number | null
        name: string | null
        display_name: string | null
        description: string | null
        scores: {
            players: Player[]
        } | null
        timer_start_ms: number
        timer_main_ms: number
        timer_ending_ms: number
    }
    vote: Vote | null
    total: {
        players: {
            player: {
                uuid: string
                name: string
            }
            score: number
        }[]
    }
}

export interface GameSetup {
    crew: {
        game_host: {
            online: boolean
            listed: {
                name: string
                uuid: string
            }
        }
        staff: {
            count_online: number
            listed: {
                name: string
                uuid: string
            }[]
        }
        player: {
            count_online: number
            listed: {
                [key: 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7' | 'p8']: {
                    name: string
                    uuid: string
                }
            }
        }
    }
    settings: {
        show_mode: number
        listed_player: number
    }
}

export interface RootState {
    state: GameState,
    setup: GameSetup
}