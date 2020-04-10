#!/bin/bash

wget --quiet --output-document=android-sdk.zip https://dl.google.com/android/repository/sdk-tools-linux-${ANDROID_SDK_TOOLS}.zip
unzip -d android-sdk-linux android-sdk.zip
echo y | android-sdk-linux/tools/bin/sdkmanager "platforms;android-${ANDROID_COMPILE_SDK}" >/dev/null
echo y | android-sdk-linux/tools/bin/sdkmanager "platform-tools" >/dev/null
echo y | android-sdk-linux/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS}" >/dev/null
echo y | android-sdk-linux/tools/bin/sdkmanager "ndk;${ANDROID_NDK}" >/dev/null

yes | android-sdk-linux/tools/bin/sdkmanager --licenses
