import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './users-list.styles.css';

import InfiniteScroll from 'react-infinite-scroll-component';
import UserCard from '../user-card/user-card.component';

import {
  selectUsers,
  selectCurrentPage,
} from '../../redux/users/user.selectors';
import { fetchUsers, increasePage } from '../../redux/users/user.actions';


const UsersList = ({ users, currentPage, fetchUsers, increasePage }) => {
  useEffect(() => {
    fetchUsers(currentPage);
  }, [fetchUsers, currentPage]);

  return (
    <div id="userListContainer" className="UsersList">
      <InfiniteScroll
        dataLength={users.length}
        next={() => increasePage()}
        hasMore={true}
        loader={<h4 style={{ color: '#e3efff' }}>Loading...</h4>}
        scrollableTarget="userListContainer"
      >
        {users.map(user => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = state => ({
  users: selectUsers(state),
  currentPage: selectCurrentPage(state),
});

const mapDispatchToProps = {
  fetchUsers,
  increasePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
