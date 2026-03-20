---
layout: post
title:  "Microsoft Foundry Local - Disconnected"
date:   2026-03-20
categories: ai foundry azure
---
This post shows you how to deploy Microsoft Foundry Local onto a disconnected machine with no access to the internet.  This requires having a machine with access to the internet to stage the model and installation media and a way of getting those items to the disconnected machine.  

## From a machine with access to the Internet:

1.  Install Foundry Local as normal.
2.  Download the required model via `foundry model download qwen2.5-0.5b-instruct-generic-cpu:4` substituting `qwen2.5-0.5b-instruct-generic-cpu:4` for the model of your choosing.
Navigate to the Foundry cache location - this is discovered via running `foundry cache location` and defaults to `c:\users\username\.foundry\cache\models` where `username` is the currently logged in user,
Copy `foundry.modelinfo.json` and the `vendor\model folder` to the transfer media (USB key or what you're using to move it across the airgap).
At this point, you would have the json file and a folder named Microsoft in the transfer media with a model folder in the Microsoft folder (such as `\Microsoft\qwen2.5-0.5b-instruct-generic-cpu-4`).
Download the foundry local offline installer from [Releases · microsoft/Foundry-Local](https://github.com/microsoft/Foundry-Local/releases) and copy that to the transfer media.

## On the air-gapped machine

1.  Install Foundry Local from the transfer media (for an x86 Windows machine, this would be within PowerShell by running `Add-AppPackage -path FoundryLocal-x64-0.8.119.msix`).
2.  Copy the `foundry.modelinfo.json` file and the `vendor\model` folder into a new folder on the disconnected machine such as `c:\users\username\Models`.
3.  Change the cache location via `foundry cache cd c:\users\username\Models`.
4.  You can then run the model normally from the cache using `foundry model run qwen2.5-0.5b-instruct-generic-cpu:4`.
