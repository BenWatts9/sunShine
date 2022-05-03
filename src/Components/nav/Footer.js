import "./Footer.css"

export const Footer = () => {
    return (
        <>
        <div className="footer-container">

            <div className="footer-logo-container">
            <a
                className="App-link"
                href="https://twitter.com/CrancePantz"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img className="footer-logo" src={`/images/TwitterLogo.png`} alt="Twitter Logo" />
            </a>
            
            <a
                className="App-link"
                href="https://discord.com/channels/Crance#3953"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img className="footer-logo" src={`/images/DiscordLogo.png`} alt="Discord Logo" />
            </a>
            <a
                className="App-link"
                href="mailto:brandolphwatts@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img className="footer-logo" src={`/images/EmailLogo.png`} alt="Discord Logo" />
            </a>
            </div>
            <hr className="footerline"></hr>
            <div className="footer-copy">
            &copy; Ben Watts
            </div>
            
        </div>


        </>
    )
}