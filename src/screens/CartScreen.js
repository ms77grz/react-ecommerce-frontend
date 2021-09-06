import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

export default function CartScreen({ match, location, history }) {
  const id = match.params.id;
  const qty = location.search ? +location.search.split('=')[1] : 1;

  const dispatch = useDispatch();

  const { cartItems } = useSelector(state => state.cart);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {!cartItems.length ? (
          <Message variant='info'>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image.url} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={3}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={event =>
                        dispatch(addToCart(item.id, +event.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map(value => (
                        <option key={value + 1} value={value + 1}>
                          {value + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.id)}
                    >
                      <i className='fas fa-trash' />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cartItems.reduce(
                  (total, currentItem) => total + currentItem.qty,
                  0
                )}
                ) items
              </h2>
              $
              {cartItems
                .reduce(
                  (total, currentItem) =>
                    total + currentItem.qty * currentItem.price,
                  0
                )
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='w-100'
                disabled={!cartItems.length}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}
