import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import logo from '../public/logo.png';
import './App.css';
import data from '../data.json';

// Composant Header
function Header({ selectedItem }) {
    return (
        <header style={{ textAlign: 'center', padding: '20px' }}>
            {selectedItem && (
                <p style={{ fontSize: '18px', color: '#ffffff', marginBottom: '10px' }}>
                    Vous avez sélectionné : {selectedItem}
                </p>
            )}
            <img src={logo} alt="Logo formation" style={{ height: '120px', marginTop: '20px' }} />
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
            <p>
                Bonjour, on est le {jour}, {moisNom}, {annee} et il est {heure}:{minute}:{seconde}
            </p>
            <button onClick={handleRandomClick} style={{ marginTop: '20px' }}>
                Afficher un élément aléatoire
            </button>
            {randomItem && (
                <div className="details" style={{ marginTop: '20px' }}>
                    <h2>Détails de la Note</h2>
                    <p>
                        <strong>Course:</strong> {randomItem.course}
                    </p>
                    <p>
                        <strong>Étudiant:</strong> {randomItem.student.firstname} {randomItem.student.lastname}
                    </p>
                    <p>
                        <strong>ID:</strong> {randomItem.student.id}
                    </p>
                    <p>
                        <strong>Date:</strong> {randomItem.date}
                    </p>
                    <p>
                        <strong>Note:</strong> {randomItem.grade}
                    </p>
                </div>
            )}
        </main>
    );
}

// Composant Footer
function Footer() {
    const annee = new Date().getFullYear();

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
            color: '#000',
            boxSizing: 'border-box'
        }}>
            <p>© {annee} - Nisrine Samrani, Tous droits réservés.</p>
        </footer>
    );
}

// Composant Menu
function Menu({ items, onItemClick, activeItem }) {
    return (
        <nav style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '10px' }}>
                {items.map((item) => (
                    <li key={item} style={{ margin: '0' }}>
                        <button
                            onClick={() => onItemClick(item)}
                            style={{
                                backgroundColor: activeItem === item ? '#d240d8' : '#fff',
                                border: '1px solid #ccc',
                                padding: '10px 20px',
                                cursor: 'pointer'
                            }}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

// Composant App
function App() {
    const [activeItem, setActiveItem] = useState('Notes');
    const menuItems = ['Notes', 'Etudiants', 'Matières', 'A propos'];

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <>
            <Header selectedItem={activeItem} />
            <Menu items={menuItems} onItemClick={handleMenuItemClick} activeItem={activeItem} />
            <MainContent />
            <Footer />
        </>
    );
}

export default App;
