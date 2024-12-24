import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import logo from '../public/logo.png';
import './App.css';
import data from '../data.json';

// Composant Header
function Header() {
    return (
        <header style={{textAlign: 'center', padding: '20px'}}>
            <img src={logo} alt="Logo formation" style={{height: '120px', marginTop: '20px'}}/>

            <h1>Introduction à React</h1>
            <h2>A la découverte des premières notions de React</h2>
        </header>
    );
}

// Fonction pour tirer un élément aléatoire
function getRandomItem(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// Composant MainContent
function MainContent() {
    const now = new Date();
    const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const jour = jours[now.getDay()];
    const moisNom = mois[now.getMonth()];
    const annee = now.getFullYear();
    const heure = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const seconde = now.getSeconds().toString().padStart(2, '0');

    const [randomItem, setRandomItem] = useState(null);

    const handleRandomClick = () => {
        const item = getRandomItem(data);
        setRandomItem(item);
    };

    return (
        <main style={{ textAlign: 'center', marginTop: '20px' }}>
            {/* Affichage de la date et de l'heure */}
            <p>
                Bonjour, on est le {jour}, {moisNom}, {annee} et il est {heure}:{minute}:{seconde}
            </p>

            {/* Bouton pour tirer un élément aléatoire */}
            <button onClick={handleRandomClick} style={{ marginTop: '20px' }}>
                Afficher un élément aléatoire
            </button>

            {/* Affichage de l'élément aléatoire */}
            {randomItem && (
                <p style={{ marginTop: '20px' }}>
                    Élément sélectionné : {randomItem.text}
                </p>
            )}
        </main>
    );
}

// Composant Footer
function Footer() {
    const annee = new Date().getFullYear(); // Récupérer l'année actuelle

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
            <p>© {annee} - Nisrine Samrani, Tous droits réservés.</p>
        </footer>
    );
}

// Composant Menu
function Menu() {
    const handleClick = (item) => {
        alert(`Vous avez cliqué sur: ${item}`);
    };

    return (
        <nav style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {['Notes', 'Etudiants', 'Matières', 'A propos'].map((item) => (
                    <li key={item} style={{ margin: '10px 0' }}>
                        <button onClick={() => handleClick(item)}>{item}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

// Composant App
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Menu />
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