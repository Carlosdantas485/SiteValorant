import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
  }
  
   body {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        background-image:url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG' );
    }

    button {
        cursor: pointer;
        width: 100px;
        height: 50px;
        font-size: 15px;
        font-weight: bold;
        border: none;
        outline:0;
        padding:0;
        
    }

    p{
        margin:0;
    }

    
/* width */
::-webkit-scrollbar {
    width: 10px;
    }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: black;
    
    }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(165, 165, 165);
    border-radius: 50px;
    }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(255, 255, 255);
    }






`;
