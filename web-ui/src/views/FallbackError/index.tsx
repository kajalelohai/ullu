import { useRouteError } from 'react-router-dom';

interface Error {
  status: number;
  statusText?: string;
  error?: { message: string };
}

function ErrorFound() {
  const error = useRouteError() as Error;
  console.error(Error, error);

  return (
    <div style={{ textAlign: 'center', padding: '18em' }}>
      <h1>
        Oops! An error has occured.
      </h1>
      <i style={{fontSize: '1.5rem'}}>{error?.statusText || error?.error?.message}</i>
    </div>
  );
}

export default ErrorFound;
