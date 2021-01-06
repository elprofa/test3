
import { ColonneGauche } from "./colonneGauche.stc";
import ImgColonne1 from './undraw_winter_designer_a2m7.svg';
import {Row,Col} from 'react-bootstrap';

function ImgColonne() {
    return (
        <ColonneGauche>
            <Row>
                <Col><h1 className="TitleLeft"><span className="FirstPart">Help</span> Desk</h1></Col>
            </Row>
            <Row className="RowH4HelpDesk">
                <Col>
                    <img src={ImgColonne1} alt="helpdesk svg" className="HelpDeskSvg"/>
                </Col>
            </Row>
            <Row className="RowH4HelpDesk">
                <Col>
                    <h4 className="H4HelpDesk">24 x 7 Premium Chat Support</h4>
                    <p className="">Lorem ipsum, dolor sit amet consectetur, adipisicing elit</p>
                </Col>
            </Row>
            
        </ColonneGauche>
    )
}

  export default Title