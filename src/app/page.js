// app/page.js
"use client"
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6008813570665985";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Horror Movie Stories
        </h2>
        <p style={styles.subtitle}>
          Click on the movie names to read their stories
        </p>
      </div>


      <div style={styles.container}>
        <h1>
          <Link href="/horrors/thehauntingofhillhouse" style={styles.link}>
            The Haunting of Hill House
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/horrors/theshining" style={styles.link}>
            The Shining
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/horrors/getout" style={styles.link}>
            Get Out
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/horrors/hereditary" style={styles.link}>
            Hereditary
          </Link>
        </h1>
      </div>
      <div style={styles.container}>
        <h1>
          <Link href="/horrors/midsommar" style={styles.link}>
            Midsommar
          </Link>
        </h1>
      </div>
    </>
  );
};

// Inline styles for a horror theme
const styles = {
  header: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#1a1a1a',
    color: '#ff4444',
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
    color: '#ff4444',
    fontFamily: 'Creepster, cursive',
    fontSize: '2rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
  },
};

export default Home;
