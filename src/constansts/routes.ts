interface Route {
   name: string;
   item: RouteItem;
}
interface RouteItem {
   name: string;
   route: string;
}
export const routes = {
   DETAIL: {
      name: "Detail",
      route: "/detail/:id",
   },
   FAVORITES: {
      name: "Favorites",
      route: "/favorites",
   },
   SEARCH: {
      name: "Search",
      route: "/",
   },
};
