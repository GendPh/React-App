interface ListProps {
  list?: { id: number; name: string; calories: number }[];
  category?: string;
}

export default function List({ list = [], category = "Category" }: ListProps) {
  if (list.length == 0) {
    return <p>No items</p>;
  }

  const listItems = list.map((fruits) => (
    <li key={fruits.id}>
      {fruits.name}: <b>{fruits.calories}</b>
    </li>
  ));

  return (
    <>
      <h1>{category}</h1>
      <ol>{listItems}</ol>
    </>
  );
}
