import chelsea_fc from './premier_league/chelsea_fc.png';
import arsenal_fc from './premier_league/arsenal_fc.png';
import aston_villa_fc from './premier_league/aston_villa_fc.png';
import burnley_fc from './premier_league/burnley_fc.png';
import bha_fc from './premier_league/bha_fc.png';
import cp_fc from './premier_league/cp_fc.png';
import everton_fc from './premier_league/everton_fc.png';
import fulham from './premier_league/fulham.png';
import leeds_united_fc from './premier_league/leeds_united.svg';
import leicester_city_fc from './premier_league/leicester_city.png';
import liverpool_fc from './premier_league/liverpool_fc.png';
import man_city from './premier_league/man_city.png';
import man_utd from './premier_league/man_united.png';
import newcastle_united from './premier_league/nu.png';
import sheffield_utd from './premier_league/sheffield_utd.png';
import soton from './premier_league/soton.png';
import tottenham from './premier_league/tottenham.png';
import west_brom from './premier_league/wba.png';
import west_ham from './premier_league/westham.png';
import wolves from './premier_league/wolves.png';

import './Header.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap';

function Hello(){
    return (
        <div>
            <div className="header">
                <header className="header2">
                    <h1>Premier League</h1>
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
                                <Link to="/arsenal" className="App-link">
                                    <img src={arsenal_fc} className="ig-size" alt="arsenal_fc" />
                                    <p>Arsenal FC</p>
                                </Link>
                            </Col>
                            <Col>
                                <img src={aston_villa_fc} className="ig-size" alt="aston_villa_fc" />
                                <p>Aston Villa FC</p>
                            </Col>
                            <Col>
                                <img src={burnley_fc} className="ig-size" alt="burnley_fc" />
                                <p>Burnley FC</p>
                            </Col>
                            <Col>
                                <img src={bha_fc} className="ig-size" alt="bha_fc" />
                                <p>Brighton & Hove Albion FC</p>
                            </Col>
                        </Row>
                        <Row className="row-content-position">                            
                            <Col>
                                <img src={chelsea_fc} className="ig-size" alt="chelsea_fc" />
                                <p>Chelsea FC</p>
                            </Col>
                            <Col>
                                <img src={cp_fc} className="ig-size" alt="cp_fc" />
                                <p>Crystal Palace FC</p>
                            </Col>
                            <Col>
                                <img src={everton_fc} className="ig-size" alt="everton_fc" />
                                <p>Everton FC</p>
                            </Col>
                            <Col>
                                <img src={fulham} className="ig-size" alt="fulham" />
                                <p>Fulham FC</p>
                            </Col>
                        </Row>
                        <Row className="row-content-position">                            
                            <Col>
                                <img src={leeds_united_fc} className="ig-size" alt="leeds_united_fc" />
                                <p>Leeds United FC</p>
                            </Col>
                            <Col>
                                <img src={leicester_city_fc} className="ig-size" alt="leicester_city_fc" />
                                <p>Leicester City FC</p>
                            </Col>
                            <Col>
                                <img src={liverpool_fc} className="ig-size" alt="liverpool_fc" />
                                <p>Liverpool FC</p>
                            </Col>
                            <Col>
                                <img src={man_city} className="ig-size" alt="man_city" />
                                <p>Manchester City FC</p>
                            </Col>
                        </Row>
                        <Row className="row-content-position">                            
                            <Col>
                                <img src={man_utd} className="ig-size" alt="man_utd" />
                                <p>Manchester United FC</p>
                            </Col>
                            <Col>
                                <img src={newcastle_united} className="ig-size" alt="newcastle_united" />
                                <p>Newcastle United FC</p>
                            </Col>
                            <Col>
                                <img src={sheffield_utd} className="ig-size" alt="sheffield_utd" />
                                <p>Sheffield United FC</p>
                            </Col>
                            <Col>
                                <img src={soton} className="ig-size" alt="soton" />
                                <p>Southamton FC</p>
                            </Col>
                        </Row>
                        <Row className="row-content-position">                            
                            <Col>
                                <img src={tottenham} className="ig-size" alt="tottenham" />
                                <p>Tottenham Hotspur FC</p>
                            </Col>
                            <Col>
                                <img src={west_brom} className="ig-size" alt="west_brom" />
                                <p>West Bromwich Albion FC</p>
                            </Col>
                            <Col>
                                <img src={west_ham} className="ig-size" alt="west_ham" />
                                <p>West Ham United FC</p>
                            </Col>
                            <Col>
                                <img src={wolves} className="ig-size" alt="wolves" />
                                <p>Wolverhamton FC</p>
                            </Col>
                        </Row>
                    </Container> 
                </body> 
            </div>
        </div>
    );
}

export default Hello;