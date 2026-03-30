import { Link } from 'react-router';
import './styles/default.css';

export default function Header() {
    const headerStyle = {
        fontFamily: 'Headland One, serif',
        width: '100%',
        textAlign: 'center',
        fontSize: '2em',
        color: '#2f4550ff'
    };
  return (
        <header>
            <h1 style={headerStyle}>Sasha Chernoivan's Sweet Cat | ITIS 3135</h1>
            <nav>
                <Link to={"/"}>Home</Link> |{' '}
                <Link to="/Contract">Contract</Link> |{' '}
                <Link to="/Cards">Cards</Link> |{' '}
                <Link to="/Product">Product</Link> |{' '}
                <Link to="/Documentation">Documentation</Link> |{' '}
                <Link to="/Inventory">Inventory</Link> |{' '}
                <Link to="/Survey">Survey</Link> |{' '}
                <Link to="/Evaluations">Evaluations</Link> |{' '}
                <Link to="/IntroForm">Intro Form</Link>
            </nav>
        </header>
    );
}