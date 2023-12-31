import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">Ngoding.</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              similique voluptates cumque dolorem nesciunt ab voluptate rerum
              enim dolores quae. Accusamus, voluptatem? Aut esse illo officia
              molestias assumenda at rem.
            </p>
            <div className="no"></div>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
