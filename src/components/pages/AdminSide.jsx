import Header from "../layout/Header";
import List from "../layout/AdminList";

function AdminPage () {
    const user = "Admin"
    const to = ""
    return (
        <>
        <div
            style={{
                backgroundColor: "#F5F5F5",
                height: "100%"
            }}
        >
            <Header 
                user={user}
                to={to}
            />
            <List />
        </div>
        </>
    )
} 

export default AdminPage;