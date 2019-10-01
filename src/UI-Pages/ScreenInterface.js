import React from 'react'
import Flexi from '../UI-Components/Flexi/index'
import hoc from '../UI-hocs/screenhoc'


const receiveConifg = require(`../UI-Config/screen/specs/home`).default;
class ScreenInterface extends React.Component {

    render() {

        return (
            <Flexi config={this.props.config}
                handleChange={this.handleChange}
                onFlexiSubmit={this.onFlexiSubmit}
            />
        )
    }
}

export default hoc(receiveConifg)(ScreenInterface)