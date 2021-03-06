import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { Notifs } from 'redux-notifications'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory}>
            {this.props.routes}
          </Router>
          <Notifs />
        </div>
      </Provider>
    )
  }
}

export default App
