import React from 'react';
import { useGlobalContext } from '../context';

const Menu = ({ items }) => {
    const { addBookToCart } = useGlobalContext();
    const handleAdd = (event, id) => {
        event.preventDefault();
        addBookToCart(id);
    }
    return (
        <div className='section-center'>
        {items.map((menuItem) => {
            const { id, name, image, desc, price } = menuItem;
            return (
            <article key={id} className='menu-item'>
                <img src={image} alt={name} className='photo' />
                <div className='item-info'>
                <header>
                    <h4>{name}</h4>
                    <h4 className='price'>{price}VND</h4>
                </header>
                <p className='item-text'>{desc}</p>
                <button type="button" className="btn btn-primary btn-add"
                        onClick={(e) => handleAdd(e, id)}>Thêm vào giỏ hàng </button>
                </div>
            </article>
            );
        })}
        </div>
    );
};

export default Menu;