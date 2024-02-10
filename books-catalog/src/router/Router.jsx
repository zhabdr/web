import { BrowserRouter, Route, Routes } from "react-router-dom";
import Import from "../components/Import";
import BookDetail from "../Car-Detail/CarDetail";
import Middle from "../components/Middle";
import Card from "../components/Card";
const Router2=()=>{
    return (
    <BrowserRouter>
    <Routes>
        <Route element={<Import/>} path="/"/>
        <Route element={<BookDetail/>} path="/book/:id"/>
        <Route path='/Middle' element={<Middle/>}/>
        <Route element={<div>Not found</div>} path="*"/>
      
    </Routes>
    </BrowserRouter>
    )
}
export default Router2