import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'Anime',
    description: 'Under Process',
};

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header style={headerStyle}>
                    <nav style={navStyle}>
                        <Link href="/" style={linkStyle}>Horror</Link>
                        <Link href="/thrillers" style={linkStyle}>Thriller</Link>
                        <Link href="/romances" style={linkStyle}>Romance</Link>
                        {/* <Link href="/profile" style={linkStyle}>Profile</Link> */}
                    </nav>
                </header>
                
                <main style={mainStyle}>{children}</main>
                
                <footer style={footerStyle}>
                    <p style={footerTextStyle}>© 2024 Story</p>
                    <p style={footerTextStyle}>All rights Amit Pandey</p>
                </footer>
            </body>
        </html>
    );
};

// CSS-in-JS styles for the layout

const headerStyle = {
    backgroundColor: '#333',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    margin: '0 15px',
    padding: '10px 15px',
    transition: 'background-color 0.3s ease',
};

const mainStyle = {
    padding: '20px',
    minHeight: '80vh',
};

const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative',
    bottom: 0,
    width: '100%',
};

const footerTextStyle = {
    margin: 0,
    fontSize: '0.9rem',
};

export default Layout;
