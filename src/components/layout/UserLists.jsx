import { useQuery } from "@tanstack/react-query";
import { useState } from "react";   
import NoteBook from "../assets/NoteBook.png"
import WorkStation from "../assets/WorkStation.png"
import person from "../assets/person.svg"
import Loading from "./Loading";


const BASE_API = " http://localhost:4000"

function List () {

    const [ isDrawerOpen, setDrawerOpen ] = useState({})

    const toggleDrawer = (id) => {
        setDrawerOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id] // Toggle the specific drawer
        }));
    };
    
    const {data: stock, isLoading} = useQuery({
        queryFn:() => fetch(`${BASE_API}/api/pcstock`, {
            method: 'GET',
        }).then(res => res.json()), // Ensure you parse the JSON response
        queryKey: ['stock'],
    });

    if(isLoading){
        return( <Loading/>)
    }

    return(
        <>
        <div></div>
        <ul
            style={{
                listStyle: "none",
                padding: "30px 150px",
            }}
        >
            {stock?.map(stock => (
                <li 
                    key={stock._id}
                    style={{
                        fontFamily:"Inter",
                        position: "relative",
                        height: isDrawerOpen[stock._id] ? "340px" : "180px" ,
                        transition: "height 0.3s ease",
                    }}
                >
                    <div 
                        style={{
                            borderRadius:"25px",
                            padding: "10px",
                            position:"relative",
                            display: "grid",
                            zIndex:"3",
                            backgroundColor: " white",
                            gridTemplateColumns: "20% 75% 5%",
                        }}
                    >
                        <img src={(stock.type === "NoteBook") ? NoteBook : WorkStation} alt="PC type" width={"150px"} height={"150px"} style={{border: "1px solid #ccc",borderRadius:"15px"}} />
                        <div>
                            <h2>{stock.pcname}</h2>
                            <p>Type: <span style={{color: "#CC0000"}}>{stock.type}</span></p>
                            <p>Location: <span style={{color: "#CC0000"}}>{stock.location}</span></p>
                        </div>
                            {(stock.userName || stock.username || stock.email) && (
                                <button onClick={() => toggleDrawer(stock._id)} style={{ padding: "10px", backgroundColor: "white", border:"none", cursor:"pointer"}}>
                                    <img src={person} alt="User" width={"25px"} height={"25px"}/>
                                </button>
                            )}
                    </div>
                    <div style={{
                        position: "relative",
                        transform: isDrawerOpen[stock._id] ? "translateY(-20px)" : "translateY(-152px)",
                        right: "0",
                        left: "0",
                        padding: "10px",
                        height: "130px",
                        borderBottomLeftRadius: "25px",
                        borderBottomRightRadius: "25px",
                        border: "1px solid #ccc",
                        zIndex: "0",
                        transition:"transform 0.3s ease"
                    }}>
                        <h3>Custodian:</h3>
                        <p style={{fontWeight:"600",margin:"0"}}>Name: <span style={{fontWeight:"300"}}>{stock.userName}</span></p>
                        <p style={{fontWeight:"600",margin:"4px 0"}}>Usernane: <span style={{fontWeight:"300"}}>{stock.username}</span></p>
                        <p style={{fontWeight:"600",margin:"4px 0"}}>Email: <span style={{fontWeight:"300"}}>{stock.userEmail}</span></p>
                    </div>
                </li>
            ))}
        </ul> 
        </>
    )
}

export default List;