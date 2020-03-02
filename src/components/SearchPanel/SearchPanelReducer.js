import {
  SEARCH_QUERY_CHANGED_ACTION,
  SEARCH_RESULT_FETCHED,
  SEARCH_RESULT_SELECTED,
  SEARCH_EXIT_ACTION,
} from 'components/SearchPanel/SearchPanelActions';

const defaultState = {
  query: '',
  queryResults: [],
  selectedNoteName: undefined,
};

export const searchPanelReducer = (state = defaultState, { type, data }) => {
  switch (type) {
    case SEARCH_QUERY_CHANGED_ACTION:
      return { ...state, query: data };
    case SEARCH_RESULT_FETCHED:
      return { ...state, queryResults: data };
    case SEARCH_RESULT_SELECTED:
      return { ...state, selectedNoteName: data.name };
    case SEARCH_EXIT_ACTION:
      return {
        ...state,
        selectedNoteName: undefined,
        query: '',
        queryResults: [],
      };
    default:
      return state;
  }
};
