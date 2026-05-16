import { useState } from 'react'

export default function Checkout({

  cart,
  setCart,
  totalPrice,
  orders,
  setOrders

}) {

  const [paymentMethod, setPaymentMethod]
  = useState('cod')

  const handlePayment = () => {

    if(cart.length === 0){

      alert('Cart is empty')
      return

    }

    const newOrder = {

      items: cart,
      total: totalPrice,
      payment: paymentMethod,
      date: new Date().toLocaleString()

    }

    setOrders([...orders, newOrder])

    setCart([])

    alert('Payment Successful! Order placed.')

  }

  return (

    <div
      className="payment-section"
      id="checkout"
    >

      <h2>
        💳 Payment Information
      </h2>

      <div className="payment-options">

        <label>

          <input
            type="radio"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />

          Cash on Delivery

        </label>

        <label>

          <input
            type="radio"
            value="upi"
            checked={paymentMethod === 'upi'}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />

          UPI

        </label>

        <label>

          <input
            type="radio"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />

          Credit / Debit Card

        </label>

      </div>

      {paymentMethod === 'upi' && (

        <div className="payment-box">

          <input
            type="text"
            placeholder="Enter UPI ID"
          />

        </div>

      )}

      {paymentMethod === 'card' && (

        <div className="payment-box">

          <input
            type="text"
            placeholder="Card Number"
          />

          <input
            type="text"
            placeholder="Card Holder Name"
          />

          <input
            type="text"
            placeholder="Expiry Date"
          />

          <input
            type="password"
            placeholder="CVV"
          />

        </div>

      )}

      {paymentMethod === 'cod' && (

        <p className="cod-text">

          Payment will be collected
          upon delivery.

        </p>

      )}

      <button
        className="pay-btn"
        onClick={handlePayment}
      >

        Pay Now

      </button>

    </div>

  )
}