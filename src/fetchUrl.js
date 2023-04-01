import db from "./firebase.js"
import { doc, getDoc } from "firebase/firestore";

const path = window.location.pathname;

export default async function fetchData(){
  

  if(path.substring(1)==="")
  {
    return 1;
  }
    else{
        const docRef = doc(db, "new_collection", path.substring(1));
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        const url = docSnap.data().originalUrl;
        window.location.replace("https://"+url);
        return 0;
    }
    else{
        console.log("hello");
        return 1;
    };
    } 
}