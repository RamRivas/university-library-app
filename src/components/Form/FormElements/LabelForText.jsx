const LabelForText = props => {
    const { className, text, labelFor } = props;

    return <label className={`form-label ${!className ? '' : className}`} htmlFor={labelFor}>{text}</label>
}

export default LabelForText;