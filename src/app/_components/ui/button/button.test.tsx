import {render,screen,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom"
import { Button } from "./button";


describe("Test For Button Component",()=>{
   
    it("render the button",()=>{
        render(<Button variant="primary">Register</Button>);
        const btnRegister=screen.getByText("Register");
        expect(btnRegister).toBeInTheDocument();
    });

    test("applies correct class for variant",()=>{
        render(<Button variant="primary">Register</Button>);
        const btnRegister=screen.getByText("Register");
        expect(btnRegister).toHaveClass("btn--primary");
    });


    test("call onClick",async()=>{
        const fun1=jest.fn();
        const {getByText}=render(<Button variant="primary" onClick={fun1}>Register</Button>);
        const btnRegister=getByText("Register");

        await fireEvent.click(btnRegister);
        expect(fun1).toHaveBeenCalledTimes(1);

    });
});




