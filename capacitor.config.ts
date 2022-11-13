import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.thraithashakam.bhagavadgeetha.telugu',
  appName: 'భగవద్గీత',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    SplashScreen:{
      launchShowDuration: 4
    }
  }
};

export default config;
