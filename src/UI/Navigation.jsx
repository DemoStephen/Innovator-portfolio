import List from "../Components/List";

export default function Navigation() {
  return (
    <nav>
      <p>logo</p>
      <ul>
        <List content="Design" />
        <List content="Photo" />
        <List content="Art" />
        <List content="Music" />
        <List content="About" />
        <List content="Contact" />
      </ul>
    </nav>
  );
}
