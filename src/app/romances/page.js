// app/romance.js

import Link from "next/link";

const Romance = () => {
  return (
    <>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Romance Movie Stories
        </h2>
        <p style={styles.subtitle}>
          Click on the movie names to read their stories
        </p>
      </div>

      <div style={styles.container}>
        <h1>
          <Link href="/romances/thedatetime" style={styles.link}>
            The Date Night
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/romances/thelovers" style={styles.link}>
            The Lovers
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/romances/romancingthestone" style={styles.link}>
            Romancing the Stone
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/romances/notebook" style={styles.link}>
            The Notebook
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/romances/prideandprejudice" style={styles.link}>
            Pride and Prejudice
          </Link>
        </h1>
      </div>
    </>
  );
};

// Inline styles for a romance theme
const styles = {
  header: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#ffcccb', // Light red for a romantic vibe
    color: '#d50000',
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Dancing Script, cursive',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  },
  subtitle: {
    color: '#333',
    fontSize: '0.8rem',
  },
  container: {
    backgroundColor: '#ffe0e0',
    color: '#333',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.2s',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#d50000',
    fontFamily: 'Dancing Script, cursive',
    fontSize: '2rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
};

export default Romance;
