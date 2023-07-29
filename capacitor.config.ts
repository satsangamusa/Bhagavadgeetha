import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.thraithashakam.bhagavadgeetha.telugu',
  appName: 'భగవద్గీత',
  webDir: 'www',
  "server": {
    "allowNavigation": [
        "https://*youtube.com/*"
       
    ]
},
  bundledWebRuntime: false,
  
};

export default config;
