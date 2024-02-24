import react from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import { useContext } from 'react';

const Middle=({show,item,onClose})=>{
  const{setShow}=useContext(ThemeContext)
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    const DeleteFn=(e)=>{
      e.preventDefault()
setShow(true)

    }
    return(
        <>
        {/* <h1>dfghjkl</h1> */}
        
            <div className="lag">
              <button onClick={DeleteFn}>Delete</button>
                <div className="lag-inner">
                    <button className="next" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="box">
                        <img src={thumbnail} alt="" />
                        <div className="ille">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Middle;