import epl from './epl.png';
import bundesliga from './bundesliga.png';
import './App.css';
import {Header,Footer, Hitungan} from './Calculation';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <img src={epl} className="App-logo" alt="logo" />
              <p>
                <Link to="/premier_league" className="App-link1">See Detail</Link>
              </p>              
            </Col>
            <Col>
              <img src={bundesliga} className="App-logo" alt="logo" />
              <p>
                <Link to="/bundesliga" className="App-link1">See Detail</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
