const CardLink = props => {
    const { href, linkLabel } = props;
    return <a href={href} className="card-link">{linkLabel}</a>;
};

export default CardLink;