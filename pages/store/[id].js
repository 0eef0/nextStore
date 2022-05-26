import styles from './Store.module.css'
import Layout from '../../components/Layout/Layout';
import React, {useReducer, useState, useEffect, useContext} from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import axios from 'axios';

import { cartContext } from '../CartContext';

const store = () => {
    const [cart, setCart] = useContext(cartContext);
    console.log(cart);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data: { products }} = await axios.get('/api/products');
            setProducts(products);
        }
        getProducts();
    }, [])

  return (
    <Layout>
        <a href="/cart" className={styles.cartBtn}>
            <AiOutlineShoppingCart size={50} />
            <p>{ cart.cart.length }</p>
        </a>
        <div className={styles.storeItems}>
            {
                products.map((product) => {
                    return <div key={product.id} className={styles.item}>
                        <img src={product.image} alt="" />
                        <div>
                            <h2>{ product.name }</h2>
                            <h2>¥{ product.price }</h2>
                            <p>{ product.desc }</p>
                        </div>
                        <button onClick={() => {setCart({ id: product.id })}}>{ (cart.cart.indexOf(product.id) == -1) ? 'Add to Cart' : 'Remove from Cart' }</button>
                    </div>;
                })
            }
        </div>
    </Layout>
  )
}

export default store