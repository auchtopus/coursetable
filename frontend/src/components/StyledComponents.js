import styled from 'styled-components';
import Select from 'react-select';
import {
  FormControl,
  ListGroup,
  Modal,
  Card,
  Row,
  Popover,
  Tabs,
} from 'react-bootstrap';
import { Calendar } from 'react-big-calendar';
import MultiToggle from 'react-multi-toggle';

// Div used to color the background of surface components
export const SurfaceComponent = styled.div`
  background-color: ${({ theme, layer }) => theme.surface[layer]};
  transition: background-color 0.2s linear;
`;

// Span used to color text. Type is an int that represents primary (0) or secondary (1) color
export const TextComponent = styled.span`
  color: ${({ theme, type }) => theme.text[type]};
  transition: color 0.2s linear;
`;

// Div for banner components/any components that are light grey in light mode, dark grey in dark mode
export const StyledBanner = styled.div`
  background-color: ${({ theme }) => theme.banner};
  transition: background-color 0.2s linear;
`;

// Row for search results item
export const StyledResultsItem = styled(Row)`
  border-bottom: solid 1px ${({ theme }) => theme.border};
  border-top: solid 1px ${({ theme }) => theme.border};
  transition: border 0.2s linear;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.select_hover};
  }
`;

// Listgroup Item for worksheet list item
export const StyledListItem = styled(ListGroup.Item)`
  background-color: transparent;
  border-color: ${({ theme }) => theme.border};
  transition: border-color 0.2s linear;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.select_hover};
  }
`;

// React-select component
export const StyledSelect = styled(Select)`
  .Select__control {
    background-color: ${({ theme }) => theme.select};
    border: ${({ theme }) =>
      theme.theme === 'light'
        ? '2px solid hsl(0, 0%, 90%)'
        : '2px solid ' + theme.select};
    transition: background-color 0.2s linear, border 0.2s linear;
  }

  .Select__single-value {
    color: ${({ theme }) => theme.text[0]};
    transition: color 0.2s linear;
  }
`;

// FormControl for any typed inputs
export const StyledInput = styled(FormControl)`
  background-color: ${({ theme }) => theme.select};
  color: ${({ theme }) => theme.text[0]};
  transition: 0.2s linear !important;
  border: ${({ theme }) =>
    theme.theme === 'light'
      ? '2px solid hsl(0, 0%, 90%)'
      : '2px solid ' + theme.select};
  border-radius: 8px;

  &:focus {
    background-color: ${({ theme }) => theme.select};
  }

  &.form-control:focus {
    color: ${({ theme }) => theme.text[0]};
  }
`;

// Calendar for worksheet
export const StyledCalendar = styled(Calendar)`
  &.rbc-calendar {
    .rbc-time-view {
      .rbc-time-header {
        .rbc-time-header-content {
          border-color: ${({ theme }) => theme.border};
          transition: border 0.2s linear;
          .rbc-time-header-cell {
            .rbc-header {
              border-color: ${({ theme }) => theme.border};
              transition: border 0.2s linear;
            }
          }
        }
      }
      .rbc-time-content {
        border-color: ${({ theme }) => theme.border};
        transition: border 0.2s linear;
        .rbc-time-gutter {
          .rbc-timeslot-group {
            border-color: ${({ theme }) => theme.border};
            transition: border 0.2s linear;
          }
        }
        .rbc-day-slot {
          .rbc-timeslot-group {
            border-color: ${({ theme }) => theme.border};
            transition: border 0.2s linear;
            .rbc-time-slot {
              border-color: ${({ theme }) => theme.border};
              transition: border 0.2s linear;
            }
          }
        }
      }
    }
  }
`;

// Course Modal
export const StyledModal = styled(Modal)`
  .modal-content {
    background-color: ${({ theme }) => theme.surface[0]};
    .modal-header {
      .close {
        color: ${({ theme }) => theme.text[0]};
      }
    }
  }
`;

// Hr tag used to divide stuff in search form and footer
export const StyledHr = styled.hr`
  border-color: ${({ theme }) =>
    theme.theme === 'light' ? '#ededed' : '#404040'};
  transition: border 0.2s linear;
`;

// Card used in Worksheet mobile and about page
export const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.surface[0]};
  transition: background-color 0.2s linear;
`;

// Expand buttons in worksheet
export const StyledExpandBtn = styled.div`
  background-color: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text[1]};
  position: absolute;
  top: 0%;
  z-index: 2;
  transition: 0.2s linear;
`;

// Popovers in search results item, prof popover in modal, and worksheet calendar
export const StyledPopover = styled(Popover)`
  background-color: ${({ theme }) => theme.surface[0]};
  .popover-header {
    background-color: ${({ theme }) => theme.banner};
    color: ${({ theme }) => theme.text[1]};
  }
  .popover-body {
    color: ${({ theme }) => theme.text[0]};
  }
  .arrow::after {
    border-right-color: ${({ theme }) => theme.surface[0]};
    border-left-color: ${({ theme }) => theme.surface[0]};
  }
`;

// Tabs of evaluation comments in modal
export const StyledTabs = styled(Tabs)`
  background-color: ${({ theme }) => theme.surface[0]};
  .active {
    background-color: ${({ theme }) => theme.select_hover + ' !important'};
    color: ${({ theme }) => theme.text[0] + ' !important'};
    border-bottom: none;
  }
  .nav-item {
    color: ${({ theme }) => theme.text[0]};
  }
  .nav-item:hover {
    background-color: ${({ theme }) => theme.banner};
    color: ${({ theme }) => theme.text[0]};
  }
`;

// Multitoggle in modal (course, both, prof)
export const StyledMultiToggle = styled(MultiToggle)`
  background-color: ${({ theme }) => theme.surface[1]};
  border-color: ${({ theme }) => theme.border};
  .toggleOption {
    color: ${({ theme }) => theme.text[0]};
  }
`;

// Rating bubbles in search results list item and modal
export const StyledRating = styled.div`
  background-color: ${({ theme, rating, colormap }) =>
    rating && rating > 0
      ? colormap(rating).alpha(theme.rating_alpha)
      : theme.banner};
  color: ${({ rating, colormap }) =>
    rating && rating > 0 ? colormap(rating).darken(3).css() : '#b5b5b5'};
  font-weight: ${({ rating }) => (rating ? 600 : 400)};
  font-size: ${({ rating }) => (rating ? 'inherit' : '12px')};
  transition: background-color 0.2s linear;
`;
