import { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (!pathname.includes('bxh')) window.scrollTo({ top: 0 });
    }, [pathname]);

    return null;
}

export default memo(ScrollToTop);
