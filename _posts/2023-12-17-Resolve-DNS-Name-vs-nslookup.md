---
layout: post
title: Resolve-DNSName vs. nslookup
categories: [azure, dns]
excerpt:  In which I learned about the differences between Resolve-DNSName and nslookup on Windows.
---
From [Introduction to Network Trace Analysis 04: DNS (it's always DNS) - Microsoft Community Hub](https://techcommunity.microsoft.com/t5/core-infrastructure-and-security/introduction-to-network-trace-analysis-04-dns-it-s-always-dns/ba-p/4005803):

> If you've done any DNS work in the past you may have leveraged the tool nslookup. While this tool does perform DNS queries, it is not representative of how Windows resolves DNS queries. 
>
> NSlookup is a self-contained executable that does not leverage the Windows DNS client resolver. Its behavior doesn't match the OS.  
>
> If you would like to perform DNS queries from the command line, I recommend using the PowerShell cmdlet, Resolve-DnsName which does use the native Windows DNS Client resolver. 

This was news to me - oddly enough, it came in handy less than a few days after that page was posted.  I was troubleshooting an [Azure VPN P2S DNS issue where NRPT was being used for resolution](https://learn.microsoft.com/en-us/azure/vpn-gateway/azure-vpn-client-optional-configurations).  Resolve-DNSName resolved properly, nslookup didn't.
