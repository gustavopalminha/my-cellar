import NewBottle from './components/NewBottle';
import BottleList from './components/BottleList';
import BottlesContextProvider from './store/bottles-context';
import Header from './components/Header';

function App() {
  return (
    <BottlesContextProvider>
      <Header />
      <NewBottle />
      <BottleList />
    </BottlesContextProvider>
  );
}

export default App;
