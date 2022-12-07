import "./App.css";

function App() {
  return (
    <div className="Container">
      <Imageproduct />
      <Descriptionproduct
        category="SNEAKERS"
        title="White and blue nike air force 1 high"
      />
    </div>
  );
}

function Imageproduct() {
  return (
    <div className="Img-shoe">
      <img
        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="image"
        border="0"
      />
    </div>
  );
}

function Descriptionproduct(props) {
  const { category, title } = props;

  return (
    <div className="Description">
      <h5>{category}</h5>
      <h1>{title}</h1>
      <h3>IDR 3.000.000</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Sed euismod, nunc ut aliquam tincidunt, nisl nunc aliquam libero, eget
        aliquam nunc nisl sit amet nunc. Nulla facilisi. Sed euismod, nunc ut
        aliquam tincidunt, nisl nunc aliquam libero, eget
      </p>
      {/* passing argument in function inline event listener*/}
      {/* <a
        href="#"
        className="Btn-checkout"
        onClick={() => console.log(`beli  ${title}`)}
      >
        Checkout
      </a> */}

      {/* passing argument event listener */}
      <a
        href="#"
        className="Btn-checkout"
        onClick={(e) => Checkoutproduct(title, e)}
      >
        Checkout
      </a>
    </div>
  );
}

function Checkoutproduct(e) {
  return console.log(`Beli ${e}`);
}

export default App;
