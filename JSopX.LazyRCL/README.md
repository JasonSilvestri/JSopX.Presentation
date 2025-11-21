# JSopX™ — Video Ai Prompt Studio Project (v1)

**VideoAiPromptStudio Project (v1)**, codename, `JSopX.VideoAiPromptStudio`, 
ASP.NET Core 9 (Razor Pages) workbench for **Video-AI Prompt** authoring, validation, and packing.
Keeps seeds, expanders, anchors, and IPA helpers in one place with schema validation to reduce drift.

---

```bash
# For The Cool Kids: Clone JSopX.VideoAiPromptStudio Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.VideoAiPromptStudio.git
```

---

**[`Home`](../README.md)** » [`Briefing`](#) » [`Step-by-Step`](#)

---

### **BETA:**

> [!WARNING]
> You are currently viewing the **"_BETA_" v 1 _Variant_** of this **`JSopX.VideoAiPromptStudio` Project**.

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Problem Statement — Major Concerns Addressed](#problem-statement--major-concerns-addressed)
- [Goals & Non-Goals](#goals--non-goals)
- [Architecture Summary](#architecture-summary)
- [Key Components](#key-components)
- [Platform Scope (v1)](#platform-scope-v1)
- [Repository File Structure](#repository-file-structure)
- [Clone `JSopX.VideoAiPromptStudio` Git Repository](#clone-selfhealthml-git-repository)
  - [Option 1: Using `Bash`](#option-1-using-bash)
  - [Option 2: Using `Powershell`](#option-2-using-powershell)
  - [Option 3: Using `Node` or `npm` (degit)](#option-3-using-node-or-npm-degit)
  - [Open the Visual Studio Solution](#open-the-visual-studio-solution)
- [Configure the Project](#configure-the-project)
  - [Ensure Dependencies Are Restored](#ensure-dependencies-are-restored)
  - [Verify Nuget Packages](#verify-nuget-packages)
- [Be Sure to Build and Run](#be-sure-to-build-and-run)
- [License / Ownership](#license--ownership)

---

## Overview

The **JSopX™ `VideoAiPromptStudio` Validator** is the first of its kind.

---

## Prerequisites

To build and run most projects found across **JSopX™** repositories, ensure the following technologies and IDEs are installed:

- [Visual Studio (v 17.14.14)](https://visualstudio.microsoft.com/)  
- [.NET Framework (v 9.0.1)](https://dotnet.microsoft.com/)  
- [ASP.NET Core (v 9.0.1)](https://dotnet.microsoft.com/)  
- [.NET MAUI (v 9.0.1)](https://learn.microsoft.com/dotnet/maui/)  
- [Node.js (v 20.14.0)](https://nodejs.org/)  
- [npm (v 10.8.1)](https://www.npmjs.com/)  
- [Bash (v 5.x+)](https://www.gnu.org/software/bash/)  
- [PowerShell (v 7.x+)](https://learn.microsoft.com/powershell/)  

[`⇧ Back to Top`](#table-of-contents)  

---

## Platform Scope (v1)
ASP.NET Core 9 (Razor Pages) workbench for **Video-AI Prompt** authoring, validation, and packing.
Keeps seeds, expanders, anchors, and IPA helpers in one place with schema validation to reduce drift.

[`⇧ Back to Top`](#table-of-contents)  

---

### 🎯 **DRIFT ALERT**:

> [!CAUTION]
> Jason recently discovered that many of the final iterations of validation and package scripts recently created (and required) to conclude units of work in projects just likd this one, often end up drifting to a point of no return, due to a confusion of project and solution paths, with respects to Visual Studio projects in specific, resulting into scripts failing. This includes most **`Node`**, **`powershell`**,  **`yaml`**, etc.

---

## Repository File Structure

```text

VideoAiPromptStudio/
├─ README.md
├─ .editorconfig
├─ .gitattributes
├─ .gitignore
├─ global.json                # pin SDK if you want
├─ VideoAiPromptStudio.sln
│  ├─ Prompt.Core/
│  │  ├─ Prompt.Core.csproj
│  │  ├─ Models/             # C# POCOs mirroring schemas
│  │  ├─ Services/
│  │  │  ├─ PromptValidator.cs
│  │  │  ├─ BreadcrumbService.cs
│  │  │  ├─ IdentityLockService.cs
│  │  │  └─ IpaTranscoder.cs
│  │  └─ Util/JsonOptions.cs
│  ├─ Prompt.Cli/
│  │  ├─ Prompt.Cli.csproj
│  │  └─ Program.cs          # spectre.console CLI (validate, pack, expand, scaffold)
│  └─ Prompt.Tests/
│     ├─ Prompt.Tests.csproj
│     └─ ValidatorTests.cs
├─ schemas/
│  ├─ clip.schema.json        # Core “Drop-In Clip” (Flow/Veo)
│  ├─ expander.schema.json    # JSON-Lock v2 expander object
│  ├─ expand-input.schema.json
│  ├─ anchors.schema.json
│  └─ packs.schema.json       # collections: ExpandPacks, StylePacks
├─ projects/
│  ├─ self-health/
│  │  ├─ anchors/
│  │  │  ├─ self-health-logo-black.svg
│  │  │  ├─ self-health-logo-black-fill.svg
│  │  │  ├─ self-health-logo-veo-prompt-splash.png
│  │  │  ├─ self-health-logo-veo-prompt-splash.svg
│  │  │  └─ self-health-logo-veo-prompt-splash.webp
│  │  ├─ clips/
│  │  │  ├─ JAS-1000.seed.json
│  │  │  └─ JAS-1001A.example.json
│  │  └─ expanders/
│  │     └─ EXP-JASON-OFFICE-V1.json
│  └─ bigfoot-vlog/
│     ├─ anchors/
│     │  └─ townhall.jpeg
│     ├─ clips/
│     │  ├─ BR-1000.seed.json
│     │  └─ BR-1001B.river.json
│     └─ expanders/
│        └─ EXP-BREAKER-BLUEHOUR-V1.json
├─ packs/
│  ├─ styles/
│  │  └─ RED-filmgrain-bluehour.json
│  ├─ expand/
│  │  └─ EXP-templates.index.json
│  └─ speech/
│     ├─ ipa-English-map.csv  # your hand-curated IPA↔︎English hints
│     └─ regional-tones.json  # “en-US-NewEngland”, etc.
├─ tools/
│  └─ scripts/
│     ├─ validate.ps1
│     ├─ pack.ps1
│     └─ ids.ps1             # UUID mint + breadcrumb helpers
└─ .github/workflows/
   └─ validate.yml

```

[`⇧ Back to Top`](#table-of-contents)  

---

## Quick start
1) Put JSON clips/expanders under `Projects/<project>/clips` and `Projects/<project>/expanders` (you can create these folders).
2) Schemas live in `wwwroot/schemas`. The app validates JSON against these.
3) Run the site, open `/Validate`, paste or upload JSON, pick a schema, and validate.
4) Use breadcrumbs (`meta.breadcrumbs.origin/next`) and identity rules while iterating.

[`⇧ Back to Top`](#table-of-contents)  

---

## Folders
- `wwwroot/schemas` – JSON Schemas (clip, expander, anchors).
- `Services` – JSON schema validator + helpers.
- `Pages` – Razor Pages UI (`Index`, `Validate`).

[`⇧ Back to Top`](#table-of-contents)  

---

## Notes
- This starter includes **reduced** schemas so you can get running now; expand them as needed.
- Add your `READMEDISCOVERY.md` to the repo root to preserve the Gemini troubleshooting archive.

[`⇧ Back to Top`](#table-of-contents)  

---

## **Clone `JSopX.VideoAiPromptStudio` Git Repository**

Cloning a repository is straightforward, and it is really just a fancy way of saying, "_make a copy of the repository on your local machine._". 

**_GitHub_**, **_Microsoft_**, **_Node_** and other third-party tools make this easy with built-in commands, you can call through one of their `cmd` prompt flavors.

In fact, _you can Clone_ the **JSopX™** `JSopX.VideoAiPromptStudio` GitHub Repository in serveral ways.

**Choose the approach below that fits your environment**:  

1. **[Bash](#option-1-using-bash)** → Ideal for **Linux, macOS, and Windows (WSL/Git Bash)** users.  
2. **[PowerShell](#option-2-using-powershell)** → Best for **Windows** users.  
3. **[Node.js](#option-3-using-node-or-npm-degit)** → A lightweight option for developers using **JavaScript-based workflows**.  

---

### **Option 1: Using `Bash`:**
 
Bash is a popular command-line shell and scripting language used in many operating systems, including Linux, macOS, and Windows (via WSL or Git Bash).

```bash

 # Using Bash: Clone JSopX.VideoAiPromptStudio Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\InCareSys\JSopX.VideoAiPromptStudio

 # 2. Clone JSopX.VideoAiPromptStudio Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.VideoAiPromptStudio.git
    
```

[`Back to Top`](#clone-helix-git-repository)

---

### **Option 2: Using `Powershell`:**

Powershell is a task automation and configuration management framework from Microsoft, consisting of a command-line shell and associated scripting language.


```powershell

 # Using PowerShell: Clone JSopX.VideoAiPromptStudio Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\InCareSys\JSopX.VideoAiPromptStudio

 # 2. Clone JSopX.VideoAiPromptStudio Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.VideoAiPromptStudio.git

```

[`Back to Top`](#clone-helix-git-repository)

---

### **Option 3: Using `Node` or `npm` (degit):**

Use Node.js and npm with `degit` to clone the repository without its `.git` history. This is useful for starting fresh without any commit history. 

```npm

 # Using Node.js / npm : Clone JSopX.VideoAiPromptStudio Git Repository
 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\InCareSys\JSopX.VideoAiPromptStudio
    
 # 2. Using npx degit to clone without .git history
 npx degit https://github.com/JasonSilvestri/JSopX.VideoAiPromptStudio

```

[`Back to Top`](#clone-helix-git-repository)

---

### **Open the Visual Studio Solution**

Working with the `JSopX.VideoAiPromptStudio` Project in Visual Studio is simple enough.

1. Launch **Visual Studio (v 17.14.14)**.
2. Open the solution file: `JSopX.VideoAiPromptStudio.sln`.

[`⇧ Back to Top`](#table-of-contents)

---

## **Configure the Project**

> [!TIP]
>
> Latest versions of Visual Studio performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). 
> 
> Still, it is good practice to be aware of the commands outlined in this step.
> 

---

### **Ensure Dependencies Are Restored:**

Ensure `JSopX.VideoAiPromptStudio` Project dependencies are restored:

```bash
 npm install
```

[`⇧ Back to Top`](#table-of-contents)

---

### **Verify Nuget Packages:**

Verify that all NuGet packages are up to date:

```bash
 dotnet restore
```
   
[`⇧ Back to Top`](#table-of-contents)

---

## **Be Sure to Build and Run**

Building and Running the `JSopX.VideoAiPromptStudio` Project in Visual Studio is also another simple task.

1. Build the solution in `Visual Studio`.
2. Run the project:
   - Use the **IIS Express** profile for local development.

---

**[`Home`](../README.md)** »  · · · [`⇧ Back to Top`](#table-of-contents)

---


[1]: https://github.com/JasonSilvestri/JSopX.VideoAiPromptStudio "JASON VIDEO AI PROMPT STUDIO ..."

###### Copyright © 2025 [JSopX.VideoAiPromptStudio][1] — All Rights Reserved by Jason Silvestri
