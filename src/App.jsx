import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { NotificationsList } from './app/features/notifications/NotificationsList'
import { AddPostForm } from './app/features/posts/AddPostForm'
import { EditPostForm } from './app/features/posts/EditPostForm'
import { PostsList } from './app/features/posts/PostsList'
import { SinglePostPage } from './app/features/posts/SinglePostPage'
import { UserPage } from './app/features/users/UserPage'
import { UsersList } from './app/features/users/UsersList'

import { Navbar } from './app/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path='/posts/:postId' component={SinglePostPage} />
          <Route exact path='/editPost/:postId' component={EditPostForm} />
          <Route exact path='/users' component={UsersList} />
          <Route exact path='/users/:userId' component={UserPage} />
          <Route exact path='/notifications' component={NotificationsList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
