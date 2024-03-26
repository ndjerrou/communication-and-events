import UserList from './components/UserList';

export default function App() {
  const users = [];

  const available = true;

  return <UserList length={4} users={users} isAvailable />;
}
