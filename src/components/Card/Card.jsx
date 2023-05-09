import CardBody from './CardElements/CardBody';

const Card = props => {
    const { className, style } = props;
    console.log(style);
    return <div className={`card ${!className? '' : className}`} style={style}>
        <CardBody {...props}/>
    </div>;
}

export default Card;