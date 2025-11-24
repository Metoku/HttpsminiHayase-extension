export default {
    name: "Gogoanime",
    id: "gogoanime",
    version: "1.0.0",

    async search(query) {
        return [{ title: `Gogoanime: ${query}`, url: "https://gogoanime.cm", type: "anime" }];
    },

    async getInfo(url) {
        return { title: "Gogoanime Sample Anime", episodes: [{ title: "Episode 1", url }] };
    },

    async getStream(url) {
        return { url: "https://gogoanime.cm/sample.mp4", type: "mp4" };
    }
};
