// import { useState } from 'react'
//
//
// interface WindowSize {
//     width: number
//     height: number
// }
//
// export function useWindowSize(): WindowSize {
//     const [windowSize, setWindowSize] = useState<WindowSize>({
//         width: 0,
//         height: 0,
//     })
//
//     const handleSize = () => {
//         setWindowSize({
//             width: window.innerWidth,
//             height: window.innerHeight,
//         })
//     }
//
//     useEventListener('resize', handleSize)
//
//     // Set size at the first client-side load
//     useIsomorphicLayoutEffect(() => {
//         handleSize()
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     return windowSize
// }
import {useState, useEffect} from 'react';

type Size = {
    width: number | undefined;
    height: number | undefined
}

export function useWindowSize(): Size {

    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

