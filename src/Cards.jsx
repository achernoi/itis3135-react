import Header from "./Header";
import Footer from "./Footer";
import './styles/default.css';
import styles from "./styles/cards.module.css";

export default function Cards(){
    return (
        <>
            <Header />
            <main id="playing-cards" className={styles.playingCards}>
                <h2 style={{textAlign: "center", width: "100%"}}>Sweet Cat Cafe Cards</h2>
                <div className={styles.card + " " + styles.red}>
                    <div className={styles.left}>
                    <img src="/src/assets/coffee-cat.png" alt="cat logo" width={50} height={50} />
                    </div>
                    <div className={styles.middle}>
                    <img
                        src="/src/assets/coffee-cup-copy.png"
                        alt="coffee cup"
                        width={100}
                        height={100}
                    />
                    </div>
                    <div className={styles.right}>
                    <img
                        src="/src/assets/coffee-cat.png"
                        alt="cat logo"
                        width={50}
                        height={50}
                        className={styles.flipped}
                    />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.left}>
                    <img src="/src/assets/coffee-cat.png" alt="cat logo" width={50} height={50} />
                    </div>
                    <div className={styles.middle}>
                    <img
                        src="/src/assets/cup-cake-copy.png"
                        alt="cupcake"
                        width={100}
                        height={100}
                    />
                    </div>
                    <div className={styles.right}>
                    <img
                        src="/src/assets/coffee-cat.png"
                        alt="cat logo"
                        width={50}
                        height={50}
                        className={styles.flipped}
                    />
                    </div>
                </div>
                <div className={styles.card + " " + styles.red}>
                    <div className={styles.left}>
                    <img src="/src/assets/coffee-cat.png" alt="cat logo" width={50} height={50} />
                    </div>
                    <div className={styles.middle}>
                    <img
                        src="/src/assets/coffee-mug.png"
                        alt="coffee cup"
                        width={90}
                        height={120}
                    />
                    </div>
                    <div className={styles.right}>
                    <img
                        src="/src/assets/coffee-cat.png"
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