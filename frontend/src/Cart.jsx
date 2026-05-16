export default function Cart({ cart, totalPrice }) {

  return (

    <div className="cart-section" id="cart">

      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (

        <p>Your cart is empty</p>

      ) : (

        cart.map(item => (

          <div className="cart-item" key={item._id}>

            <img src={item.image} alt={item.name} />

            <div>

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <p>
                Quantity: {item.quantity}
              </p>

            </div>

          </div>

        ))

      )}

      <h2 className="total">
        Total: ₹{totalPrice}
      </h2>

    </div>

  )
}