
import FriendListItem from '../FriendListItem/FriendListItem';

import s from './FriendList.module.css';

import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};