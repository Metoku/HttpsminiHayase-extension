export default {
    name: "9anime",
    id: "nineanime",
    version: "1.0.0",

    async search(query) {
        return [{ title: `9anime: ${query}`, url: "https://9anime.to", type: "anime" }];
    },

    async getInfo(url) {
        return { title: "9anime Sample Anime", episodes: [{ title: "Episode 1", url }] };
    },

    async getStream(url) {
        return { url: "https://9anime.to/sample.mp4", type: "mp4" };
    }
};
