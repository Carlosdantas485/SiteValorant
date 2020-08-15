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

            .box{
                color:#fff;
                width:50%;
                background-color: #F84255;
                background-size:100%;
                display:flex;
                flex-direction:column;
                align-items:center;

                h2{
                    color:#ffff;
                }

               .box-input{
                    width:100%;
                    display:flex;
                    align-items:center;
                    flex-direction:column;
                    .username-title{
                        width:60%;
                    }

                    input{
                        width:100%;
                        height:25px;
                        border:none;
                        border-bottom:2px solid black;
                        outline:0;
                    }
                }

                button{
                    margin-top: 20px;
                    width:100px;
                    height:40px;
                    font-size:15px;
                    font-weight:bold;
                }

                .options{
                    width:100%;
                    display:flex;
                    justify-content:space-around;

                    a{
                        color: #fff;
                        text-decoration:none;
                        .recover{
                            text-decoration:underline;
                        }
                    }

                    a:hover{
                        color:yellow;
                    }
                }
            }
        }
    }

`;