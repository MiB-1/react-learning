import './Navigation.css';
import NavigationButton from "../navigation-button/NavigationButton.jsx";

function Navigation() {
    return (
        <div className={'navigation'}>
            <h1>{'< VK />'}</h1>
            <div>
                <NavigationButton />
            </div>
        </div>
    )
}

export default Navigation;