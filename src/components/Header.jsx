import PropTypes from 'prop-types'

export const Header = ({ loggedInUser, onLogin, onLogout, onLoadLayout, onSaveLayout }) => {
  return (
    <nav>
      {!loggedInUser ? (
        <button onClick={onLogin}>Log in</button>
      ) : (
        <div>
          <h1 className='welcome-message'>{`Hi ${loggedInUser}, welcome back!`}</h1>
          <div className='h-stack'>
            <button className='logout-button' onClick={onLogout}>
              Log out
            </button>
            <button onClick={onLoadLayout}>Load layout</button>
            <button className='save-layout-button' onClick={onSaveLayout}>
              Save layout
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

Header.propTypes = {
  loggedInUser: PropTypes.string,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onLoadLayout: PropTypes.func.isRequired,
  onSaveLayout: PropTypes.func.isRequired
}
