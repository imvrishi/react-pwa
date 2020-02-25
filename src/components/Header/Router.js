import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const CurrentTasks = lazy(() => import('../Tasks/CurrentTasks'));
const CompletedTasks = lazy(() => import('../Tasks/CompletedTasks'));

const Routes = () => (
    <div>
        <Route exact path="/" component={CurrentTasks} />
        <Route path="/completed" component={CompletedTasks} />
    </div>
)

export default Routes
