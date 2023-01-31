import { ChangeEvent, KeyboardEvent, ReactElement, ReactNode } from "react";
import {
   StyledBaseInput,
   StyledInput,
   StyledInputHolder,
} from "./Input.styles";

export interface InputProps {
   name: string;
   value: string | number | undefined;
   placeholder?: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
   iconButton?: ReactNode;
}

export function Input({
   name,
   value,
   placeholder,
   onChange,
   onKeyDown,
   iconButton,
}: InputProps): ReactElement {
   return iconButton ? (
      <StyledInputHolder>
         <StyledBaseInput
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
         />
         {iconButton}
      </StyledInputHolder>
   ) : (
      <StyledInput
         name={name}
         value={value}
         placeholder={placeholder}
         onChange={onChange}
         onKeyDown={onKeyDown}
      />
   );
}
