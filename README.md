# Webmaker-Firehose

## This project is inactive (https://learning.mozilla.org/blog/product-update-for-appmaker-and-popcorn-maker)

Webmaker Firehose is a simple app server and React app that displays the latest
makes created on Webmaker.org, and enables them to be featured on Webmaker.org by
admins.

## Setup

Required for local dev:

* [MakeAPI server](https://github.com/mozilla/makeapi)
* [Webmaker login](https://github.com/mozilla/login.webmaker.org) - for login, ensure your account has admin privileges.
* [Webmaker.org server](https://github.com/mozilla/webmaker.org) - for viewing the gallery
* [Make Valet](https://github.com/mozilla/make-valet) - for proxying make url requests
* To create/edit makes, you'll want a webmaker app like [Thimble](https://github.com/mozilla/thimble.webmaker.org)
or [Popcorn](https://github.com/mozilla/popcorn.webmaker.org)

Clone this repo, then run `npm install` to get dependencies set up.

run `cp server/config/defaults.env .env` to create an environment file. Change any
values you need to. The default settings should work out of the box with other webmaker apps.

To perform a build for the current implementation, run `gulp`.

To test the current implementation, run `node server` and
point your browser at [http://localhost:5001](http://localhost:5001)
