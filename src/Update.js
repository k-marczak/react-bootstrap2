import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import image from './assets/image.svg'
import image1 from './assets/image-corona.jpg'
import image2 from './assets/section1.svg'
import image3 from './assets/AndroidPNG.png'
import image4 from './assets/iosPNG.png'
import image5 from './assets/MobileApp.png'
import styled from 'styled-components'
import Footer from './components/Footer';


const Styles = styled.div`
     .col1 h3{
        text-align: center;
    }

    .col1 p{
        margin-top: 20px;
        padding: 10px;
        line-height: 30px;
    }

    .jumbotron1{
       
        
        
       height: 200px;
       background: url(${image1}) no-repeat bottom;
       background-size: cover;
       z-index: -2;
   }

   .cases{
       display: flex;
       color: white;
       flex-direction: column;
       align-content: space-between;
       justify-content: space-between;
       
   }

   .row2{
       
       text-align: center;
   }

   .jumbotron2{
       height: 300px;
       background: #6457FF;
       background-size: cover;
       z-index: -2;
   }
`



export const Update = () => {
    return (
        <Styles>
            <div style={{marginTop: '190px'}} />
            
            <Container>
                <Row>
                    <Col className="col1">
                        <h1>Pokonajmy razem koronawirusa!</h1>
                        <h3>Ściągnij, uruchom – dbaj o siebie i innych.</h3>
                        <p>Zdrowie Covid to aplikacja, która skutecznie pomaga w ograniczaniu rozprzestrzeniania się koronawirusa. Korzysta z API opracowanego przez Apple i Google. Działa w oparciu o technologię Bluetooth, co ważne - nie korzysta z żadnych danych użytkowników. Wasza prywatność jest dla nas najważniejsza.</p>
                    </Col>
                    <Col className="col2">
                        <img src={image} style={{height: '320px'}} className="image" />
                    </Col>
                </Row>
            </Container>
            

            <Jumbotron className="jumbotron1" fluid style={{marginTop: '50px'}}>
                <Container className="cases">
                    <div className="row1" />
                    <div className="row2">
                        <h1>Aplikacja jest w pełni bezpieczna, bezpłatna i dobrowolna.</h1>
                        <p style={{ padding: '50px' }}> 
                        Jak pokazują badania, wykorzystanie aplikacji mogą znacząco zredukować ryzyko rozprzestrzeniania się koronawirusa.
                        </p>    
                    </div>
                    
                </Container>
            </Jumbotron>


            <Container style={{marginTop: '100px'}}>
                <Row>
                    <Col className="col2">
                        <img src={image2} style={{height: '320px'}} className="image" />
                    </Col>

                    <Col className="col1">
                        <h1>Masz koronawirusa lub podejrzewasz, że go masz?</h1>
                        <p>Zauważasz u siebie pierwsze objawy? Miałeś kontakt z osobą zakażoną? Otrzymałeś pozytywny wynik testu? Dowiedz się, co powinieneś zrobić w zależności od sytuacji.</p>
                    </Col>
                    
                </Row>
            </Container>


            <Jumbotron className="jumbotron2" style={{marginTop: '100px'}} fluid>
                <Container>
                <Row>
                    <Col>
                        <h1>Pobierz Zdrowie Covid</h1>
                        <p style={{marginTop: '20px'}}>
                        Więcej o działaniu aplikacji Zdrowie Covid <br /> znajdziesz w zakładce <a style={{fontSize: '20px', color: '#1300FF'}} href="#">Jak to działa.</a> 
                        </p>
                        <a href="#">
                            <img src={image3} style={{height: '50px'}} />
                        </a>
                        <a href="#">
                            <img src={image4} style={{height: '50px', marginLeft: '30px'}} />
                        </a>
                    </Col>
                    <Col style={{textAlign: 'center'}}>
                        <img src={image5} style={{height: '250px', marginTop: '-30px'}} alt=""/>
                    </Col>
                </Row>
                    

                </Container>
            </Jumbotron>

            <Footer />




        </Styles>
        
    );
};

export default Update;