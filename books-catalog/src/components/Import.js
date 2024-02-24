// import react ,{useState,useMemo, useEffect} from "react";
// import Card from "./Card";
// import axios from "axios";
// import bg2 from '../components/bg2.png'

// const Import=()=>{
//     const [input,setInput]=useState("");
//     const [Data,setData]=useState([]);
   
//     // const filteredCar=useMemo(()=>Data.filter(D=>D.pageCount>200),[])
//     useEffect(()=>{
//       const Book=(evt)=>{
//         if(evt.key==="Enter"){
//             axios.get('https://www.googleapis.com/books/v1/volumes?q='+input+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
//             .then(res=>setData(res.data.items))
//             .catch(err=>console.log(err))
//     }
   
//         }
//         Book()
//     },[input])
 
    
//     return(
//         <>
//             <div className="header">
//                 <div className="key1">
//                     <h1>Оставь мне мои книги.<br/> Это все, что у меня есть. <br/> – Франц Кафка;</h1>
//                 </div>
//                 <div className="key2">
//                     <h2>Ищи любые книги <br/>которые тебе интересны</h2>
//                     <div className="input">
//                         <input type="text" placeholder="Напищи интересную тебе книгу"
//                         value={input} onChange={e=>setInput(e.target.value)}
//                        />
//                         <button><i className="fas fa-search"></i></button>
//                     </div>
//                     <img src={bg2} alt="" />
//                 </div>
//             </div>

//             <div className="corect">
//               {
//                     <Card book={Data}/>
//               }  
//             </div>
//         </>
//     )
// }
// export default Import;

import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import bg2 from '../components/bg2.png';

const Import = () => {
  const [input, setInput] = useState("");
  const [Data, setData] = useState([]);



 
  useEffect(() => {
    let active=true
    if(active){
    const fetchData = async () => {
      if (input.trim() !== "") {
        try {
          const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+input+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40');
          setData(response.data.items);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    }
    fetchData();
  }

    return ()=>{
      active=false
    }
  }, [input]);

  return (
    <>
      <div className="header">
        <div className="key1">
          <h1>Оставь мне мои книги.<br/> Это все, что у меня есть. <br/> – Франц Кафка;</h1>
        </div>
        <div className="key2">
          <h2>Ищи любые книги <br/>которые тебе интересны</h2>
          <div className="input">
            <input
              type="text"
              placeholder="Напишите интересующую вас книгу"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button><i className="fas fa-search"></i></button>
          </div>
          <img src={bg2} alt="" />
        </div>
      </div>

      <div className="corect">
        <Card book={Data} />
      </div>
    </>
  );
};

export default Import;