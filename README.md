# HILLTOP REAL ESTATE - Indian Real Estate Marketplace

A modern, responsive, and fully functional **Static Real Estate Website** designed specifically for the Indian property market.

Developed purely with **HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5**, completely independent of Django, Python, SQLite, or any server-side runtime.

---

## 1. Project Overview & Identity

- **Brand Name:** HILLTOP REAL ESTATE
- **Market:** India (Pan-Indian Metropolitan & Regional Focus)
- **Currency:** Indian Rupees (₹) with Lakh / Crore / Month formatting
- **Primary Locations:**
  - **Kerala:** Kochi (Marine Drive, Kakkanad), Kottayam, Thiruvananthapuram (Kowdiar, Technopark), Kozhikode (Mavoor Road)
  - **Karnataka:** Bengaluru (Whitefield, Indiranagar, Electronic City, Rajajinagar)
  - **Maharashtra:** Mumbai (Bandra West, Powai, Worli), Pune (Hadapsar, Kharadi)
  - **Telangana:** Hyderabad (Gachibowli Financial District, Hitec City)
  - **Tamil Nadu:** Chennai (OMR IT Corridor)
  - **Delhi NCR:** Gurugram (Golf Course Road), Noida
- **Color Palette:**
  - Primary Navy Blue: `#0B2545`
  - Secondary Accent Blue: `#2563EB`
  - Background: `#FFFFFF`
  - Light Background: `#F5F7FA`
  - Text: Dark Charcoal `#222222`
  - Warning/Demo Badges: Amber `#D97706`
  - Success/Verification: Emerald `#059669`

---

## 2. Technology Stack

- **HTML5:** Semantic markup, responsive viewport settings, accessible forms.
- **CSS3:** Custom design tokens (`style.css`), fluid media queries (`responsive.css`), smooth hover animations, box shadows, and responsive grid layouts.
- **Bootstrap 5.3 & Icons:** Clean typography, grid utilities, Bootstrap Icons, Font Awesome 6.
- **Vanilla JavaScript:** 
  - `properties.js`: Dynamic property data store with 16+ realistic Indian properties, search/filter algorithms, and currency formatters.
  - `auth.js`: Client-side demo authentication, session management, and role-based profiles (Buyer, Seller, Tenant).
  - `forms.js`: Indian mobile number validation (`+91`), email validation, image file previews, demo inquiry generation, and sell form processing.
  - `main.js`: Sticky navigation, active link highlighting, favourites management, toast notifications, and URL parameter routing.
- **Client-Side Persistence:** `localStorage` for favourites, recently viewed properties, custom demo property listings, and user authentication sessions.

---

## 3. Directory Structure

```text
realestate/
│
├── dist/                   # Deployable static site with all 12 HTML pages and its own assets/
│   ├── index.html
│   ├── about.html
│   ├── buy.html
│   ├── rent.html
│   ├── sell.html
│   ├── property-details.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── favourites.html
│   ├── contact.html
│   └── 404.html
│
├── assets/
│   ├── css/
│   │   ├── style.css       # Core brand stylesheet, variables, and typography
│   │   ├── responsive.css  # Mobile and tablet responsiveness
│   │   └── bootstrap.min.css # Local fallback Bootstrap stylesheet
│   │
│   ├── js/
│   │   ├── properties.js   # Central Indian property catalog and filtering engine
│   │   ├── auth.js         # Client-side demo authentication and session handling
│   │   ├── forms.js        # Form validation, image preview, and inquiry handling
│   │   └── main.js         # Core UI interactions, toast alerts, and page router
│   │
│   ├── images/             # Property photos, city views, team members, and icons
│   └── lib/                # Existing front-end libraries
│
├── website/                # Preserved original Django source; not served by Vercel
├── vercel.json
└── README.md               # Complete documentation
```

---

## 4. Key Features & Indian Market Adaptations

1. **Realistic Indian Property Terminology:**
   - 1, 2, 3, 4+ BHK configurations
   - Carpet Area vs. Super Built-Up Area in square feet (`sq.ft`)
   - Furnishing Status: *Fully Furnished*, *Semi-Furnished*, *Unfurnished*
   - Possession Status: *Ready to Move*, *Under Construction*
   - Security Deposit and Maintenance Charges
   - State RERA Registration display references
2. **Indian Rupee (INR ₹) Formatting:**
   - Automatic conversion into Lakhs and Crores (e.g. `₹85 Lakhs`, `₹2.45 Crore`, `₹35,000/month`).
3. **Indian Mobile Number Validation:**
   - Accepts 10-digit mobile numbers with optional `+91` or `0` prefix.
4. **Interactive Demo Authentication:**
   - Quick-fill buttons on `login.html`:
     - **Buyer:** `arun@hilltop.in` / `buyer123`
     - **Seller:** `priya@hilltop.in` / `seller123`
     - **Tenant:** `rahul@hilltop.in` / `tenant123`
5. **Interactive Listing Submissions:**
   - On `sell.html`, users can upload photos with real-time previews.
   - Submitted properties are stored in `localStorage` and immediately appear on the Buy and Rent listing pages tagged with a `Demo Submission` badge and in the user's Dashboard.
6. **URL Parameter Navigation:**
   - `property-details.html?id=HT-101` dynamically loads the selected property's title, specifications, gallery, nearby landmarks, and agent contact details.
7. **Favourites & History:**
   - Heart buttons toggle favourite status across all pages with real-time badge updates and instant toast alerts.

---

## 5. How to Run the Website

The deployable site in `dist/` is static and needs no Python, Django, Node.js, or database setup.
In VS Code, open the `dist/` folder, right-click `index.html`, and choose **Open with Live Server**. Serving `dist/` as the web root preserves the site's `/assets/` and page links.

---

## 6. Original Django Source

The original Django templates and website source under `website/` are retained and are not part of the deployed output. Vercel serves only `dist/`; it does not install or run Django. The generated HTML pages in `dist/` contain no Django template tags.

## 7. Static site behavior

Property search, favourites, forms, and demo accounts run in the browser. Login and registration data stored in `localStorage` are demonstration-only and are not secure authentication. No server-side form submission or account service is configured.

## 8. Deploy the static website to Vercel

The repository's `vercel.json` selects Vercel's **Other** (static) framework and publishes `dist/` without installing dependencies or running a build. `/` serves `index.html`; each `.html` page is directly accessible, and Vercel uses `404.html` for missing routes.

Import the repository into Vercel and deploy with the checked-in static configuration. Google Fonts, Bootstrap 5.3, Bootstrap Icons, and Font Awesome are loaded from external CDNs and require network access.
