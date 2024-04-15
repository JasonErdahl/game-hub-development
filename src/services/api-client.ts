import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f162bc0d3000484ca62c0efe4194c5d3",
  },
});
