import { useState } from "react"

// component chứa phần tử có hiệu ứng khi hover vào
const HoverImage = ({ children }) => {
    const [opacity, setOpacity] = useState(1);

    return <div style={{ opacity: opacity, transition: '.3s' }}
        onMouseEnter={() => setOpacity(.75)}
        onMouseLeave={() => setOpacity(1)}>
        {children}
    </div>
}

export default HoverImage;