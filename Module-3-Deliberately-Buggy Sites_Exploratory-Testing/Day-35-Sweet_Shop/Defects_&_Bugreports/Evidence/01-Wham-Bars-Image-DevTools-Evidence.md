# Evidence — Wham Bars image request fails

**Captured:** 2026-10-05  
**Page:** https://sweetshop.netlify.app/sweets  
**Browser:** Chromium-based browser

## DevTools observations

The Wham Bars card's image element was inspected in the browser:

```text
alt: wham bar
src: https://sweetshop.netlify.app/img/whan.jpg
complete: true
naturalWidth: 0
naturalHeight: 0
```

The browser Console reported a failed resource load with HTTP 404. The Network response was independently confirmed:

```text
GET https://sweetshop.netlify.app/img/whan.jpg  -> HTTP 404
GET https://sweetshop.netlify.app/img/wham.jpg  -> HTTP 200
```

The catalog screenshot shows the broken-image icon in the Wham Bars card while the product details and Add to Basket control remain present.
