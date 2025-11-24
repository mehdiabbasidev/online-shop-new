import {render,screen,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom"
import { Input } from "./input";

describe("Test For Input Component",()=>{
     test("recevie te value typed in the input",async()=>{
        render(<Input />);
        const nameInput=screen.getByRole('textbox');
        await fireEvent.change(nameInput,{target:{value:'mehdi'}});
        expect(nameInput).toHaveValue("mehdi");
     });   


});