---
layout: post
title:  "It's Always DNS - Resolve-DNSName"
date:   2025-03-06
categories: dns
description: "Once again, DNS behavior surprised me on Windows.  If you're using nslookup instead of resolve-dnsname, you may not be getting the actual DNS response that's being used from your application..."
---
> "If you’ve done any DNS work in the past you may have leveraged the tool nslookup. While this tool does perform DNS queries, it is not representative of how Windows resolves DNS queries.<br><br>NSlookup is a self-contained executable that does not leverage the Windows DNS client resolver. Its behavior doesn’t match the OS.<br><br>If you would like to perform DNS queries from the command line, I recommend using the PowerShell cmdlet, Resolve-DnsName which does use the native Windows DNS Client resolver." - [Introduction to Network Trace Analysis 4: DNS (it's always DNS)](https://techcommunity.microsoft.com/blog/coreinfrastructureandsecurityblog/introduction-to-network-trace-analysis-4-dns-its-always-dns/4005803)

This was news to me - oddly enough, it came in handy less than a few days after that page was posted. I was troubleshooting an [Azure VPN P2S DNS issue where NRPT was being used for resolution](https://learn.microsoft.com/en-us/azure/vpn-gateway/azure-vpn-client-optional-configurations). Resolve-DNSName resolved properly, nslookup didn’t.