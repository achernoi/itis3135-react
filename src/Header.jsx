import { Link } from 'react-router';

export default function Header() {
  return (
        <header>
            <h1>Sasha Chernoivan's Sweet Cat | ITIS 3135</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Introduction">Introduction</Link>
                    </li>
                    <li>
                        <Link to="/Contract">Contract</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}