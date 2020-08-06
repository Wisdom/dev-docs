---
title: Recording HTML Canvas
preview: ''

createdAt: 2018-07-5 9:02:52
updatedAt: 2018-07-11 12:42:57

seo:
  title: ''
  desc: ''

tags:

author: ''
public: True
---
import Code from '../../../../src/common/code/'



`wisdom('takeCanvasSnapshot')`

Takes a snapshot of any canvas elements found on screen.

### Usage

<Code language='javascript' title='Take Canvas Snapshot' code={`
// Take snapshot when main canvas element is clicked;
const canvas = document.getElementById('appCanvas');
canvas.on('click', () => wisdom('takeCanvasSnapshot') );
`}/>

### Arguments

This function has no arguments.
