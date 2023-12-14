export default function Button() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    console.log(e);

  return <button onDoubleClick={(e) => handleClick(e)}>Click Me 😋</button>;
}
