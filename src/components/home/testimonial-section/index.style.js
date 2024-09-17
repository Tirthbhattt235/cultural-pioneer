import styled from 'styled-components'

const Section = styled.section`
.overlay{
    background-color: #ff5e62;
opacity: 0.09;
}

svg{
    color: #ff5e62;
}
    background-repeat: no-repeat;
    background-size: cover;
      /* background-size: 100%; */
      background-position:center;
      display: flex;
      justify-content: center;
      align-items: center;
      .play-btn{
      height: 40px;
      width: 40px;
      
      content: '';
    /* position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0; */
    box-shadow: 0 0 rgb(255, 0, 10, 0.3), 0 0 0 2px rgb(255, 0, 10, 0.3), 0 0 0 2px rgb(255, 0, 10, 0.3);
    background-color: #ff5e62;
    border-radius: 50%;
    z-index: -1;
    -webkit-transition:#ff5e62;
    transition:#ff5e62;
    animation: vid-icon-wave 2s linear infinite;
}
@keyframes vid-icon-wave {
    to {
        box-shadow: 0 0 0 5px rgb(255, 0, 10, 0.3), 0 0 0 10px rgb(255, 0, 10, 0.3);
    }
}
.img-1{
    position: relative;
    display: inline-block;
    width: 110px;
    height: 60px;
    bottom: 40px;
}
@media screen and (max-width: 1024px) {
    .img-1{
        bottom: 25px;
width: 75px;
img{
    width: 75px;
    height: 80px;
    margin-left: 5px;
}

    }
    h2{
        line-height: 50px;
    }

  
}
.img-2{
    position: relative;
    display: inline-block;
    width: 160px;
    max-width: 100%;

}
.img-3{
    width: 40px;
    height: 40px;
    margin-left: 15px;
    margin-right: 15px;
    position: relative;
    bottom: 12px;
}
.author-sign{
    margin: 30px 0px;
}
h2{
    line-height: 75px;
}

.text{
    padding-left: 30px;
    padding-right: 30px;
}
@media screen and (max-width: 1024px) {
    h2{
        line-height: 60px;
    }
}
@media screen and (max-width: 767px) {
    h2{
        line-height: 52px;
    }
    .img-3{
        bottom: 4px;
    }
    .text{
    padding-left: 20px;
    padding-right: 20px;
}
}
@media screen and (max-width: 425px) {
    h2{
        line-height: 46px;
    }
}

`;
export default Section;