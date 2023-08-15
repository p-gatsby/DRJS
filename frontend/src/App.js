import { Container } from 'react-bootstrap';

import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

import HomePage from './pages/HomePage.js';

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
