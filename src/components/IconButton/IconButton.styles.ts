import styled from "styled-components";

export const StyledButton = styled("button")<{ isInputAddon: boolean }>`
   display: inline-flex;
   gap: 4px;
   line-height: 1.5;
   padding: 4px 8px;
   border: solid 1px #ced4da;
   border-style: ${(p) => (p.isInputAddon ? "none" : "solid")};
   &:hover {
      cursor: pointer;
   }
`;
