import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  color:white;
  background-color:#1C252E;
  display:flex;
  justify-content:space-around;


  font-family: 'Roboto', sans-serif;
  
  .main{
    width:100%;
    padding-bottom:20px;

    display:flex;
    flex-direction:column;
    align-items:center;
    
    .item-contact{
      margin-top:10px;

      display:flex;
      align-items:flex-start;
      a{
        width:100%;
        display:flex;
        text-decoration: none;
        color:#fff;
      }
      a:hover{
        color: red;
      }

      p{
        margin-left: 5px;
      }
    }
  }

  @media(max-width: 768px){
    flex-direction:column;
    align-items:center;

  }


 `;