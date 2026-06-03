
# Automation & QA Developer Assessment Submission

Hi Team,

This repository contains my completed deliverables for the Automation & QA Developer assessment. The project is split into three main parts: manual web application QA testing, an automated API integration pipeline built in n8n, and a live application uptime monitor.

---

## 📁 Repository Structure

* **`/Task1_QA`**: Contains the comprehensive bug tracking report PDF featuring 5 documented functional/UX issues and a technical root-cause analysis.
* **`/Task2_n8n`**: Contains the exported JSON file for the core data pipeline, workflow design canvas screenshots, and dedicated execution documentation.
* **`/Bonus_Monitor`**: Contains the JSON workflow configuration and a live execution run screenshot for the automated uptime tracking system.

---

## 🛠️ How I Did It (Implementation Overview)

### 1. Web App QA & Debugging (Task 1)
- **Approach**: I executed complete core user flows (sign-up, login, content creation, and deletion) on the Conduit RealWorld application dashboard. 
- **Testing Methodology**: I tested for edge cases using input validation boundaries and network throttling to surface hidden production bugs. I documented each bug with clear replication steps, severity levels, and provided a deep-dive root-cause analysis for a critical failure.

### 2. n8n API Integration Pipeline (Task 2)
- **Approach**: Built a fully automated data integration workflow in n8n.
- **Logic Flow**: 
  - Configured a timed **Schedule Trigger** to fetch clean user and post payloads from the public **JSONPlaceholder API**.
  - Used specialized **n8n Expressions / Code nodes** to filter and isolate specific data records matching target rules (IDs $\le$ 3).
  - Wired a secondary HTTP node to dynamically enrich the filtered items before passing them to a conditional **IF Node** threshold switch.
  - Formatted the final output string and dispatched it directly to **Webhook.site** for tracking.
- **Error Handling**: Enabled global `Continue on Fail` parameters to guarantee the pipeline intercepts data network faults smoothly without crashing silently.

### 3. Automated Uptime Monitor (Bonus Task)
- **Approach**: Developed a lightweight monitoring script executing on a continuous 5-minute cron interval.
- **Logic Flow**: It pings the web application endpoint, reads the lower-case network metadata headers, and evaluates the `statusCode`. If the site drops below an HTTP 200, it routes traffic down a custom error path to dispatch an urgent tracking alert payload.

---

## 🎬 Video Walkthrough
A complete video recording explaining my workflow logic, architecture choices, and project organization can be accessed via the Google Drive link provided in the application dashboard.

*Everything has been thoroughly built, simulated, and validated. Thank you for your time and consideration!*
