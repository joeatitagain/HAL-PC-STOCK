import Header from "../layout/Header";
import List from "../layout/UserLists";


function UserPage () {
    const user = "User"
    const to = "admin"
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

export default UserPage;