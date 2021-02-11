import axios from "axios";
// YT API Key:
const APIKEY = "AIzaSyACmTybabc2a_sBHAa5mey0uzHn3MCDdmI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: APIKEY,
  },
});
