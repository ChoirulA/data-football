import arminia_bielfeld from './bundesliga/arminia_bielefeld_logo.png';
import bayer_leverkusen from './bundesliga/bayer_04_leverkusen.png';
import borussia_dortmund from './bundesliga/borussia_dortmund.png';
import borussia_monchengladbach from './bundesliga/borussia_monchengladbach.png';
import eintracht_frankfurt from './bundesliga/eintracht_frankfurt.png';
import fc_augsburg from './bundesliga/fc_augsburg.png';
import fc_bayern_munchen from './bundesliga/fc_bayern_munchen.png';
import fc_koln from './bundesliga/fc_koln.png';
import hertha_bsc from './bundesliga/hertha_bsc.svg';
import hoffenheim from './bundesliga/hoffenheim.png';
import mainz_05 from './bundesliga/mainz_05.png';
import rb_leipzig from './bundesliga/rb_leipzig.png';
import sc_freiburg from './bundesliga/sc_freiburg.png';
import schalke_04 from './bundesliga/schalke_04.png';
import union_berlin from './bundesliga/union_berlin.svg';
import vfb_stuttgart from './bundesliga/vfb_stuttgart.png';
import vfl_wolfsburg from './bundesliga/vfl_wolfsburg.png';
import werder_bremen from './bundesliga/werder_bremen.png';

import './Header.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap';

function Bundesliga(){
    return (
        <div>
            <div className="header">
                <header className="header2">
                    <h1>Bundesliga</h1>
                    <Link to="/" className="link-a"><FontAwesomeIcon icon={faHome} /> Back to Home</Link>                             
                    {/* <a 
                        href="https://www.instagram.com/choirulandriansyah/"
                        target="blank"
                        className="font-a"
                    >
                        <img src={ig} className="ig-size" alt="intagram" /> show my profile
                    </a> */}                
                </header>                       
            </div>
            <div>
                <body className="body2">
                    <Container>
                        <Row className="row-content-position">
                            <Col>
                                <img src={arminia_bielfeld} className="ig-size" alt="arminia_bielfeld" />
                                <p>Arminia Bielfeld</p>
                            </Col>
                            <Col>
                                <img src={bayer_leverkusen} className="ig-size" alt="bayer_leverkusen" />
                                <p>Bayer 04 Leverkusen</p>
                            </Col>
                            <Col>
                                <img src={borussia_dortmund} className="ig-size" alt="borussia_dortmund" />
                                <p>Borussia Dortmund</p>
                            </Col>
                            <Col>
                                <img src={borussia_monchengladbach} className="ig-size" alt="borussia_monchengladbach" />
                                <p>Borussia Mönchengladbach</p>
                            </Col>
                        </Row>
                        <Row className="row-content-position">                            
                            <Col>
                                <img src={eintracht_frankfurt} className="ig-size" alt="eintracht_frankfurt" />
                                <p>Eintracht Frankfurt</p>
                            </Col>
                            <Col>
                                <img src={fc_augsburg} className="ig-size" alt="fc_augsburg" />
                                <p>FC Augsburg</p>
                            </Col>
                            <Col>
                                <img src={fc_bayern_munchen} className="ig-size" alt="fc_bayern_munchen" />
                                <p>FC Bayern München</p>
                            </Col>
                            <Col>
                                <img src={fc_koln} className="ig-size" alt="fc_koln" />
                                <p>FC Köln</p>
                            </Col>
                        </Row>
                        <Row className="row-content-position">                            
                            <Col>
                                <img src={hertha_bsc} className="ig-size" alt="hertha_bsc" />
                                <p>Herta BSC</p>
                            </Col>
                            <Col>
                                <img src={hoffenheim} className="ig-size" alt="hoffenheim" />
                                <p>Hoffenheim</p>
                            </Col>
                            <Col>
                                <img src={mainz_05} className="ig-size" alt="mainz_05" />
                                <p>Mainz 05</p>
                            </Col>
                            <Col>
                                <img src={rb_leipzig} className="ig-size" alt="rb_leipzig" />
                                <p>RB Leipzig</p>
                            </Col>
                        </Row>
                        <Row className="row-content-position">                            
                            <Col>
                                <img src={sc_freiburg} className="ig-size" alt="sc_freiburg" />
                                <p>SC Freiburg</p>
                            </Col>
                            <Col>
                                <img src={schalke_04} className="ig-size" alt="schalke_04" />
                                <p>Schalke 04</p>
                            </Col>
                            <Col>
                                <img src={union_berlin} className="ig-size" alt="union_berlin" />
                                <p>Union Berlin</p>
                            </Col>
                            <Col>
                                <img src={vfb_stuttgart} className="ig-size" alt="vfb_stuttgart" />
                                <p>VFB Stuttgart</p>
                            </Col>
                        </Row>
                        <Row className="row-content-position">                            
                            <Col>
                                <img src={vfl_wolfsburg} className="ig-size" alt="vfl_wolfsburg" />
                                <p>VFL Wolfsburg</p>
                            </Col>
                            <Col>
                                <img src={werder_bremen} className="ig-size" alt="werder_bremen" />
                                <p>Werder Bremen</p>
                            </Col>
                        </Row>
                    </Container> 
                </body> 
            </div>
        </div>
    );
}

export default Bundesliga;