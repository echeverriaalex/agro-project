import { HeroContainerStyled, ImageContainerStyled, TextContainerStyled } from "./HeroSyles";

const Hero = ({children}) => {
  return (
    <HeroContainerStyled>
        <TextContainerStyled>
            <h2>Monitorea cultivos desde donde estés</h2>
            <p>Innovando con herramientas digitales para la agricultura en tiempo real al alcance de tus manos.</p>
        </TextContainerStyled>
        <ImageContainerStyled>
            <img src="https://cdn.agroempresario.com/images/posts/e980b4c3954b032d17da2c37eeedfe8f952113bb17c5de5e_840.jpg" alt="Hero Background" />
        </ImageContainerStyled>
        {children}
    </HeroContainerStyled>
  );
};
export default Hero;