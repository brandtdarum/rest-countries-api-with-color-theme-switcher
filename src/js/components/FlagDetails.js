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
    const getName = (array, key) => {
        let string = ""
        Object.values(array).forEach(e => { string += e[key] + ", "; })

        return string.slice(0, -2);
    }
    const getLanguages = (array) => {
        let string = "";
        Object.values(array).forEach(e => string += e + ", ");

        return string.slice(0, -2);
    }
    const toCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                        <span><strong>Native Name:</strong> {getName(selectedFlag.name.nativeName, "common")}</span>
                        <span><strong>Population:</strong> {toCommas(selectedFlag.population)}</span>
                        <span><strong>Region:</strong> {selectedFlag.region}</span>
                        <span><strong>Sub region:</strong> {selectedFlag.subregion}</span>
                        <span><strong>Capital:</strong> {selectedFlag.capital[0]}</span>
                        <span><strong>Top Level Domain:</strong> {selectedFlag.tld[0]}</span>
                        <span><strong>Currencies:</strong> {getName(selectedFlag.currencies, "name")}</span>
                        <span><strong>Languages:</strong> {getLanguages(selectedFlag.languages)}</span>
                    </div>
                </div>
                <div className="bordered">
                    
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
}
 
export default FlagDetails;