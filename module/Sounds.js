export const Sound = () => {

  const buttonFlorest = new Audio("/sounds/Floresta01.mp3");
  
  
  const soundCardFloresta = ()=>{
    buttonFlorest.play();
    
  }
  
  const soundCardNoite = () =>{ 
    
  }
  

  return {
    soundCardFloresta,
    soundCardNoite
  };
}