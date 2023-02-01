import css from './FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        <li className={css.friends__item} key={id}>
            <span className={`${css.friends__status} ${css[isOnline]}`}>
              {isOnline}
            </span>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.friends__name}>{name}</p>
          </li>
    )
}