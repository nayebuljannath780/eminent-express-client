import { useEffect } from 'react';

const useTitle = (title ) => {
    useEffect(() => {
        document.title = `${title} - EminentExpress`;
    }, [title])
};



export default useTitle;