import { useState } from 'react';
import reactLogo from './assets/react.svg';
import formationlogo from '../public/logo.png';
import viteLogo from '/vite.svg';
import data from '../data.json';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from '@mui/material';

// Styles CSS intégrés
const styles = {
    body: {
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.6,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    container: {
        flex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        paddingBottom: '60px', // Ajoute de l'espace pour le footer
    },
    menu: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: 'rgb(255,255,255)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    },
    menuList: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    menuItem: {
        cursor: 'pointer',
        padding: '5px 15px',
        fontSize: '14px',
        borderRadius: '5px',
        backgroundColor: '#286398',
        color: 'white',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        marginRight: '10px', // Ajoute de l'espace après chaque élément de menu
    },
    menuItemHover: {
        backgroundColor: '#286398',
    },
    menuItemActive: {
        backgroundColor: '#a5c9d1',
    },
    logo: {
        height: '40px',
    },
    header: {
        marginTop: '70px',
        textAlign: 'center',
    },
    main: {
        paddingTop: '80px',
    },
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        color: '#333',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        position: 'fixed', // Fixe le footer en bas de la fenêtre
        bottom: 0, // Place le footer au bas
        left: 0, // Assure qu'il commence à gauche
        zIndex: 1000, // Gère la superposition
    },
    table: {
        minWidth: 650,
        borderCollapse: 'collapse',
    },
    tableHeader: {
        backgroundColor: '#a5c9d1',
        color: '#fff',
    },
    tableCell: {
        fontWeight: 'bold',
        color: '#d240d8',
        textAlign: 'center',
        border: '1px solid #ccc',
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#a5c9d1',
        },
        '&:hover': {
            backgroundColor: '#a5c9d1',
            cursor: 'pointer',
        },
    },
    tableCellBody: {
        textAlign: 'center',
        padding: '10px',
        border: '1px solid #ccc',
        backgroundColor:'#57888c'
    },
};

// Composants individuels
const Notes = () => (
    <TableContainer component={Paper}>
        <Table style={styles.table}>
            <TableHead style={styles.tableHeader}>
                <TableRow>
                    <TableCell style={styles.tableCell}>
                        <TableSortLabel active={true} direction="asc">ID</TableSortLabel>
                    </TableCell>
                    <TableCell style={styles.tableCell}>Course</TableCell>
                    <TableCell style={styles.tableCell}>Grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.unique_id} style={styles.tableRow}>
                        <TableCell style={styles.tableCellBody}>{item.unique_id}</TableCell>
                        <TableCell style={styles.tableCellBody}>{item.course}</TableCell>
                        <TableCell style={styles.tableCellBody}>{item.grade}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

const Etudiants = () => (
    <TableContainer component={Paper}>
        <Table style={styles.table}>
            <TableHead style={styles.tableHeader}>
                <TableRow>
                    <TableCell style={styles.tableCell}>ID</TableCell>
                    <TableCell style={styles.tableCell}>First Name</TableCell>
                    <TableCell style={styles.tableCell}>Last Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.student.id} style={styles.tableRow}>
                        <TableCell style={styles.tableCellBody}>{item.student.id}</TableCell>
                        <TableCell style={styles.tableCellBody}>{item.student.firstname}</TableCell>
                        <TableCell style={styles.tableCellBody}>{item.student.lastname}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

const Matieres = () => (
    <TableContainer component={Paper}>
        <Table style={styles.table}>
            <TableHead style={styles.tableHeader}>
                <TableRow>
                    <TableCell style={styles.tableCell}>Course</TableCell>
                    <TableCell style={styles.tableCell}>Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.unique_id} style={styles.tableRow}>
                        <TableCell style={styles.tableCellBody}>{item.course}</TableCell>
                        <TableCell style={styles.tableCellBody}>{item.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

const APropos = () => (
    <div>
        <h2>À propos</h2>
        <p>Ce projet est une démonstration des capacités de React et Material UI pour créer des interfaces utilisateur dynamiques et interactives.</p>
    </div>
);

// Composant Menu
const Menu = ({ menuItems, onMenuClick, activeItem }) => (
    <nav style={styles.menu}>
        <ul style={styles.menuList}>
            {menuItems.map((item) => (
                <li
                    key={item.name}
                    style={{
                        ...styles.menuItem,
                        ...(activeItem === item.name ? styles.menuItemActive : {}),
                    }}
                    onClick={() => onMenuClick(item.name)}
                >
                    {item.label}
                </li>
            ))}
        </ul>
        <div>
            <img src={formationlogo} alt="Formation logo" style={styles.logo} />
        </div>
    </nav>
);

// Composant Header
const Header = () => (
    <header style={styles.header}>
        <h1>Univercité Cote d'Azur</h1>
        <h2>Bienvenu sur votre espace !</h2>
    </header>
);

// Composant Footer
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer style={styles.footer}>
            <h3>© {year} - Nisrine Samrani, Tous droits réservés.</h3>
        </footer>
    );
};

// Composant principal
const Appli = () => {
    const [activeMenu, setActiveMenu] = useState('Notes');

    const menuItems = [
        { name: 'Notes', label: 'Notes', component: <Notes /> },
        { name: 'Etudiants', label: 'Étudiants', component: <Etudiants /> },
        { name: 'Matieres', label: 'Matières', component: <Matieres /> },
        { name: 'APropos', label: 'À propos', component: <APropos /> },
    ];

    const activeComponent = menuItems.find((item) => item.name === activeMenu)?.component;

    return (
        <div style={styles.container}>
            <Header />
            <Menu menuItems={menuItems} onMenuClick={setActiveMenu} activeItem={activeMenu} />
            <main style={styles.main}>{activeComponent}</main>
            <Footer />
        </div>
    );
};

export default Appli;
