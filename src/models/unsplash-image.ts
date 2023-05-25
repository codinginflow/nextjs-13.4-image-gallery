export interface UnsplashImage {
    description: string,
    user: {
        username: string,
    },
    urls: {
        raw: string,
    },
    width: number,
    height: number,
}