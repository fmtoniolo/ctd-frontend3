import Card from "./components/Card";

const titulos = [
  "Card 1", "Card 2", "Card 3", "Card 4"
];

function App() {
  return (
    <div>
      <h1>Hello App</h1>

      {
        titulos.map((titulo, id) => <Card key={id} title={titulo} />)
      }

      {/* <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" /> */}
    </div>
  );
}

export default App;
