import Carousel from 'react-bootstrap/Carousel';
import { backgroundImage } from '../data/functions';

function Mycarousel() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item
                style={{
                    width: '100%',
                    height: '400px',
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center',
                    backgroundImage: `url(${backgroundImage.img_2})`
                }}
            >
                <Carousel.Caption>
                    <h5>Make yourself beautiful</h5>
                    <p>Our professional hairdressers are at your service!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                style={{
                    width: '100%',
                    height: '400px',
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center',
                    backgroundImage: `url(${backgroundImage.img_3})`
                }}
            >
                <Carousel.Caption>
                    <h5>Book an appointment in one click</h5>
                    <p>We're the reference in hairstyling</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Mycarousel;