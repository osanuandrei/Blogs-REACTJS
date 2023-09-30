import { useState, useEffect } from "react";
import  axios  from "axios";
const useAxiosFetch = (dataURL) => {
    const [data,setData] = useState([]);
    const [fetchError,setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchdata = async (url) => {
            setIsLoading(true);
            try{
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if(isMounted){
                    setData(response.data);
                    setFetchError(null);
                }

            }
            catch(err){
                if(isMounted){
                    setFetchError(err.message)
                    setData([]);
                }
            }
            finally {
                if(isMounted && setTimeout(() => setIsLoading(false),1000));
            }


        }
        fetchdata(dataURL)
        const cleanUp = () => {
            console.log("cleanup function");
            isMounted=false;
            source.cancel();
        }
        return cleanUp;
    },[dataURL]);
    return {data,fetchError,isLoading};

}
export default useAxiosFetch;