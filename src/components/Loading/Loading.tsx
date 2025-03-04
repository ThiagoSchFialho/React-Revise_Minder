import React, { useEffect, useRef } from 'react';
import { leapfrog } from 'ldrs';
import { useTheme } from '../../contexts/ThemeContext';
import { LoadingContainer } from './styles';

leapfrog.register();

const Loading: React.FC = () => {
    const { theme } = useTheme();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.innerHTML = '';

            const loader = document.createElement('l-leapfrog');
            loader.setAttribute('size', '40');
            loader.setAttribute('speed', '2.5');
            loader.setAttribute('color', theme === 'dark' ? 'white' : '#171823');
            ref.current.appendChild(loader);
        }
    }, [theme]);

    return <LoadingContainer ref={ref} />;
};

export default Loading;
