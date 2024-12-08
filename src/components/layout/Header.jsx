import { Link } from "react-router-dom";

function Header ({ user, to }) {
    return (
        <>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#CC0000',
            padding: '0px 20px'
        }}>
            <h1
                style={{
                    color: '#FFFFFF',
                    fontSize: '2rem',
                    fontFamily: 'Michroma',
                    fontWeight: '600'
                }}
            >
                HALLIBURTON
            </h1>
            <p
                style={{
                    color: '#FFFF',
                    fontFamily: 'Inter',
                    fontSize: '1.7rem'
                }}
            >
                <Link style={{color:"white", textDecoration:"none"}} to={`/${to}`}>{user}</Link>
            </p>
        </div>
        </>
    )
}

export default Header;