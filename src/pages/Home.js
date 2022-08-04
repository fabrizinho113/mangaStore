import Carousel from "better-react-carousel";
import './styles/Home.css';

const Home = () => {
    return (
        <div className="carousel">
            <Carousel cols={1} rows={1} gap={10} loop>
            <Carousel.Item>
                <img width="100%" src="https://via.placeholder.com/1920x1080" alt="img-one"/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://via.placeholder.com/1920x1080" alt="img-two"/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://via.placeholder.com/1920x1080" alt="img-three"/>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home