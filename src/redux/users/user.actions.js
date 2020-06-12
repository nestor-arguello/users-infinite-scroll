import axios from 'axios';
import { SET_USERS, INCREASE_PAGE } from './user.Types';
import { API_URL } from '../../constants'

const setUsers = users => ({
  type: SET_USERS,
  payload: users,
});

export const fetchUsers = currentPage => async dispatch => {
  try {
    const response = await axios.get(
      `${API_URL}${currentPage}`
    );

    const data = response.data.results;

    dispatch(setUsers(data));
  } catch (error) {
    console.error(error);
  }
};

export const increasePage = () => ({
  type: INCREASE_PAGE
})