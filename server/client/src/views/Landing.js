import React from "react";
import {
  Parallax,
  GlobalStyle,
  TextBlock,
  LandingContainer,
  Footer,
  ColBlock,
} from "../styled/StyledComponents";
import { Header } from "../components/Header";
import { MBlock } from "../components/MoveBlock";
import { Carousel } from "../components/Carousel";
import { Form } from "../components/Newsletter";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import facebook from "../assets/facebook.png";

// landing page
const Landing = () => {
  return (
    <LandingContainer fluid>
      <Row noGutters>
        <GlobalStyle />
        <Col md={12}>
          <Header />
        </Col>
        <Col md={12}>
          <Parallax url="https://res.cloudinary.com/dyexps6g2/image/upload/v1610436095/assorted_znarsh.jpg"></Parallax>
          <ColBlock top="300px" id="block1">
            <MBlock
              type="block"
              text="Taste. Class. Perfection"
              dir="right"
              stretch={true}
              flash={false}
              height="200px"
            />
          </ColBlock>
          <ColBlock top="400px" id="block1">
            <MBlock
              type="hr"
              dir="left"
              stretch={true}
              flash={false}
              width="10px"
            />
          </ColBlock>
        </Col>
        <Col lg={6}>
          <Carousel />
        </Col>
        <TextBlock id="About" lg={6}>
          <div>
            CoffeeElite has specialized in selecting and roasting some of the
            world's most exclusive coffees. Named the world's best coffee shop
            by The Daily Telegraph for two years in a row, we strive to have you
            Taste the Joy of the extraordinary.
          </div>
        </TextBlock>
        <Col md={12} id="Eat">
          <Parallax
            url="https://res.cloudinary.com/dyexps6g2/image/upload/v1610436095/assorted_znarsh.jpg"
            height="1100px"
          ></Parallax>
          <ColBlock top="50px" id="block2">
            <MBlock
              type="block"
              text="100% Fairtrade Arabica Coffee"
              dir="left"
              stretch={false}
              flash={false}
            />
          </ColBlock>
          <ColBlock top="280px" id="block2">
            <MBlock
              type="hr"
              dir="right"
              stretch={true}
              flash={false}
              width="40px"
            />
          </ColBlock>
          <ColBlock top="400px" id="block3">
            <MBlock
              type="block"
              text="Breakfast, Lunch & Dinner"
              dir="right"
              stretch={false}
              flash={false}
            />
          </ColBlock>
          <ColBlock top="630px" id="block3">
            <MBlock
              type="hr"
              dir="left"
              stretch={true}
              flash={false}
              width="40px"
            />
          </ColBlock>
          <ColBlock top="750px" id="block4">
            <MBlock
              type="block"
              text="Delictable Sweet Treats"
              dir="left"
              stretch={false}
              flash={false}
            />
          </ColBlock>
          <ColBlock top="980px" id="block4">
            <MBlock
              type="hr"
              dir="right"
              stretch={true}
              flash={false}
              width="40px"
            />
          </ColBlock>
        </Col>
        <Col md={12}>
          <Parallax url="https://res.cloudinary.com/dyexps6g2/image/upload/v1609769602/coffee_shop_tmhhc8.jpg"></Parallax>
        </Col>
        <Col md={12} id="Reviews">
          <Parallax
            url="https://res.cloudinary.com/dyexps6g2/image/upload/v1610436095/assorted_znarsh.jpg"
            height="900px"
          ></Parallax>
          <ColBlock top="0px" id="block5">
            <MBlock
              type="block"
              text='"The best coffee I have ever had!" - Kate, Australia'
              dir="right"
              stretch={true}
              flash={false}
            />
          </ColBlock>
          <ColBlock top="300px" id="block6">
            <MBlock
              type="block"
              text='"Delicous cake and treats" - Adam, USA'
              dir="left"
              stretch={true}
              flash={false}
            />
          </ColBlock>
          <ColBlock top="600px" id="block7">
            <MBlock
              type="block"
              text='"Cannot wait to return!" - Mary, London'
              dir="right"
              stretch={true}
              flash={false}
            />
          </ColBlock>
        </Col>
        <Col md={12}>
          <Parallax url="https://res.cloudinary.com/dyexps6g2/image/upload/v1610453286/pour_qmwwky.jpg"></Parallax>
        </Col>
        <Col md={12} id="Contact">
          <Parallax
            url="https://res.cloudinary.com/dyexps6g2/image/upload/v1610436095/assorted_znarsh.jpg"
            height="1100px"
          ></Parallax>
          <ColBlock top="50px" id="block8">
            <MBlock
              type="block"
              text="Email: coffeeElite@gmail"
              dir="left"
              stretch={true}
              flash={true}
            />
          </ColBlock>
          <ColBlock top="400px" id="block9">
            <MBlock
              type="block"
              text="Address: 12 Harrington Sreet, Cape Town"
              dir="right"
              stretch={true}
              flash={true}
            />
          </ColBlock>
          <ColBlock top="750px" id="block10">
            <MBlock
              type="block"
              text="Opening Times: 8am - 5pm, Monday - Sunday"
              dir="left"
              stretch={true}
              flash={true}
            />
          </ColBlock>
        </Col>
        <Col md={12}>
          <Parallax url="https://res.cloudinary.com/dyexps6g2/image/upload/v1609770249/coffee_barista_sc7zjj.jpg"></Parallax>
        </Col>
        <Footer lg={12}>
          <div>- coffeeElite@gmail.com -</div>
          <img src={facebook} alt="facebook logo" />
          <div>@Harison Lacey</div>
          <ColBlock top="0" id="hr5">
            <MBlock
              type="hr"
              dir="right"
              stretch={true}
              flash={false}
              width="8px"
            />
          </ColBlock>
          <ColBlock top="260px" id="hr5">
            <MBlock
              type="hr"
              dir="left"
              stretch={true}
              flash={false}
              width="8px"
            />
          </ColBlock>
        </Footer>
        <Form />
      </Row>
    </LandingContainer>
  );
};

export default Landing;
