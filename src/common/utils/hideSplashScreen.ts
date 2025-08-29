import BootSplash from 'react-native-bootsplash';

export const hideSplashScreen = async () => {
  await BootSplash.hide({ fade: true });
};
