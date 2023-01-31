import { useLocation } from "react-router-dom";
import { ReactElement } from "react";
import { StyledNav, StyledA } from "./NavBar.styles";

interface navBar {
   path: string;
   name: string;
}
const navBarItems: navBar[] = [
   { path: "/", name: "Search" },
   { path: "/favorites", name: "Favorites" },
];

export function NavBar(): ReactElement {
   const location = useLocation();
   return (
      <StyledNav>
         {navBarItems.map((item, index) => {
            if (item.path === location.pathname) {
               return <span key={index}>{item.name}</span>;
            } else {
               return (
                  <StyledA key={index} href={`${item.path}`}>
                     {item.name}
                  </StyledA>
               );
            }
         })}
      </StyledNav>
   );
}
