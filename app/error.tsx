'use client';

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div className="error">
      <h2>Something went wrong!</h2>
      <p className="error-message">{error.message}</p>
      <button className="button" onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default Error;
