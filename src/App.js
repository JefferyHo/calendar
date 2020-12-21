import SiderBar from './components/SiderBar';
import MainContent from './components/MainContent';
import './App.less';

function App() {
  return (
    <div className="App">
      <div className="sider-wpt">
        <SiderBar />
      </div>
      <div className="content-wpt">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
