import styled from 'styled-components';
// import { Modal } from '@material-ui/core';


export const Container = styled.div`
   width: 100%;

.main{
    width: 100%;

    .title{
        width:100%;
        margin-top: 10px;
        display: flex;
        justify-content: center;

        h1{
            color:#fff;
            font-size: 30px;
        }
    }

    .body{
        width:100%;

        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        img{
            width:50%;
        }

        .infoGame{
            color: #fff;
            width:50%;
            background-color:grey;
            padding:10px;
            border: 2px solid white;

            h2{
                text-align:center;
            }

            
        }
        
    }
}

@media(max-width:768px){
   .main{
        .body{
            img{
                width:100%;
            }

            .infoGame{
                width:90%;
            }
        }

   } 
}

`;