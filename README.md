# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-react-core-logo.svg" style="width: 28px; height: auto; padding-right:12px;!important;"> JSopX™ Presentation Project

The **JSopX™ Presentation Project** is a **FREE**, open-source demonstration project built in Visual Studio, _code named_, `JSopX.Presentation`. It showcases the transformation of an existing React and ASP.NET Core application—complete with its own assets, Web APIs, and standards—into a scalable solution for optimal enterprise application migration.

---

## **Use Latest Variant:**

> [!TIP]
> You are currently viewing the **"_Use Latest_" _Variant_** of the **JSopX™ Presentation Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---

```bash
# For The Cool Kids: Clone JSopX.Presentation Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.Presentation.git
```

---

[`Home`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ReactCore/README.md)

---


## Table of Contents  

 - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Corequisites](#corequisites)
  - [Business Concerns Addressed](#business-concerns-addressed)
      - [Step 1: Clone the Repository](#step-1-clone-the-repository)
      - [Step 2: Open the Solution](#step-2-open-the-solution)
      - [Step 3: Configure the Project](#step-3-configure-the-project)
      - [Step 4: Build and Run](#step-4-build-and-run)
      - [Step 5: Project File Structure](#step-5-project-file-structure)
      - [Step 6: Project References & Dependencies](#step-6-jsopx-project-references--dependencies)
      - [Step 7: Usage](#step-7-usage)
      - [Step 8: Extended Usage](#step-8-extended-usage)
  - [Next Steps](#next-steps)

---

## Overview

The **JSopX™ Presentation Project** is a **FREE**, open-source demonstration project built in Visual Studio, _code named_, `JSopX.Presentation`. It showcases the transformation of an existing React-based client-side project that demonstrates the flexibility and component-driven approach of React, working in harmony with ASP.NET Core services—complete with its own assets, Web APIs, and standards—into a scalable solution for optimal enterprise application migration.

By aligning varied frameworks—ranging from [ASP.NET Core](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.AspNetCore/README.md) to [Angular](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.AngularCore/README.md), [Vue](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.VueCore/README.md), [React](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ReactCore/README.md), [Blazor](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.WebAPI/README.md), [assets](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.RCLxProper/README.md), [documentation](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Introduction/JSopxDevelopmentStandards.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly, bridging-of-the-critical-gap, between front-end dynamism and back-end security. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

---

## Current Phase

> [!CAUTION]
>
>**Phases 1**: This document is currently aligned with [Phase 1: Minimum Viable Product (MVP)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Phases/Phase-1.md) Business Requirements. 
> 

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring and/or installing just the `JSopX.Presentation` Project.

- [Visual Studio (v 17.13.6)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/Technologies/#visual-studio)
- [.NET Framework (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/Technologies/#net-framework)
- [ASP.NET Core (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/Technologies/#aspnet-core)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

## **Step 1: Clone the Repository**

_Clone_ the `JSopX.Presentation` GitHub Repository if you plan to explore it independently from the rest of the projects.

Choose the approach below that fits your environment:  

- **[Bash](#step-11-using-bash)** → Ideal for **Linux, macOS, and Windows (WSL/Git Bash)** users.  
- **[PowerShell](#step-12-using-powershell)** → Best for **Windows** users.  
- **[Node.js](#step-13-using-nodejs-or-npm-degit)** → A lightweight option for developers using **JavaScript-based workflows**.  

---

### **Step 1.1: Using `Bash`:**
 
```bash

 # Using Bash: Clone JSopX.Presentation Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.Presentation

 # 2. Clone JSopX.Presentation Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.Presentation.git
    
```

[`Back to Top`](#table-of-contents)

---

### **Step: 1.2: Using `Powershell`:**

```powershell

 # Using PowerShell: Clone JSopX.Presentation Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.Presentation

 # 2. Clone JSopX.Presentation Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.Presentation.git
    
```

[`Back to Top`](#table-of-contents)

---

### **Step: 1.3: Using `Node.js` or `npm` (degit):**
 
```shell

 # Using Node.js / npm : Clone JSopX.Presentation Git Repository
 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.Presentation
    
 # 2. Using npx degit to clone without .git history
 npx degit https://github.com/JasonSilvestri/JSopX.Presentation

```

[`Back to Top`](#table-of-contents)

---

## **Step 2: Open the Solution**

Working with the `JSopX.Presentation` Project in Visual Studio is simple enough.

1. Launch **[Visual Studio (v 17.13.6)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Technologies/#visual-studio)**.
2. Open the solution file: `JSopX.Presentation.sln`.

[`Back to Top`](#table-of-contents)

---

## **Step 3: Configure the Project**

> [!TIP]
>
> Latest versions of [Visual Studio](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Technologies/#visual-studio) performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). Still, it is good practice to at least be aware of the commands outlined in this step.
> 

---

### **Step: 3.1: Ensure Dependencies Are Restored:**

Ensure `JSopX.Presentation` Project dependencies are restored:

   ```bash
   npm install
   ```


[`Back to Top`](#table-of-contents)

---

### **Step: 3.2: Verify Nuget Packages:**

Verify that all NuGet packages are up to date:

   ```bash
   dotnet restore
   ```
   
[`Back to Top`](#table-of-contents)

---

## **Step 4: Be Sure to Build and Run**

Building and Running the `JSopX.Presentation` Project in Visual Studio is also another simple task.

### **Step: 4.1: Build and Run**:

1. Build the solution in [Visual Studio](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Technologies/#visual-studio).
2. Run the project:
   - Use the **IIS Express** profile for local development.

---

### **Step: 4.2: And Now Your Done**:

Assuming the `JSopX.Presentation` Project is running as expected, **you are now done** with the **installation** and **execution** of the project!

[`Back to Top`](#table-of-contents)

---

## **Step 5: Project File Structure**

### 🎯 **DRIFT ALERT**:

> [!CAUTION]
> Jason recently discovered that _**many**_ of the final iterations of `validation` and `package` scripts recently created (and required) to conclude units-of-work in projects just like this one, often end up drifting to a point of no return. 
>
> It's suspected there is a confusion of project and solution paths, with respects to Visual Studio projects in specific, resulting in script test failing. This includes most **`Node`**, **`powershell`**,  **`yaml`**, etc.

---

The `JSopX.Presentation` Project in particular, contains several files and directories, all with their own functionality & purpose for existing. 

For brevity, samples will not have the complete file structure you get when installing, but there are some core files and directories that have special consideration you should get to know. 

---

### **Step: 5.1: Most Common Solution & Project Naming Convention**:

All `JSopX™ projects` follow a consistent directory structure. 

The **most common** `JSopX™ Visual Studio Projects` that tend to have **no more than one** child project, typical uses the following naming convention:
- `JSopX.<solution>` with its own folder and `.sln` solution file, 
- Followed by a sub `JSopX.<project>` folder and `.csproj` project file with the same name.
   
   **For Example**:
 
    ```text
    # The most common JSopX™ projects

    JSopX.<Solution>/                # Root JSopX Visual Studio Solution folder (Repository Root).
    ├── JSopX.<Solution>.sln         # Visual Studio solution file for Presentation.
    ├── JSopX.<Project>/             # ASP.NET Core Razor Class Library for raw assets folder.
    │   ├── JSopX.<Project>.csproj   # Visual Studio Project configuration file.
    ```
---

### **Step: 5.2: `JSopX.Presentation` Project Naming Convention**:

The `JSopX.Presentation` Project naming convention uses:
 - The `JSopX.<solution>` with its own folder and `.sln` solution file, 
 - followed by several sub `JSopX.<project>` folders and `.csproj` project files with different names. 
   
**For Example**:
 
At the highest level, a common, plain-text file folder structure of the `JSopX.Presentation` Solution and Projects should look something like what follows:

```text
# JSopX™ Presentation Solution and Projects

JSopX.Presentation/              # Root JSopX.Presentation Visual Studio Solution folder (Repository Root).
├── JSopX.Presentation.sln       # Visual Studio solution file for Presentation.
├── JSopX.AssetsRCL/             # ASP.NET Core Razor Class Library for raw assets folder.
│   ├── JSopX.AssetsRCL.csproj   # Visual Studio Project configuration file.
├── JSopX.LazyRCL/               # ASP.NET Core Razor Class Library for raw assets folder.
│   ├── JSopX.LazyRCL.csproj     # Visual Studio Project configuration file.
├── JSopX.ProperRCL/             # ASP.NET Core Razor Class Library for raw assets folder.
│   ├── JSopX.ProperRCL.csproj   # Visual Studio Project configuration file.

```

> There are a few reasons why I do this, but the primary reason is ensuring references are managed effectively and circular dependencies are avoided.

[`Back to Top`](#table-of-contents)

---

### **Step: 5.2: Structured File Tree**:

A common, plain-text file structure of the `JSopX.Presentation` Project files and directories that matter.

```plaintext
# JSopX™ Presentation Project

JSopX.Presentation/              # Root JSopX.Presentation Visual Studio Solution folder (Repository).
├── .gitattributes               # Git attributes file for repository metadata and configurations.
├── .gitignore                   # GitHub Specifies files and directories to ignore in version control.
├── JSopX.Presentation.sln       # Visual Studio solution file for Presentation.
├── LICENSE.txt                  # GitHub Licensing information for the project.
├── README.md                    # High-level project documentation (you are here!).
├── JSopX.AssetsRCL/             # Primary ASP.NET Core Razor Class Library project directory for raw assets.
│   ├── JSopX.AssetsRCL.csproj   # Visual Studio Project configuration file.
├── JSopX.LazyRCL/               # Primary ASP.NET Core Razor Class Library project directory for overabundance of raw assets folder, bootstrap icons, examples, etc.
│   ├── JSopX.LazyRCL.csproj     # Visual Studio Project configuration file.
├── JSopX.ProperRCL/             # Primary ASP.NET Core Razor Class Library project directory for light-weight, production-ready version of required RCL assets.
│   ├── JSopX.ProperRCL.csproj   # Visual Studio Project configuration file.

```

---

### **Step: 5.3: Local Repository Locations**:

**`JSopX.Presentation` Solution**:

```
JSopX.Presentation: E:\All\Repos\JasonSilvestri\JSopX.Presentation\JSopX.Presentation.sln.
```

**`JSopX.Presentation` Projects**:

```
JSopX.AssetsRCL: E:\All\Repos\JasonSilvestri\JSopX.Presentation\JSopX.ProperRCL\JSopX.AssetsRCL.csproj.
JSopX.LazyRCL: E:\All\Repos\JasonSilvestri\JSopX.Presentation\JSopX.LazyRCL\JSopX.LazyRCL.csproj.
JSopX.ProperRCL: E:\All\Repos\JasonSilvestri\JSopX.Presentation\JSopX.LazyRCL\JSopX.ProperRCL.csproj.
```

**`JSopX.OpenProjectX` Enterprie Solution Git Tree**:
> This `JSopX.OpenProjectX` enterprise solution has not yet incorporated the `JSopX.Presentation` project solution and child projects.

```
JSopX.OpenProjectX: E:\All\Repos\JasonSilvestri\JSopX.OpenProjectX\JSopX.OpenProjectX.sln.
```

[`⇧ Back to Top`](#table-of-contents)  

---


### **Step: 5.4: Github Repository Locations**:

**`JSopX.Presentation` Solution**:

```
JSopX.Presentation: https://github.com/JasonSilvestri/JSopX.Presentation/blob/master/JSopX.Presentation.sln.
```

**`JSopX.Presentation` Projects**:

```
JSopX.AssetsRCL: https://github.com/JasonSilvestri/JSopX.Presentation/blob/master/JSopX.AssetsRCL/JSopX.AssetsRCL.csproj.
JSopX.LazyRCL: https://github.com/JasonSilvestri/JSopX.Presentation/blob/master/JSopX.AssetsRCL/JSopX.LazyRCL.csproj.
JSopX.ProperRCL: https://github.com/JasonSilvestri/JSopX.Presentation/blob/master/JSopX.AssetsRCL/JSopX.ProperRCL.csproj.
```

**`JSopX.OpenProjectX` Enterprie Solution Git Tree**:
> This `JSopX.OpenProjectX` enterprise solution has not yet incorporated the `JSopX.Presentation` project solution and child projects.

```
https://github.com/JasonSilvestri/JSopX.OpenProjectX/blob/master/JSopX.OpenProjectX.sln.
```

[`⇧ Back to Top`](#table-of-contents)  

---

### **Step: 5.5: Quick Start**:

1) Put JSON clips/expanders under `Projects/<project>/clips` and `Projects/<project>/expanders` (you can create these folders).
2) Schemas live in `wwwroot/schemas`. The app validates JSON against these.
3) Run the site, open `/Validate`, paste or upload JSON, pick a schema, and validate.
4) Use breadcrumbs (`meta.breadcrumbs.origin/next`) and identity rules while iterating.

[`⇧ Back to Top`](#table-of-contents)  

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
