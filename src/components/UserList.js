import User from './User';

const UserList = ({ users, length, isAvailable }) => (
  <>
    <h1>UserList</h1>
    <p>
      {length} Users - {isAvailable ? 'All available' : 'Not available'}
    </p>
    {users.map(({ id, name, city }) => (
      // reference here the User component to display individually each user
      <User id={id} name={name} city={city} />
    ))}
  </>
);

export default UserList;
