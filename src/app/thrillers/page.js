// app/thriller.js

import Link from "next/link";

const Thriller = () => {
  return (
    <>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Thriller Movie Stories
        </h2>
        <p style={styles.subtitle}>
          Click on the movie names to read their stories
        </p>
      </div>

      <div style={styles.container}>
        <h1>
          <Link href="/thrillers/seven" style={styles.link}>
            Se7en
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/thrillers/prisoners" style={styles.link}>
            Prisoners
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/thrillers/gonegirl" style={styles.link}>
            Gone Girl
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/thrillers/zodiac" style={styles.link}>
            Zodiac
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/thrillers/thegirlwiththedragontattoo" style={styles.link}>
            The Girl with the Dragon Tattoo
          </Link>
        </h1>
      </div>
    </>
  );
};

// Inline styles for a thriller theme
const styles = {
  header: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#1a1a1a',
    color: '#ffdd44', // Changed color for a thriller vibe
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Creepster, cursive',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  },
  subtitle: {
    color: '#f0f0f0',
    fontSize: '0.8rem',
  },
  container: {
    backgroundColor: '#121212',
    color: '#f0f0f0',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.2s',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#ffdd44', // Changed color for a thriller vibe
    fontFamily: 'Creepster, cursive',
    fontSize: '2rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
  },
};

export default Thriller;
