import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';

export default function RegisterScreen({ location, history }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const userRegister = useSelector(state => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const submitHandler = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else {
      dispatch(register(username, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Register</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Enter Username'
            value={username}
            onChange={event => setUsername(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type='password'
            placeholder='Enter Password'
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an Account?
          <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>
            Sign In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}
