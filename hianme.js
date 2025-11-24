export default {
    name: "HiAnime",
    id: "hianime",
    version: "1.0.0",

    async search(query) {
        return [{ title: `HiAnime: ${query}`, url: "https://hianime.to", type: "anime" }];
    },

    async getInfo(url) {
        return { title: "HiAnime Sample Anime", episodes: [{ title: "Episode 1", url }] };
    },

    async getStream(url) {
        return { url: "https://hianime.to/sample.mp4", type: "mp4" };
    }
};
