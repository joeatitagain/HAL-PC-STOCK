import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AdminPage from './components/pages/AdminSide';
import UserPage from './components/pages/UserSide';
import EditPage from './components/pages/EditPage'


const queryClient = new QueryClient();

function App() {
  return (
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={<UserPage />} />
          <Route path='/api/addcoustodian/:id/user' element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </>
  );
}

export default App;

