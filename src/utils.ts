export default {
    async hash_from_buffer(data: ArrayBuffer) {
        const rawHash = await crypto.subtle.digest({
            name: 'MD5'
        }, data)
        const hashArray = Array.from(new Uint8Array(rawHash))
        return hashArray
            .map((byte) => byte.toString(16).padStart(2, '0'))
            .join('')
    },
}