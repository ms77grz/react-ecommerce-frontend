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
import { addToCart } from '../actions/cartActions';

export default function CartScreen({ match, location, history }) {
  const id = match.params.id;
  const qty = location.search ? +location.search.split('=')[1] : 1;

  const dispatch = useDispatch();

  const { cartItems } = useSelector(state => state.cart);
  console.log(cartItems);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return <div>Cart</div>;
}
