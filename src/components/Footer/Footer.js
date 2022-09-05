import { Facebook, GitHub, Instagram, YouTube } from "@mui/icons-material";
import './Footer.css';

const Footer = () => {

    return(
        <div className="footer">
            <div className="icons">
                <a href="https://www.facebook.com/"><Facebook /></a>
                <a href="https://www.instagram.com/"><Instagram /></a>
                <a href="https://www.youtube.com/"><YouTube /></a>
                <a href="https://github.com/fabrizinho113/mangaStore"><GitHub /></a>
            </div>

            <div className="textContent">
                <p>Info</p>
                <p>Terms of Use</p>
                <p> Privacy Policy</p>
                
            </div>

            <p> &copy; 2022 - Fabrizio Hotkowicz Cassani</p>

            
        </div>
    )
}

export default Footer