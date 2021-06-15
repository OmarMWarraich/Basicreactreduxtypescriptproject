import * as React from 'react';
import { connect } from 'react-redux';
import { ICharacter } from '../reducers/characterReducer';

import { IAppState } from '../store/Store';

// Create the containers interface
interface IProps {
    characters: ICharacter[];
}

class CharacterList extends React.Component<IProps> {
    public render() {
        const { characters } = this.props;
        return (
            <div className="name-container">
                {
                    characters &&
                    characters.map(character => {
                        return (
                            <span key={character.name} className="name">
                                {character.name}
                            </span>
                        );
                    })}
            </div>
        );
    }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
    return {
        characters: store.characterState.characters,
    };
};

export default connect(mapStateToProps)(CharacterList);