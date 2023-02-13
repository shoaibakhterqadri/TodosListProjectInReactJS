import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';


function App() {
  let todos=[
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go to the market to get this job done",
    },
    {
      sno:2,
      title:"Go to the market2",
      desc:"You need to go to the market2 to get this job done",
    },
    {
      sno:3,
      title:"Go to the market3",
      desc:"You need to go to the market3 to get this job done",
    },
  ]
  return (
   <>
   <Header title="My Todos List" searchBar={false}/>
   <Todos todos={todos}/>
   <Footer/>
   </>
  );
}

export default App;
