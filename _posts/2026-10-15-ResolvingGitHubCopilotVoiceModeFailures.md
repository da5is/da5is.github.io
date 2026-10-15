---
layout: post
title:  "Resolving GitHub Copilot Voice Mode Failures"
date:   2026-10-15
categories: ai apps copilot github
---

If your organization is blocking the default NPM registries, when you try to enable voice mode in Github Copilot, you'll get an error similar to the following:

```txt
Voice runtime install failed: Error: Failed to download Microsoft.AI.Foundry.Local.Core 1.2.3 from any configured feed (api.nuget.org, pkgs.dev.azure.com): Download failed with status 401: https://pkgs.dev.azure.com/aiinfra/2692857e-05ef-43b4-ba9c-ccf1c22c437c/_packaging/7982ae20-ed19-4a35-a362-a96ac99897b7/nuget/v3/flat2/microsoft.ai.foundry.local.core/1.2.3/microsoft.ai.foundry.local.core.1.2.3.nupkg
Earlier installer warnings:
  Microsoft.AI.Foundry.Local.Core 1.2.3: download from api.nuget.org failed (write EPROTO 580C0000:error:0A000410:SSL routines:ssl3_read_bytes:ssl/tls alert handshake failure:openssl\ssl\record\rec_layer_s3.c:918:SSL alert number 40
  ); trying next feed...
```

In order to fix this, you'll need to make a change to the install-utils.cjs file.  This is located in Windows under ~\AppData\Local\copilot\pkg\win32-x64\{varies}\foundry-local-sdk\node_modules\foundry-local-sdk\script\install-utils.cjs.  There's likely multiple folders that vary in the win32-x64 folder - you'll need to locate the one with the following stanza in the install-utils.cjs file:

```cjs
const FEEDS = [
  'https://api.nuget.org/v3/index.json',
  'https://pkgs.dev.azure.com/aiinfra/PublicPackages/_packaging/ORT-Nightly/nuget/v3/index.json',
];
```

Add the internal feed as the first line in this object above the nuget one.  Following that, relaunch GitHub Copilot and `/voice on` should be able to download the appropriate local model.
