import { useState, useEffect } from "react";

const useIsMobile = () => {
    const desktopThreshold = 1200;

    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < desktopThreshold);
        };

        window.addEventListener("resize", handleResize);
        // Initial check
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;
