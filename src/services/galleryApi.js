import axios from "axios";

const KEY = "14759976-cf03712b5e5adf38202017e66";

const fetchGalleryWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&page=${page}?image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
};

export default {
  fetchGalleryWithQuery
};
