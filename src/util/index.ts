import { useEffect, useState } from "react";

const Util = {
    isObjectEmpty: (object: any) => {
        if (!object) return true;
        if (Object.keys(object).length === 0) return true;
        return false;
    },
    isClientSide: () => typeof window !== "undefined",
    useHeight: () => {
        const [height, setHeight] = useState<string | number>('100vh');

        useEffect(() => {
            const handleResize = () => setHeight(window.innerHeight);
            setHeight(window.innerHeight);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return height;
    },
    useWidth: () => {
        const [width, setWidth] = useState<string | number>('100vw');
        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            setWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return width;
    }
}

export default Util;