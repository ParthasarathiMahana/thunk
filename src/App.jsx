import './App.css';
import { Provider } from 'react-redux';
import List from './components/List';
import { myStore } from './redux/store';

function App() {

  return (
    <>
      <Provider store={myStore}>
        <List/>
      </Provider>
    </>
  )
}

export default App
