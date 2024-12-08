import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminPage from './components/pages/AdminSide';
import UserPage from './components/pages/UserSide';

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;

{/* <Router>
  <Switch>
    <Route path="/admin" component={AdminPage} />
    {/* <Route path="/client" component={ClientPage} /> */}
//   </Switch>
// </Router> */}