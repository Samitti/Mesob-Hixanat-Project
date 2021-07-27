import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Detail = (props) => {
  const { id } = useParams();
  const movies = useSelector((state)=> state.movies);

 
  return (
    <Container>
         <div>
                {
                    movies && movies.map((movie, key) => (
                        <div key={key}>
                            {movie.id === parseInt(id)  ? <div >
                                <img src={"/images/MesobThumbnails/" + movie.thumb_nail} alt={movie.title} />
                            </div> : <p />}
                            
                        </div>
                    ))
                }
            </div>
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

export default Detail;