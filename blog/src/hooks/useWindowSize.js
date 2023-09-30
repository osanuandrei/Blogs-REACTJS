import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [WindowSize, setWindowSize ]= useState({
        width: undefined,
        height: undefined
    })

    useEffect( () => {
        const handleResize = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight})
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        const cleanUp = () => {
            console.log("Runs if a useEffect dependency changes");
            window.removeEventListener("resize", handleResize)
        }
        return cleanUp;
    },[])
    return WindowSize

}
export default useWindowSize