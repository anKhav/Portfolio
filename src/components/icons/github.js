import React, {useState} from 'react';
import { StaticImage } from "gatsby-plugin-image"


const Github = () => {
    const [onHovered, setOnHovered] = useState(false)
    return (
        <div onMouseOver={(e) => setOnHovered(prevState => prevState = true)} onMouseOut={(e) => setOnHovered(prevState => prevState = false)}>
            {
                !onHovered ?
                    <StaticImage src='../../images/github-logo-6532.svg' alt='Github icon' placeholder="blurred"
                                 layout="fixed"
                                 width={20}
                                 height={20}
                    /> :
                    <StaticImage src='../../images/github-hovered.svg' alt='Github icon' placeholder="blurred"
                                 layout="fixed"
                                 width={20}
                                 height={20}
                    />
            }
        </div>
    );
};

export default Github;