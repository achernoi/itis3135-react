import { HashLink } from "react-router-hash-link";
import Header from "./Header";
import Footer from "./Footer";

export default function Product() {    
    return (
        <>
            <Header />
            <main>
                <div className="logo">
                    <img
                    id="header-img"
                    alt="logo"
                    src="/src/assets/sweetcat-logo.png" width="200" height="200"/>
                </div>
                <div>
                    <nav id="nav-bar">
                        <ul>
                            <li><HashLink className="nav-link" to="#Features" smooth>Features</HashLink></li>
                            <li><HashLink className="nav-link" to="#How_It_Works" smooth>How It Works</HashLink></li>
                            <li><HashLink className="nav-link" to="#Pricing" smooth>Pricing</HashLink></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <form id="form" action="https://www.freecodecamp.org/email-submit">
                    <p>Type in your email address to recieve weekly news about Sweet Cat Cafe.</p>
                    <label htmlFor="email">Email Address:</label>
                            <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            required
                            />
                            <input id="submit" type="submit" value="Get Started" className="btn" />
                    </form>
                </div>
                <section id="Features">
                    <h2 style={{textAlign: "center"}}>Why you should choose Sweet Cat Cafe?</h2>
                    <p><strong>Premium Ingredients: </strong>We source ethically grown, specialty-grade beans and we roast them daily to ensure everything is fresh 
                        and flavorfull.</p>
                    <p><strong>Crafted by Baristas: </strong>Every drink is hand crafted by trained baristas who understand texture, balance, and flavor.</p>
                    <p><strong>Community Atmosphere: </strong>We present you with a warm, welcoming space designed for connection, productivity, and comfort.</p>
                </section>
                <section id="How_It_Works">
                    <h2 className="hidden" style={{textAlign: "center"}}>How It Works</h2>
                    <div>
                        <iframe
                            id="video"
                            src="https://www.youtube.com/embed/UxwscVIZ8Qg?si=157VNu3VeW5g3-uY"
                            width="560" 
                            height="315"
                            style={{display: "flex", justifyContent: "center"}}>
                        </iframe>
                    </div>
                </section>
                <section id="Pricing">
                    <h2 style={{textAlign: "center"}}>Pricing</h2>
                    <h3>Espresso Drinks</h3>
                    <ul>
                        <li>Espresso - $3</li>
                        <li>Cappuccino - $4.50</li>
                        <li>Latte - $5 (Extra for added flavor)</li>
                    </ul>
                    <h3>Cold Drinks</h3>
                    <ul>
                        <li>Cold Brew - $5</li>
                        <li>Iced Latte - $5.50</li>
                    </ul>
                    <h3>Pastries</h3>
                    <ul>
                        <li>Cupcake - $2.50</li>
                        <li>Muffin - $2.00</li>
                        <li>Cookie - $1.50</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
}