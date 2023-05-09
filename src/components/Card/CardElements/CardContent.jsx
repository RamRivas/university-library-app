import CardLink from "./CardLink";
import { renderOnList } from "../../../utils";

const CardContent = props => {
    const { text, links } = props;

    return (
        <>
            <p className="card-text">{text}</p>
            {renderOnList(links, 0, CardLink)}
        </>
    );
}

export default CardContent;