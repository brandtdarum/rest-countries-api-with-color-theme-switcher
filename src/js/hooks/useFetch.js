import { useEffect, useState } from "react";

const useFetch = (url, queries) => {
    const [flags, setFlags] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const filterData = (list) => {
        let region = queries.get("region")
        if(region)
            return list.filter(e => e.region === region);

        return list;
    }

    const listToDict = (list) => {
        const dict = list.reduce((a, v) => {
            return {...a, [v.cca3]: v};
        }, {});


        return dict;
    };

    useEffect(() => {
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
    }, [url]);

    return ({flags, isPending, error});
}
 
export default useFetch;