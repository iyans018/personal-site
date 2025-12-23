Ini adalah **Project Brief & Planning Summary** yang komprehensif. Lu bisa kasih ini ke AI Agent (kayak Cursor, ChatGPT, atau Claude) untuk mulai tahap *planning* dan *coding*.

Gue udah susun supaya AI tersebut paham konteks *branding*, *tech stack*, hingga struktur datanya.

---

# **Project Brief: Personal Engineering Portfolio & Blog**

## **1. Core Identity & Branding**

* **Persona:** Backend Engineer (Mid-level) transitioning to Fintech & Technical Leadership.
* **Key Value:** Focused on Reliability, Scalability, and Maintainability (DDIA Principles).
* **Tone of Voice:** Professional, technical, analytical, yet accessible.
* **Target:** Fintech Recruiters, CTOs, and Tech Collaborators.

## **2. Technical Requirements (Tech Stack)**

* **Framework:** Next.js.
* **Styling:** Tailwind CSS + Shadcn/UI (Minimalist, "Linear/Stripe" aesthetic).
* **Content Management:** Markdown/MDX for Blog posts and Case Studies.
* **Deployment:** Vercel or Netlify.
* **Integrations:** Medium RSS/API for blog sync, GitHub API for repo highlights.

## **3. Information Architecture (Sitemap)**

1. **Home:** Hero Section (Value Prop), Core Principles (3 Pillars), Tech Stack "Bento" Grid.
2. **Case Studies:** Detailed breakdown of:
* *Fintech Exchange BE* (Microservices, RabbitMQ).
* *Legal Approval System* (Performance optimization, 50% faster).
* *Partner Data Management* (Scalable REST APIs).


3. **Blog:** List of technical articles (integrated with Medium).
4. **About/Experience:** Career timeline (Telkomsigma, etc.) and Education.
5. **Contact:** Minimalist form or direct links to LinkedIn/Email.

## **4. Feature Specs for AI Planning**

* **Performance First:** Zero CLS (Cumulative Layout Shift) and 100/100 Lighthouse score.
* **Case Study Template:** Must include sections for: *The Challenge*, *System Architecture* (image/diagram placeholder), *Technical Implementation*, and *The Impact (Metrics)*.
* **Blog Engine:** Support for syntax highlighting (Shiki/Prism) and LaTeX for technical formulas.
* **Dark Mode:** Primary focus on a sleek dark-themed UI.

## **5. Key Content to Implementation (The "Hook")**

* **Hero Text:** "Building Resilient & Scalable Backends for High-Stakes Systems."
* **Bio Highlight:** Mention "Designing Data-Intensive Applications (DDIA)" as a core engineering philosophy.
* **Project Focus:** Highlight the transition from Enterprise Python/Node.js to high-performance Go and System Design.

---

### **Instruksi Tambahan buat Lu (Cara Pake Summary ini):**

Kalau lu pake AI Agent (misal **Cursor** atau **Claude**), lu tinggal bilang begini:

> *"Gue mau buat personal website. Ini adalah Project Brief-nya [Paste summary di atas]. Tolong buatkan **Step-by-Step Project Roadmap**, mulai dari inisialisasi folder, pemilihan template Astro/Next.js yang cocok, sampai struktur folder untuk konten Markdown Case Studies gue. Fokus pada clean code dan arsitektur yang modular."*

### **Pertanyaan Terakhir dari Gue:**

Apakah lu mau gue bantu bikinin **Sitemap Visual** (daftar folder dan file) yang ideal buat struktur website ini biar AI-nya nggak ngaco pas bikin *file structure*-nya?