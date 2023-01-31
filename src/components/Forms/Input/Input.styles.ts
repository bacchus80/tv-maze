import styled from "styled-components";

export const StyledInputHolder = styled("div")`
   margin-bottom: 20px;
   border: solid 1px #ced4da;
   display: inline-block;
   border-radius: 4px;
`;

export const StyledBaseInput = styled("input")`
   line-height: 1.5;
   padding: 4px 8px;
   border-style: none;
   &:focus {
      outline: none;
   }
`;

export const StyledInput = styled(StyledBaseInput)`
   border: solid 1px #ced4da;
   border-radius: 4px;
`;
