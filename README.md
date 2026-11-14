# ABHI TRAVELS website

A responsive starter website built with plain HTML, CSS and JavaScript. It is ready to publish with GitHub Pages.

## Files

- `index.html` — page structure and content
- `style.css` — layout, colours and responsive styling
- `script.js` — mobile navigation, date validation and booking enquiry behaviour

## Preview locally

Open `index.html` in a browser. For a more reliable local preview, open the folder in VS Code and use the Live Server extension.

## Publish with GitHub Pages

1. Sign in to GitHub and create a **new public repository** named `abhi-travels-website`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository's root (not inside another folder).
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then save.
6. Wait a few minutes. GitHub will show the published website address in the Pages section.

## Connect WhatsApp booking later

Open `script.js` and update:

```js
whatsappNumber: ""
```

Use the country code and phone number with digits only. For an Indian number, use `91` followed by the 10-digit mobile number. Do not include `+`, spaces or hyphens.

The current booking form validates the details and prepares a WhatsApp message when a number is configured. Until then, it displays a setup note. It does **not** store enquiries or confirm bookings.

## Before launch

- Replace the illustrative vehicle categories/photos with your actual fleet.
- Add your real phone number, WhatsApp number, email and business address.
- Add rental rates, terms, deposit details, eligibility requirements and cancellation policy.
- If you need bookings to be stored and managed online, connect a secure backend or booking service. GitHub Pages hosts static files and does not process or store form submissions by itself.

## Image note

The sample photography is loaded from Unsplash image URLs and therefore requires an internet connection. Replace these image URLs with photos you have permission to use before launch.
