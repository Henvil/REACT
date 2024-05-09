import React from 'react';

function MyListItem({ item }) {
  return (
    <li key={item.id}>
      <p>La key è: {item.id}</p>
      <h4>{item.name}</h4>
      <p>{item.age}</p>
    </li>
  );
}
export default function MyList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <MyListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
