import React, {Component} from 'react';

class Character extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <h3>{item.name.first}{item.name.last}</h3>
                <img src={item.images?.main} alt=""/>
                <button>details</button>
            </div>
        );
    }
}

export default Character;