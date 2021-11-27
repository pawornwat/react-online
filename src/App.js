import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <Logo></Logo>
      <Header></Header>
      <Footer title="Tni" website="www.facebook.com" address="Bangkok" postcode={10250} isOpen={true}></Footer>
    </>
  );
}

export default App;
