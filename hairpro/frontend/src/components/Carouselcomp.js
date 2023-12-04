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
                    backgroundImage: `url(${backgroundImage.img_1})`
                }}
            >
                {/* <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                    width="800" height="400" xmlns="http://www.w3.org/2000/svg"
                    role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#f5f5f5"></rect> */}
                {/* <text x="50%" y="50%" fill="#aaa" dy=".3em">First slide</text> */}
                {/* </svg> */}
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
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
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Mycarousel;