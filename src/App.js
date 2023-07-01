import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';

function App() {
  return (
    <>
    <Navbar title="Learn" content="React Basics"/>
    <div className='container'>
      <TextArea heading="Type any Value"/>
    </div>
    </>
  );
}

export default App;
