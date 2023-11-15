export function useFormat() {
    const formatTime = (ms: number | undefined) => {
        if (!ms) return '0:00'
        const minutes = Math.floor(ms / 60000)
        const seconds = ((ms % 60000) / 1000).toFixed(0)
        return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`
    }

    return {formatTime}
}