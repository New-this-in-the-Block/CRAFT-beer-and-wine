import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = product => {
  return (
    <li className="productCard">
      <Link to={`/products/${product.id}`}>
        <div className="prodImgBox">
          <img className="productImg" src={product.imageURL} />
        </div>
        <h4 className="prodName">{product.name}</h4>
        <div className="priceCart">
          <h5 className="prodPrice">${product.price}</h5>
          <img className="cartWhiteCard" src="/img/cart_white.jpg" />
        </div>
      </Link>
    </li>
  )
}

export default ProductCard
