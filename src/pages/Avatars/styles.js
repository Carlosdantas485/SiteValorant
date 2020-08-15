import styled from 'styled-components';
import { Modal } from '@material-ui/core';


export const Container = styled.div`
    width: 100%;

    .main{
        width: 100%;

        .title{
            margin-top: 10px;
            display: flex;
            justify-content: center;

            h1{
                color:#fff;
                font-size: 30px;
            }
        }

        .body{
            display:flex;
            justify-content:center;
            flex-direction:row;
            flex-wrap: wrap;
            margin: 10px 20px;

            .avatar{
                width: 45%;
                padding: 10px;
                border: 1px solid #fff;
                box-shadow:1px 1px 8px grey; 
                margin: 10px;
                background-image: url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcb5e329fe91bc77b/5ee7d0c700210d383b3d3000/VALORANT_Maps_Article_Split_Banner.jpg');
                background-size:100%;

                display:flex;
                flex-direction:row;
                justify-content:flex-start;
                align-items:center;
                flex-wrap:wrap;


                img{
                    width:100px;
                    height:100px;
                    border-radius: 50%;
                }
               
                .infoAvatar{
                    color:#fff;
                    margin-left:15px;

                    h2{
                        margin-top:0;
                        font-size: 25px;
                    }

                    h3{
                        padding:10px;
                        font-size: 15px;
                    }
                }

                .btn-info{
                    width:100%;

                    display:flex;
                    justify-content:flex-end;
                    
                    button{
                        border:none;
                        background:red;
                        width:100px;
                        height:40px;
                        border-radius:10px;
                        color:white;

                        &:hover{
                            transition:0.3s;
                            transform: scale(1.05);
                        }
                    }

                }
            }
        }
    } 
    
    @media(max-width: 1260px){
      
        .main{ 

            .body{
                .avatar{
                    width: 100%;
                
                }
            }
        }
    }





 
`;


export const ModalAvatar = styled(Modal)`
    display: flex;
    justify-content: center;  
    align-items: center;  
    border: none;
    .containerModal{
        width: 65vw;
        margin:50px;
        outline:0;
        display: flex;
        flex-direction:column;
        justify-content: center;  
        align-items: center;  
        
       
            img{
                width: 100%;
                border-radius:20px;
     
            }
        .btn-modal{
            width: 100%;
            display:flex;
            justify-content:flex-end;
            
            button{
                margin-bottom: 10px;
                width:100px;
                height:40px;
                border-radius:8px;
                background-color: green;
                color:#fff;
                &:hover{
                    transition:0.3s;
                    transform: scale(1.05);
                }
            }
        }
    }
    @media(max-width:1200px){
        .containerModal{
            margin:0;
            width: 100%;
        }
    }
    
`;
