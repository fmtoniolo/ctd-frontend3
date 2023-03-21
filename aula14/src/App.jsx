import {useEffect, useState} from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    setLoading(true);
    const url = "https://dummyjson.com/products";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      {loading === true ? "Carregando..." : null}
      {loading === false && products.length < 1
        ? "Nenhum produto encontrado"
        : null}
      <ul>
        {products.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>US$ {item.price}</p>
            <img src={item.thumbnail} />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
