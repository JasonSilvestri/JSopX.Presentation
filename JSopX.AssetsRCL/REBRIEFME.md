# Self Health® - SaaS Briefing (v1)

**SaaS (v1)**, codename, `SelfHealth.SaaS` (aka `SelfHealth.Start`), is an **Independent Care Systems Inc (_ICSI_)**, **starter portal** that showcases newly manufactured **Self Health®** **_SaaS_** services, in rapid succession, across our `SelfHealth.SaaS` SPA (HTML), ASP.NET Core (Razor), and MAUI (Blazor Hybrid) Projects.

---

```bash
# For The Cool Kids: Clone SelfHealth.SaaS Git Repository
$ git clone https://github.com/InCareSys/SelfHealth.SaaS.git
```

---

[`Home`](./README.md) 

---

🛡️ **IMPORTANT**: 

> These repositories are **strictly proprietary** and **not open for contributions**. Their purpose is internal development and controlled distribution only.  

---

🛡️ **BRIEFING ONLY**: 

> [!WARNING]
> This project is currently only a placeholder repository holding the first briefing documentation.

---

### Table of Contents

- [Overview](#overview)
- [MVP Scope](#mvp-scope)
- [Architecture](#architecture)
- [Project Set](#project-set-3)
- [Shared UI & Assets](#shared-ui--assets)
- [Architecture & Routing](#architecture--routing)
- [CSS Isolation Notes (MAUI)](#css-isolation-notes-maui)
- [Environments & Config](#environments--config)
- [CI/CD](#cicd)
- [Acceptance Criteria](#acceptance-criteria)
- [Risks & Mitigations](#risks--mitigations)
- [Repository Layout](#repository-layout)
- [Operations Runbook](#operations-runbook)
- [In Conclusion](#in-conclusion)
- [License / Ownership](#license--ownership)

---
 
## Overview


**SaaS (v1)**, codename, `SelfHealth.SaaS` (aka `SelfHealth.Start`), is an **Independent Care Systems Inc (_ICSI_)**, **starter portal** that showcases newly manufactured **Self Health®** **_SaaS_** services, in rapid succession, across **three fronts**: Through our `SelfHealth.SaaS` SPA (HTML), ASP.NET Core (Razor), and MAUI (Blazor Hybrid) Projects.

They reuse our **Presentation** RCLs, in-conjunction with `SelfHealth.SaaS` service in discussion, to rapid-prototype the service against real-world application types we regularly develop applications. Think of the `SelfHealth.SaaS` project as a FOB (_Forward Operating Base_), where you can quickly spin up new services, against common presentation RCLs we know we want make available to the projects of similar business concern seperation; a centralization of our landing experiences and dashboard patterns, so every new app can copy a proven shell and stay visually consistent with **SelfHealth.ProdRCL**.
 
For example, `SaaS` has already become the canonical “UI baseline” for home, intro, dashboards, login/signup, and other project components.

---

## MVP Scope

* **Home/Index**: rich directory of Self Health® projects with links.
* **Dashboard**: cards, charts, activity feed (dummy data initially).
* **Login/Signup** placeholders (UI only; wire later).
* **Theme**: import from **SelfHealth.ProdRCL**.
* **DocsX hooks** for embedding readmes/briefs.

## Project Set (3)

### 1. **`SelfHealth.SaaS.Spa`** — **HTML Startup** (no server code)

   * `index.html`: project directory (cards/grid, logos, links).
   * `dashboard.html`: sample KPIs/charts using Presentation assets.

### 2. **`SelfHealth.SaaS.Core`** — **ASP.NET Core Razor Pages**

   * `Pages/Index.cshtml`: same directory but server-rendered.
   * `Pages/Dashboard.cshtml`: charts via `_content/Presentation...` scripts/CSS.
   * Route templates for future auth integration.

### 3. **`SelfHealth.SaaS.Maui`** — **MAUI Blazor Hybrid and Web App**

   * `Pages/Index.razor` (component) — same directory content.
   * `Pages/Dashboard.razor` — chart placeholders.
   * Uses **App.css** isolation correctly; imports Presentation RCL globally.

## Shared UI & Assets

* Consume **SelfHealth.ProdRCL**: layouts, nav, sidebar, colors, typography, and JS utilities (Bootstrap 5.3).
* Keep local page-specific CSS minimal; prefer RCL.

## Architecture & Routing

* **SPA**: static routing (hash or directory).
* **Core**: Razor Pages route `/`, `/dashboard`, with partials for common header/footer (from RCL).
* **MAUI**: BlazorWebView hosting; register routes for `/`, `/dashboard`; share components with RCL where possible.

## CSS Isolation Notes (MAUI)

* Keep **App.css** for host-level isolated styles; avoid duplicating RCL CSS there.
* Load RCL CSS/JS via `_content/{RCL}/...` in `wwwroot/index.html` (MAUI’s Blazor host) or via `MauiProgram` resource mapping.
* For components requiring isolation, add `.razor.css` next to the page—don’t override RCL global tokens.

## Environments & Config

* **SPA**: static hosting on GitHub Pages / Azure Static Web Apps (optional).
* **Core**: Kestrel local → Azure App Service.
* **MAUI**: device targets; no secrets in client; any dynamic data comes from WebApi.

## CI/CD

* Build and publish **Presentation** RCL first.
* Lint/format static SPA; publish to storage.
* Build ASP.NET Core and MAUI as separate jobs.
* Reuse a single “branding” artifact (logo, palette) from Presentation.

## Acceptance Criteria

* All three projects render **the same** home + dashboard layouts using RCL assets.
* Navigation/components look identical across SPA/Core/MAUI (allow minor platform differences).
* No duplicated CSS bundles; RCL provides global styling.
* MAUI loads without style collisions; isolation intact.

## Risks & Mitigations

* **CSS collisions** → scope local styles; rely on RCL tokens.
* **Asset path issues** → verify `_content/...` mapping in each host.
* **Over-customization** → enforce starter stays thin; feature work happens in apps.

## Repository Layout

```text
SelfHealth.SaaS/
├─ README.md
├─ SelfHealth.SaaS.sln
├─ SelfHealth.SaaS.Spa/           # static HTML starter
│  ├─ index.html
│  ├─ dashboard.html
│  └─ assets/ (minimal: pulls from RCL where possible)
├─ SelfHealth.SaaS.Core/          # ASP.NET Core Razor Pages
│  ├─ Pages/Index.cshtml
│  ├─ Pages/Dashboard.cshtml
│  ├─ _Layout.cshtml (imports RCL)
│  └─ Program.cs / appsettings.json
├─ SelfHealth.SaaS.Maui/          # .NET MAUI Blazor Hybrid (template required)
│  ├─ App.xaml / App.razor
│  ├─ wwwroot/index.html (RCL includes)
│  ├─ Pages/Index.razor (+ .razor.css if needed)
│  └─ Pages/Dashboard.razor
```

## Operations Runbook

* **SPA**: open `index.html` locally; for prod serve via static host.
* **Core**: `dotnet run --project SelfHealth.SaaS.Core` → `https://localhost:xxxx/`
* **MAUI**: `dotnet build -t:Run -f net9.0-windows` (or `-android` / `-maccatalyst`)

## In Conclusion

`SelfHealth.SaaS` is the **canonical UI starter**. Nail this, and every downstream app (CRM, Titrate, etc.) inherits consistent shells, dashboards, and brand without rework.

---

### License / Ownership

**Self Health®** is a registered trademark of Independent Care Systems Inc (ICSI).  
Unauthorized use, modification, or distribution of this software is strictly prohibited.

---

[`Home`](./README.md) · · · [`⇧ Back to Top`](#table-of-contents)  

---

##### [incaresys.com](https://incaresys.com/) | [GitHub](https://github.com/InCareSys/SelfHealth) | [Email](mailto:marks@incaresys.com) | [Phone : 508-612-5021](phoneto:508-612-5021)

###### Copyright © 2025 – All Rights Reserved by Mark J. Silvestri & Independent Care Systems Inc (ICSI)
