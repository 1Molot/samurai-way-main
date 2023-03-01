import React from 'react';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
            <Footer/>
        </div>
    );
}

// function App() {
//   return (
//     <div className="App">
//      Hello, samurai! Let's go!
//     </div>
//   );
// }

export default App;
