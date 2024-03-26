const User = ({ id, name, city }) => {
  const handleClick = () => {
    alert('event click fired');
  };

  return (
    <div key={id}>
      <h4>
        {name}{' '}
        <button
          onMouseOver={() => alert('survol du bouton')}
          onClick={handleClick}
        >
          Click me
        </button>
      </h4>
      <p>{city}</p>
    </div>
  );
};

export default User;
