import React from "react";
import { useGlobalContext } from "../context";

function CartItem({id, image, name, price, amount}) {
    const {  increaseAmount, decreaseAmount, removeItem } = useGlobalContext();
    return (
        <article className='cart-item'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <h4 className='item-price'>{price} VND</h4>
            {/* remove button */}
            <button className='remove-btn' onClick={() => removeItem(id)}>
              Xóa
            </button>
          </div>
          <div>
            {/* increase amount */}
            <button className='amount-btn-in' onClick={() => increaseAmount(id)}>
              <div className="in-crease-icon ti-plus">

              </div>
            </button>
            {/* amount */}
            <p className='amount'>{amount}</p>
            {/* decrease amount */}
            <button className='amount-btn-down' onClick={() => decreaseAmount(id)}>
              <div className="dow-crease-icon ti-minus">
                  
              </div>
            </button>
          </div>
        </article>
      )
}

export default CartItem;