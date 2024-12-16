import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import NoteBook from "../assets/NoteBook.png";
import WorkStation from "../assets/WorkStation.png";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";

const BASE_API = " http://localhost:4000"

function EditPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (data) => {
            const response = await fetch (`${BASE_API}/api/addcoustodian/${id}/user`,{
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        },
        onSuccess: () => {
            navigate(-1)
        },
    });


    const submitForm = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        mutation.mutate(data)
    }


    const {data: stock, isLoading} = useQuery({
        queryFn:() => fetch(`${BASE_API}/api/pcstock/${id}`, {
            method: 'GET',
        }).then(res =>  {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        }), 
        queryKey: ['stock', id],
    });

    const [updatedStock, setUpdatedStock] = useState({});

    useEffect(() => {
        if (stock) {
            setUpdatedStock(stock);
        }
    }, [stock]);

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from the event target
        setUpdatedStock((prevStock) => ({
            ...prevStock, // Keep the existing state
            [name]: value,
        }));
    };

    if (isLoading) {
        return (<Loading />);
    }

    




    return(
        <>
        <div 
            style={{
                backgroundColor: "#F5F5F5",
            }}
        >
            <div
                style={{
                    backgroundColor:"#CC0000",
                    display:"grid",
                    gridTemplateColumns: "20% auto",
                    padding:"20px 70px"
                }}
            >
            <img src={(stock.type === "NoteBook") ? NoteBook : WorkStation} alt="PC type" width={"150px"} height={"150px"} style={{border: "1px solid #ccc",borderRadius:"15px"}} />
                <div
                    style={{
                        fontFamily:"Inter",
                        color:"#fff"
                    }}
                >
                    <h1
                        style={{
                            fontSize:"2rem"
                        }}
                    >{stock.pcname}</h1>
                    <h3
                        style={{
                            fontWeight:"500"
                        }}
                    >{stock.type}</h3>
                </div>
            </div>
            <div 
                style={{
                    border:"1px solid #a9a9a9",
                    borderRadius: "25px",
                    margin:"20px 70px",
                    padding:"30px",
                }}
            >
                <h1
                    style={{
                        fontFamily:"Inter"
                    }}
                >Custodian</h1>
                <form 
                    onSubmit={submitForm}
                    style={{
                        display:"grid",
                        gridTemplateColumns:"50% 50%"
                    }}
                    
                >
                    <div
                        style={{
                            display:"flex",
                            flexDirection:"column",
                            gap:"15px"
                        }}
                    >
                        <div
                            style={{
                                display:"flex",
                                gap:"5px",
                                flexDirection:"column"
                            }}
                        >
                            <h2
                                style={{
                                    margin:"0"
                                }}
                            >
                                <label htmlFor="userName"
                                    style={{
                                        fontFamily:"Inter",
                                        fontSize:"1.1rem",
                                        fontWeight:"400"
                                    }}
                                >Name:</label>
                            </h2>
                            <input type="text" 
                                placeholder="Enter Name"
                                name="userName"
                                value={updatedStock.userName || ''}
                                onChange={handleInputChange}
                                onFocus={(e) => e.target.style.outline = 'none'}
                                style={{
                                    borderRadius:"5px",
                                    border:".5px solid #ccc",
                                    outline:"none",
                                    padding:"10px",
                                    fontSize:"1.1rem"
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display:"flex",
                                gap:"5px",
                                flexDirection:"column"
                            }}
                        >
                            <h2
                                style={{
                                    margin:"0"
                                }}
                            >
                                <label htmlFor="username"
                                    style={{
                                        fontFamily:"Inter",
                                        fontSize:"1.1rem",
                                        fontWeight:"400"
                                    }}
                                >Username:</label>
                            </h2>
                            <input type="text" 
                                placeholder="Enter Username"
                                name="username"
                                value={updatedStock.username || ''}
                                onChange={handleInputChange}
                                onFocus={(e) => e.target.style.outline = 'none'}
                                style={{
                                    borderRadius:"5px",
                                    border:".5px solid #ccc",
                                    outline:"none",
                                    padding:"10px",
                                    fontSize:"1.1rem"
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display:"flex",
                                gap:"5px",
                                flexDirection:"column"
                            }}
                        >
                            <h2
                                style={{
                                    margin:"0"
                                }}
                            >
                                <label htmlFor="userEmail"
                                    style={{
                                        fontFamily:"Inter",
                                        fontSize:"1.1rem",
                                        fontWeight:"400"
                                    }}
                                >Email:</label>
                            </h2>
                            <input type="email" 
                                placeholder="Enter Email"
                                name="userEmail"
                                value={updatedStock.userEmail || ''}
                                onChange={handleInputChange}
                                onFocus={(e) => e.target.style.outline = 'none'}
                                style={{
                                    borderRadius:"5px",
                                    border:".5px solid #ccc",
                                    outline:"none",
                                    padding:"10px",
                                    fontSize:"1.1rem"
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display:"flex",
                                gap:"5px",
                                flexDirection:"column"
                            }}
                        >
                            <h2
                                style={{
                                    margin:"0"
                                }}
                            >
                                <label htmlFor="userName"
                                    style={{
                                        fontFamily:"Inter",
                                        fontSize:"1.1rem",
                                        fontWeight:"400"
                                    }}
                                >Location:</label>
                            </h2>
                            <select name="location" id="location"
                                onFocus={(e) => e.target.style.outline = 'none'}
                                style={{
                                    padding:"10px 14px",
                                    borderRadius:"5px",
                                    border:".5px solid #ccc",
                                    outline:"none",
                                    fontSize:"1.1rem"
                                }}
                            >
                                <option value="Select">Select Location</option>
                                <option value="Lagos">In-house(LAG)</option>
                                <option value="Port-Harcourt">In-house(PH)</option>
                            </select>
                        </div>
                    </div>
                    <div
                        style={{
                            marginLeft:"auto",
                            display:"flex",
                            gap:"10px",
                            alignItems:"end"
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            style={{
                                padding: "10px 14px",
                                borderRadius: "5px",
                                border: ".5px solid #ccc",
                                backgroundColor: "white",
                                cursor:"pointer"
                            }}
                        >Back</button>
                        <button
                            type="submit"
                            style={{
                                padding: "10px 14px",
                                borderRadius: "5px",
                                border: ".5px solid #ccc",
                                backgroundColor: "#CC0000",
                                cursor:"pointer",
                                color:"white"
                            }}
                        >Save</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default EditPage;