import crypto from 'crypto-js';

const security = {
    encodeMd5: (input) => {
        return crypto.MD5(input).toString();
    },
};

export default security;