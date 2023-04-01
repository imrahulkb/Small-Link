import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";


export default function Header(){
    function handleAuth(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithRedirect(auth, provider);
    }
    return(
        <div style={{display:"grid",flexWrap:"wrap",backgroundColor:"#00b6ab",width:"100%",margin:"0",padding:"0",justifyContent:"center"}}>
            <h1 style={{margin:"12px 0px",padding:"0",color:"white"}}>Small Link</h1>
            <button onClick={handleAuth} style={{right: "15px", position: "fixed", margin: "17px",color: "#00b6ab", borderRadius:"6px"}}><h2  style={{margin: "2px"}}>Sign In</h2></button>
        </div>
    )
}