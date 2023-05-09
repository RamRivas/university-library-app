import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import { cardTypes } from "../../../utils";

const CardBody = props => {
    const { title, subtitleProps: { subTitle, customClass}, cardType } = props;
    
    return <div className="card-body">
        <CardTitle title={title}/>
        <CardSubtitle subTitle={subTitle} customClass={customClass}/>
        {cardTypes[cardType](props)}
    </div>
}

export default CardBody;