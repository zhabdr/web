// Убедитесь, что вы импортируете React из 'react' вместо 'react-redux'
import React, { useState } from 'react';
import { ThemeContext } from "./ThemeProvider";
import Middle from "./Middle";
import { useGetFavoritesQuery } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './favorites.slice'
import { Link } from "react-router-dom";
import { useFavorites } from '../hook/Favorites';
// import favoritesSlice from './favorites.slice';
// Уберите следующий импорт, так как он не используется
// import { isQueryKey } from "react-query/types/core/utils";
import { toggleFavorites } from '../favorites/favorites.slice';
import { useActions } from '../hook/useActions';
const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
 
  

    const {favorites}=useFavorites()
    const isExists = favorites.some((r) => r.id === book.id);
    console.log(favorites);

 
    const { toggleFavorites } = useActions();
    return (
        <>
            {book.map((item) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                if (thumbnail !== undefined && amount !== undefined) {
                    return (
                        <div key={item.id} className="card" onClick={() => { setShow(true); setItem(item) }}>

                          <button onClick={() => toggleFavorites(book)}>
                              {isExists ? "remove from" : "add to favorites"}
                         </button>
                            <img src={thumbnail} alt="" />
                            <div className="under">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount}</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            <ThemeContext.Provider value={{ setShow }}>
                <Middle show={show} item={bookItem} onClose={() => setShow(false)} />
            </ThemeContext.Provider>
        </>
    );
}

export default Card;
