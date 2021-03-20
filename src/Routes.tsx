import {Route, Switch} from 'react-router-dom';
import FrontLayout from './components/layouts/FrontLayout';

const AppRoute = ({component: Component, layout: Layout, ...rest}: any) => (
  <Route {...rest} render={ props => (
   <Layout><Component {...props}></Component></Layout> 
  )}></Route>
)

const Routes = () => {
  return (
    <Switch>
      <AppRoute path="/" excact={true} layout={FrontLayout} component={xxx} />
    </Switch>
  )
}

export default Routes
