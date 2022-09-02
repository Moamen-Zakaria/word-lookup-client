import './App.css';
import Header from './components/Header.js';
import MainPage from './pages/MainPage';
import css from "./styles/common.module.css";

function App() {
  return (
    <div className={`App ${css.noSelect}`}>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
