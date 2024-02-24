import { BrowserRouter, Route, Routes } from "react-router-dom";
import Import from "../components/Import";
// import BookDetail from "../Car-Detail/CarDetail";
import Middle from "../components/Middle"
import Card from "../components/Card";
import Gg from "../components/gg";
const Router2=()=>{
    return (
    <BrowserRouter>
    <Routes>
        <Route element={<Import/>} path="/"/>
        {/* <Route element={<BookDetail/>} path="/book/:id"/> */}
        <Route  element={<Middle/>} path='/Middle'/>
        <Route element={<div>Not found</div>} path="*"/>
      <Route element={<Gg/>} path="/Gg"/>
    </Routes>
    </BrowserRouter>
    )
}
export default Router2