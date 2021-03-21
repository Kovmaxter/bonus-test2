import React, {Component} from 'react';
import Character from "../character/Character";
class Characters extends Component {

    state ={
        characters: []
    }

    componentDidMount() {
fetch('https://api.sampleapis.com/futurama/characters')
    .then(value => value.json())
    .then(value => {
this.setState({characters: value});

    });

    }

    render() {
        let {characters}= this.state;

        return (
            <div>
                <h2>All futurama characters</h2>
                {
                    characters.map(value => <Character item={value}/>)
                }

            </div>
        );
    }
}

export default Characters;