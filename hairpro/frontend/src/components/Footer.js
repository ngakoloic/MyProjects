import React from 'react';

const Footer = () => {
    return (
        <div class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
                <li class="nav-item"><a href="section-schedule" class="nav-link px-2 text-body-secondary">Appointment</a></li>
                <li class="nav-item"><a href="section-galeries" class="nav-link px-2 text-body-secondary">Galeries</a></li>
                <li class="nav-item"><a href="section-testimonies" class="nav-link px-2 text-body-secondary">Testimonies</a></li>
                <li class="nav-item"><a href="#section-contact" class="nav-link px-2 text-body-secondary">Contact</a></li>
                <li class="nav-item"><a href="/about" class="nav-link px-2 text-body-secondary">About</a></li>
                {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li> */}
            </ul>
            <p class="text-center text-body-secondary">© 2023 Company, Inc - Developed by  <a href="mailto:bngako@outlook.fr" target='_blank' style={{ textDecoration: 'none' }}>Ngako Loic</a></p>
        </div>
    );
};

export default Footer;