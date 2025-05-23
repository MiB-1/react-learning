import './Navigation.css';
import NavigationButton from "../navigation-button/NavigationButton.jsx";

function Navigation({ callback }) {
    return (
        <section className={'navigation'}>
            <h1>{'< VK />'}</h1>
            <div>
                <NavigationButton callback={callback} />
            </div>
        </section>
    )
}

export default Navigation;