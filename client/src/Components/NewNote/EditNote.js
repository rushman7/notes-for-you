import React from 'react';
import { connect } from 'react-redux';
import { getNote, updateNote } from '../../actions';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteName: '',
            noteBody: ''
        };
    }

    componentDidMount() {
        this.props.getNote(this.props.id);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            noteName: newProps.noteName,
            noteBody: newProps.noteBody
        })
    }

    changeNote = event => {
        event.preventDefault();
        const { noteName, noteBody } = this.state;
        const changedNote = {
            id: parseInt(this.props.id),
            title: this.capTitle(noteName),
            content: this.capSentences(noteBody)
        }
        this.props.updateNote(changedNote);
        this.setState({ noteName: '', noteBody: '' });
        this.props.history.push('/')
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    capTitle = str => {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        // looks for all words in string, changes all capital words to have only 1 capital letter at start
    }

    capSentences = str => {
        return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    render() {
        return (
            <div className="mainContent" >
                <div className="directory__title mainContent__title" >
                    Create New Note:
                </div>
                <div className="mainContent__content">
                    <form className="mainContent__Form" onSubmit={this.changeNote} >
                        <input
                            className="form__input form__input--title"
                            onChange={this.handleInputChange}
                            placeholder="Note Title"
                            value={this.state.noteName}
                            name="noteName"
                        />
                        <textarea
                            className="form__input form__input--body"
                            type="textarea"
                            onChange={this.handleInputChange}
                            placeholder="Note Content"
                            value={this.state.noteBody}
                            name="noteBody"
                        />
                        <button className="link__button" type="submit">Update</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let thisNote;
    state.rootReducer.noteReducer.notes.forEach(note => {
        if (note.id == ownProps.match.params.id) {
            thisNote = note;
        }
    })
    if (thisNote) {
        return {
            notes: state.rootReducer.noteReducer.notes,
            updateNote: state.rootReducer.noteReducer.updateNote,
            error: state.rootReducer.noteReducer.error,
            id: ownProps.match.params.id,
            noteName: thisNote.title,
            noteBody: thisNote.content
        }
    }
    return {
        notes: state.rootReducer.noteReducer.notes,
        updateNote: state.rootReducer.noteReducer.updateNote,
        error: state.rootReducer.noteReducer.error,
        id: ownProps.match.params.id
    }
}

export default connect(mapStateToProps, { getNote, updateNote })(EditNote);