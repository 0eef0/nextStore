import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout';
import React, {useState, useEffect} from 'react';

export default function Home() {
  const [bannerTop, setBannerTop] = useState(0);
  const [imgHeight, setImgHeight] = useState(false);
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', () => {
        setBannerTop(window.scrollY);
        if(window.scrollY > document.getElementById('storeBtn').scrollHeight + window.innerHeight * 0.4) setImgHeight(true);
    });
    populateText('Welcome to Isezaki Ijincho Market!');
  }, []);

  const populateText = (str) => {
    let temp = '';
    for(let i = 0; i < str.length; i++) {
      setTimeout(() => {
        temp += str[i];
        setPageTitle(temp);
      }, i * 100);
    }
  }

  return (
    <Layout>
      <div id={styles.banner} style={{top: bannerTop * -0.2}}>
        <img src="https://www.gematsu.com/wp-content/uploads/2019/12/zp-262352_Yakuza-Like-a-Dragon_2019_12-13-19_001.jpg" className={styles.bannerImg} />
        <h1 id="pageTitle" onLoad={() => {}}>{ pageTitle }</h1>
      </div>
      <div id={styles.homeContent}>
        <div className={styles.summary}>
          <h1>What is Isezaki Ijincho?</h1>
          <p>Isezaki Ijincho (伊勢佐木異人町, Isezaki ijinchō) is a district in Yokohama. It is modelled after the real-life Yokohama district of Isezakichō. It is the primary explorable city in Yakuza: Like a Dragon (though Kamurocho and Sotenbori are both explorable as well), and one of the two explorable cities in Lost Judgment alongside Kamurocho.</p>
          <p>In both games, organized crime in the city is largely dominated by the Ijin Three organizations (though that term is not used in Lost Judgment): the Chinese Yokohama Liumang, the Japanese Seiryu Clan, and the Korean Geomijul.</p>
        </div>
        <div className={styles.storeBtn} id='storeBtn'>
          <img src="https://res.cloudinary.com/ddmjp5x8t/image/upload/v1653115726/Next%20Store%20Project/Website%20Assets/tumblr_pc3n9rZVrY1twq4xao1_400_meyf3q.png" className={(!imgHeight) ? `${styles.leftImage}` : `${styles.active} ${styles.leftImage}`} alt="hi" />
          <div className={styles.storeBtnDiv}>
            <h1>See Our Store!</h1>
            <br />
            <a href='/store/search'>Click Here</a>
          </div>
          <img src="https://res.cloudinary.com/ddmjp5x8t/image/upload/v1653114510/Next%20Store%20Project/Website%20Assets/ichiban_ibdfuc.png" className={(!imgHeight) ? `${styles.rightImage}` : `${styles.active} ${styles.rightImage}` } alt="" />
        </div>

        <h1 id={styles.popularTitle}>Popular Products</h1>
        <div className={styles.popularProduct}>{/* https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg */}
          <div className={styles.product}>
            <img src="https://res.cloudinary.com/ddmjp5x8t/image/upload/v1653115268/Next%20Store%20Project/Website%20Assets/staminan_dyviwr.png" alt="" />
            <div>
              <h2>Staminan</h2>
              <a href="/store/staminan">See in Store</a>
              <p>Staminan drinks are recovery items that restore both Health and Heat. They are commonly found in convenience stores, drug stores, pawn shops, obtained from enemies as rewards, and rewarded through missions and substories.</p>
            </div>
          </div>

          <div className={styles.product}>
            <div>
              <h2>Tauriner</h2>
              <a href="/store/tauriner">See in Store</a>
              <p>Tauriner is a series of medical recovery items that recover heat. Like the related Toughness and Staminan recovery items, they can be obtained by purchasing them at stores, finding them on the ground, defeating certain enemies and by completing certain substories.</p>
            </div>
            <img src="https://res.cloudinary.com/ddmjp5x8t/image/upload/v1653115471/Next%20Store%20Project/Website%20Assets/tauriner_tlnxvq.png" alt="" />
          </div>

          <div className={styles.product}>
            <img src="https://res.cloudinary.com/ddmjp5x8t/image/upload/v1653116444/Next%20Store%20Project/Website%20Assets/onigiri_zpdnmy.png" alt="" />
            <div>
              <h2>Onigiri</h2>
              <a href="/store/onigiri">See in Store</a>
              <p>Onigiri, also known as omusubi, nigirimeshi, or rice ball, is a Japanese food made from white rice formed into triangular or cylindrical shapes and often wrapped in nori.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
