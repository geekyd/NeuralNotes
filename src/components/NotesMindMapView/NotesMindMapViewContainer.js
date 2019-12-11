import { connect } from 'react-redux';
import { action } from 'sagas';

import {
  CHANGE_SELECTED_NOTE_ACTION,
  CREATE_EMPTY_CHILD_ACTION,
  DELETE_NOTE_ACTION,
  EDIT_NOTE_NAME_ACTION,
  UPDATE_NOTE_NAME_ACTION,
  MIND_MAP_CLICKED_ACTION,
} from 'components/NotesMindMapView/NotesMindMapViewActions';
import { NotesMindMapViewComponent } from 'components/NotesMindMapView/NotesMindMapViewComponent';

const mapStateToProps = ({ notesMindMap: { rootNote, selectedNote, noteText, showNoteNameEditor} }) => {
  return {
    selectedNote,
    showNoteNameEditor,
    noteText,
    rootNote,
  }
};

const mapDispatchToProps = () => ({
  changeSelectedNote: data => action(CHANGE_SELECTED_NOTE_ACTION, data),
  createEmptyChild: data => action(CREATE_EMPTY_CHILD_ACTION, data),
  deleteNote: data => action(DELETE_NOTE_ACTION, data),
  editNote: data => action(EDIT_NOTE_NAME_ACTION, data),
  updateNoteName: data => action(UPDATE_NOTE_NAME_ACTION, data),
  onMindMapClick: data => action(MIND_MAP_CLICKED_ACTION, data),
});

export const NotesMindMapViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesMindMapViewComponent);
