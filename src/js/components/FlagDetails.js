import blackarrow from "./../../images/backarrow_black.svg";
import whitearrow from "./../../images/backarrow_white.svg";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const FlagDetails = ({flags, darkMode}) => {
    const [selectedFlag, setSelectedFlag] = useState();
    const params = useParams();
    const flagName = params.flagName;

    const navigate = useNavigate();
    const getNativeNames = (array) {
        let string = ""
        array.map(e => { string += e + ", "; })
        return string.slice(0, -2);
    }

    useEffect(() => {
        if(flags && selectedFlag !== flagName) {
            let flag = flags.find(e => e.name.common === flagName);
            setSelectedFlag(flag);
            console.log(flag);
        }
        console.log(selectedFlag);
    }, [flags]);

    
    return selectedFlag? 
    (
        <div className="flagdetails">
            <button onClick = {() => navigate(-1)}>
                <img src={darkMode? whitearrow: blackarrow} alt="" />
                <span>Back</span>
            </button>
            <div className="flagdetails_body">
                <img src={selectedFlag.flags.png} alt="" />
                <div className="stats">
                    <h1>{selectedFlag.name.common}</h1>
                    <div>
                        <span><strong>Native Name:</strong> {}</span>
                        <span><strong>Population:</strong> {}</span>
                        <span><strong>Region:</strong> {}</span>
                        <span><strong>Sub region:</strong> {}</span>
                        <span><strong>Capital:</strong> {}</span>
                        <span><strong>Top Level Domain:</strong> {}</span>
                        <span><strong>Currencies:</strong> {}</span>
                        <span><strong>Languages:</strong> {}</span>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
}
 
export default FlagDetails;