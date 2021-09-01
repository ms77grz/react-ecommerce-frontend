export default function Rating({ rating, numReviews }) {
  return (
    <div className='rating'>
      {Array.from(Array(5)).map((star, index) => (
        <span key={index}>
          <i
            className={
              rating >= 1 + index
                ? 'fas fa-star'
                : rating >= 0.5 + index
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
      ))}
      <span>{numReviews && `${numReviews} reviews`}</span>
    </div>
  );
}
