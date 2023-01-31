import { ReactElement, ReactNode } from "react";
import { StyledButton } from "./IconButton.styles";

export interface IconButtonProps {
   /** Button title*/
   title?: string;
   /** onClick function */
   onClick: (event?: any) => void;
   /** Button icon*/
   icon: ReactNode;
   /** If the component is used together with */
   isInputAddon?: boolean;
}

export function IconButton({
   title,
   icon,
   onClick,
   isInputAddon = false,
}: IconButtonProps): ReactElement {
   return (
      <StyledButton isInputAddon={isInputAddon} onClick={onClick}>
         <span>{icon}</span>
         {title}
      </StyledButton>
   );
}
