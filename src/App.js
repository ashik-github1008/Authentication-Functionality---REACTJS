import {Route, Switch} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute/index'
import Login from './components/Login/index'
import Home from './components/Home/index'
import About from './components/About/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <NotFound />
    </Switch>
  </>
)

export default App
