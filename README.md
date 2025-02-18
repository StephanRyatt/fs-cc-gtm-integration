# FS Cookie Consent Fix

## 📝 Description
This repository contains a **modified version of Digital Sparks' Cookie Consent Boost script (`index.js`)** with a corrected mapping for ad personalization. The fix ensures that **`ad_personalization` is only enabled when "Marketing" consent is granted**, aligning with **Google Consent Mode best practices**.

This script works jointly with **Finsweet's Cookie Consent script (`fs-cc.js`)**, which provides the core cookie consent functionality. Digital Sparks' `index.js` acts as an enhancement layer, integrating **Google Consent Mode and pushing consent changes to Google Tag Manager (GTM)**. Because `index.js` interacts with Finsweet's system, incorrect consent mapping in `index.js` can override the main settings, making this fix necessary.

Users should also use the **self-hosted version of Finsweet's `fs-cc.js` from this repository**, ensuring full control over both scripts.

## 🚀 Why This Fix?
By default, Digital Sparks' script (`index.js`) incorrectly links `ad_personalization` to "Personalization" instead of "Marketing." Since `index.js` pushes consent updates to GTM, this incorrect mapping leads to **inaccurate consent enforcement** in Google Ads and other tracking tools. This fix ensures:
- ✅ **Proper Google Ads & GDPR compliance**.
- ✅ **Accurate tracking behavior** by only enabling ad-related cookies when marketing consent is given.
- ✅ **Prevention of unintended tracking issues.**

## 📦 How to Use

Pick one of the following methods to include the scripts in your website:

### **✅ Option 1: Use jsDelivr CDN (Recommended)**
This is the easiest way to load the scripts. Just add the following lines to your Webflow project or website:
```html
<script async src="https://cdn.jsdelivr.net/gh/StephanRyatt/fs-cookie-consent-fix/fs-cc-fixed.js" fs-cc-mode="opt-in"></script>
<script async src="https://cdn.jsdelivr.net/gh/StephanRyatt/fs-cookie-consent-fix/index-fixed-corrected.js"></script>
```
🚀 **Benefits of jsDelivr:**
- No need to host files yourself.
- Fast global CDN with caching for better performance.
- Automatically updates when a new version is pushed.

---

### **🔄 Option 2: Self-Host the Scripts (For Full Control)**
If you prefer to host the scripts yourself instead of using jsDelivr:
1. **Download the files**:
   - [`fs-cc-fixed.js`](https://github.com/StephanRyatt/fs-cookie-consent-fix/fs-cc-fixed.js)
   - [`index-fixed-corrected.js`](https://github.com/StephanRyatt/fs-cookie-consent-fix/index-fixed-corrected.js)
2. **Upload them to your own server**.
3. **Update your website’s script references** to point to your hosted versions.

💡 **Want to customize further?** You can fork this repo, modify the scripts, and host your own version. Just update your script references accordingly.

---

## 🛠 How It Works
The script automatically updates Digital Sparks' consent assignments to:
```javascript
ad_personalization: window.FsCC.store.consents.marketing ? "granted" : "denied",
```
This prevents **ad personalization from being enabled under "Personalization"** and ensures **it only activates when "Marketing" is accepted.**

Because `index.js` pushes consent changes to GTM, ensuring the correct mapping here means **Google Ads and other tracking tools receive the right permissions**, preventing unauthorized tracking and maintaining compliance with data privacy laws.

## 📌 Key Fixes
- 🛠 `ad_personalization` now respects "Marketing" consent instead of "Personalization."
- ⚡ Ensures **Google Ads & Consent Mode compliance.**
- 🔄 Fully compatible with **Webflow, GTM, and Google Analytics.**

## ❓ Need Help?
Open an issue in this repo or reach out for support! 🚀
