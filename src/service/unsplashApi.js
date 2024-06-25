import axios from "axios";
import { transformResults } from "../helpers/transformResults";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (query, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: "JQpHbQDnF_EZQssfDG5Gsbj0N4Gq2Q80Yi0DqM79H6g",
      query,
      page,
      per_page: 20,
      orientation: "landscape",
    },
  });

  const images = transformResults(data.results);
  return { images, totalImages: data.total, totalPages: data.total_pages };
};
