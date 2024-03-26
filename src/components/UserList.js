const UserList = ({ users, length, isAvailable }) => {
  console.log(isAvailable);
  return (
    <>
      <h1>UserList</h1>
      <p>
        {length} Users - {isAvailable ? 'All available' : 'Not available'}
      </p>
      {users.map(({ id, name, city }) => (
        <div key={id}>
          <h4>{name}</h4>
          <p>{city}</p>
        </div>
      ))}
    </>
  );
};

export default UserList;
