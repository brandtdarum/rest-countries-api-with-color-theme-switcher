import blackarrow from "./../../images/backarrow_black.svg";
import whitearrow from "./../../images/backarrow_white.svg";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const FlagDetails = ({flags, darkMode}) => {
    const [selectedFlag, setSelectedFlag] = useState();
    const params = useParams();
    const flagCode = params.flagCode;
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
        if(flags && selectedFlag !== flagCode) {
            let flag = flags[flagCode];
            setSelectedFlag(flag);
        }
    }, [flags, flagCode]);

    
    return selectedFlag? 
    (
        <div className="flagdetails">
            <button className = {"element" + (darkMode? " dark_element": "")} onClick = {() => navigate('/rest-countries-api-with-color-theme-switcher')}>
                <img src={darkMode? whitearrow: blackarrow} alt="" />
                <span className = {darkMode? "dark_text": ""}>Back</span>
            </button>
            <div className="flagdetails_body">
                <img src={selectedFlag.flags.svg} alt="" />
                <div className="stats">
                    <h1 className = {darkMode? "dark_text": ""}>{selectedFlag.name.common}</h1>
                    <div className = "text">
                        <span className = {darkMode? "dark_text": ""}><strong>Native Name:</strong> {getName(selectedFlag.name.nativeName, "common")}</span>
                        <span className = {darkMode? "dark_text": ""}><strong>Population:</strong> {toCommas(selectedFlag.population)}</span>
                        <span className = {darkMode? "dark_text": ""}><strong>Region:</strong> {selectedFlag.region}</span>
                        <span className = {darkMode? "dark_text": ""}><strong>Sub region:</strong> {selectedFlag.subregion}</span>
                        <span className = {darkMode? "dark_text": ""}><strong>Capital:</strong> {selectedFlag.capital[0]}</span>
                        <span className = {darkMode? "dark_text": ""}><strong>Top Level Domain:</strong> {selectedFlag.tld[0]}</span>
                        <span className = {darkMode? "dark_text": ""}><strong>Currencies:</strong> {getName(selectedFlag.currencies, "name")}</span>
                        <span className = {darkMode? "dark_text": ""}><strong>Languages:</strong> {getLanguages(selectedFlag.languages)}</span>
                    </div>

                    <div className="borders">
                        <span className = {darkMode? "dark_text": ""}><strong>Border Countries: </strong></span>
                        {selectedFlag.borders && selectedFlag.borders.map(e => (
                            <button className = {"element" + (darkMode? " dark_element": "")} onClick={() => navigate("/rest-countries-api-with-color-theme-switcher/flag/" + e)} key = {e} >
                                <span className = {darkMode? "dark_text": ""}>{flags[e].name.common}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
}
 
export default FlagDetails;