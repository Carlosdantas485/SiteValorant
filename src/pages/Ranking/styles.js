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
            justify-content:center;
            align-items:center;

           .div-img{
        
                width:50%;
            
                img{
                    width:100%;
                }
           }
        }
    }
`;