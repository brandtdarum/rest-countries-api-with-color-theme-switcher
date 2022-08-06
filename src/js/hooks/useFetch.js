import { useEffect, useState } from "react";

const useFetch = (url, fetchFlag, queries) => {
    const [flags, setFlags] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const filterData = (list) => {
        let newList = list
        let region = queries.get("region")
        let search = queries.get("search");

        console.log(region, search);

        if(region)
            newList = newList.filter(e => e.region === region);

        if(search)
            newList = newList.filter(e => e.name.common.toLowerCase().includes(search.toLowerCase()));

        console.log(newList);
        return newList;
    }

    const listToDict = (list) => {
        const dict = list.reduce((a, v) => {
            return {...a, [v.cca3]: v};
        }, {});


        return dict;
    };

    useEffect(() => {
        setIsPending(true);
        
        fetch(url)
            .then(res => {
                if(!res.ok) 
                    throw Error('Could not fetch data from resource.');
                return res.json();
            })
            .then(data => {
                setFlags(listToDict(filterData(data)));
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, [url, fetchFlag]);

    return ({flags, isPending, error});
}
 
export default useFetch;