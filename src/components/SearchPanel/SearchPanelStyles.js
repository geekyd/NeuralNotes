import styled from 'styled-components';
import { colors } from 'colors';
import { SearchIcon } from 'icons/Search/SearchIcon';
import { SearchCancelIcon } from 'icons/Search/SearchCancelIcon';

const CONTAINER_PADDING = 6;
const ICON_PADDING = CONTAINER_PADDING + 4;

export const StyledSearchPanelWrapper = styled.div`
  position: absolute;
  width: auto;
  background-color: ${colors.darkGray};
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  padding: ${CONTAINER_PADDING}px;
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  width: 200px;
  line-height: 100%;
  padding: 0 8px 0 18px;
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  background-color: ${colors.darkGray};
  color: ${colors.lightGray};
  outline: none;
`;

export const StyledIcon = styled(SearchIcon)`
  position: absolute;
  top: ${ICON_PADDING}px;
  left: ${ICON_PADDING}px;
  height: calc(100% - ${ICON_PADDING * 2}px);
`;

export const StyledCancelIcon = styled(SearchCancelIcon)`
  position: absolute;
  top: ${ICON_PADDING}px;
  right: ${ICON_PADDING}px;
  height: calc(100% - ${ICON_PADDING * 2}px);
`;

export const StyledResult = styled.div`
  position: absolute;
  bottom: 42px;
  left: 37.5%;
  background-color: ${colors.lightGray};
  width: 25%;
  height: 160px;
  overflow-y: auto;
`;

export const StyledResultItem = styled.div`
  left: 37.5%;
  background-color: ${colors.white};
  color: ${colors.black};
  width: 25%;
  height: auto;
`;
