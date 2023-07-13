import { Magic } from 'magic-sdk';
const magic = new Magic("pk_live_3EF0745F6C618962");

export const checkUser = async (cb) => {
  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn) {
    const user = await magic.user.getMetadata();
    console.log('loggedIN')
    return cb({ isLoggedIn: true, email: user.email });
  }
  return cb({ isLoggedIn: false });
};

export const loginUser = async (email) => {
  await magic.auth.loginWithEmailOTP({ email });
};

export const logoutUser = async () => {
  await magic.user.logout();
};