#!/bin/sh

mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles

cp ./ios-Certificates/dev-provisioning.mobileprovision ~/Library/MobileDevice/Provisioning\ Profiles/$IOS_PROVISIONING_PROFILE_GUID.mobileprovision

security create-keychain -p "" build.keychain
security import ./ios-certificates/dev-certificate.p12  -t agg -k ~/Library/Keychains/build.keychain -P "" -A

security list-keychains -s ~/Library/Keychains/build.keychain
security default-keychain -s ~/Library/Keychains/build.keychain
security unlock-keychain -p "" ~/Library/Keychains/build.keychain

# https://stackoverflow.com/questions/16550594/jenkins-xcode-build-works-codesign-fails/19550453#19550453
security set-key-partition-list -S apple-tool:,apple: -s -k "" ~/Library/Keychains/build.keychain
