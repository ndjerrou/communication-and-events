import UserList from './components/UserList';

export default function App() {
  const users = [
    { id: 1, name: 'Patrick', city: 'Paris', isMajor: true },
    { id: 2, name: 'Jean', city: 'Marseille', isMajor: true },
    { id: 3, name: 'Noé', city: 'Puteaux', isMajor: false },
    { id: 4, name: 'Rachid', city: 'Cergy', isMajor: false },
  ];

  const available = true;

  return <UserList length={4} users={users} isAvailable />;
}
