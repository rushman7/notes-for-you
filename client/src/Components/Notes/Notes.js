import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';
import { Link } from 'react-router-dom';

const styled = {
    textDecoration: 'none',
    color: 'black'
}

class Notes extends React.Component {
    componentDidMount() {
        this.props.getNotes();
    }
    render() {
        return (
            <div className="mainContent" >
                <div className="directory__title mainContent__title" >
                    Your Notes:
            </div>
                <div className="mainContent__content" >
                    {this.props.notes.map((note, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/notes/${note.id}`} style={styled} >
                                    <Note title={note.title} body={note.content} id={note.id} key={index} />
                                </Link>
                            </div>)
                    })}
                </div>
            </div>
        )
    }
};

const stateProps = (state) => {
    return {
        notes: state.rootReducer.noteReducer.notes
    }
}

export default connect(stateProps, {getNotes})(Notes);