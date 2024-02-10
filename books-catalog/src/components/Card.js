import react from "react";
import { useState } from 'react'
import { ReactDOM } from "react";

import Middle from "./Middle";
import { Link } from "react-router-dom";
const Card = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <>
                            
                            <Link show={show} item={bookItem} onClose={()=>setShow(false)} to="/Middle"> 
                                
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="under">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                            </Link>
                            
                              {/* <Middle show={show} item={bookItem} onClose={()=>setShow(false)}/> */}
                              {/* <BrowserRouter>
                                    <Routes>
                                         <Route onClose={()=>setShow(false)} element={<Middle/>} path="/"/>
                                    </Routes>
                               </BrowserRouter> */}
                               
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default Card;