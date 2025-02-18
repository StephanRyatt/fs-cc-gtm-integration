# FS Cookie Consent Fix

## 📝 Description
This repository contains a **modified version of Digital Sparks' Cookie Consent Boost script (`index.js`)** with a corrected mapping for ad personalization. The fix ensures that **`ad_personalization` is only enabled when "Marketing" consent is granted**, aligning with **Google Consent Mode best practices**.

Users should continue using the **original version of Finsweet's `fs-cc.js`** from their CDN. No modifications were necessary for that file.

## 🚀 Why This Fix?
By default, Digital Sparks' script (`index.js`) incorrectly links `ad_personalization` to "Personalization" instead of "Marketing." This fix ensures:
- ✅ **Proper Google Ads & GDPR compliance**.
- ✅ **Accurate tracking behavior** by only enabling ad-related cookies when marketing consent is given.
- ✅ **Prevention of unintended tracking issues.**

## 📦 How to Use

### **1️⃣ Use via jsDelivr CDN (Recommended)**
You can serve the scripts directly via jsDelivr:
```
https://cdn.jsdelivr.net/gh/YOUR_GITHUB_USERNAME/fs-cookie-consent-fix/index-fixed.js
```

### **2️⃣ Add to Webflow or Your Website**
#### **Use the original Finsweet script + modified index.js**
```html
<script async src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js" fs-cc-mode="opt-in"></script>
<script async src="https://cdn.jsdelivr.net/gh/YOUR_GITHUB_USERNAME/fs-cookie-consent-fix/index-fixed.js"></script>
```

### **3️⃣ Manual Hosting (Optional)**
If you prefer to host the file yourself, download `index-fixed.js` and upload it to your own server.

## 🛠 How It Works
The script automatically updates Digital Sparks' consent assignments to:
```javascript
ad_personalization: window.FsCC.store.consents.marketing ? "granted" : "denied",
```
This prevents **ad personalization from being enabled under "Personalization"** and ensures **it only activates when "Marketing" is accepted.**

## 📌 Key Fixes
- 🛠 `ad_personalization` now respects "Marketing" consent instead of "Personalization."
- ⚡ Ensures **Google Ads & Consent Mode compliance.**
- 🔄 Fully compatible with **Webflow, GTM, and Google Analytics.**

## ❓ Need Help?
Open an issue in this repo or reach out for support! 🚀

