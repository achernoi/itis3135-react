import Header from "./Header";
import Footer from "./Footer";
import styles from "./styles/inventory.module.css";

export default function Inventory() {
    return (
        <>
            <Header />
            <main>
            <h2 style={{textAlign: "center"}}>Coffee Inventory</h2>
            <table>
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Origin</th>
                    <th>Status</th>
                    <th>Roast</th>
                </tr>
                </thead>
                <tbody>
                <tr className="onlineOnly">
                    <td>
                    <span className="item">Brasil Fazenda</span>
                    </td>
                    <td>$15.99</td>
                    <td>Brasil</td>
                    <td>
                    <span className="status">Online Only</span>
                    </td>
                    <td>
                    <span className="rate two">
                        <span />
                        <span />
                        <span />
                    </span>
                    </td>
                </tr>
                <tr className="soldOut">
                    <td>Columbian Supremo</td>
                    <td>$11.99</td>
                    <td>Columbia</td>
                    <td>
                    <span className="status">Sold Out</span>
                    </td>
                    <td>
                    <span className="rate three">
                        <span />
                        <span />
                        <span />
                    </span>
                    </td>
                </tr>
                <tr className="inStock">
                    <td>Costa Rica Tarrazu</td>
                    <td>$16.99</td>
                    <td>Costa Rica</td>
                    <td>
                    <span className="status">In Stock</span>
                    </td>
                    <td>
                    <span className="rate two">
                        <span />
                        <span />
                        <span />
                    </span>
                    </td>
                </tr>
                <tr className="onlineOnly">
                    <td>Kona Blend</td>
                    <td>$20.99</td>
                    <td>Hawaii</td>
                    <td>
                    <span className="status">Online Only</span>
                    </td>
                    <td>
                    <span className="rate one">
                        <span />
                        <span />
                        <span />
                    </span>
                    </td>
                </tr>
                <tr className="inStock">
                    <td>Tanzanian Peaberry</td>
                    <td>$17.99</td>
                    <td>Tanzania</td>
                    <td>
                    <span className="status">In Stock</span>
                    </td>
                    <td>
                    <span className="rate three">
                        <span />
                        <span />
                        <span />
                    </span>
                    </td>
                </tr>
                <tr className="onlineOnly">
                    <td>Monte Alegre</td>
                    <td>$15.99</td>
                    <td>Brazil</td>
                    <td>
                    <span className="status">Online only</span>
                    </td>
                    <td>
                    <span className="rate one">
                        <span />
                        <span />
                        <span />
                    </span>
                    </td>
                </tr>
                <tr className="inStock">
                    <td>Cajamarca</td>
                    <td>$18.99</td>
                    <td>Peru</td>
                    <td>
                    <span className="status">In Stock</span>
                    </td>
                    <td>
                    <span className="rate two">
                        <span />
                        <span />
                        <span />
                    </span>
                    </td>
                </tr>
                </tbody>
            </table>
            </main>
            <Footer />
        </>
    );
}