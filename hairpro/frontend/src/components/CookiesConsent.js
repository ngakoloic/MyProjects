import React from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";

const CookiesConsent = () => {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="myAppCookieConsent"
                containerClasses="cookie-consent-container"
                buttonClasses="cookie-accept-button"
                declineButtonClasses="cookie-decline-button"
                contentClasses="cookie-content"
                expires={150}
                enableDeclineButton
                onDecline={() => {
                    console.log("Cookies declined");
                }}
                acceptOnScroll
                acceptOnScrollPercentage={50}
                onAccept={() => {
                    console.log("Cookies accepted by scrolling");
                }}
            >
                We use cookies to personalize content and ads, to provide social media features, and to analyze our traffic.
            </CookieConsent>
        </div>
    );
};

export default CookiesConsent;