# React Native app for iOS and Android to browse episodes of a tv show

## Quickstart

Built with react-native-cli (not with Expo/create-react-native-app).

You will need react-native-cli to run the app, as well as Xcode, Android Studio, etc. See https://facebook.github.io/react-native/docs/getting-started.html tab "building projects with native code".

Install the dependencies:

```bash
npm install
```

Update the server IP address in /components/ListScreen.js (lines 18 and 37)
If the server is on localhost, you can just insert "localhost" to run the iOS simulator.
To run the Android emulator, you need to insert the IP address (e.g. on Mac: system preferences --> network --> the IP address is here).

### iOS

To run the iOS simulator:

```bash
react-native run-ios
```

If you want to use a remote server instead of a local one, add an exception for unsecured http calls in /ios/ShowEpisodes/info.plist

### Android

To run on Android you need, depending on your configuration, to either:
a) change the path in /android/local.properties with your username
or
b) remove the /android/local.properties file

Start the Android emulator (easy way: start it in Android Studio).

To run the app on the Android emulator:

```bash
react-native run-android
```

## To do
Use environment variables for the server address.
Remove the onPress opacity effect in the ItemDetailsScreen.
Handle offline status and fetching errors.
