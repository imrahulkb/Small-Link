import React, { useState} from 'react';
import fetchData from './fetchUrl';
import Form from "./Form";
import Header from "./Header";
function App() {
  
const [result, setResult] = useState(null);

async function storeData() {
  const data = await fetchData();
  setResult(data);
}
async function foo()
{
await storeData();
console.log(result+1);
}
foo();
  if(result===1){
    return (
    <div className="App" >
      <Header/>
      <Form/>
    </div>
  );
}
else return <h1>Loading...</h1>;
}

export default App;
