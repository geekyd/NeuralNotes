import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from '../../helpers/debounce';

import {
  StyledIcon,
  StyledInput,
  StyledSearchPanelWrapper,
  StyledResult,
  StyledResultItem,
  StyledCancelIcon,
} from 'components/SearchPanel/SearchPanelStyles';

export const SearchPanelComponent = props => {
  const [query, setQuery] = useState('');
  const debouncedCallback = debounce(props.onChange, props.onChangeDelay);
  const onChange = useCallback(
    ({ target: { value } }) => {
      setQuery(value);
      debouncedCallback(value, props.rootId);
    },
    [setQuery],
  );

  const onItemClick = e => {
    props.onResultSelect(
      props.queryResults.find(item => item.id === e.target.id),
    );
  };

  const exitSearch = e => {
    console.log('exit search');
    e.target.value = '';
    props.exitSearch();
  };

  return (
    <>
      {props.queryResults.length > 0 && (
        <StyledResult>
          {props.queryResults.map(result => (
            <StyledResultItem
              key={result.id}
              id={result.id}
              onClick={onItemClick}>
              {result.name}
            </StyledResultItem>
          ))}
        </StyledResult>
      )}
      <StyledSearchPanelWrapper>
        <StyledIcon />
        <StyledInput
          value={props.selectedNoteName ? props.selectedNoteName : query}
          onChange={onChange}
        />
        {props.selectedNoteName && <StyledCancelIcon onClick={exitSearch} />}
      </StyledSearchPanelWrapper>
    </>
  );
};

SearchPanelComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onResultSelect: PropTypes.func.isRequired,
  exitSearch: PropTypes.func.isRequired,
  onChangeDelay: PropTypes.number,
  queryResults: PropTypes.object,
  rootId: PropTypes.string,
};

SearchPanelComponent.defaultProps = {
  onChangeDelay: 1000,
};
