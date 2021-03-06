# Pinafore [![Build Status](https://travis-ci.org/nolanlawson/pinafore.svg)](https://travis-ci.org/nolanlawson/pinafore) [![Greenkeeper badge](https://badges.greenkeeper.io/nolanlawson/pinafore.svg)](https://greenkeeper.io/)

An alternative web client for [Mastodon](https://joinmastodon.org), focused on speed and simplicity.

Pinafore is available at [pinafore.social](https://pinafore.social). Beta releases are at [dev.pinafore.social](https://dev.pinafore.social).

See the [user guide](https://github.com/nolanlawson/pinafore/blob/master/docs/User-Guide.md) for basic usage. See the [admin guide](https://github.com/nolanlawson/pinafore/blob/master/docs/Admin-Guide.md) if Pinafore cannot connect to your instance.

For updates and support, follow [@pinafore@mastodon.technology](https://mastodon.technology/@pinafore).

## Browser support

Pinafore supports the latest versions of the following browsers:

- Chrome
- Edge
- Firefox
- Safari

Compatible versions of each (Opera, Brave, Samsung, etc.) should be fine.

## Goals and non-goals

### Goals

- Support the most common use cases
- Small page weight
- Fast even on low-end devices
- Accessibility
- Offline support in read-only mode
- Progressive Web App features
- Multi-instance support
- Support latest versions of Chrome, Edge, Firefox, and Safari

### Secondary / possible future goals

- Support for Pleroma or other non-Mastodon backends
- Serve as an alternative frontend tied to a particular instance
- Support for non-English languages (i18n)
- Offline search

### Non-goals

- Supporting old browsers, proxy browsers, or text-based browsers
- React Native / NativeScript / hybrid-native version
- Android/iOS apps (using Cordova or similar)
- Full functionality with JavaScript disabled
- Emoji support beyond the built-in system emoji
- Multi-column support
- Admin/moderation panel
- Offline support in read-write mode (would require sophisticated sync logic)

## Building

Pinafore requires [Node.js](https://nodejs.org/en/) v8+ and [Yarn](https://yarnpkg.com).

To build Pinafore for production, first install dependencies:

    yarn --production --pure-lockfile

Then build:

    yarn build

Then run:

    PORT=4002 node server.js

### Docker

To build a Docker image for production:

    docker build .
    docker run -d -p 4002:4002 [your-image]

Now Pinafore is running at `localhost:4002`.

### Updating

To keep your version of Pinafore up to date, you can use `git` to check out the latest tag:

    git checkout $(git tag -l | sort -Vr | head -n 1)

### Exporting

Pinafore is a static site. When you run `yarn build`, static files will be 
written to `__sapper__/export`.

In theory you could host these static files yourself (e.g. using nginx or Apache), but 
it's not recommended, because:

- You'd have to set the [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) headers yourself,
which are an important security feature.
- Some routes are dynamic and need to be routed to the correct static file.

## Developing and testing

See [CONTRIBUTING.md](https://github.com/nolanlawson/pinafore/blob/master/CONTRIBUTING.md) for 
how to run Pinafore in dev mode and run tests.

## Changelog

For a changelog, see the [GitHub releases](http://github.com/nolanlawson/pinafore/releases/).

For a list of breaking changes, see [BREAKING_CHANGES.md](https://github.com/nolanlawson/pinafore/blob/master/BREAKING_CHANGES.md).

## What's with the name?

Pinafore is named after the [Gilbert and Sullivan play](https://en.wikipedia.org/wiki/Hms_pinafore). The [soundtrack](https://www.allmusic.com/album/gilbert-sullivan-hms-pinafore-1949-mw0001830483) is very good.
