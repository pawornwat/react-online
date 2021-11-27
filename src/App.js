import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="logo">
      <Logo></Logo>
      <Header></Header>
      <Footer title="TNI" website="www.facebook.com" address="Bangkok" postcode={10250} isOpen={true}></Footer>
    </div>
  );
}

export default App;
