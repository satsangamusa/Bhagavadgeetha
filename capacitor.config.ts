import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.threesouls.telugu.bhagavadgeetha',
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
