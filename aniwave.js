export default {
    name: "AniWave",
    id: "aniwave",
    version: "1.0.0",

    async search(query) {
        return [{ title: `AniWave: ${query}`, url: "https://aniwave.to", type: "anime" }];
    },

    async getInfo(url) {
        return { title: "AniWave Sample Anime", episodes: [{ title: "Episode 1", url }] };
    },

    async getStream(url) {
        return { url: "https://aniwave.to/sample.mp4", type: "mp4" };
    }
};
