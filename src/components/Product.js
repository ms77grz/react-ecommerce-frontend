import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

export default function Product({
  id,
  image,
  name,
  rating,
  numReviews,
  price,
}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${id}`}>
        <Card.Img src={image.url} alt={name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${id}`}>
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
