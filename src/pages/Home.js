import React from 'react';

const Home = () => {
    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            backgroundImage: 'url(https://wallpapercave.com/wp/wp2296485.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        container: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            maxWidth: '600px',
            width: '100%',
        },
        h1: {
            color: '#333',
        },
        navList: {
            listStyleType: 'none',
            padding: 0,
        },
        navItem: {
            margin: '10px 0',
        },
        navLink: {
            textDecoration: 'none',
            color: '#04AA6D',
            fontSize: '18px',
        },
        footer: {
            marginTop: '20px',
            fontSize: '14px',
            color: '#666',
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <header>
                    <h1 style={styles.h1}>Welcome to the Indian Constitution Awareness Platform</h1>
                    <p>Explore, Learn, and Understand the Constitution of India.</p>
                </header>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="/login" style={styles.navLink}>Login</a></li>
                        <li style={styles.navItem}><a href="/register" style={styles.navLink}>Register</a></li>
                        <li style={styles.navItem}><a href="/educational-content" style={styles.navLink}>Explore Educational Content</a></li>
                    </ul>
                </nav>
                <footer style={styles.footer}>
                    <p>&copy; 2024 Indian Constitution Awareness Platform. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;
