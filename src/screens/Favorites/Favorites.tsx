import { FavoriteBookmark } from "../../models";
import { useLocalStorage } from "../../utils/hooks";
import { URLS, createUrl } from "../../utils";
import { useNavigate } from "react-router-dom";
import { StyledTableImage } from "../../components/Table/Table.styles";
import { StyledUl, StyledLi } from "./Favorites.styles";

/** Component displaying TV shows stored as favorites */
export function Favorites() {
   const navigate = useNavigate();
   const [shows, setShows] = useLocalStorage<FavoriteBookmark[]>("shows", []);
   const favoriteShows: FavoriteBookmark[] = shows;
   const hasFavorites =
      favoriteShows && JSON.stringify(favoriteShows) === JSON.stringify("[]");

   return (
      <div style={{ textAlign: "left" }}>
         <h1>Favorite TV shows</h1>
         {hasFavorites && <div>There are no saved favorites</div>}
         {!hasFavorites && (
            <StyledUl>
               {favoriteShows &&
                  favoriteShows.map((item, index) => {
                     return (
                        <StyledLi
                           onClick={() =>
                              navigate(createUrl(URLS.detail, item.id))
                           }
                           key={index}
                        >
                           <StyledTableImage src={item.imageUrl} /> {item.title}
                        </StyledLi>
                     );
                  })}
            </StyledUl>
         )}
      </div>
   );
}
