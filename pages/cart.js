import styles from '../styles/Cart.module.css'
import Layout from '../components/Layout/Layout';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const cart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

    useEffect(() => {
      setCart(localStorage.yakuzaCart.split(','));
      const getProducts = async () => {
          const { data: { products }} = await axios.get('/api/products');
          setProducts(products);
      }
      getProducts();
    }, []);

  return (
    <Layout>
      <div className={styles.fullCart}>
      <div>
          {
            cart.map((item) => {
              const currItem = products.filter((product) => product.id == Number(item))[0];
              if(currItem) {
                const {id, name, price, desc, image} = currItem;
                return <div key={id} className={styles.cartItem}>
                    <img src={image} alt="" />
                    <div className={styles.itemInfo}>
                        <h2>{ name }</h2>
                        <h2>¥{ price }</h2>
                        <p>{ desc }</p>
                        <div>
                          <label htmlFor="qty">Quantity: </label>
                          <input id='qty' type="number" defaultValue='1' step="1" min="0"/>
                        </div>
                    </div>
                </div>;
              }
            })
          }
        </div>
        <div>
          <input type="email" />
          <label for="ccn">Credit Card Number:</label>
<input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" />
<select name='expireMM' id='expireMM'>
    <option value=''>Month</option>
    <option value='01'>January</option>
    <option value='02'>February</option>
    <option value='03'>March</option>
    <option value='04'>April</option>
    <option value='05'>May</option>
    <option value='06'>June</option>
    <option value='07'>July</option>
    <option value='08'>August</option>
    <option value='09'>September</option>
    <option value='10'>October</option>
    <option value='11'>November</option>
    <option value='12'>December</option>
</select> 
<select name='expireYY' id='expireYY'>
    <option value=''>Year</option>
{/*     {
      let temp = new Date();
      for (let i = temp.getFullYear(); i < temp.getFullYear() + 10; i++) {
        return
      }
    } */}
</select> 
        </div>
      </div>
        <button type='submit' className={styles.submitForm}>Submit</button>
    </Layout>
  )
}

export default cart