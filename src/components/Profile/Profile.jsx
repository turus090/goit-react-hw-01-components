
import propTypes from 'prop-types'
import "./profile.css"
const Profile = ({avatar, username, tag, location, stats}) => {
    return (
        <div className='profileContainer'>
                <div className="profile">
                <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
            <div className="containerStats">
                <ul className="stats">
                    <li>
                        <span className="label">Followers</span>
                        <span className="quantity">{stats.followers}</span>
                    </li>
                    <li>
                        <span className="label">Views</span>
                        <span className="quantity">{stats.views}</span>
                    </li>
                    <li>
                        <span className="label">Likes</span>
                        <span className="quantity">{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

Profile.propTypes = {
    avatar: propTypes.string,
    username: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    stats: propTypes.object
}

export default Profile 