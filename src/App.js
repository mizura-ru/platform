import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Application';
import HomeView from './views/home/view';
import MainView from './views/main/view';

import E404View from './views/notFound/view';
import PrivacyView from './views/privacy/view';
import CookiesView from './views/cookies/view';
import TermsView from './views/terms/view';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/main' element={<MainView />} />
          <Route exact path='/privacy' element={<PrivacyView />} />
          <Route exact path='/cookies' element={<CookiesView />} />
          <Route exact path='/terms' element={<TermsView />} />
          <Route path='*' status="404" element={<E404View />} />
        </Routes>
      </AppProvider> 
   </Router>
  );
}

export default App;
