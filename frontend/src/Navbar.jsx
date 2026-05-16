export default function Navbar({ totalItems }) {

  return (

    <nav className="navbar">

      <div className="logo">
        ⚡ BSKTechStore
      </div>

      <ul className="nav-links">

        <li><a href="#home">Home</a></li>

        <li><a href="#phones">Phones</a></li>

        <li><a href="#laptops">Laptops</a></li>

        <li><a href="#headphones">Headphones</a></li>

        <li><a href="#cart">Cart 🛒</a></li>

        <li><a href="#checkout">Checkout 💳</a></li>

      </ul>

      <div className="cart-icon">
        🛒 {totalItems}
      </div>

    </nav>

  )
}