import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color:white;
  background-image:url('https://images.hdqwalls.com/download/mkbhd-logo-black-background-5k-jf-1920x1200.jpg');
  .header{
    width:100%;
    display:flex;
    align-items: center;
    

    .headers{
        width:100%;
        color:white;
        display:flex;
        align-items: center;
        
        a{
          display:flex;
          align-items: center;
          color:#fff;
          text-decoration:none;
        }

        .logo{
            margin-left:25px;
            width:60px;
            height: 60px;
        }

        h1{
            font-size:25px;
            margin-left: 5px;
        }
    }
    .options{
        width: 100%;
        display:flex;
        justify-content:flex-end;

        button{
            background-color:transparent;
            color: white;

            &:hover{
                transition: 0.5s;
                color:#ff5351;
            }
        }
        .btnDownload{
            margin-right:25px;

            button{
                background-color:#00aad6;
                color: white;
                font-size:20px;

                &:hover{
                    transform: scale(1.04);
                    transition: 0.5s;
                    color:white;
                }
            }

        }
    }
  
  }

  @media(max-width: 950px){

   
    .header{
      flex-direction: column;
      cursor: pointer;
        
      .headers{
        justify-content:center;
        cursor: pointer;

        .logo{
          margin-left:0px;

        }
      }

      .options{
        width:100%;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        
        a {
          width:100px;
          background:transparent;
          border:none;

          &:hover{
            width:100px;
          }
        }
       
         
          
        

       

        .btnDownload{
         margin-right:0px;
        }
      }

      .btn-info{
        display:flex;
        align-items:center;
        justify-content:center;
      }
    }
  }

 

  @import url('https://fonts.googleapis.com/css?family=Lato:100&display=swap');

body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #5CA4EA;
  overflow: hidden;
}

.container {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  width: 180px;
  height: 60px;
  position: absolute;
}

.btn {
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  transition: 1s ease-in-out;
}

svg {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

.btn:hover {
  transition: 1s ease-in-out;
  background: #4F95DA;
}

.btn:hover svg {
  stroke-dashoffset: -480;
}

.btn span {
  color: white;
  font-size: 18px;
  font-weight: 100;
}
`;