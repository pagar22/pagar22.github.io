import {Component} from "react";
import './index.css';


class GlowCard extends Component {

    render() {
        const linkedin = () => {
            window.location.assign('https://www.linkedin.com/in/pagar22/');
        }
        return (
            <div className={'card'} onClick={linkedin}>
                {this.props.message}
            </div>
        )
    }
}

export default GlowCard;