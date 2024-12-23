import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import logo from '../public/logo.png';
import './App.css';

// Composant Header
function Header() {
    return (
        <header style={{ textAlign: 'center', padding: '20px' }}>
            <img src={logo} alt="Logo formation" style={{ height: '120px' }} />
            <h1>Introduction à React</h1>
            <h2>A la découverte des premières notions de React</h2>
        </header>
    );
}

// Composant MainContent
function MainContent() {
    return (
        <main style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>Ici, nous afficherons des informations intéressantes :)</p>
        </main>
    );
}

// Composant Footer
function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            width: '100%',
            padding: '10px',
            backgroundColor: '#f1f1f1',
            borderTop: '1px solid #ddd',
            color: '#000', // Couleur du texte en noir
            boxSizing: 'border-box'
        }}>
            <p>© Tous droits réservés - Nisrine Samrani</p>
        </footer>
    );
}



// Composant App
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <MainContent />
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Footer />
        </>
    );
}

export default App;
