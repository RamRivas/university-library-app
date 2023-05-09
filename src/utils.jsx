import CardContent from "./components/Card/CardElements/CardContent";
import CardForm from "./components/Card/CardElements/CardForm";
import ButtonLink from "./components/Form/FormElements/ButtonLink";
import ButtonTag from "./components/Form/FormElements/ButtonTag";
import InputForText from "./components/Form/FormElements/InputForText";
import LabelForText from "./components/Form/FormElements/LabelForText";
import TextField from "./components/Form/FormElements/TextField";

export const renderOnList = (elements, index, Component ) => {
    if(index < elements.length){
        return [
            <Component key={!elements[index].key ? index : elements[index].key} {...elements[index]} ></Component>,
            renderOnList(elements, index + 1, Component)
        ]
    }
};

export const cardTypes = [
    props => {
        return <CardContent {...props}/>
    },
    props => {
        return <CardForm {...props}/>
    }
];

export const inputTypes = [
    props => {
        return <InputForText {...props}/>
    }
];

export const labelTypes = [
    props => {
        return <LabelForText {...props}/>
    }
];

export const fieldTypes = [
    props => {
        return <TextField {...props}/>
    }
]

export const buttonTypes = [
    props => {
        return <ButtonLink {...props}/>
    },
    props => {
        return <ButtonTag {...props}/>
    }
]