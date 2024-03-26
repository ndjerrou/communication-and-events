import User from './User';

const UserList = ({ users, length, isAvailable, isMajor }) => (
  <>
    <h1>UserList</h1>
    <p>
      {length} Users - {isAvailable ? 'All available' : 'Not available'}
    </p>
    {users.length > 0 &&
      users.map(({ id, name, city }) => (
        // reference here the User component to display individually each user
        <User id={id} name={name} city={city} isMajor={isMajor} />
      ))}
  </>
);

export default UserList;
