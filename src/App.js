
import './App.css';
import StyledButton from './components/Button/Button';

// All Styled Componenets re in src/components

function App() {
  return (
    <div className="App">

    <StyledButton onClick={() => alert("You Clicked me")} >
      Styled Button
   </StyledButton>

<div><br/></div>

   <StyledButton 
   anotherprop={'OK'}
   onClick={() => alert("You Clicked me")

   }
   >
      Styled Button with a prop
   </StyledButton>


    </div>
  );
}

export default App;
