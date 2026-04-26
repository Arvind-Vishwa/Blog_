import React, { useState } from 'react'
import axios from 'axios'


const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [img,setImg]=useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();
        

        try{
            const res=await axios.post('https://blog-1-9t7q.onrender.com/api/create/post',
                {title,author,description,img},
                {withCredentials:true}
            )

            console.log(res);
        }catch(err){
            console.log(err);
        }
    }

    // Inline styles for a "Premium" look
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f8fafc',
            fontFamily: 'system-ui, sans-serif'
        },
        card: {
            width: '100%',
            maxWidth: '450px',
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        },
        header: {
            marginBottom: '24px',
            fontSize: '24px',
            fontWeight: '700',
            color: '#1e293b',
            textAlign: 'center'
        },
        inputGroup: {
            marginBottom: '20px'
        },
        label: {
            display: 'block',
            marginBottom: '6px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#64748b'
        },
        input: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.2s',
            boxSizing: 'border-box'
        },
        fileInput: {
            width: '100%',
            padding: '10px 0',
            fontSize: '14px',
            color: '#64748b'
        },
        button: {
            width: '100%',
            padding: '14px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            marginTop: '10px'
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.header}>Create New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Title</label>
                        <input
                            type='text'
                            placeholder='Enter the title'
                            required
                            name='title'
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Description</label>
                        <input
                            type='text'
                            placeholder='Enter the description'
                            required
                            name='description'
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Author Name</label>
                        <input
                            type='text'
                            placeholder='Enter the Author'
                            required
                            name='author'
                            value={author}
                            onChange={(e) => { setAuthor(e.target.value) }}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Cover Image (.png)</label>
                        <input
                            type='file'
                            accept='image/*'
                            name='img'
                            required
                            style={styles.fileInput}
                            onChange={(e)=>{setImg(e.target.files[0])}}
                        />
                    </div>

                    <button 
                        style={styles.button}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                    >
                        Publish Post
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost
