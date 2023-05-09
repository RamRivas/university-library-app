const ButtonLink = props => {
    const { href, text, onClick, className } = props;
    return <a href={!href ? '#' : href} className={`btn ${!className ? 'btn-primary' : className}`} onClick={onClick} >{text}</a>
};

export default ButtonLink;