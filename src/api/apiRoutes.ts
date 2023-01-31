const BASE_URL = "https://api.tvmaze.com/";

export const apiRoutes = {
   singleTvShow: BASE_URL + "shows/",
   shows: BASE_URL + "search/shows?q=",
   allShows: BASE_URL + "shows?page=",
};
