# IdentityForge Website Hosting Guide

This guide outlines the best free hosting options for the IdentityForge landing page. Given the nature of the application (privacy/anti-detect tool), we prioritize **DDoS protection**, **anonymity**, and **reliability**.

## Top Recommendation: Cloudflare Pages

**Why:** Cloudflare offers the best-in-class DDoS protection on their free tier. They are the industry standard for protecting sites from attacks.
**Pros:**
*   **Enterprise-grade DDoS Protection**: Included for free.
*   **Global CDN**: Your site loads fast from anywhere.
*   **Free SSL**: Automatic HTTPS.
*   **Unlimited Bandwidth**: No surprise bills if your site goes viral.
*   **Privacy**: They are generally robust against takedown requests compared to smaller hosts.

### How to Deploy on Cloudflare Pages (Free)

1.  **Create a GitHub Account** (if you don't have one).
2.  **Upload the Source Code**:
    *   Create a new repository on GitHub.
    *   Upload all files from the `identityforge-website` folder to this repository.
3.  **Sign up for Cloudflare**: Go to [pages.cloudflare.com](https://pages.cloudflare.com).
4.  **Connect GitHub**: Click "Create a project" > "Connect to Git".
5.  **Select Repository**: Choose your `identityforge-website` repo.
6.  **Configure Build Settings**:
    *   **Framework Preset**: `Vite` (or `React`)
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
7.  **Deploy**: Click "Save and Deploy".
8.  **Custom Domain (Optional)**: You can buy a domain (e.g., `identityforge.net`) on Namecheap (accepts Bitcoin) and connect it in the Cloudflare dashboard.

---

## Alternative: Vercel

**Why:** Extremely easy to use and integrates perfectly with the tech stack (React/Vite).
**Pros:**
*   Very fast deployment.
*   Great DDoS protection (though Cloudflare is slightly better for high-risk sites).
*   Free SSL.
**Cons:**
*   Stricter terms of service regarding "controversial" tools compared to Cloudflare.

### How to Deploy on Vercel

1.  Go to [vercel.com](https://vercel.com) and sign up with GitHub.
2.  Click "Add New..." > "Project".
3.  Import your `identityforge-website` GitHub repository.
4.  Vercel will automatically detect it's a Vite project.
5.  Click "Deploy".

---

## Alternative: Netlify

**Why:** Simple drag-and-drop deployment (no GitHub needed if you prefer).
**Pros:**
*   **Drag & Drop**: You can just drag the `dist` folder to their website to deploy.
*   Good free tier.
**Cons:**
*   Bandwidth limits on free tier (100GB/month).

### How to Deploy on Netlify (Drag & Drop Method)

1.  On your local machine, run `npm run build` inside the project folder. This creates a `dist` folder.
2.  Go to [netlify.com](https://netlify.com) and sign up.
3.  Go to the "Sites" tab.
4.  Drag and drop the `dist` folder onto the page.
5.  Your site is live instantly.

---

## 💡 Pro Tip for Anonymity

*   **Domain Registration**: If you buy a custom domain, use a registrar that supports **WHOIS Privacy** (usually free) and accepts **Crypto** payments (like Namecheap or Njalla).
*   **Contact Info**: Use a dedicated ProtonMail or Tutanota email address for all account signups.
*   **VPN**: Always access your hosting dashboard via a VPN.
