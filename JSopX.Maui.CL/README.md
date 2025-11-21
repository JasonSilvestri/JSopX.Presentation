# JSopX™ —  Presentation Project: Introduction (v1)

The **JSopX™ Presentation Project**, _code named_, `JSopX.Presentation` is a Razor Class Library (RCLs) and Maui Class Library (CLs) for shared UI components, styles, assets.

---

```bash
# For The Cool Kids: Clone JSopX.Presentation Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.Presentation.git
```

---

[`Home`] » [`Solutions`] » **[`JSopX.Presentation`]** » [`Install`] ·· [`Debrief`] ·· [`Recreate`]

---

**JSopX™ Solution**:

[`« Previous`] [`Next »`]

---

## Table of Contents  

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Corequisites](#corequisites)
- [1: Be Sure to Build and Run](#1-be-sure-to-build-and-run)
- [2: Project File Structure](#2-project-file-structure)
  - [2.1: Project & Solution File Structure](#21-project--solution-file-structure)
  - [2.2: Ai Favored Structured File Tree](#22-ai-favored-structured-file-tree)
  - [2.3: Human Favored Structured File Tree](#23-human-favored-structured-file-tree)
- [JSopX Project Default Files](#jsopx-project-default-files)
- [Next Steps](#next-steps)

---

## Overview

The **JSopX™ Presentation Project**, _code named_, `JSopX.Presentation` is a Razor Class Library (RCLs) and Maui Class Library (CLs) for shared UI components, styles, assets.

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring and/or installing just the `JSopX.Presentation` Project.

- [Windows (v 10+)]
- [Visual Studio (v 17.14.21)]
- [.NET Framework (v 9.2.1)]
- [ASP.NET Core (v 9.2.1)]
- [Node (v 20.14.0)]
- [npm (v 10.8.1)]
- [Angular CLI (v 18.0.3)]
- [Bash (v 5.x+)]
- [Powershell (v 7.x+)]

---

## Corequisites

The JSopX™ [`JSopX.Presentation`] Project, is one of over a dozen Visual Studio projects that make up the Enterprise-Level JSopX™ [`JSopX`] Solution eco-system. The [`.NET Framework`] should always be the first stack considered when developing any new project or feature unless suggested otherwise.

---

## **1: Be Sure to Build and Run**

Building and Running the `JSopX.Presentation` Project in Visual Studio is also another simple task.

### **Step: 1.1: Build and Run**:

1. Build the solution in [Visual Studio].
2. Run the project:
   - Use the **IIS Express** profile for local development.

---


## **2: Project File Structure**

The `JSopX.Presentation` Project in particular, contains several files and directories, all with their own functionality & purpose for existing. 

For brevity, samples will not have the complete file structure you get when installing, but there are some core files and directories that have special consideration you should get to know. 

---

### **2.1: Project & Solution File Structure**:

All `JSopX™ projects` follow a consistent directory structure. In this case, our example aligns very well with the [Angular and ASP.NET Core VS Template] found in [Visual Studio].

1. The `JSopX.Presentation` Project naming conventions include capital casing for `.Server` directories and lowercase for `.client` directories.
2. I create a [Visual Studio] Solution Folder to house the primary `.sln` solution file.
3. I create a **Client-Side** Project Folder for `.esproj` project files, and related files
4. I create a similar **Server-Side** Project Folder for `.csproj`, and related files.

A common, plain-text file folder structure of the `JSopX.Presentation` Solution and Projects should look something like what follows:

```plaintext
# JSopX™ Presentation Solution and Projects

JSopX.Presentation/                        # Root JSopX.Presentation Visual Studio Solution folder.
├── JSopX.Presentation.sln                 # Visual Studio solution file for JSopX™ Presentation.
├── PathConfig.targets                         # Centralized MSBuild target configuration for project references.
├── selfhealth.angularcore.client/             # Angular client-side application folder.
│   ├── selfhealth.angularcore.client.esproj   # Angular CLI Visual Studio Client Project configuration file.
├── JSopX.Presentation.Server/             # ASP.NET Core server-side application folder.
│   ├── JSopX.Presentation.Server.csproj   # Angular CLI Visual Studio Server Project configuration file.

```

There are a few reasons why I do this, but the primary reason is ensuring references are managed effectively and circular dependencies are avoided.

[`⇧ Back to Top`]

---

### **2.2: Ai Favored Structured File Tree**:

A common, plain-text file structure of the `JSopX.Presentation` Project files and directories that matter.

```plaintext
# JSopX™ Presentation Project

JSopX.Presentation/                           # Root JSopX.Presentation Visual Studio Solution folder.
├── .gitattributes                                # Git attributes file for repository metadata and configurations.
├── .gitignore                                    # Specifies files and directories to ignore in version control.
├── JSopX.Presentation.sln                    # Visual Studio solution file for JSopX™ Presentation.
├── LICENSE.txt                                   # Licensing information for the project.
├── PathConfig.targets                            # Centralized MSBuild target configuration for project references.
├── README.md                                     # High-level project documentation.

```

[`⇧ Back to Top`]

---

### **2.3: Human Favored Structured File Tree**:

A table structure of the same with no tree legs `JSopX.Presentation` Project, files and resources.


| **File/Directory**                                  | **Description**                                                                                   |
|:----------------------------------------------------|:--------------------------------------------------------------------------------------------------|
| &nbsp;📁&nbsp;**JSopX.Presentation/**&nbsp;                | Parent `JSopX.Presentation` Visual Studio Solution folder, containing both client and server code.|
| &nbsp;├&nbsp;📝&nbsp;`.gitattributes`&nbsp;                   | The git attributes file that defines how Git should handle certain files and directories in the repository. The first iteration of this file is created automatically when we create a new origin repository on GitHub for the corresponding project. |
| &nbsp;├&nbsp;📝&nbsp;`.gitignore `&nbsp;                      | The git ignore file that specifies which files and directories should be ignored by Git when committing changes to the repository. The first iteration of this file is created automatically when we create a new origin repository on GitHub for the corresponding project. |
| &nbsp;├&nbsp;📝&nbsp;`LICENSE.txt`&nbsp;                      | Licensing information for the project (generally `MIT` open-source license). |
| &nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp;                      | The README `.md` file that provides an overview of the project, its purpose, and how to get started. |
| &nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md`&nbsp;                      | The REINSTALLME `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project. |
| &nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md`&nbsp;                      | The REDEBRIEFME `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project. |
| &nbsp;├&nbsp;📝&nbsp;`RECREATEME.md`&nbsp;                      | The RECREATEME `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch. |
| &nbsp;├&nbsp;📝&nbsp;`LICENSE.txt`&nbsp;                      | Licensing information for the project (generally `MIT` open-source license). |
| &nbsp;├&nbsp;📝&nbsp;`SECURITY.md`&nbsp;                      | The security policy that outlines how to report security vulnerabilities and the project's approach to security. |
| &nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md`&nbsp;                      | The code of conduct that sets the expectations for behavior within the project community. |
| &nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md`&nbsp;                      | The contributing guidelines that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting. |
| &nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md`&nbsp;                      | The changelog that tracks changes, updates, and versions of the project over time. |
| &nbsp;├&nbsp;📁&nbsp;**OriginGitHub**&nbsp;                 | There is a `GitHubOrigin` directory at the root of every `md` project. This is a _complete copy_ of the proceeding GitHub repository `Default Files` we create with the Document Management project, but often with different GitHub absolute URLs that preserves navigation while within the corresponding origin repository project. |
| &nbsp;├&nbsp;📝&nbsp;`JSopX.Presentation.sln`&nbsp;            | Visual Studio `.sln` solution file linking the client and server projects. |
| &nbsp;├&nbsp;📁&nbsp;**JSopX.Components.RCL/**&nbsp;         | ASP.NET Core server-side application folder, housing the backend-end Components RCL implementation. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.Components.RCL.csproj`&nbsp;     | ASP.NET Core server-side Visual Studio project `.csproj` configuration file. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp;     | The README `.md` file that provides an overview of the `JSopX.Components.RCL` project level, its purpose, and how to get started. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;🌐&nbsp;`wwwroot`&nbsp;     | Special ASP.NET Core server-side Visual Studio project `wwwroot` directory, used to store any files the `JSopX.Components.RCL` exposes to other projects. |
| &nbsp;├&nbsp;📁&nbsp;**JSopX.Lazy.RCL/**&nbsp;         | ASP.NET Core server-side application folder, housing the backend-end Lazy RCL implementation. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.Lazy.RCL.csproj`&nbsp;     | ASP.NET Core server-side Visual Studio project `.csproj` configuration file. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp;     | The README `.md` file that provides an overview of the `JSopX.Lazy.RCL` project level, its purpose, and how to get started. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;🌐&nbsp;`wwwroot`&nbsp;     | Special ASP.NET Core server-side Visual Studio project `wwwroot` directory, used to store any files the `JSopX.Lazy.RCL` exposes to other projects. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`bootstrap-5.3.3/`**&nbsp;                               | Origin repository for `bootstrap-5.3.3` distribution, containing app components, assets, scss, and more. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`bootstrap-5.3.3-examples/`**&nbsp;                               | Local repository for `bootstrap-5.3.3-examples` Bootstrap 5.3 examples of just about every feature available. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`bootstrap-icons-1.11.3/`**&nbsp;                               | Local repository for over 4,000 `bootstrap-icons-1.11.3` Bootstrap 5.3 icons. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`jsopX/`**&nbsp;                               | Local repository for `jsopX` JSopX assets that could be outdated and only here as a emergency backup. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`assets/`**&nbsp;                             | Local repository for `jsopX` JSopX assets that could be outdated and only here as a emergency backup. Conversely, there is often more of the original src files, raw creative designs, custom pages, components, fonts, css, bootstrap, etc. |
| &nbsp;├&nbsp;📁&nbsp;**JSopX.Assets.RCL/**&nbsp;         | ASP.NET Core server-side application folder, housing the backend-end Assets RCL implementation. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.Assets.RCL.csproj`&nbsp;     | ASP.NET Core server-side Visual Studio project `.csproj` configuration file. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp;     | The README `.md` file that provides an overview of the `JSopX.Assets.RCL` project level, its purpose, and how to get started. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;🌐&nbsp;`wwwroot`&nbsp;     | Special ASP.NET Core server-side Visual Studio project `wwwroot` directory, used to store any files the `JSopX.Assets.RCL` exposes to other projects. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`src/`**&nbsp;                             | Local repository for JSopX `src` assets for developer environments. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`creative`&nbsp;           | Local repository for JSopX `creative` assets for developer environments. These assets include the latest src files, raw creative designs in photoshop, illustrator, etc., in addition to custom pages, components, fonts, css and bootstrap available. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`icons`&nbsp;              | Local repository for JSopX custom `icons` assets for developer environments. These assets include the latest src files, raw creative designs in photoshop, illustrator, etc, etc.  |
| &nbsp;├&nbsp;📁&nbsp;**JSopX.Proper.RCL/**&nbsp;         | ASP.NET Core server-side application folder, housing the backend-end Proper RCL implementation. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.Proper.RCL.csproj`&nbsp;     | ASP.NET Core server-side Visual Studio project `.csproj` configuration file. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp;     | The README `.md` file that provides an overview of the `JSopX.Proper.RCL` project level, its purpose, and how to get started. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;🌐&nbsp;`wwwroot`&nbsp;     | Special ASP.NET Core server-side Visual Studio project `wwwroot` directory, used to store any files the `JSopX.Proper.RCL` exposes to other projects. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`brand/`**&nbsp;                         | A few `jsopX` and `boostrap` brand logos and icons. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`css/`**&nbsp;                           | All custom `jsopX` assets in `css`, not yet fully minified/bundled, even though this is the production-ready RCL. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`dist/`**&nbsp;                          | All `dist` assets ready for distrubution, most (if not all) are minified/bundled. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`fonts/`**&nbsp;                         | All custom `jsopx` logo `icon` and `svg` fonts. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`html/`**&nbsp;                          | Slim amount of custom `jsopx` pages in `html`, at least a home page for each project. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`icons/`**&nbsp;                         | Bare minimum `jsopx` logo `icon` and `svg` images required for production use. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`images/`**&nbsp;                        | All other `jsopx` images required for production use. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`js/`**&nbsp;                           | All custom `jsopX` assets in `js`, not yet fully minified/bundled, even though this is the production-ready RCL. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`lib/`**&nbsp;                          | All `lib` assets should become the gold standard of ready for distrubution we work towards with v1 of the Presentation project, ensuring all possible files are minified/bundled correctly. |

[`⇧ Back to Top`]

---


## **JSopX Project Default Files** 

Each [`Visual Studio`] **Project** and **Solution** have a series of **Default Files** created for it that relate to the origin repository. 

---

### 📄 `.gitattributes`
**Purpose:**  The git attributes file that defines how Git should handle certain files and directories in the repository. The first iteration of this file is created automatically when we create a new origin repository on GitHub for the corresponding project.

**Version:** `v1.0`

**More:** `.gitattributes` → `.gitattributes.txt`.

[`⇧ Back to Top`]

---

### 📄 `.gitignore`
**Purpose:** The git ignore file that specifies which files and directories should be ignored by Git when committing changes to the repository. The first iteration of this file is created automatically when we create a new origin repository on GitHub for the corresponding project.

**Version:** `v1.0`

**More:** `.gitignore` → `.gitignore.txt`.

[`⇧ Back to Top`]

---

### 📄 `README.md`
**Purpose:** The readme file that provides an overview of the project, its purpose, and how to get started.

**Version:** `v1.0`

**Read More:** [`Intro`] → `README.md`.

[`⇧ Back to Top`]

--- 

### 📄 `REINSTALLME.md`
**Purpose:** The installation guide that provides step-by-step instructions on how to install and set up the project.

**Version:** `v1.0`

**Read More:** [`Debrief`] → `REDEBRIEFME.md`.

[`⇧ Back to Top`]

---

### 📄 `REDEBRIEFME.md`
**Purpose:** The briefing document that outlines the purpose, goals, architecture, and key components of the project.

**Version:** `v1.0`

**Read More:** [`Debrief`] → `REDEBRIEFME.md`.

[`⇧ Back to Top`]

--- 

### 📄 `RECREATEME.md`
**Purpose:** The step-by-step guide that provides detailed instructions on how to create the project from scratch.

**Version:** `v1.0`

**Read More:** [`Recreate`] → `RECREATEME.md`.

[`⇧ Back to Top`]

--- 

### 📄 `LICENSE`
**Purpose:** The license file that specifies the terms under which the project is distributed.

**Version:** `v1.0`

**Read More:** [`License`] → `LICENSE.txt`.

[`⇧ Back to Top`]

---

### 📄 `SECURITY.md`
**Purpose:** The security policy that outlines how to report security vulnerabilities and the project's approach to security.

**Version:** `v1.0`

**Read More:** [`Security`] → `SECURITY.md`.

[`⇧ Back to Top`]

---

### 📄 `CODE_OF_CONDUCT.md`
**Purpose:** The code of conduct that sets the expectations for behavior within the project community.

**Version:** `v1.0`

**Read More:** [`Conduct`] → `CODE_OF_CONDUCT.md`.

[`⇧ Back to Top`]

---

### 📄 `CONTRIBUTING.md`
**Purpose:** The contributing guidelines that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting.

**Version:** `v1.0`

**Read More:** [`Contributing`] → `CONTRIBUTING.md`.

[`⇧ Back to Top`]

---

### 📄 `CHANGELOG.md`
**Purpose:** The changelog that tracks changes, updates, and versions of the project over time.

**Version:** `v1.0`

**Read More:** [`Changelogs`] → `CHANGELOG.md` Project.

[`⇧ Back to Top`]

---

### 🗂 `GitHubOrigin`
**Purpose:** There is a `GitHubOrigin` directory at the root of every `md` project. This is a _complete copy_ of the proceeding GitHub repository `Default Files` we create with the Document Management project, but often with different GitHub absolute URLs that preserves navigation while within the corresponding origin repository project.

**Version:** `v1.0`

[`⇧ Back to Top`]

---

## **Step 6: JSopX™ Project References & Dependencies**

> [!TIP]
>
> The `JSopX.Presentation` Project should already have the JSopX™ Project References & Dependencies described below included!
> 

---

Most `JSopX™ Projects` leverage shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability.

The `JSopX.Presentation` Project has the following `JSopX` Project Dependencies:

1. **`JSopX.BridgeTooFar`**:
   - Uses one or more [Razor Class Library VS Template] that contains reusable static assets and project documentation.
   - **Explore GitHub**: [JSopX.BridgeTooFar]

2. **`JSopX.WebApi`**:
   - Uses a [Asp.NET Core Web API VS Template] which acts as the centrialized **Web API**, used by all projects that access data endpoints in the application.
   - **Explore GitHub**: [JSopX.WebApi]
 
3. **`JSopX.Presentation`**:
   - Uses one or more extremely light-weight, [Razor Class Library VS Template], specifically designed for Production-Ready environments.
   - **Explore GitHub**: [JSopX.Presentation]
 
[`⇧ Back to Top`]

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

- **[`Intro`]** → **You are HERE**!

---

1. **[`Install`]** → **Install the project** and set up your development environment for the JSopX™ Open Project X Project.   

> [!NOTE]
> This section will be updated as new steps and resources become available. 
 
---

**JSopX™ Solution**:

[`« Previous`] [`Next »`] ··· [`⇧ Back to Top`]

---

[`Home`] » [`Solutions`] » **[`JSopX.Presentation`]** » [`Install`]

---

##### [JSopX.com] | [Jason's Official Website] | [X] | [LinkedIn] | [GitHub] | [Email] | [508-851-9445]

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri

[JSopX.com]: http://www.jsopx.com "Jason Silvestri JSopX™ Products, Services and SaaS Services"
[Jason's Official Website]: https://www.jsilvestri.com "Jason Silvestri's Official Website"
[X]: https://www.x.com/JasonSilvestri "Jason Silvestri on X"
[LinkedIn]: http://www.linkedin.com/in/JasonSilvestri "Jason Silvestri on LinkedIn"
[Email]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Email Contact for Mark Silvetri"
[Phone]: phoneto:508-851-9445 "Jason Silvestri Phone Contact for Mark Silvetri"
[Gmail]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Email Contact for Mark Silvetri"
[508-851-9445]: phoneto:508-851-9445 "Jason Silvestri Phone Contact for Mark Silvetri"

[GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri GitHub Repository"

[Current Git Hub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri JSopX™ Document Management Project Solution GitHub Repository"
[Current GitHub Home]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/README.md "Jason Silvestri JSopX™ Document Management Project GitHub Home README.md"

<!--Root Solution Home-->
[`Home`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management Project Home README.md"
<!--Root Solution Project -->
[`JSopX.Presentation`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/README.md "JSopX™ SaaS JSopX™ Presentation Project Solution example README.md"
<!--Root Solution Previous -->
[`« Previous`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/README.md "JSopX™ SaaS Halos and Machine Learning Project Solution README.md"
<!--Root Solution Next -->
[`Next »`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/README.md "JSopX™ SaaS Health Tracker Project Solution README.md"
<!--Install README.md - Often same as Root Solution-->
[`Intro`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/README.md "JSopX™ SaaS Project Solution Install README.md"
<!--Install README.md - Often same as Root Solution-->
[`Install`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/REINSTALLME.md "JSopX™ SaaS Project Solution Install README.md"
<!--Briefing REDEBRIEFME.md - The briefing of the Solution-->
[`Debrief`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/REDEBRIEFME.md "JSopX™ SaaS Document Management Project Briefing REDEBRIEFME.md"
<!--Recreate RECREATEME.md - The step by step instructions to Create Solution - often from briefing -->
[`Recreate`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/RECREATEME.md "JSopX™ SaaS Document Management Project Step by Step HowTo Re-Create RECREATEME.md"
<!--Recreate CHANGELOG.md - The Changelogs of Solution - often from briefing -->
[`Changelogs`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/CHANGELOG.md "JSopX™ SaaS Document Management Project Change Logs CHANGELOG.md"
<!--Recreate CONTRIBUTING.md - The Contributing Guidelines of Solution - often from briefing -->
[`Contributing`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/CONTRIBUTING.md "JSopX™ SaaS Contributor Guidelines CONTRIBUTING.md"
<!--Recreate CODE_OF_CONDUCT.md - The Code of Conduct of Solution - often from briefing -->
[`Conduct`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/CODE_OF_CONDUCT.md "JSopX™ SaaS Code of Conduct CODE_OF_CONDUCT.md"
<!--Recreate SECURITY.md - The Security Policy of Solution - often from briefing -->
[`Security`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/SECURITY.md "JSopX™ SaaS Security Policy SECURITY.md"
<!--Recreate LICENSE.txt - The LICENSE Policy of Solution - often from briefing -->
[`License`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/SECURITY.md "JSopX™ LICENSE Policy LICENSE.txt"

<!--Root Solution Project Solutions -->
[`Solutions`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md "JSopX™ SaaS Project Solutions README.md"
<!--Root Solution Project Visual Studio Templates -->
[`VS Templates`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md "JSopX™ SaaS Visual Studio Project Solutions Templates README.md"
<!--Root Solution Technologies -->
[`Technologies`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md "JSopX™ Project Solution Technologies README.md"

<!--Root Solution Project Solutions -->
[`Common`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/README.md "JSopX™ SaaS Project Common README.md"
[⚙️ Workflow State]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[⚙️ `Workflow State`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[Workflow States]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Workflow States`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Junction Rules`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
[Junction Rules]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
[`Development Standards`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/DevelopmentStandards.md "JSopX™ Project Common Development Standards"
[Development Standards]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/DevelopmentStandards.md "JSopX™ Project Common Development Standards"

<!-- Back to Top links (all styles) found under most sections -->
[Back to Top]: #table-of-contents "Primary document table of contents"
[`Back to Top`]: #table-of-contents "Primary document table of contents"
[`⇧ Back to Top`]: #table-of-contents "Primary document table of contents"

<!-- Long Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`<https://github.com/JasonSilvestri/JSopX.OpenProjectX>`]: https://github.com/JasonSilvestri/JSopX.OpenProjectX "JSopX™ Enterprise-Level Open Project X Solution SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.WebApi>`]: https://github.com/JasonSilvestri/JSopX.WebApi "JSopX™ WebAPI SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Core>`]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Data>`]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Presentation>`]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.ClassLibrary>`]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
<!-- Short Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX OpenProjectX GitHub]: https://github.com/JasonSilvestri/JSopX.OpenProjectX "JSopX™ Enterprise-Level Open Project X Solution SaaS Project"
[JSopX.Core GitHub]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[JSopX.Data GitHub]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[JSopX.WebApi GitHub]: https://github.com/JasonSilvestri/JSopX.WebApi "JSopX™ Web API SaaS Project"
[JSopX.Presentation GitHub]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary GitHub]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[JSopX.BridgeTooFar GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX.OpenProjectX]: /JSopX.BridgeTooFar/docs/md/JSopX.OpenProjectX/README.md "JSopX™ Enterprise-Level Solution"
[JSopX.Core]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/README.md "JSopX™ Core SaaS Project"
[JSopX.Data]: /JSopX.BridgeTooFar/docs/md/JSopX.Data/README.md "JSopX™ Data SaaS Project"
[JSopX.WebApi]: /JSopX.BridgeTooFar/docs/md/JSopX.WebApi/README.md "JSopX™ WebAPI SaaS Project"
[JSopX.Presentation]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/README.md "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary]: /JSopX.BridgeTooFar/docs/md/JSopX.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[JSopX.BridgeTooFar]: /JSopX.BridgeTooFar/docs/md/JSopX.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`JSopX.OpenProjectX`]: /JSopX.BridgeTooFar/docs/md/JSopX.OpenProjectX/README.md "JSopX™ Enterprise-Level Solution"
[`JSopX.Core`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/README.md "JSopX™ Core SaaS Project"
[`JSopX.Data`]: /JSopX.BridgeTooFar/docs/md/JSopX.Data/README.md "JSopX™ Data SaaS Project"
[`JSopX.WebApi`]: /JSopX.BridgeTooFar/docs/md/JSopX.WebApi/README.md "JSopX™ WebAPI SaaS Project"
[`JSopX.Presentation`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/README.md "JSopX™ Presentation SaaS Project"
[`JSopX.ClassLibrary`]: /JSopX.BridgeTooFar/docs/md/JSopX.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/JSopX.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solutions & Version All SaaS Projects -->
[JSopX.OpenProjectX (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxopenprojectx "JSopX™ Enterprise-Level Solution"
[JSopX.Core (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-selfhealthcore "JSopX™ Core SaaS Project"
[JSopX.Data (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-selfhealthdata "JSopX™ Data SaaS Project"
[JSopX.Presentation (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-selfhealthpresentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-selfhealthutilities "JSopX™ Utilities SaaS Project"
[JSopX.BridgeTooFar (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-selfhealthdm "JSopX™ Document Management SaaS Project"
<!-- Short Form Local Document Management Links of all JSopX™ Visual Studio Templates-->
[Blank Solution VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#blank-solution-visual-studio-template "JSopX™ Visual Studio Blank Solution Project Template"
[ASP.NET Core Web App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#aspnet-core-web-app-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web App Project Template"
[Website App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#website-visual-studio-template "JSopX™ Visual Studio Website Project Template"
[Console App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#console-app-visual-studio-template "JSopX™ Visual Studio Console App Project Template"
[Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#class-library-visual-studio-template "JSopX™ Visual Studio Class Library Project Template"
[Razor Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#razor-class-library-visual-studio-template "JSopX™ Visual Studio Razor Class Library Project Template"
[Asp.NET Core Web API VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#aspnet-core-web-api-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web Api Project Template"
[Angular and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#angular-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Angular and ASP.NET Core Project Template"
[React and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#react-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio React and ASP.NET Core Project Template"
[Vue and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#vue-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Vue and ASP.NET Core Project Template"
[Blazor Web App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#blazor-web-app-visual-studio-template "JSopX™ Visual Studio Blazor Web App Project Template"
[.NET MAUI Blazor Hybrid and Web App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#net-maui-blazor-hybrid-and-web-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Blazor Hybrid and Web App Project Template"
[.NET MAUI Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#net-maui-class-library-visual-studio-template "JSopX™ Visual Studio .NET MAUI Class Library Project Template"
[Website VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#website-visual-studio-template "JSopX™ Visual Studio Website Project Template"
[.NET MAUI Multi-Project App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#net-maui-multi-project-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Multi-Project App Project Template"
<!-- Short Form Local Document Management Links of all JSopX™ Visual Studio Templates Page by Page -->
[Blank Solution Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/BlankSolution.md "JSopX™ Visual Studio Blank Solution Project Template"
[ASP.NET Core Web App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/AspNetCoreWebApp.md "JSopX™ Visual Studio ASP.NET Core Web App Project Template"
[Website App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/Website.md "JSopX™ Visual Studio Website Project Template"
[Console App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/ConsoleApp.md "JSopX™ Visual Studio Console App Project Template"
[Class Library Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/ClassLibrary.md "JSopX™ Visual Studio Class Library Project Template"
[Razor Class Library Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/RazorClassLibrary.md "JSopX™ Visual Studio Razor Class Library Project Template"
[Asp.NET Core Web API Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/AspNetCoreWebApi.md "JSopX™ Visual Studio ASP.NET Core Web Api Project Template"
[Angular and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/AngularAspNetCore.md "JSopX™ Visual Studio Angular and ASP.NET Core Project Template"
[React and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/ReactAspNetCore.md "JSopX™ Visual Studio React and ASP.NET Core Project Template"
[Vue and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/VueAspNetCore.md "JSopX™ Visual Studio Vue and ASP.NET Core Project Template"
[Blazor Web App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/BlazorWebApp.md "JSopX™ Visual Studio Blazor Web App Project Template"
[.NET MAUI Blazor Hybrid and Web App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/NetMauiBlazorHybridandWeb.md "JSopX™ Visual Studio .NET MAUI Blazor Hybrid and Web App Project Template"
[.NET MAUI Class Library Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/NetMauiClassLibrary.md "JSopX™ Visual Studio .NET MAUI Class Library Project Template"
[.NET MAUI Multi-Project App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/NetMauiMultiProjectApp.md "JSopX™ Visual Studio .NET MAUI Multi-Project App Project Template"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[npm]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[Vue]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[Vite]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[Python]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[Bash]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[`Windows`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[`Visual Studio`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[`.NET Framework`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[`ASP.NET Core`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[`.NET Core Blazor`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[`.Net Core Maui Hybrid`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[`Node`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[`npm`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[`Bootstrap`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[`Angular CLI`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[`React`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[`Vue`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[`Vite`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[`Python`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[`Bash`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[`Powershell`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows (v 10+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Windows.md "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio (v 17.14.21)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/VisualStudio.md "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/NetFrameworkSdk.md "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/AspNetCore.md "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/NetCoreBlazor.md "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/NetCoreMauiHybrid.md "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node (v 20.14.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Node.md "JSopX™ SaaS Project Node Technology Requirements"
[npm (v 10.8.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/npm.md "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap (v 5.3.8)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Bootstrap.md "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI (v 18.0.3)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/AngularCli.md "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React (v 18.2.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/React.md "JSopX™ SaaS Project React Technology Requirements"
[Vue (v 3.4.21)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Vue.md "JSopX™ SaaS Project Vue Technology Requirements"
[Vite (v 5.2.8)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Vite.md "JSopX™ SaaS Project Vite Technology Requirements"
[Python (v 3.12.3x+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Python.md "JSopX™ SaaS Project Python Technology Requirements"
[Bash (v 5.x+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Bash.md "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell (v 7.x+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Powershell.md "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[Created]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#created
[Queued]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#queued
[In Progress]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#in-progress
[Waiting]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#waiting
[Passed]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#passed
[Failed]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#failed
[Rejected]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#rejected
[Cancelled]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#cancelled
[Skipped]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#skipped
[Timeout]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#timeout
[Network Error]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#network-error
[Validation Error]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#validation-error
[Retrying]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#retrying
[Blocked]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#blocked
[Completed]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#completed
[To Do]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#to-do
[Started]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#started
[Pending]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#pending
[Expired]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#expired
[Approved]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#approved
[Sent]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#sent
[Received]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#received
[Under Review]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#under-review
[Soft Delete]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#soft-delete
[Hard Delete]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#hard-delete
[Unknown]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#unknown
[Null or Empty]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#null-or-empty
[Active]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#active

<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[`CREATED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#created
[`QUEUED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#queued
[`IN PROGRESS`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#in-progress
[`WAITING`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#waiting
[`PASSED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#passed
[`FAILED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#failed
[`REJECTED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#rejected
[`CANCELLED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#cancelled
[`SKIPPED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#skipped
[`TIMEOUT`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#timeout
[`NETWORK ERROR`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#network-error
[`VALIDATION ERROR`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#validation-error
[`RETRYING`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#retrying
[`BLOCKED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#blocked
[`COMPLETED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#completed
[`TO DO`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#to-do
[`STARTED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#started
[`PENDING`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#pending
[`EXPIRED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#expired
[`APPROVED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#approved
[`SENT`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#sent
[`RECEIVED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#received
[`UNDER REVIEW`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#under-review
[`SOFT DELETE`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#soft-delete
[`HARD DELETE`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#hard-delete
[`UNKNOWN`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#unknown
[`NULL OR EMPTY`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#null-or-empty
[`ACTIVE`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#active