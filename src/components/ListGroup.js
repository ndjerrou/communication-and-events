import { useState } from 'react';

const ListGroup = ({ list, heading, onSelectItem }) => {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const handleSelectItem = (idx, listItem) => {
    setSelectedIdx(idx);

    onSelectItem(listItem);
  };

  return (
    <>
      <h1>{heading}</h1>
      <ul>
        {list.map((el, idx) => (
          <li
            style={{ color: idx === selectedIdx ? 'red' : 'black' }}
            onClick={() => handleSelectItem(idx, el)}
            key={el}
          >
            {el}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
