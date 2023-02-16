//Object Props
type personProps = {
  personName: {
    firstName: string;
    lastName: string;
  };
};

const Person = (props: personProps) => {
  return (
    <>
      <h1>
        Your name is: {props.personName.firstName} {props.personName.lastName}
      </h1>
    </>
  );
};

export default Person;
