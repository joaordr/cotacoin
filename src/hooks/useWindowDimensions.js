import { useState, useEffect } from 'react';

export function useWindowDimensions() {
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    function updateSize() {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();
    }, []);

    return size;
}