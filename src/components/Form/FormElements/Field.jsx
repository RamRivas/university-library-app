import { fieldTypes } from "../../../utils";

const Field = props => {
    const {fieldType} = props;
    return fieldTypes[fieldType](props);
}

export default Field;