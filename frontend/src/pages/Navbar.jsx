import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/create/post');
                // Ensure data is an array based on your previous logs
                setData(res.data.post || []); 
            } catch (err) {
                console.error("Error:", err);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div style={styles.container}>
            {/* Simple Header */}
            <header style={styles.header}>
                <h1 style={styles.logo} onClick={() => navigate("/")}>
                    Dev<span style={{ color: '#007bff' }}>Blog</span>
                </h1>
                <div style={styles.navActions}>
                    <button onClick={() => navigate("/login")} style={styles.textBtn}>Login</button>
                    <button onClick={() => navigate("/createPost")} style={styles.primaryBtn}>
                        Write a Post
                    </button>
                </div>
            </header>

            <main style={styles.main}>
                <h2 style={styles.sectionTitle}>Latest Stories</h2>

                {/* Post Grid */}
                <div style={styles.grid}>
                    {data.length > 0 ? data.map((dt, index) => (
                        <div key={dt._id || index} style={styles.card}>
                            <img src={dt.uri || dt.img} alt={dt.title} style={styles.cardImg} />
                            <div style={styles.cardBody}>
                                <small style={styles.author}>By {dt.author}</small>
                                <h3 style={styles.cardTitle}>{dt.title}</h3>
                                <p style={styles.cardText}>{dt.description}</p>
                                <button style={styles.linkBtn}>Read More</button>
                            </div>
                        </div>
                    )) : <p>Loading posts...</p>}
                </div>
            </main>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#333',
        backgroundColor: '#fff',
        minHeight: '100vh',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 5%',
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        zIndex: 10,
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        margin: 0,
    },
    navActions: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
    },
    textBtn: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '500',
        color: '#666',
    },
    primaryBtn: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '0.6rem 1.2rem',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: '500',
    },
    main: {
        padding: '2rem 5%',
    },
    sectionTitle: {
        fontSize: '1.8rem',
        marginBottom: '2rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
    },
    card: {
        border: '1px solid #eee',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.2s',
        cursor: 'pointer',
    },
    cardImg: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
    },
    cardBody: {
        padding: '1.2rem',
    },
    author: {
        color: '#007bff',
        textTransform: 'uppercase',
        fontSize: '0.75rem',
        fontWeight: 'bold',
    },
    cardTitle: {
        margin: '0.5rem 0',
        fontSize: '1.2rem',
    },
    cardText: {
        fontSize: '0.9rem',
        color: '#666',
        lineHeight: '1.5',
    },
    linkBtn: {
        background: 'none',
        border: 'none',
        color: '#007bff',
        padding: 0,
        marginTop: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
};

export default Navbar;
