import {
   FaRegStar as StarOutlinedIcon,
   FaStar as StarIcon,
} from "react-icons/fa";
import { ReactElement } from "react";
import { useLocalStorage } from "../../utils/hooks";
import { FavoriteBookmark } from "../../models";
import { StyledSpan } from "./Favorite.styles";

export interface FavoriteProps {
   id: number | undefined;
   title: string;
   imageUrl: string;
}

/** Icon for staring av favorite */
export function Favorite({ id, title, imageUrl }: FavoriteProps): ReactElement {
   const [name, setName] = useLocalStorage("shows", []);
   const emptyFavorites = name === "[]" ? true : false;
   const isFavorite = emptyFavorites
      ? -1
      : name.findIndex((item: FavoriteBookmark) => item.id === id);
   const removeFromFavorite = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      setName(name.filter((item: FavoriteBookmark) => item.id !== id));
   };

   const addToFavorite = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      const favorite: FavoriteBookmark = {
         created: new Date(),
         id: id || 0,
         imageUrl: imageUrl,
         title: title,
      };
      if (emptyFavorites) {
         setName([favorite]);
      } else {
         setName([...name, favorite]);
      }
   };

   localStorage.getItem("name");

   return (
      <StyledSpan>
         {isFavorite !== -1 ? (
            <StarIcon
               style={{ color: "#ffcc00", fontSize: "150%" }}
               onClick={removeFromFavorite}
               title={`Remove "${title}" as favorite`}
            />
         ) : (
            <StarOutlinedIcon
               style={{ color: "#ffcc00", fontSize: "150%" }}
               onClick={addToFavorite}
               title={`Add "${title}" as favorite`}
            />
         )}
      </StyledSpan>
   );
}
