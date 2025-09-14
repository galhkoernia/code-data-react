import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daftar Harga Mainan</h1>

        {/* Data Product */}
        <Product name="Mainan Toy Story" price="200000" discount="20" />
        <Product name="Mainan Lego" price="300000" discount="25" />
        <Product name="Mainan Action Figure" price="100000" discount="10" />
      </header>
    </div>
  );
}

export default App;
