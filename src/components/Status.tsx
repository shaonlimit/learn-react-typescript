type statusProps = {
  status: 'success' | 'error' | 'loading';
};

const Status = (props: statusProps) => {
  let messagge;
  if (props.status === 'success') {
    messagge = 'The data is loaded successfully';
  }
  if (props.status === 'loading') {
    messagge = 'Loading......';
  }
  if (props.status === 'error') {
    messagge = 'An error has occurred';
  }
  return (
    <div>
      <h1>{messagge}</h1>
    </div>
  );
};

export default Status;
