import React from 'react';

// Set up all routes in App
import { Route } from 'react-router-dom';

// Using custom styled components from Global folder in components
import { AppWrapper } from 'bushido-strap';

// Importing all routes
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <AppWrapper>
      <Route path="/" exact component={Dashboard} />
    </AppWrapper>
  );
};

export default App;
