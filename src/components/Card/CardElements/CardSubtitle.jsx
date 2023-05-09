const CardSubtitle = props => {
    const { subTitle, customClass } = props;
    const className = `card-subtitle ${customClass}`;

    return <h6 className={className}>{subTitle}</h6>;
}

export default CardSubtitle;