import React from 'react';
import { getNote, deleteNote } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styled = {
    textDecoration: 'none',
    color: 'black'
}

class ViewNote extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getNote(this.props.id);
    }

    removeNote = () => {
        this.props.deleteNote(this.props.id);
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="mainContent" >
                {this.props.notes.map(note => {
                    return (
                        <div key={note.id} >
                            <div className="mainContent__options" >
                                <Link to={`/notes/${note.id}/edit`} style={styled} >
                                    <span className="mainContent__options--links" >edit</span>
                                </Link>
                                <span className="mainContent__options--links" onClick={() => this.removeNote()}>delete</span>
                            </div>
                            <div className="directory__title mainContent__title" >
                                {note.title}
                            </div>
                            <div className="mainContent__content mainContent__content--view" >
                                {note.content}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
};

const stateProps = (state, ownProps) => {
    return {
        notes: state.rootReducer.noteReducer.curr_note,
        id: ownProps.match.params.id
    }
}

export default connect(stateProps, { getNote, deleteNote })(ViewNote);