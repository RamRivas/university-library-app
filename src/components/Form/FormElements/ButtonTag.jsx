const ButtonTag = props => {
    const { text, onClick, className } = props;
    return <button type="button" className={`btn ${!className ? 'btn-primary' : className}`} onClick={onClick} >{text}</button>
}

export default ButtonTag;