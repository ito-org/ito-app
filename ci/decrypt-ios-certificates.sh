#!/bin/sh

gpg --quiet --batch --yes --decrypt --passphrase="$IOS_CERTIFICATES_PASSPHRASE" --output ./ios-certificates/dev-provisioning.mobileprovision ./ios-certificates/dev-provisioning.mobileprovision.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$IOS_CERTIFICATES_PASSPHRASE" --output ./ios-certificates/dev-certificate.p12 ./ios-certificates/dev-certificate.p12.gpg