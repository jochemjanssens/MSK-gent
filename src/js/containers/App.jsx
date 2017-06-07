import React from 'react';
import {string} from 'prop-types';
import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Bookmark from './Bookmark';
import ChooseArtist from './ChooseArtist';
import Home from './Home';
import Info from './Info';
import Tour from './Tour';
import Blog from './Blog';
import BlogPost from './Blogpost';
import Instellingen from './Instellingen';


const App = ({page}) => (
  <section>
    {process.env.NODE_ENV !== `production` ? <DevTools /> : null}
    <header>
      <h1>Logo MSK - {page}</h1>
    </header>
    <Router>
      <main>
        <Route
          exact path='/'
          component={Bookmark}
        />
        <Route
          exact path='/chooseArtist'
          component={ChooseArtist}
        />
        <Route
          exact path='/Home'
          component={Home}
        />
        <Route
          exact path='/Info'
          component={Info}
        />
        <Route
          exact path='/Tour'
          component={Tour}
        />
        <Route
          exact path='/Blog'
          component={Blog}
        />
        <Route
          path='/BlogPost/:id'
          component={BlogPost}
        />
        <Route
          exact path='/Instellingen'
          component={Instellingen}
        />
      </main>
    </Router>
  </section>

);

App.propTypes = {
  page: string.isRequired
};

export default inject(
  ({store}) => ({
    page: store.page
  })
)(
  observer(App)
);
