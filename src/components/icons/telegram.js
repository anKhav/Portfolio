import React, {useState} from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Telegram = () => {
    const [onHovered, setOnHovered] = useState(false)
    return (
        <div onMouseOver={(e) => setOnHovered(prevState => prevState = true)} onMouseOut={(e) => setOnHovered(prevState => prevState = false)}>
            {
                !onHovered ?
                    <StaticImage src='../../images/telegram(2).svg' alt='Telegram icon' placeholder="blurred"
                                 layout="fixed"
                                 width={20}
                                 height={20}
                    /> :
                    <StaticImage src='../../images/telegram-hovered.svg' alt='Linkedin icon' placeholder="blurred"
                                 layout="fixed"
                                 width={20}
                                 height={20}
                    />
            }
        </div>
    );
};

export default Telegram;