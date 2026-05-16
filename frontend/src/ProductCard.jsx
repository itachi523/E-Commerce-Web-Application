export default function ProductCard({ item, addToCart }) {

  return (

    <div className="card">

      <img src={item.image} alt={item.name} />

      <h2>{item.name}</h2>

      <p className="price">
        ₹{item.price}
      </p>

      <button onClick={() => addToCart(item)}>
        Add to Cart
      </button>

    </div>

  )
}