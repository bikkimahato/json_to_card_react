import React from 'react'
import Flexi from '../UI-Components/Flexi/index'
import hoc from '../UI-hocs/screenhoc'


class ScreenInterface extends React.Component {

    render() {
        return (
            <Flexi config={this.props.config}
                handleChange={this.props.handleChange}
                onFlexiSubmit={this.props.onFlexiSubmit}
            />
        )
    }
}

export default hoc()(ScreenInterface)

