import styled from 'styled-components'
const Section = styled.section`
display: flex;
flex-direction: row;
flex-wrap:wrap;
column-gap: 15px;
.img-container{
      display: flex;
      justify-content: center;
      align-items: center;
     img{
      /* max-width: 800px; */
      max-height: 800px;
     }
     .icon-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
  transition: all 0.3s linear 0s;
opacity: 0;
svg{  
  position: absolute;
  margin-bottom: 20px;



}
.overlay-bg{}
     }
     .icon-wrapper::before{
    content: '';
    width: 145px;
    height: 122px;
    left: 6px;
    top: 20px;
    background-color: var(--wdtAccentTxtColor);
    mask-image: url('/assets/wp-content/themes/printme/assets/images/Insta-Mask-Icon.svg');
    mask-size: cover;
    mask-position: center center;
    mask-repeat: no-repeat;
    -webkit-mask-image: url('/assets/wp-content/themes/printme/assets/images/Insta-Mask-Icon.svg');
   
      
     }
}
.overlay-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index:-1;
    opacity: 0;
    background: linear-gradient(45deg, #ff5e62,#fec983);
  }
.img-container:hover{
  .icon-wrapper{
    z-index: 3;
    opacity: 1;
    transition: all 0.3s linear 0s;
    mask-image: url('/assets/wp-content/themes/printme/assets/images/Insta-Mask-Icon.svg');
position: relative;
svg{
  color:#ff5e62;
}
  }
  .overlay-bg{
    opacity: 0.7;
    transition: all 0.3s linear 0s;
    z-index: 1;
  }
}

`;
export default Section 