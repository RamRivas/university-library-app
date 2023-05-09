import Input from "./Input.jsx";
import Label from "./Label";

const TextField = props => {
    const { label, input } = props;

    label.for = input.id;
    label.labelType = 0;
    const internalInputType = 0;
    
    return <div className="mb-3">
        <Label {...label}/>
        <Input internalInputType={internalInputType} input={input}/>
    </div>
}

export default TextField;