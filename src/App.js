import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Application';
import HomeView from './views/home/view';
import E404View from './views/notFound/view';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route path='*' status="404" element={<E404View />} />
        </Routes>
      </AppProvider> 
   </Router>
  );
}

export default App;
