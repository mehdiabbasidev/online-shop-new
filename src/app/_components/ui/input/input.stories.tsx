import {Meta,StoryObj} from "@storybook/react";
import { Input } from "./input";


const meta:Meta<typeof Input>={
    component:Input,
    tags:["autodocs"]
}

export default meta;


type StoryObject=StoryObj<typeof Input>;


export const InputVariant:StoryObject={
    render:()=>(
        <>
            <Input variant="primary" compSize="md" placeholder="primary" />
            <Input variant="secondary" compSize="md" placeholder="secondary" />
            <Input variant="success" compSize="md" placeholder="success" />
            <Input variant="danger" compSize="md" placeholder="danger" />
            <Input variant="warning" compSize="md" placeholder="warning" />
            <Input variant="info" compSize="md" placeholder="info" />
        </>
    )
};



export const InputShape:StoryObject={
    render:()=>(
        <>
            <Input variant="primary" shape="wide" placeholder="primary" />
            <Input variant="secondary" shape="wide" placeholder="secondary" />
            <Input variant="success" shape="wide" placeholder="success" />
            <Input variant="danger" shape="wide" placeholder="danger" />
            <Input variant="warning" shape="wide" placeholder="warning" />
        </>
    )
};

