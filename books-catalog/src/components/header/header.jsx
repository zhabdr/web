import { useFavorites } from "../../hook/Favorites"


const Header=()=>{
    const {favorites}=useFavorites()
    return(
        <div>
            <button>
               <h2> favorites:{favorites.length}</h2>
            </button>
        </div>
    )
}
export default Header