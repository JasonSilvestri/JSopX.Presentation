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

1. **Skip Remaining Steps**: 
   - Technically, you could skip to the [Next Steps](#next-steps) section if you are on a project-by-project installation mission.
2. **Conclude Remaining Steps**:
   - **Me personally?** I would continue on to the remaining steps _below_, starting at **[Step 5: Project Structure](#step-5-project-file-structure)**. There is just very useful information related to the project that I would find helpful.

[`Back to Top`](#table-of-contents)

---

## **Step 5: Project File Structure**

The `JSopX.Presentation` Project in particular, contains several files and directories, all with their own functionality & purpose for existing. 

For brevity, samples will not have the complete file structure you get when installing, but there are some core files and directories that have special consideration you should get to know. 

---

### **Step: 5.1: Structured Project & Solution Considerations**:

All `JSopX™ projects` follow a consistent directory structure. 

1. The `JSopX.Presentation` Project naming conventions include capital casing for `.Server` directories and lowercase for `.client` directories.
2. I create a [Visual Studio](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Technologies/#visual-studio) Solution Folder to house the primary `.sln` solution file.
3. I create a Client-Side Project Folder for `.esproj` project files, and related files
4. I create a similar Server-Side Project Folder for `.csproj`, and related files.

At the highest level, a common, plain-text file folder structure of the `JSopX.Presentation` Solution and Projects should look something like what follows:

```plaintext
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
├── PathConfig.targets           # Centralized MSBuild target configuration for project references.
├── README.md                    # High-level project documentation (you are here!).
├── JSopX.AssetsRCL/             # ASP.NET Core Razor Class Library for raw assets folder.
│   ├── JSopX.AssetsRCL.csproj   # Visual Studio Project configuration file.
├── JSopX.LazyRCL/               # ASP.NET Core Razor Class Library for raw assets folder.
│   ├── JSopX.LazyRCL.csproj     # Visual Studio Project configuration file.
├── JSopX.ProperRCL/             # ASP.NET Core Razor Class Library for raw assets folder.
│   ├── JSopX.ProperRCL.csproj   # Visual Studio Project configuration file.

```

[`Back to Top`](#table-of-contents)

---

```
JSopX.AssetsRCL: E:\All\Repos\JasonSilvestri\JSopX.Presentation\JSopX.ProperRCL\JSopX.ProperRCL.csproj (in 1.23 sec).
JSopX.LazyRCL: E:\All\Repos\JasonSilvestri\JSopX.Presentation\JSopX.LazyRCL\JSopX.LazyRCL.csproj (in 1.24 sec).
JSopX.ProperRCL: E:\All\Repos\JasonSilvestri\JSopX.Presentation\JSopX.LazyRCL\JSopX.LazyRCL.csproj (in 1.24 sec).
```

### **Step: 5.3: Structured Table**:

A table structure of the same with no tree legs `JSopX.Presentation` Project, files and resources.


| **File/Directory**                        | **Description**                                                                                   |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------|
| &nbsp;📁&nbsp;**JSopX.Presentation/**&nbsp;                | Parent `JSopX.Presentation` Visual Studio Solution folder, containing both client and server code.|
| &nbsp;├&nbsp;📝&nbsp;`.gitattributes`&nbsp;                   | Git attributes file for repository metadata and configurations. |
| &nbsp;├&nbsp;📝&nbsp;`.gitignore `&nbsp;                      | Specifies files and directories to ignore in version control. |
| &nbsp;├&nbsp;📝&nbsp;`JSopX.Presentation.sln`&nbsp;            | Visual Studio `.sln` solution file linking the client and server projects. |
| &nbsp;├&nbsp;📝&nbsp;`LICENSE.txt`&nbsp;                      | Licensing information for the project (generally `MIT` open-source license). |
| &nbsp;├&nbsp;📝&nbsp;`PathConfig.targets`&nbsp;               | Centralized MSBuild target configuration for project references, used in conjunction with Git Sub Trees, to retain all files and references, while dynamically resetting reference paths if necessary. |
| &nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp;                      | The current, most recent, primary project README `.md` file. |
| &nbsp;├&nbsp;📁&nbsp;**jsopx.reactcore.client**&nbsp;         | React client-side application folder, housing the front-end implementation. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`jsopx.reactcore.client.esproj`&nbsp;     | React client-side Visual Studio project `.esproj` configuration file. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`angular.json`&nbsp;                     | React CLI configuration file for workspace and project settings. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`package.json`&nbsp;                     | NPM metadata file listing project dependencies and scripts. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`src/`**&nbsp;                               | Main source directory for React, containing app components and assets. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`app/`**&nbsp;                             | Core React modules, components, and routing configurations. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app-routing.module.ts`&nbsp;          | Defines route configurations for React components. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app.component.css`&nbsp;              | Styles for the main application component. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app.component.html`&nbsp;             | HTML template for the main application component. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app.component.spec.ts`&nbsp;          | Unit test file for the main application component. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app.component.ts`&nbsp;               | TypeScript logic for the main application component. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app.module.ts`&nbsp;                  | Root React module that declares components and imports dependencies. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`index.html`&nbsp;                     | Root HTML file that bootstraps the React application. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`main.ts`&nbsp;                        | Entry point file where React initializes and bootstraps the application. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`proxy.conf.js`&nbsp;                  | Configuration file for setting up API proxying in React. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`styles.css`&nbsp;                     | Global stylesheet for React application. |
| &nbsp;├&nbsp;📁&nbsp;**JSopX.Presentation.Server**&nbsp;         | ASP.NET Core server-side folder for back-end logic and API endpoints. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.Presentation.Server.csproj`&nbsp;     | React server-side Visual Studio project `.csproj` configuration file. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`Program.cs`&nbsp;                       | Main entry point for the ASP.NET Core application, initializing services. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`Controllers/`**&nbsp;                     | Contains API controllers that handle HTTP requests and responses. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`appsettings.json`&nbsp;                 | Configuration file for application settings like connection strings. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`WeatherForecast.cs`&nbsp;               | Example Weather Forecast model class provided by ASP.NET Core templates for demonstration. |

[`Back to Top`](#table-of-contents)

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
   - A [Shared Assets & Resources Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets and project documentation.
   - **Explore GitHub**: [JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.BridgeTooFar)

2. **`JSopX.ClassLibrary`**:
   - A [Shared Data, Service & Function Project](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) that houses shared business logic and helper methods.
   - **Explore GitHub**: [JSopX.ClassLibrary](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ClassLibrary)

3. **`JSopX.WebAPI`**:
   - A [Shared Data, Service & Function Project](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) which acts as the centrialized **Web API**, used by all projects that access data endpoints in the application.
   - **Explore GitHub**: [JSopX.WebAPI](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.WebAPI)
 
4. **`JSopX.RCLxProper`**:
   - An extremely light-weight, [Shared Assets & Resources Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) version of the `JSopX.Assets` Razor Class Library, specifically designed for Production-Ready environments.
   - **Explore GitHub**: [JSopX.RCLxProper](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.RCLxProper)


[`Back to Top`](#table-of-contents)

---

## **Step 7: Usage**

Although the `JSopX.Presentation` project is primarily designed as a self-contained demonstration project, it is fully capable of integration with other JSopX™ projects. Here's how to add it to your project:

---

### **Step 7.1: Adding the JSopX™ Presentation to Other Projects**

1. **Add Project Reference**:
   - Open your solution in Visual Studio.
   - Right-click the project that will use `JSopX.Presentation` and select `Add > Project Reference`.
   - Check the box for `JSopX.Presentation` and click `OK`.

---

## **Step 8: Extended Usage**

> [!TIP]
> These particular `Extended Usage` examples **are not** required to implement. They are just example extended usages for those of whom are new to projects like the `JSopX.Presentation` Project.
>

---

### **Step 8:1. ASP.NET Core Server Project**

1. Add dependency injection for shared services in `Program.cs`:

   ```csharp
   builder.Services.AddScoped<ExampleService>();
   ```

2. Create or modify controllers to expose endpoints:

   ```csharp
   [ApiController]
   [Route("api/[controller]")]
   public class ExampleController : ControllerBase {
       private readonly ExampleService _service;

       public ExampleController(ExampleService service) {
           _service = service;
       }

       [HttpGet]
       public IActionResult GetExample() {
           var data = _service.GetExampleData();
           return Ok(data);
       }
   }
   ```

[`Back to Top`](#table-of-contents)

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

- **[Continue](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.VueCore/README.md)** → _Continue_ as **you were**, exploring and/or installing other projects like you did with **this project**. You'll move onto the next project, using the `JSopX.VueCore` _Using Latest_ Variant.  

---

- [Browse By-Phase](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/README.md): **Browse** **previous versions** of the application by **phases** using the `JSopX.Presentation` _By-Phase_ Variant.   
- [Start From Scratch](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/RECREATEME.md): **Create project** from scratch, step-by-step, using the `JSopX.Presentation` _From Scratch_ Variant.
- [Get All Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.OpenProjectX/README.md): **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ReactCore/README.md) » [`Introduction`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Introduction/) » [`Projects`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/) · · **`Use Latest`** · [`By-Phase`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/README.md) · [`From Scratch`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/RECREATEME.md) · · [`Back to Top`](#table-of-contents) · [`« Previous`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.AngularCore/) [`Next »`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.VueCore/)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
