import { renderOnList } from "../../utils"
import Button from "./FormElements/Button";
import Field from "./FormElements/Field";

const Form = props => {
    const {fields, buttons, style} = props;
    return <form style={style}>
        {renderOnList(fields, 0, Field)}
        {renderOnList(buttons, 0, Button)}
    </form>;
}

export default Form;