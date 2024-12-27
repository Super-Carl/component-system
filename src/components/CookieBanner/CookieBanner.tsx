import styles from "./CookieBanner.module.scss";

const CookieBanner = ({ acknowledged, /*setAcknowledge*/ }: any) => {
    return (
        <div className={styles.banner}>
            <span>
                We use cookies to improve your experience and for marketing. <br /> By continuing to use this website, you imply your consent to our
                use.
            </span>
            <span>
                Read our
                <a style={{ display: "flex", margin: "0 5px" }} href="#" target="_blank" rel="noopener noreferrer">
                    cookie policy
                </a>
                here.
            </span>

            <button
                style={{
                    backgroundColor: acknowledged ? "unset" : "whitesmoke",
                    border: acknowledged ? "solid 1px #f0b90b" : "solid 1px transparent",
                    fontSize: acknowledged ? 24 : 16,
                    pointerEvents: acknowledged ? "none" : "auto",
                }}
                className={styles.acknowledgeButton}
                /*onClick={acknowledged ? null : () => setAcknowledge(true)}*/>
                {acknowledged ? "👍" : "I Acknowledge"}
            </button>
        </div>
    );
};

export default CookieBanner;
