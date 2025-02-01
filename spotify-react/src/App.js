import './App.css';
import './Reset/Reset.css';
import './Vars/Vars.css';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Sidebar from './componentes/Sidebar/Sidebar';
import Footer from './componentes/Footer/Footer';
import SearchArtists from './componentes/SearchArtists/SearchArtists';

function App() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <SearchArtists/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
