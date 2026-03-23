---
layout: post
title:  "Compiling Wave Terminal for Windows ARM"
date:   2026-03-20
categories: ai apps
---

If you're running Windows on ARM and noticed that [Wave Terminal](https://www.waveterm.dev/) doesn't provide a native binary, it's a fairly straightforward compilation process if you want to build it yourself.

1.  Install Visual Studio Community Edition via `winget install XPDCFJDKLZJLP8` and select 'Desktop Development with C++'.
2.  Install the required build dependencies if you don't have them already.
    - `winget install task.task` - winget detects and installs the ARM version of task; Scoop does not as of 2026-03-23.
    - `scoop install go` - scoop remains my prefered method of installing software on Windows 
    - `scoop install zig`
3.  Add an `overrides` entry to `package.json` to force `node-gyp@^12.2.0` (otherwise you get an error due to node-gyp@11.5.0 only recognizing Visual Studio 2022 and prior).

```json
"overrides": {
    "node-gyp": "^12.2.0"
}
```

At this point, the 'BUILD.md' instructions from the repository should complete successfully - so, following those, you just need to run `task init` and `task package`. 