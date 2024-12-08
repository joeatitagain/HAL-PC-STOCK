import Header from "../layout/Header";

function UserPage () {
    const user = "User"
    const to = "admin"
    return (
        <>
        <Header 
            user={user} 
            to={to}
        />
        </>
    )
}

export default UserPage;