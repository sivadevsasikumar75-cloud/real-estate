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
realestate-static/
│
├── index.html              # Homepage with hero search, categories, featured homes, testimonials
├── buy.html                # Buy Properties with live search, filters, and price sorting
├── rent.html               # Rental Properties with security deposit, furnishing, and monthly rent filters
├── property-details.html   # Dynamic Property Details with image gallery, specs, amenities, and owner contact
├── sell.html               # Sell / Rent submission form with live photo preview and localStorage saving
├── about.html              # Company introduction, mission/vision, services, and leadership team
├── contact.html            # Indian regional offices (Kochi, Bengaluru, Mumbai), inquiry form, and FAQs
├── login.html              # Demo login with instant prefill credentials for Buyer, Seller, and Tenant
├── register.html           # Registration form with Indian mobile number validation and role selection
├── dashboard.html          # User Dashboard with saved favourites, recent views, and listed demo properties
├── favourites.html         # Saved Favourites management with one-click bookmarking and removal
├── 404.html                # Custom error page with working home and search navigation
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
│   └── images/             # 50+ property photos, city views, team members, and icons
│
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

This website is **100% static** and does not require Python, Django, Node.js, or any database setup.

### Option 1: Direct File Open
Simply navigate to `c:\realestate\realestate-static\` and double-click `index.html` to open it in your preferred web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Option 2: Local Web Server (Optional)
If using VS Code:
1. Open the `realestate-static` folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 6. Original Django Project Preservation

The original Django project files (`manage.py`, `myapp/`, `realestate/`, `db.sqlite3`, `media/`) have been kept completely intact and untouched in `c:\realestate\`.
The new static Indian real estate website resides entirely within the independent `realestate-static` folder.

## 7. Build and preview the static website

The website is static: browser-side JavaScript provides the demo property search, favourites, forms, and localStorage-based demo accounts. There is no deployed Django server, PostgreSQL database, or runtime backend. Django is used only during the build to render the existing templates into HTML pages.

1. Install the build dependency: `python -m pip install -r requirements.txt`
2. Export the pages and assets: `python build_static.py`
3. Preview the exported site: `python -m http.server 8000 --directory dist`
4. Open `http://127.0.0.1:8000/` (or a page such as `/buy.html`).

The exporter writes the rendered pages and the existing `assets/` tree into `dist/`; it checks local HTML, CSS, JavaScript, and asset references. Django is configured with its dummy database backend because none of the rendered views use database queries. It does not read or modify `db.sqlite3`, and migrations are not needed to export the pages.

## 8. Deploy the static website to Vercel

The repository's `vercel.json` selects Vercel's **Other** (static) framework, runs `python build_static.py`, and publishes `dist/`. The root URL is served from `index.html`; existing `.html` page links and `/assets/` references remain intact. Vercel does not run Django as a Function.

1. Import this repository into Vercel, or deploy it with the Vercel CLI from the repository root.
2. Leave the Framework Preset as **Other** (the checked-in config sets this explicitly).
3. Use the checked-in install/build/output settings; do not configure a Django runtime or database.
4. Deploy. No `DJANGO_SECRET_KEY`, `DATABASE_URL`, PostgreSQL provider, or Vercel environment variables are required.

The templates continue to use Django's `{% static %}` tags, which are exported under `/assets/` alongside the existing JavaScript image paths. Google Fonts and the existing icon/Bootstrap CDN URLs remain external dependencies, as they do during local use.
