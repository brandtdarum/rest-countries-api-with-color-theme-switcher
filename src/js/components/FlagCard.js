import { useNavigate } from "react-router-dom";

const FlagCard = ({flag, darkMode}) => {
    const navigate = useNavigate();


    const toCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div onClick={() => navigate('flag/' + flag.cca3)} className= {"flagcard element" + (darkMode? " dark_element": "")}>
            <img src={flag.flags.png} alt="" />
            <div className="details">
                <h2 className = {darkMode? "dark_text": ""}>{flag.name.common}</h2>
                <span className = {darkMode? "dark_text": ""}>Population: {toCommas(flag.population)}</span>
                <span className = {darkMode? "dark_text": ""}>Region: {flag.region}</span>
                <span className = {darkMode? "dark_text": ""}>Capital: {(flag.capital)? flag.capital[0]: "None"}</span>
            </div>
        </div>
    );
}
 
export default FlagCard;