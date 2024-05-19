import Button from "../components/Button";

export default {
     title:"Components/Button",
     component: Button,
     argTypes: {handleClick:{action:"handleClick"}}

}

const Template = (args) => <Button {...args}/>

export const Red = Template.bind({});

Red.args = {
    label:"Button",
    backgroundColor:'red',
    size:'sm'
}


export const Green = Template.bind({});

Green.args = {
    label:"Button",
    backgroundColor:'green',
    size:'sm'
}


export const Small = Template.bind({});

Small.args = {
    label:"Button",
    backgroundColor:'red',
    size:'sm'
}


export const Medium = Template.bind({});

Medium.args = {
    label:"Button",
    backgroundColor:'red',
    size:'md'
}

export const Large = Template.bind({});

Large.args = {
    label:"Button",
    backgroundColor:'red',
    size:'lg'
}



export const LongLabel = Template.bind({});

LongLabel.args = {
    label:"Very Long Label Button  Very Long Label Button  Very Long Label Button  Very Long Label Button  Very Long Label Button  Very Long Label Button ",
    backgroundColor:'red',
    size:'lg'
}