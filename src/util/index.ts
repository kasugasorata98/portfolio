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
        const handleResize = () => setHeight(window.innerHeight);
        useEffect(() => {
            setHeight(window.innerHeight);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, [handleResize]);
        return height;
    },
    useWidth: () => {
        const [width, setWidth] = useState<string | number>('100vw');
        const handleResize = () => setWidth(window.innerWidth);
        useEffect(() => {
            setWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, [handleResize]);
        return width;
    }
}

export default Util;