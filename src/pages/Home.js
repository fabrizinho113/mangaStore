import Carousel from "better-react-carousel";
import { motion } from "framer-motion"
import './styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome!</h1>
            <div className="carousel">
            <Carousel cols={1} rows={1} gap={10}>
            <Carousel.Item>
                <img width="100%" src="./assets/img/carousel-one.png" alt="img-one"/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="./assets/img/carousel-two.png" alt="img-two"/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="./assets/img/carousel-three.png" alt="img-three"/>
            </Carousel.Item>
            </Carousel>
            </div>

            <div className="sectionOne">
                <div>
                <h2>Choose the manga you want and the amount you wish</h2>
                <p>From Chainsaw Man to Shingeki no Kyojin, you have a good variety in genres to choose!</p>
                </div>

                <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            >
                <img className="section-img" src="./assets/img/section-one-img.png" alt="section-img-one"/>
            </motion.div>
                

            </div>

            <div className="sectionTwo">
            <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            >
                <img className="section-img" src="./assets/img/section-two-img.png" alt="section-img-two"/>
            </motion.div>
                <div>
                <h2>Buy your Light Novels here!</h2>
                <p>You can find your favorite Light Novel to read such as Konosuba or Overlord!</p>
                </div>
                
            </div>

            <div className="sectionThree">
                <div>
                <h2>Can't find what you're looking? No problem!</h2>
                <p>More Mangas and Light Novels will be available soon!</p>
                </div>
                <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            >
                <img className="section-img" src="./assets/img/section-three-img.png" alt="section-img-three"/>
            </motion.div>
            </div>
        </div>
        
    )
}

export default Home