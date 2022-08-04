import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import './Footer.css';

const Footer = () => {

    return(
        <div className="footer">
            <div>
                <Facebook />
                <Instagram />
                <YouTube />
            </div>

            <div>
                <p>Info</p>
                <p>Terms of Use</p>
                <p> Privacy Policy</p>
            </div>

            <p> &copy; 2022 - Fabrizio Hotkowicz Cassani</p>
        </div>
    )
}

export default Footer