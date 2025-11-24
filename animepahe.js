export default {
    name: "AnimePahe",
    id: "animepahe",
    version: "1.0.0",

    async search(query) {
        return [{ title: `AnimePahe: ${query}`, url: "https://animepahe.com", type: "anime" }];
    },

    async getInfo(url) {
        return { title: "AnimePahe Sample Anime", episodes: [{ title: "Episode 1", url }] };
    },

    async getStream(url) {
        return { url: "https://animepahe.com/sample.mp4", type: "mp4" };
    }
};
