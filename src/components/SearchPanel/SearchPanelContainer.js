import { connect } from 'react-redux';
import { action } from 'sagas';
import {
  SEARCH_QUERY_CHANGED_ACTION,
  SEARCH_RESULT_SELECTED,
  SEARCH_EXIT_ACTION,
} from 'components/SearchPanel/SearchPanelActions';
import { SearchPanelComponent } from 'components/SearchPanel/SearchPanelComponent';

const mapStateToProps = state => ({
  queryResults: state.searchPanel.queryResults,
  rootId: state.notesMindMap.rootId,
  selectedNoteName: state.searchPanel.selectedNoteName,
});

const mapDispatchToProps = () => ({
  onChange: (query, rootId) =>
    action(SEARCH_QUERY_CHANGED_ACTION, { query, rootId }),
  onResultSelect: id => action(SEARCH_RESULT_SELECTED, id),
  exitSearch: () => action(SEARCH_EXIT_ACTION),
});

export const SearchPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPanelComponent);
