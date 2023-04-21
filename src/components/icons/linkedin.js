import React, {useState} from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Linkedin = () => {
    const [onHovered, setOnHovered] = useState(false)
    return (
        <div onMouseOver={(e) => setOnHovered(prevState => prevState = true)} onMouseOut={(e) => setOnHovered(prevState => prevState = false)}>
            {
                !onHovered ?
                    <StaticImage src='../../images/black-linkedin-logo-15915.svg' alt='Linkedin icon' placeholder="blurred"
                                 layout="fixed"
                                 width={20}
                                 height={20}
                    /> :
                    <StaticImage src='../../images/hovered-linkedin.svg' alt='Linkedin icon' placeholder="blurred"
                                 layout="fixed"
                                 width={20}
                                 height={20}
                    />
            }
        </div>
    );
};

export default Linkedin;