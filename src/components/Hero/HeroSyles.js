import styled from "styled-components";

export const HeroContainerStyled = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #750808c9;
    max-height: 500px;
    gap: 20px;
    padding: 40px 20px;

    @media (max-width: 576px){
        flex-direction: column;
        padding: 20px 10px;
        max-height: unset;
    }
`;

export const HeroBgStyled = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    /*
    align-items: center;
    */
    justify-content: center;
    gap: 20px;
    color: #fff;


    h2{
        font-size: 4rem;
        position: relative;
        padding-left: 20px;

        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background-color: #fff;
        }
    }

    p{
        font-size: 1.7rem;
        padding-left: 20px;
    }

    @media (max-width: 576px){
        h2{
            font-size: 2.5rem;
        }

        p{
            font-size: 1.2rem;
        }
    }
`;

export const ImageContainerStyled = styled.div`
    width: 80%;
    max-height: 100%;
    border-radius: 10px;

    /*
    -o-object-fit: cover;
    object-fit: cover;
    background-size: cover;
    */

    img{
        border-radius: 10px;
        max-width: 100%;
        max-height: 100%;
        /*-o-object-fit: cover;
        object-fit: cover;
        */
    }

    @media (max-width: 576px){
        width: 100%;
    }
`;