import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

export default function ProductScreen(props) {
  const { image, name, rating, numReviews, price, description, countInStock } =
    products.find(product => product._id === props.match.params.id);
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={image} alt={name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={rating} numReviews={numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${price}</ListGroup.Item>
            <ListGroup.Item>Description: {description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='w-100'
                  disabled={countInStock === 0}
                  type='button'
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
