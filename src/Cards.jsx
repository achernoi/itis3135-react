import Header from "./Header";
import Footer from "./Footer";
import './styles/default.css';
import styles from "./styles/cards.module.css";
import CoffeeCat from "./assets/coffee-cat.png";
import CoffeeCup from "./assets/coffee-cup-copy.png";
import Cupcake from "./assets/cup-cake-copy.png";



export default function Cards(){
    return (
        <>
            <Header />
            <main id="playing-cards" className={styles.playingCards}>
                <h2 style={{textAlign: "center", width: "100%"}}>Sweet Cat Cafe Cards</h2>
                <div className={styles.card + " " + styles.red}>
                    <div className={styles.left}>
                    <img src={CoffeeCat} alt="cat logo" width={50} height={50} />
                    </div>
                    <div className={styles.middle}>
                    <img
                        src={CoffeeCup}
                        alt="coffee cup"
                        width={100}
                        height={100}
                    />
                    </div>
                    <div className={styles.right}>
                    <img
                        src={CoffeeCat}
                        alt="cat logo"
                        width={50}
                        height={50}
                        className={styles.flipped}
                    />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.left}>
                    <img src={CoffeeCat} alt="cat logo" width={50} height={50} />
                    </div>
                    <div className={styles.middle}>
                    <img
                        src={Cupcake}
                        alt="cupcake"
                        width={100}
                        height={100}
                    />
                    </div>
                    <div className={styles.right}>
                    <img
                        src={CoffeeCat}
                        alt="cat logo"
                        width={50}
                        height={50}
                        className={styles.flipped}
                    />
                    </div>
                </div>
                <div className={styles.card + " " + styles.red}>
                    <div className={styles.left}>
                    <img src={CoffeeCat} alt="cat logo" width={50} height={50} />
                    </div>
                    <div className={styles.middle}>
                    <img
                        src={CoffeeCat}
                        alt="coffee cat"
                        width={90}
                        height={120}
                    />
                    </div>
                    <div className={styles.right}>
                    <img
                        src={CoffeeCat}
                        alt="cat logo"
                        width={50}
                        height={50}
                        className={styles.flipped}
                    />
                    </div>
                </div>
            </main>
            <br />
            <Footer />
        </>
    );
}    