(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{function t(){dataLayer.push(arguments)}let o=setInterval(function(){"FsCC"in window&&(clearInterval(o),window.FsCC.push(()=>{e()}),window.FsCC.consentController.on("updateconsents",()=>{e()}))},5);document.querySelectorAll("[fs-cc=open-banner]").forEach(n=>{n.addEventListener("click",()=>{FsCC.banner.open()})});function e(){let n={ad_personalization:window.FsCC.store.consents.marketing?"granted":"denied",ad_storage:window.FsCC.store.consents.marketing?"granted":"denied",ad_user_data:window.FsCC.store.consents.marketing?"granted":"denied",analytics_storage:window.FsCC.store.consents.analytics?"granted":"denied",personalization_storage:window.FsCC.store.consents.personalization?"granted":"denied",functionality_storage:"granted",security_storage:"granted"};t("consent","update",n),dataLayer.push({event:"fs-cc-consent-update"})}});})();
