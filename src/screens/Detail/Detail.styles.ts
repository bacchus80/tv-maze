import styled from "styled-components";

export const CardHolder = styled("div")`
   text-align: left;
`;

export const StyledHeaderDiv = styled("div")`
   margin: 20px auto 10px auto;
`;

export const StyledTitleSpan = styled("span")`
   font-size: 2rem;
   font-weight: bold;
`;

export const MainCard = styled("div")`
   grid-template-columns: 1fr 360px;
   grid-template-rows: min-content;
   gap: 1.5rem;
   display: grid;
   width: 100%;
   grid-template-areas: "main info";

   @media (max-width: 1100px) {
      grid-template-columns: 95%;
      grid-template-rows: auto auto;
      grid-template-areas:
         "main"
         "info";
   }
`;

export const StyledSection = styled("section")`
   grid-area: main;
   display: flex;
`;

export const StyledImage = styled("img")`
   vertical-align: top;
   margin-right: 16px;
   max-width: 100%;
   object-fit: contain;
   float: left;
   @media (max-width: 800px) {
      display: none;
   }
`;

export const StyledSummaryDiv = styled("div")`
   text-align: justify;
   & > p {
      display: inline;
   }
`;
