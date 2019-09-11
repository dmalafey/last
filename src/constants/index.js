const PATH = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const AUTH_KEY = 'AIzaSyD5zG_MjGrPAtdodxo4sDFILWfQWg9AWx4';
const SIGN_UP = '/signupNewUser?key=';
const VERIFY_PASSWORD = '/verifyPassword?key=';
export const SIGN_UP_PATH = `${PATH}${SIGN_UP}${AUTH_KEY}`;
export const VERIFY_PASSWORD_PATH = `${PATH}${VERIFY_PASSWORD}${AUTH_KEY}`;

export const SIGN_UP_FORM = 'SIGN_UP_FORM';
