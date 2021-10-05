import React, {useRef, useMemo} from 'react'

const useRefProxy = object => {

    if (!object)
        console.error('\'useRefProxy\' object is mandatory');

    const ref = useRef(object);
    return useMemo(() => {
        return new Proxy(ref,
            {
                get: function(obj, prop) {
                    return obj.current[prop];
                },
                set: function(obj, prop, value) {
                    obj.current[prop] = value;
                    return true;
                }
            });
    }, []);
};

export default useRefProxy;
