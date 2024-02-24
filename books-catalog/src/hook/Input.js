import { useDebugValue,useState } from "react";


export const useName=()=>{
    const [input, setInput] = useState("");
 useDebugValue(input? 'have name' :'no name')


    return input
}