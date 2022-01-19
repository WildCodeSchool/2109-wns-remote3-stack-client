import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '@views/Layout';

function App(): JSX.Element {
  return (
    <div className="">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
