import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

export default connect(null, {})(Home);