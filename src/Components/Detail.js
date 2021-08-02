import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const Detail = (props) => {
  const { id } = useParams();
  const movies = useSelector((state)=> state.movies);

 
  return (
    <Container>
         <VideoContainer>
                {
                    movies && movies.map((movie, key) => (
                        
                            movie.id === parseInt(id)  ? <OuterVideFrame key={key}>
                                <ReactPlayer width='100%' controls url={movie.video_url}/>
                                <div>
                                  <h3>MH - Natu and Betu {movie.title}</h3>
                                </div>
                            </OuterVideFrame> : <p />
                            
                        
                    ))
                }
            </VideoContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const OuterVideFrame = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
export default Detail;