import { useNavigate } from "react-router-dom";

const FlagCard = ({flag, darkMode}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('flag/' + flag.name.common)} className= {"flagcard element" + (darkMode? " dark_element": "")}>
            <img src={flag.flags.png} alt="" />
            <div className="details">
                <h2 className = {darkMode? "dark_text": ""}>{flag.name.common}</h2>
                <span className = {darkMode? "dark_text": ""}>Population: {flag.population}</span>
                <span className = {darkMode? "dark_text": ""}>Region: {flag.region}</span>
                <span className = {darkMode? "dark_text": ""}>Capital: {flag.capital[0]}</span>
            </div>
        </div>
    );
}
 
export default FlagCard;