import s from './ProfileCard.module.css';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

import PropTypes from 'prop-types';

const ProfileCard = ({ profile }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = profile;

  return (
    <div className={s.profile}>
      <ProfileInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
    </div>
  );
};

export default ProfileCard;

ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired,
};