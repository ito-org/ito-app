# ito React Native App
![Android Build](https://github.com/ito-org/react-native-app/workflows/Android/badge.svg) 
[![Android Downloads](https://img.shields.io/github/downloads/ito-org/react-native-app/total?color=%237dc6b6&logo=Android)](https://github.com/ito-org/react-native-app/releases/latest/download/app-release.apk)
![License](https://img.shields.io/github/license/ito-org/react-native-app)

## Try it out
You can find Android alpha releases on our releases page. [Click here to download the latest release.](https://github.com/ito-org/react-native-app/releases/latest/download/app-release.apk) For the app to recognize other devices, make sure to enable Bluetooth.

## Development
### User flow

Take a look at [the user flow on Figma](https://www.figma.com/file/fcDmzECUHFCrem9NBrzZSv/Ito-App?node-id=225%3A218). We have implemented the major part of those screen mockups.

Also [try our click dummy](https://www.figma.com/proto/fcDmzECUHFCrem9NBrzZSv/Ito-App?node-id=225%3A245&viewport=994%2C417%2C0.3995259702205658&scaling=scale-down) for a quick demonstration.

### Android
Select "React Native CLI Quickstart" and your OS on [Environment Setup React-Native](https://reactnative.dev/docs/environment-setup).

Don't forget to install the npm dependencies:
```bash
npm install
```

To start the React Native Metro server use:
```bash
npm run start
```

To build the source and install use:
```bash
npm run android
```
