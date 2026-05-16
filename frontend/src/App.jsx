import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Checkout from './Checkout'

export default function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {

    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))

  }, [])

  const addToCart = (product) => {

    const existing = cart.find(
      item => item._id === product._id
    )

    if(existing){

      const updatedCart = cart.map(item =>

        item._id === product._id

        ? { ...item, quantity: item.quantity + 1 }

        : item
      )

      setCart(updatedCart)

    }

    else{

      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ])

    }

  }

  const removeFromCart = (id) => {

    const updatedCart = cart.filter(
      item => item._id !== id
    )

    setCart(updatedCart)

  }

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  const phones = products.filter(
    item => item.category === 'phone'
  )

  const laptops = products.filter(
    item => item.category === 'laptop'
  )

  const headphones = products.filter(
    item => item.category === 'headphones'
  )

  const renderProducts = (items) => (

    <div className="grid">

      {items.map((item) => (

        <div className="card" key={item._id}>

          <img
            src={item.image}
            alt={item.name}
          />

          <h2>{item.name}</h2>

          <p className="price">
            ₹{item.price}
          </p>

          <button
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>

        </div>

      ))}

    </div>

  )

  return (

    <div className="container">

      <nav className="navbar">

        <div className="logo">
          ⚡ BSKTechStore
        </div>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#phones">Phones</a>
          </li>

          <li>
            <a href="#laptops">Laptops</a>
          </li>

          <li>
            <a href="#headphones">
              Headphones
            </a>
          </li>

          <li>
            <a href="#cart">
              Cart 🛒
            </a>
          </li>

          <li>
            <a href="#checkout">
              Payments 💳
            </a>
          </li>

        </ul>

        <div className="cart-icon">
          🛒 {totalItems}
        </div>

      </nav>

      <div className="hero" id="home">

        <div className="hero-content">

          <h1>
            Upgrade Your Tech Lifestyle
          </h1>

          <p>
            Buy premium gadgets with amazing offers
          </p>

          <button
  className="hero-btn"
  onClick={() => {
    document
      .getElementById('phones')
      .scrollIntoView({
        behavior:'smooth'
      })
  }}
>
  Shop Now
</button>

        </div>

      </div>

      <section id="phones">

        <h2 className="category-title">
          📱 Phones
        </h2>

        {renderProducts(phones)}

      </section>

      <section id="laptops">

        <h2 className="category-title">
          💻 Laptops
        </h2>

        {renderProducts(laptops)}

      </section>

      <section id="headphones">

        <h2 className="category-title">
          🎧 Headphones
        </h2>

        {renderProducts(headphones)}

      </section>

      <div
        className="cart-section"
        id="cart"
      >

        <h2>
          🛒 Shopping Cart
        </h2>

        {cart.length === 0 ? (

          <p>
            Your cart is empty
          </p>

        ) : (

          cart.map(item => (

            <div
              className="cart-item"
              key={item._id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div>

                <h3>{item.name}</h3>

                <p>
                  ₹{item.price}
                </p>

                <p>
                  Quantity: {item.quantity}
                </p>

              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(item._id)
                }
              >
                Remove
              </button>

            </div>

          ))

        )}

        <h2 className="total">

          Total: ₹{totalPrice}

        </h2>

      </div>

      <Checkout
        cart={cart}
        setCart={setCart}
        totalPrice={totalPrice}
        orders={orders}
        setOrders={setOrders}
      />

      <div className="orders-section">

        <h2>📦 Orders</h2>

        {orders.length === 0 ? (

          <p>No orders placed yet.</p>

        ) : (

          orders.map((order, index) => (

            <div
              className="order-card"
              key={index}
            >

              <h3>
                Order #{index + 1}
              </h3>

              <p>
                Payment:
                {order.payment.toUpperCase()}
              </p>

              <p>
                Total:
                ₹{order.total}
              </p>

              <p>
                Date:
                {order.date}
              </p>

            </div>

          ))

        )}

      </div>

    </div>

  )
}