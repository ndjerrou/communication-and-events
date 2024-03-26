const UserList = ({ users, length }) => {
  return (
    <>
      <h1>UserList</h1>
      <p>{length} Users : </p>
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
