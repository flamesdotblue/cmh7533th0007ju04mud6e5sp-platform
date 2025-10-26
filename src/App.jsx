import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
