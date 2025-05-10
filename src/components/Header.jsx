import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
return (
    <>
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link
                        to="/"
                        className="logo-container"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            textDecoration: "none" // ensure no underline
                        }}
                    >
                        {/* Replace with your actual logo path or import at top */}
                        <img
                            src="img/TAU-logo.png"
                            alt="TAU Logo"
                            className="logo-image"
                        />
                        <div className="logo-title">
                            <span>TAU</span>
                            <span>Intelligence</span>
                        </div>
                    </Link>
                    <nav className="navigation">
                        <ul>
                            <li className={location.pathname === '/' ? 'active' : ''}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={location.pathname === '/research' ? 'active' : ''}>
                                <Link to="/research">Research</Link>
                            </li>
                            <li className={location.pathname === '/join-us' ? 'active' : ''}>
                                <Link to="/join-us">Join Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <style jsx>{`
                .header {
                    padding: 1.5rem 0;
                    border-bottom: 1px solid rgba(230, 116, 23, 0.3);
                }
                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo-container {
                    text-decoration: none;
                    color: var(--orange);
                }
                .logo-container:hover {
                    text-decoration: none;
                }
                .logo-image {
                    width: 80px;
                    height: auto;
                    margin-right: 1rem;
                }
                .logo-title {
                    display: flex;
                    flex-direction: column;
                    font-family: Georgia, serif;
                }
                .logo-title span {
                    font-size: 2.2rem;
                    font-weight: bold;
                }
                .navigation ul {
                    display: flex;
                    list-style: none;
                    gap: 2rem;
                }
                .navigation li {
                    font-size: 1.2rem;
                }
                .navigation li.active a {
                    color: #fff;
                    text-decoration: underline;
                }
                @media (max-width: 768px) {
                    .header-content {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    .navigation ul {
                        gap: 1rem;
                    }
                }
            `}</style>
        </header>
    </>
)
};

export default Header;