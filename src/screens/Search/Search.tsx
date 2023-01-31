import { useFindShows } from "../../api/hooks";
import { singleTVShow } from "../../models";
import {
   Favorite,
   IconButton,
   Input,
   ShowCovers,
   NetworkError,
} from "../../components";
import { URLS, createUrl } from "../../utils";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChangeEvent, KeyboardEvent, ReactElement, useEffect } from "react";
import { StyledDiv } from "./Search.styles";
import {
   StyledTable,
   StyledTr,
   StyledThead,
   StyledTh,
   StyledTd,
   StyledTableImage,
} from "../../components/Table/Table.styles";

import { useState } from "react";

export function Search(): ReactElement {
   const [queryParams, setQueryParams] = useSearchParams();
   const navigate = useNavigate();
   const urlQuery = queryParams.get("q");
   const [text, setText] = useState<string>(urlQuery ? urlQuery : "");
   const [enableQuery, setEnableQuery] = useState<boolean>(false);
   const [query, setQuery] = useState<string>("");
   const { shows, isError } = useFindShows<singleTVShow>({
      query,
      enableQuery,
   });

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
   };

   const search = (e: any) => {
      setQuery(text);
      setEnableQuery(true);
      e.preventDefault();
      navigate(createUrl(URLS.searchQuery, text));
   };

   const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
         search(event);
      }
   };

   useEffect(() => {
      if (enableQuery === false) {
         setQuery(text);
         setEnableQuery(true);
      }
   }, [enableQuery, text]);

   return (
      <div>
         <StyledDiv>
            <h1>Search for a TV show</h1>
            <Input
               name="search"
               onChange={handleChange}
               value={text}
               placeholder="Search"
               onKeyDown={handleKeyDown}
               iconButton={
                  <IconButton
                     title="Search"
                     icon={<SearchIcon />}
                     onClick={search}
                     isInputAddon={true}
                  />
               }
            />
         </StyledDiv>
         {shows && shows.length < 1 && <ShowCovers />}
         <NetworkError error={isError} />
         {shows && shows?.length > 0 && (
            <>
               <StyledTable>
                  <StyledThead>
                     <StyledTr>
                        <StyledTh>TV show</StyledTh>
                        <StyledTh>Type</StyledTh>
                        <StyledTh>Genres</StyledTh>
                        <StyledTh>Runtime</StyledTh>
                        <StyledTh>Average score</StyledTh>
                        <StyledTh> </StyledTh>
                     </StyledTr>
                  </StyledThead>
                  <tbody>
                     {shows.map((show, index) => {
                        const singleShow = show?.show;
                        return (
                           <StyledTr
                              key={index}
                              onClick={() =>
                                 navigate(createUrl(URLS.detail, singleShow.id))
                              }
                           >
                              <StyledTd>
                                 <StyledTableImage
                                    src={singleShow?.image?.medium}
                                    alt={singleShow.name}
                                 />{" "}
                                 {singleShow.name}
                              </StyledTd>
                              <StyledTd>{singleShow.type}</StyledTd>
                              <StyledTd>
                                 {singleShow.genres.join(", ")}
                              </StyledTd>
                              <StyledTd className="right">
                                 {singleShow.runtime}
                              </StyledTd>
                              <StyledTd className="right">
                                 {singleShow.rating.average}
                              </StyledTd>
                              <StyledTd>
                                 <Favorite
                                    id={singleShow.id}
                                    title={singleShow?.name}
                                    imageUrl={singleShow?.image?.medium}
                                 />
                              </StyledTd>
                           </StyledTr>
                        );
                     })}
                  </tbody>
               </StyledTable>
            </>
         )}
      </div>
   );
}
