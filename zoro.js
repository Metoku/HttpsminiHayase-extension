export default {
    name: "Zoro",
    id: "zoro",
    version: "1.0.0",

    async search(query) {
        return [{ title: `Zoro: ${query}`, url: "https://zoro.to", type: "anime" }];
    },

    async getInfo(url) {
        return { title: "Zoro Sample Anime", episodes: [{ title: "Episode 1", url }] };
    },

    async getStream(url) {
        return { url: "https://zoro.to/sample.mp4", type: "mp4" };
    }
};
