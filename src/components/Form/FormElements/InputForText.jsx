const InputForText = props => {
    const { className, type, id, placeHolder } = props;
    return <input type={type} className={`form-control ${!className ? '' : className}`} id={id} placeholder={!placeHolder? '' : placeHolder}/>
}

export default InputForText;