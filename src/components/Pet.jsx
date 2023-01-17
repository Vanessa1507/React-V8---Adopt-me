const Pet = (props) => {
  const { name, animal, breed } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{breed}</h3>
    </div>
  );
};

export default Pet;
