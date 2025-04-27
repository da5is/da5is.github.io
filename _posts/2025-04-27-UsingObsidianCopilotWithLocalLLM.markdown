---
layout: post
title:  "Using Obsidian Copilot with a Local LLM"
date:   2025-04-27
categories: ai
description: "Integrating Obsidian with Local LLMs via Obsidian Copilot and LM Studio."
---
This is a quick document to walk through configuring Obsidian Copilot with LM Studio for local models and embeddings if you want to run the AI pieces fully locally.

1.  Install [LM Studio](https://lmstudio.ai/) from their website or via winget (`winget install ElementLabs.LMStudio`).
2.  Install the community plugin [Obsidian Copilot](https://github.com/logancyang/obsidian-copilot).
3.  Launch LM Studio and click on the magnifying glass icon in the left hand blade called "Discover."
4.  Search for a model that will fit in your computer's memory capacity - for the remainder of this walk through, I will use the model [gemma-3-4b-it-qat](https://model.lmstudio.ai/download/lmstudio-community/gemma-3-4B-it-qat-GGUF).
5.  Click on the console tab on the left hand blade called "Developer."  Click the button in the top middle of the page that says "Select a model to load (Ctrl +L)".  Load both the model you deployed in step 4 and the default embedding, text-embedding-nomic-embed-text-v1.5.
6.  Click on the button in the top left that says "Settings" and enable CORS.  Click the slider next to "Status: Stopped" to start the local model server.  After this, it should say "Status: Running."
7.  In Obsidian, navigate to the Obsidian Copilot settings.  Click on the tab marked "Model."  Uncheck all current models (unless you intend to use them) - this will eliminate some errors that would otherwise be displayed.  
8.  Under "Chat Models", click the button marked "+ Add Custom Model."
    1.  Give the model the name it's listed as in LM Studio - in this case, it's "gemma-3-4b-it-qat".
    2.  For provider, select "LM Studio."
    3.  Leave "Base URL" blank.
    4.  For an API key, put in a few characters (it is unimportant in this case).
    5.  Enable CORS, click "Verify" to validate that the configuration is correct, then click "Add Model."
9.  Scroll down under "Embedding Models", click on the button marked "+ Add Custom Model."
    1.  Give the model the name it's listed as in LM Studio - in the default case, it's "text-embedding-nomic-embed-text-v1.5".
    2.  For provider, select "LM Studio."
    3.  Leave "Base URL" blank.
    4.  For an API key, put in a few characters (it is unimportant in this case).
    5.  Enable CORS, click "Verify" to validate that the configuration is correct, then click "Add Model."
10.  Return to the "Basic" tab in the settings panel and select the models you created for "Default Chat Model" and "Embedding Model."

