import react ,{useState,useMemo, useEffect} from "react";
import Card from "./Card";
import axios from "axios";
import bg2 from '../components/bg2.png'

const Import=()=>{
    const [input,setInput]=useState("");
    const [Data,setData]=useState([]);
   
    // const filteredCar=useMemo(()=>Data.filter(D=>D.pageCount>200),[])
    const Book=(evt)=>{
        if(evt.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+input+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
    }
        }
    
    return(
        <>
            <div className="header">
                <div className="key1">
                    <h1>Оставь мне мои книги.<br/> Это все, что у меня есть. <br/> – Франц Кафка;</h1>
                </div>
                <div className="key2">
                    <h2>Ищи любые книги <br/>которые тебе интересны</h2>
                    <div className="input">
                        <input type="text" placeholder="Напищи интересную тебе книгу"
                        value={input} onChange={e=>setInput(e.target.value)}
                        onKeyPress={Book}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src={bg2} alt="" />
                </div>
            </div>

            <div className="corect">
              {
                    <Card book={Data}/>
              }  
            </div>
        </>
    )
}
export default Import;