import { Link } from "react-router-dom";
import Header from "../layout/Header";

function AdminPage () {
    const user = "Admin"
    const to = "user"
    return (
        <>
        <Header 
            user={user}
            to={to}
        />
        </>
    )
} 

export default AdminPage;