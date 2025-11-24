import {Meta,StoryObj} from "@storybook/react";
import { Button } from "./button";


const meta:Meta<typeof Button>={
    component:Button,
    tags:["autodocs"]
}

export default meta;

type StoryObject=StoryObj<typeof Button>;


export const ButtonVariant:StoryObject={
    render:()=>(
        <>
                <Button variant="primary">primary</Button>
                <Button variant="secondary">secondary</Button>
                <Button variant="success">success</Button>
                <Button variant="danger">danger</Button>
                <Button variant="warning">warning</Button>
                <Button variant="info">info</Button>
        </>
    )
};



export const ButtonOutline:StoryObject={
    render:()=>(
        <>
            <Button variant="primary" state="outline">primary</Button>
            <Button variant="secondary" state="outline">secondary</Button>
            <Button variant="success" state="outline">success</Button>
            <Button variant="danger" state="outline">danger</Button>
            <Button variant="warning" state="outline">warning</Button>
            <Button variant="info" state="outline">info</Button>
        </>
    )
};


export const ButtonSize:StoryObject={
    render:()=>(
        <div className="flex items-center">
                <Button variant="primary" compSize="xs">Extra Small</Button>
                <Button variant="primary" compSize="sm">Small</Button>
                <Button variant="primary" compSize="md">Medium</Button>
                <Button variant="primary" compSize="lg">Large</Button>
                <Button variant="primary" compSize="xl">Extra Large</Button>
        </div>
    )
};





