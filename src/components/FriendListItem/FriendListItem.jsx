import s from './FriendListItem.module.css';
import clsx from 'clsx';

import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={clsx(s.status, isOnline && s.isOnline)}></span>
      <img className="avatar" src={avatar} alt="#" width="100px"/>
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};