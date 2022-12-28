import { Button, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../config/firebasecon"

const NavigasiBar=()=>{

    const[user, loading, err] = useAuthState(auth); 

    const navigate = useNavigate();

    const logout=()=>{
        signOut(auth);
        navigate('/');
    }

    const [togle, setTogle] = useState(true);
    const forTogleHandler = ()=>{
        setTogle(!togle);
    }

    return(
        <Box sx={{backgroundColor: "#800000"}}>
            <Box sx={{ width: "40px" }}>
                <Link to="/">
                </Link>
            </Box>
            
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                <Button>
                    <Link style={{ textDecoration: "none" }} to="/">
                        <Typography color={"white"}>Home</Typography>
                    </Link>
                </Button>

                <Button>
                    <Link style={{ textDecoration: "none" }} to="/movies">
                        <Typography color={"white"}>Movies</Typography>
                    </Link>
                </Button>
            </Box>

        <Box sx={{ display: "flex" }}>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                {togle ? ( 
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        top: 20,
                        right: 0,
                        paddingRight: 1,
                        zIndex: 150,
                    }}>
                        <MenuIcon onClick={forTogleHandler} fontSize="large" sx={{ color: "white" }}/>
                    </Box>
                    ) : 
                    (
                    
                    <Box sx={{ display: "flex", flexDirection: "column",
                        alignItems: "end", position: "absolute",top: 20,
                        right: 0, paddingRight: 1, paddingLeft: 3,
                        paddingBottom: 3, zIndex: 150, bgcolor: "rgba(0,0,0,0.8)",
                    }}>
                    
                    <CloseIcon onClick={forTogleHandler} fontSize="large" 
                    sx={{ color: "white" }}/>
                    
                    <Box onClick={forTogleHandler} sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "15px",
                        alignItems: "end",
                    }}>
                        <Button>
                            <Link style={{ textDecoration: "none" }} to="/">
                                <Typography color={"white"}>Home</Typography>
                            </Link>
                        </Button>
                        
                        <Button>
                            <Link style={{ textDecoration: "none" }} to="/series">
                                <Typography color={"white"}>Series</Typography>
                            </Link>
                        </Button>
                    </Box>
                </Box>
                )}
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                { loading ? 
                    <Typography color={"white"} bgcolor={"red"}padding={0.5} borderRadius={"5px"}>
                        Initializing user
                    </Typography> : err ? 
                    <Typography color={"white"}
                    bgcolor={"red"} padding={0.5} borderRadius={"5px"}>
                        error
                    </Typography> : user ? 
                <>
                    <Typography color={"white"} bgcolor={"red"} borderRadius={"5px"}>
                        <Button sx={{color:'white'}} onClick={logout}>Sign Out
                        </Button>
                    </Typography>
                    <Typography color={"white"} border={'1px solid white'}borderRadius={"5px"}>
                        <Button sx={{color:'white'}}>{user.email.split("@")[0]}
                        </Button>
                    </Typography>
                </> :
                <>
                    <Typography color={"white"} bgcolor={"red"} borderRadius={"5px"}>
                        <Button sx={{color:'white'}} onClick={()=> navigate('/login')}>Sign In
                        </Button>
                    </Typography>
                    <Typography color={"white"} border={"1px solid white"} borderRadius={"5px"}>
                        <Button sx={{color:'white'}} onClick={()=> navigate('/registrasis')}>Sign Up</Button>
                    </Typography>
                </>
                }
                
            </Box>
        </Box>
        </Box>
    )
}

export default NavigasiBar;