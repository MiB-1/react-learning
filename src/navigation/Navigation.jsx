import './Navigation.css';
import NavigationButton from "../navigation-button/NavigationButton.jsx";

function Navigation() {
    return (
        <div className={'navigation'}>
            <p>{'Vignesh Krishnasamy'}</p>
            <div>
                <NavigationButton />
            </div>
        </div>
    )
}

export default Navigation;