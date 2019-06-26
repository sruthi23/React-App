import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import QuestForm from './components/questForm'

const AppRoute = () => (
    <Router>
        <Route exact path="/" component={QuestForm} />
    </Router>
)

export default AppRoute
