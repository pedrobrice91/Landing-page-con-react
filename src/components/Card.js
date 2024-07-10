const card = () => {
  const widthstyle = { width: "18rem" };
  return (
    <>
      <div className="card" style={widthstyle}>
        <img src="https://marketing4ecommerce.net/wp-content/uploads/2024/02/ias-generadoras-de-imagenes.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://getbootstrap.com/docs/5.3/components/card/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default card;
