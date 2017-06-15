import React from 'react';
import DevTools from 'mobx-react-devtools';
import {Route} from 'react-router-dom';

import Bookmark from './Bookmark';
import ChooseArtist from './ChooseArtist';
import Home from './Home';
import Info from './Info';
import Tourstart from './Tourstart';
import Tour from './Tour';
import Toureinde from './Toureinde';
import Blog from './Blog';
import BlogPost from './Blogpost';
import Instellingen from './Instellingen';
import Blogadmin from './Blogadmin';
import Photo from './Photo';

const App = () => (
  <section>
    {process.env.NODE_ENV !== `production` ? <DevTools /> : null}
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
        exact path='/Tourstart'
        component={Tourstart}
      />
      <Route
        exact path='/Tour'
        component={Tour}
      />
      <Route
        exact path='/Toureinde'
        component={Toureinde}
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
      <Route
        exact path='/Blogadmin'
        component={Blogadmin}
      />
      <Route
        exact path='/Photo'
        component={Photo}
      />
  </section>
);

export default App;
