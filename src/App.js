import './App.css';
import { Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import PostTeas from './components/PostTeas';
import PostSomethings from './components/PostSomethings';
import Header from './components/Header';
import PostColors from './components/PostColors';
import ListColor from './components/list/ListColor';
import UpdateColor from './components/list/UpdateColor';
import ManagementColor from './components/ManagementColor';
import ManagementCaffeine from './components/ManagementCaffeine';
import ManagementSomething from './components/ManagementSomething';
import ManagementTea from './components/ManagementTea';
import ManagementType from './components/ManagementType';

function App() {

  // せっかくだから管理画面風のデザインを目指す
  return (
    <div className="App">
      <Header />
      <main>
        <Routes path='/'>
          <Route path='/' element={<Home />} >
            <Route index element={<ManagementColor />} />
          </Route>
          <Route path='/manage-caffeine' element={<ManagementCaffeine />} />
          <Route path='/manage-something' element={<ManagementSomething />} />
          <Route path='/manage-tea' element={<ManagementTea />} />
          <Route path='/manage-type' element={<ManagementType />} />

          <Route path='/post-teas' element={<PostTeas />} />
          <Route path='/post-somethings' element={<PostSomethings />} />
          <Route path='/post-colors' element={<PostColors />} />
          <Route path='/list-colors' element={<ListColor />} />
          <Route path='/update-color' element={<UpdateColor />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
