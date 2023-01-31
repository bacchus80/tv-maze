import styled from "styled-components";

export const StyledCoverConatiner = styled("div")`
   text-align: center;
`;

export const StyledCoversContainer = styled("div")`
   display: flex;
   justify-content: center;
   column-gap: 30px;
`;

export const StyledSingleCover = styled("div")<{ hide?: boolean }>`
   display: inline-block;
   transition: transform 0.25s;
   &:hover {
      transform: scale(1.08);
      cursor: pointer;
   }
   @media (max-width: 1024px) {
      display: ${(p) => (p.hide ? "none" : "inherit")};
      visalibity: ${(p) => (p.hide ? "hidden" : "visible")};
   }
`;

export const StyledImg = styled("img")`
   width: 219px;
   max-width: 100%;
`;
