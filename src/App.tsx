import './assets/css/tailwind.css';
import './assets/css/style.css';
import Hero from './components/hero/Hero';
import AppState from './context/AppState';
import Content from './components/content/Content';

const App = () => {

  return (
    <AppState>
      <Hero />
      <Content />
    </AppState>
  );
}

export default App;
