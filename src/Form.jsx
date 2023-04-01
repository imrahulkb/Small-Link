import React, { useState } from "react";
import db from "./firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import generateRandomString from "./random.js"
import {  getDocs,query,where} from "firebase/firestore";



function removePrefix(url) {
  if (url.startsWith("https://")) {
    return url.slice(8);
  } else if (url.startsWith("http://")) {
    return url.slice(7);
  }
  return url;
}


function Form() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleCopy = async () => {
  if (text1 === "") { alert("Input field is required"); return; }
  setText2("");
  try {
    var i=100;
    while(i--!==0)
    {
      var shortenedUrl=generateRandomString();
      const q = query(collection(db, "new_collection"), where("shortUrl", "==", shortenedUrl));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        await setDoc(doc(db,"new_collection",shortenedUrl), {
          shortUrl: shortenedUrl,
          originalUrl: removePrefix(text1),
        });
    
        setText2("smallynk.web.app/"+shortenedUrl);
    
       console.log("Document written with ID: ");
        break;
      }
      console.log("trying");
    }
    if(i===0)window.alert("Unable to Shorten Your Url, please try after some time");   
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  return (
    <div  className="Form" >
    <p>Enter Your Link </p>
    <input
      className="inputField"
      type="url"
      value={text1}
      onChange={(e) => setText1(e.target.value)}/>

    <br></br>
    <button onClick={handleCopy}><p>Shorten</p></button>
    <p>Shortened Link</p>
    <input type="text" value={text2} style={{width:"85%",maxWidth:"300px"}} readOnly />
    </div>
  );
}

export default Form;
