import { HashLink } from "react-router-hash-link";  
import Header from "./Header";
import Footer from "./Footer";
import './styles/default.css';
import styles from "./styles/documentation.module.css";  

export default function Documentation(){
    return (
        <>
            <Header />
            <div>
                    <nav id="navbar" className={styles.navbar}>
                        <h3 style={{ fontSize: 25, backgroundColor: "rgb(132, 169, 187)", color: "rgb(195, 233, 251)" , padding: 5 }}>
                            Sweet Cat Cafe
                        </h3>
                        <HashLink className={`${styles.navLink} ${styles.hoover}`} to="#How_to_Make_the_Perfect_Latte_at_Home" smooth>
                            How to Make the Perfect Latte at Home
                        </HashLink>
                        <HashLink className={`${styles.navLink} ${styles.hoover}`} to="#Equipment_and_Ingredients" smooth>
                            Equipment and Ingredients
                        </HashLink>
                        <HashLink className={`${styles.navLink} ${styles.hoover}`} to="#Step-by-Step_Instructions" smooth>
                            Step-by-Step Instructions
                        </HashLink>
                        <HashLink className={`${styles.navLink} ${styles.hoover}`} to="#Variations" smooth>
                            Variations
                        </HashLink>
                        <HashLink className={`${styles.navLink} ${styles.hoover}`} to="#Best_Practices" smooth>
                            Best Practices
                        </HashLink>
                    </nav>
                </div>
            <main id="main-doc">
                <section className="main-section" id="How_to_Make_the_Perfect_Latte_at_Home">
                    <h2 className={`${styles.h2Doc} ${styles.borderBottom}`}>How to Make the Perfect Latte at Home</h2>
                    <p>
                        A guide to crafting a creamy, espresso-based latte, including tips for
                        texturing milk and creating simple latte art.
                    </p>
                    <p>
                        A Coffee Latte (commonly called a Caffè Latte) is an espresso-based
                        beverage made with steamed milk and a thin layer of milk foam. The name
                        originates from Italy, where latte means milk.
                    </p>
                    <p>
                        Lattes are known for their smooth, creamy texture and mild coffee flavor
                        compared to stronger espresso drinks.
                    </p>
                </section>
                <section className="main-section" id="Equipment_and_Ingredients">
                    <h2 className={`${styles.h2Doc} ${styles.borderBottom} ${styles.h2Left}`}>Equipment and Ingredients</h2>
                    <p>Here are the ingredients you will need to make a latte at home:</p>
                    <ul>
                        <li>Espresso</li>
                        <li>Steamed Milk</li>
                    <   li>Milk Foam</li>
                    </ul>
                    <p>Here is the equipment you will need to make a latte:</p>
                    <ul>
                        <li>Espresso machine</li>
                        <li>Coffee grinder (if needed)</li>
                        <li>Milk frother pitcher</li>
                        <li>Steam wand</li>
                        <li>Latte cup (8-12 oz)</li>
                    </ul>
                </section>
                <section className="main-section" id="Step-by-Step_Instructions">
                    <h2 className={`${styles.h2Doc} ${styles.borderBottom} ${styles.h2Left}`}>Step-by-Step Instructions</h2>
                    <p>Follow these steps to make your latte:</p>
                    <p>Step 1: Prepare Espresso</p>
                    <ol>
                        <li>Grind coffee beans to a fine consistency.</li>
                        <li>Tamp evenly.</li>
                        <li>Extract 1-2 shots.</li>
                    </ol>
                    <p>Step 2: Steam the Milk</p>
                    <ol>
                        <li>Pour cold milk into a frothing pitcher.</li>
                        <li>Submerge steam wand slightly below surface.</li>
                        <li>Steam until milk reaches 140-150°F (60-65°C).</li>
                        <li>Create microfoam (small bubble).</li>
                    </ol>
                    <p>Step 3: Combine</p>
                    <ol>
                        <li>Pour your steamed milk into your espresso.</li>
                        <li>Add a thin layer of foam on top.</li>
                        <li>Optional: Create latte art using your foam</li>
                    </ol>
                </section>
                <section className="main-section" id="Variations">
                    <h2 className={`${styles.h2Doc} ${styles.borderBottom} ${styles.h2Left}`}>Variations</h2>
                    <p>Types of Lattes:</p>
                    <ul>
                        <li>Vanilla Latte - Vanilla syrup added</li>
                        <li>Caramel Latte - Caramel syrup added</li>
                        <li>Mocha Latte - Chocolate syrup added</li>
                        <li>Iced Latte - Served over ice with cold milk</li>
                        <li>Oat Milk Latte - Replace regular milk with oat milk</li>
                    </ul>
                    <p />
                </section>
                <section className="main-section" id="Best_Practices">
                    <h2 className={`${styles.h2Doc} ${styles.borderBottom} ${styles.h2Left}`}>Best Practices</h2>
                    <p>Tips to make the best latte:</p>
                    <ul>
                        <li>Use freshly roasted coffee beans for stronger flavor.</li>
                        <li>Avoid overheating your milk to avoid burnt taste.</li>
                        <li>Use whole milk for best microfoam texture.</li>
                        <li>Clean steam wand immediately after use.</li>
                    </ul>
                </section>
                </main>
            <Footer />
        </>
    );
}