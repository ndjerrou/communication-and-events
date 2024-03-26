const User = ({ id, name, city, isMajor }) => {
  const handleClick = () => {
    alert('event click fired');
  };

  return (
    <div key={id}>
      <h4>
        {name} - {isMajor ? <span>Yes majeur</span> : <span>Oups, mineur</span>}{' '}
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
