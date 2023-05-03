import crypto from 'crypto-js';

const security = {
    encodeMd5: (input: string) => {
        return crypto.MD5(input).toString();
    },
};

export default security;