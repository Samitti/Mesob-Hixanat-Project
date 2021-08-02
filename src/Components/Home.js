import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import NewMesob from "./NewMesob";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { getMoviesAsync } from "../redux/movieSlice";


const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    
    useEffect(() => {
        dispatch(getMoviesAsync());  
       
    }, [userName]);

    return(
        <Container>
            <ImgSlider />
            <Viewers />
            <NewMesob />
        </Container>
    );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
   }
`;
export default Home;
