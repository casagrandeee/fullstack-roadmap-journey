import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/images/facebook.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/images/instagram.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Logo" />
            </section>
            <section>
                <p>
                    Developed by Yan Nicolas Casagrande
                </p>
            </section>
        </footer>
    )
}

export default Footer