import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { FriendListItem } from "./FriendListItem/FriendListItem";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from "./Data/user.json";
import data from "./Data/data.json";
import friends from "./Data/friends.json";
import transactions from "./Data/transactions.json";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
       
      <TransactionHistory items={transactions} />
      
    </div>
  );
};

