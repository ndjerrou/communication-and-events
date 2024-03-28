import ListGroup from './components/ListGroup';
import UserList from './components/UserList';

export default function App() {
  const users = [];

  const available = true;

  const fruits = ['Banane', 'Orange', 'Pamplemousse', 'Kiwi', 'Pomme'];
  const heading = 'De très bons fruits';

  // return <UserList length={4} users={users} isAvailable />;

  const handleSelectItem = item => {
    console.log(item);
  };

  return (
    <ListGroup
      heading={heading}
      list={fruits}
      onSelectItem={handleSelectItem}
    />
  );
}
