import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

export default function Product({
  _id,
  image,
  name,
  rating,
  numReviews,
  price,
}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} alt={name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating rating={rating} numReviews={numReviews} />
          </div>
        </Card.Text>
        <Card.Text as='h3'>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
