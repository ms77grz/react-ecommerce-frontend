import { Spinner } from 'react-bootstrap';

export default function Loader() {
  return (
    <Spinner className='loader' animation='border' role='status'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
}
