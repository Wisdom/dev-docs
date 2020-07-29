---
title: 'Browser Performance Overview'
sidebar_label: 'Browser Performance'
preview: ''

createdAt: 2018-07-5 9:02:52
updatedAt: 2018-07-11 12:42:57

seo:
  title: ''
  desc: ''

tags:
  - enterprise

author: 'John Gracey'
public: True
---

Wisdom records asynchronous HTML DOM changes.
This means that Wisdom only records a small fraction of a webpage’s resources.
Non-HTML resources are recorded server side, and loaded during replay.
Typically you can expect less than 100KB of data to be uploaded over the course of a user's browsing session.
As Wisdom merely records HTML and browser events, CPU consumption used is typically less than 0.5% at any given time.

In terms of loosely benchmarking browser performance impact,
Wisdom operates smoothly when we tested 3 simultaneous co-browsing sessions running within a single browser tab,
with the same web browser viewing the replay side of those three cobrowing sessions

The Wisdom team also has developed an internally used Chrome Extension that injects our recording script into many (Whitelisted) websites.
The team team has been regularly using this script since March 2017 in benchmarking popular websites
like Wall Street Journal, HackerNews, StackOverflow, GitHub, Facebook, Reddit and Imgur.
The team has not perceived any performance or user experience degradation.

### Scripts

The main Wisdom snippet (https://script.getwisdom.io/v1) is scalably hosted on
Amazon Web Service’s CloudFront CDN servers and served with appropriate caching headers.
This pushes the main Wisdom script to 71 edge locations around the world to maximize performance.
The Wisdom script is typically served within 16ms for the first time, and 3.8ms thereafter through persistent caching.

The script is GZIP compressed to 66KB.
In the short term future, we expect to reduce this size to around 50KB. Most of the script size is attributed to browser polyfills for old Internet Explorer versions.

The script is inline with the sizes of other compressed popular web framework scripts:

Script | Size
--- | ---
Ember 1 | 123KB
Angular 2 | 111KB
__Wisdom__ | __66KB__
React 15 + Router | 52KB
Bootstrap 3 + Theme | 32KB

### Data Collection
Recorded data is delivered to Wisdom’s load balanced servers (producer.getwisdom.io) using SocketIO.
SocketIO progressively enhances server connections to best utilize browser capabilities, like Web Sockets
