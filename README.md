# FS-CC GTM Integration

## 📝 Description
This repository provides a **fixed and enhanced integration between Finsweet's Cookie Consent script (`fs-cc.js`) and Google Tag Manager (GTM)**. It ensures that consent settings from Finsweet’s system are correctly mapped and pushed to GTM for compliance with **Google Consent Mode, GDPR, and CCPA.**

### Why This Fix?
By default, Digital Sparks' Cookie Consent Boost script (`index.js`) incorrectly linked `ad_personalization` to "Personalization" instead of "Marketing." Since this script **pushes consent updates to GTM**, incorrect mapping leads to **inaccurate tracking behavior** in Google Ads and Analytics.

This fix ensures:
- ✅ **Correct GTM Consent Mode behavior** – Ad personalization is only enabled with "Marketing" consent.
- ✅ **Full integration with Finsweet's `fs-cc.js`** – Works seamlessly with Webflow setups.
- ✅ **Accurate compliance enforcement** – Avoids unintentional ad tracking violations.

## 📦 How to Use

### **✅ Option 1: Use jsDelivr CDN (Recommended)**
The easiest way to integrate this fix is by loading the scripts via jsDelivr:
```html
<script async src="https://cdn.jsdelivr.net/gh/StephanRyatt/fs-cc-gtm-integration/fs-cc-fixed.js" fs-cc-mode="opt-in"></script>
<script async src="https://cdn.jsdelivr.net/gh/StephanRyatt/fs-cc-gtm-integration/index-fixed.js"></script>
```
🚀 **Why use jsDelivr?**
- No hosting required.
- Fast, global CDN.
- Automatically caches the latest version when updated.

---

### **🔄 Option 2: Self-Host the Scripts (For Full Control)**
Prefer to host the scripts yourself? Follow these steps:
1. **Download the files**:
   - [`fs-cc-fixed.js`](https://github.com/StephanRyatt/fs-cc-gtm-integration/fs-cc-fixed.js)
   - [`index-fixed.js`](https://github.com/StephanRyatt/fs-cc-gtm-integration/index-fixed.js)
2. **Upload them to your own server**.
3. **Update your script references** in Webflow or your website.

💡 **Advanced users:** If modifying further, fork this repo and update your jsDelivr links accordingly.

---

## 🛠 How It Works
This integration ensures that consent preferences are correctly passed to Google Tag Manager (GTM):
```javascript
ad_personalization: window.FsCC.store.consents.marketing ? "granted" : "denied",
```
This prevents ad personalization from being incorrectly tied to "Personalization" and ensures only "Marketing" consent enables ad-related cookies.

Since `index-fixed.js` updates GTM’s dataLayer, **Google Ads, Analytics, and other tools receive the correct consent signals**, preventing unauthorized tracking and maintaining compliance.

## 📌 Key Fixes
- 🛠 `ad_personalization` now aligns with "Marketing" consent.
- ⚡ Ensures **Google Ads & Consent Mode compliance.**
- 🔄 Fully compatible with **Webflow, GTM, and Google Analytics.**

## ❓ Need Help?
Open an issue in this repo or reach out for support! 🚀

