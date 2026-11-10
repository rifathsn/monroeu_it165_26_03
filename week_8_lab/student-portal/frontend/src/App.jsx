import './App.css';
import AdminView from './components/AdminView/AdminView.jsx';
import StudentView from './components/StudentView/StudentView.jsx';
import SearchSportsAPI from './components/SearchSportsAPI/SearchSportsAPI.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this to false to simulate a student view
  
  
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') return null;

    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const AUTH_URL = 'http://localhost:5021/api/auth';

  useEffect(() => {
    if (!user) return;
    setIsLoggedIn(true);
  }, [user]);

  return (
    <div className="main-container">
      {isLoggedIn ? <StudentView /> : <NoAccess />}
      <br/>
      <h3> Sporst API Data</h3>
      <SearchSportsAPI />
    </div>
  );
}

export default App;