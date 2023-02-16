// Basic Props Handling in TypeScript

type GreetProps = {
  name: string;
  messaggeCount?: number;
  isLoggedIn: boolean;
};

export const GreetUser = (props: GreetProps) => {
  const { messaggeCount = 0 } = props;
  return (
    <>
      {props.isLoggedIn ? (
        <div>
          <h1>Hello {props.name}, Welcome to TypeScript!</h1>
          <h2>You have {messaggeCount} unread message.</h2>
        </div>
      ) : (
        <h1>Welcome, Guest! Please logged in.....</h1>
      )}
    </>
  );
};
