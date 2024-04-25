export default {
    resp: {
        auth_failed: {code: 1, msg: "auth failed: please provide a valid token"}
    },
    img: {
        size: {
            '4k': 3840,
            '2k': 2560,
            '1080p': 1080,
            '720p': 720,
            '480p': 480
        },
        ext: {
            webp: 'image/webp',
            jpeg: 'image/jpeg',
            jpg: 'image/jpeg',
            png: 'image/png',
            gif: 'image/gif',
            avif: 'image/avif',
        },
        scale: {
            pc: true,
            mobile: false,
        }
    }
}