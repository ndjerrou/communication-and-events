import UserList from './components/UserList';

export default function App() {
  const users = [
    { id: 1, name: 'Patrick', city: 'Paris' },
    { id: 2, name: 'Jean', city: 'Marseille' },
    { id: 3, name: 'Noé', city: 'Puteaux' },
    { id: 4, name: 'Rachid', city: 'Cergy' },
  ];

  return <UserList length={4} users={users} />;
}
