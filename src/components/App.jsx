import ProfileCard from './ProfileCard/ProfileCard';
import profileData from '../data/user.json';

import { Statistics } from './Statistics/stats.jsx';
import data from '../data/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

import transactions from '../data/transactions.json'
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx'

export const App = () => {
  return (
    <>
      <ProfileCard profile={profileData} />
      <Statistics title='Upload stats' stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};