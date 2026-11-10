/**
 * HILLTOP REAL ESTATE - Indian Property Marketplace
 * main.js - Core UI Interactions, Navigation, Favourites & Page Orchestration
 */

const HilltopUI = {
    init: function() {
        this.initStickyNavbar();
        this.initMobileNavigation();
        this.highlightActiveNav();
        this.initBackToTop();
        this.updateFavouritesCount();
        this.setupEventListeners();
        
        // Sync Navbar Auth state
        if (window.AuthStore) {
            window.AuthStore.updateNavbar();
        }

        // Initialize specific page logic based on current HTML
        this.initPageRouter();
    },

    // Sticky Navbar shadow on scroll
    initStickyNavbar: function() {
        const navbar = document.querySelector(".main-navbar");
        if (!navbar) return;
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                navbar.classList.add("navbar-scrolled", "shadow-sm");
            } else {
                navbar.classList.remove("navbar-scrolled", "shadow-sm");
            }
        });
    },

    initMobileNavigation: function() {
        const toggle = document.querySelector(".navbar-toggler");
        const panel = document.getElementById("hilltopNavbar");
        const navbar = document.querySelector(".main-navbar");
        if (!toggle || !panel || !navbar) return;

        const mobileViewport = window.matchMedia("(max-width: 1199.98px)");
        const backdrop = document.createElement("div");
        backdrop.className = "mobile-nav-backdrop";
        backdrop.hidden = true;
        backdrop.setAttribute("aria-hidden", "true");
        document.body.appendChild(backdrop);

        const closeMenu = (restoreFocus = false) => {
            panel.classList.remove("show");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open navigation menu");
            backdrop.hidden = true;
            document.documentElement.classList.remove("mobile-nav-open");
            if (restoreFocus) toggle.focus({ preventScroll: true });
        };

        const openMenu = () => {
            if (!mobileViewport.matches) return;
            panel.classList.add("show");
            toggle.setAttribute("aria-expanded", "true");
            toggle.setAttribute("aria-label", "Close navigation menu");
            backdrop.hidden = false;
            document.documentElement.classList.add("mobile-nav-open");
            const firstLink = panel.querySelector("a[href], button:not(:disabled)");
            if (firstLink) firstLink.focus({ preventScroll: true });
        };

        toggle.addEventListener("click", () => {
            if (panel.classList.contains("show")) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        backdrop.addEventListener("click", () => closeMenu());

        document.addEventListener("click", event => {
            if (panel.classList.contains("show") &&
                !panel.contains(event.target) &&
                !toggle.contains(event.target)) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", event => {
            if (!panel.classList.contains("show")) return;

            if (event.key === "Escape") {
                event.preventDefault();
                closeMenu(true);
                return;
            }

            if (event.key === "Tab") {
                const focusable = [toggle, ...panel.querySelectorAll("a[href], button:not(:disabled)")]
                    .filter(element => element.getClientRects().length > 0);
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });

        panel.querySelectorAll("a[href]").forEach(link => {
            link.addEventListener("click", () => closeMenu());
        });

        mobileViewport.addEventListener("change", event => {
            if (!event.matches) closeMenu();
        });
    },

    // Highlight active link in navbar
    highlightActiveNav: function() {
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll(".main-navbar .nav-link").forEach(link => {
            const linkPath = link.dataset.page || (link instanceof HTMLAnchorElement ? link.pathname.split("/").pop() || "index.html" : "");
            if (linkPath === currentPath) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    },

    // Back to top floating button
    initBackToTop: function() {
        const backToTopBtn = document.getElementById("backToTopBtn");
        if (!backToTopBtn) return;

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove("d-none");
                backToTopBtn.classList.add("fade-in");
            } else {
                backToTopBtn.classList.add("d-none");
            }
        });

        backToTopBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    },

    // Global Toast Notification Helper
    showToast: function(message, type = "info") {
        let toastContainer = document.getElementById("hilltopToastContainer");
        if (!toastContainer) {
            toastContainer = document.createElement("div");
            toastContainer.id = "hilltopToastContainer";
            toastContainer.className = "toast-container position-fixed bottom-0 end-0 p-3";
            toastContainer.style.zIndex = "9999";
            document.body.appendChild(toastContainer);
        }

        const icons = {
            success: "bi-check-circle-fill text-success",
            danger: "bi-x-circle-fill text-danger",
            warning: "bi-exclamation-triangle-fill text-warning",
            info: "bi-info-circle-fill text-primary"
        };

        const toastEl = document.createElement("div");
        toastEl.className = "toast align-items-center border-0 shadow-lg rounded-3 mb-2";
        toastEl.setAttribute("role", "alert");
        toastEl.setAttribute("aria-live", "assertive");
        toastEl.setAttribute("aria-atomic", "true");
        toastEl.innerHTML = `
            <div class="d-flex p-3 bg-white text-dark rounded-3 border-start border-4 border-${type}">
                <div class="me-3 fs-4">
                    <i class="bi ${icons[type] || icons.info}"></i>
                </div>
                <div class="toast-body p-0 my-auto text-dark small fw-medium">
                    ${message}
                </div>
                <button type="button" class="btn-close ms-auto my-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;

        toastContainer.appendChild(toastEl);
        if (typeof bootstrap !== "undefined" && bootstrap.Toast) {
            const bsToast = new bootstrap.Toast(toastEl, { delay: 4000 });
            bsToast.show();
            toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
        } else {
            toastEl.style.display = "block";
            setTimeout(() => toastEl.remove(), 4000);
        }
    },

    // Update favourites badge in nav
    updateFavouritesCount: function() {
        const count = window.PropertyStore ? window.PropertyStore.getFavourites().length : 0;
        document.querySelectorAll(".fav-count-badge").forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? "inline-block" : "none";
        });
    },

    // Toggle Favourite from button
    toggleFavourite: function(id, btnElement) {
        if (!window.PropertyStore) return;
        const isAdded = window.PropertyStore.toggleFavourite(id);
        const icon = btnElement ? btnElement.querySelector("i") : null;
        if (icon) {
            if (isAdded) {
                icon.className = "bi bi-heart-fill text-danger";
            } else {
                icon.className = "bi bi-heart";
            }
        }
        this.updateFavouritesCount();
        this.showToast(isAdded ? "Added to your Saved Favourites!" : "Removed from Saved Favourites", isAdded ? "success" : "info");
    },

    setupEventListeners: function() {
        window.addEventListener("hilltop:favouritesChanged", () => {
            this.updateFavouritesCount();
        });

        window.addEventListener("hilltop:authChanged", () => {
            if (window.AuthStore) window.AuthStore.updateNavbar();
        });
    },

    // Detect page and trigger appropriate initializer
    initPageRouter: function() {
        const path = window.location.pathname.split("/").pop();

        if (!path || path === "index.html" || path === "") {
            this.initHomePage();
        } else if (path === "buy.html") {
            this.initBuyPage();
        } else if (path === "rent.html") {
            this.initRentPage();
        } else if (path === "property-details.html") {
            this.initPropertyDetailsPage();
        } else if (path === "favourites.html") {
            this.initFavouritesPage();
        } else if (path === "dashboard.html") {
            this.initDashboardPage();
        }
    },

    // ----------------------------------------------------
    // HOMEPAGE LOGIC
    // ----------------------------------------------------
    initHomePage: function() {
        // Render Featured Properties
        const featuredContainer = document.getElementById("featuredPropertiesList");
        if (featuredContainer && window.PropertyStore) {
            const featured = window.PropertyStore.getFeatured(6);
            featuredContainer.innerHTML = featured.map(p => window.PropertyStore.renderPropertyCard(p)).join("");
        }

        // Render Recently Added Properties
        const recentContainer = document.getElementById("recentPropertiesList");
        if (recentContainer && window.PropertyStore) {
            const recent = window.PropertyStore.getRecent(6);
            recentContainer.innerHTML = recent.map(p => window.PropertyStore.renderPropertyCard(p)).join("");
        }

        // Hero Search Form submission redirects to buy.html or rent.html with query params
        const heroSearchForm = document.getElementById("heroSearchForm");
        if (heroSearchForm) {
            heroSearchForm.addEventListener("submit", function(e) {
                e.preventDefault();
                const purpose = document.querySelector('input[name="heroPurpose"]:checked')?.value || "buy";
                const city = document.getElementById("heroCity")?.value || "";
                const propType = document.getElementById("heroType")?.value || "";
                const budget = document.getElementById("heroBudget")?.value || "";
                const keyword = document.getElementById("heroKeyword")?.value || "";

                const targetPage = purpose === "rent" ? "/rent.html" : "/buy.html";
                const params = new URLSearchParams();
                if (city) params.set("city", city);
                if (propType) params.set("type", propType);
                if (budget) params.set("budget", budget);
                if (keyword) params.set("keyword", keyword);

                window.location.href = `${targetPage}?${params.toString()}`;
            });
        }
    },

    // ----------------------------------------------------
    // BUY PAGE LOGIC
    // ----------------------------------------------------
    initBuyPage: function() {
        const container = document.getElementById("buyPropertiesContainer");
        const resultsCount = document.getElementById("buyResultsCount");
        if (!container || !window.PropertyStore) return;

        // Parse URL params for initial filters
        const params = new URLSearchParams(window.location.search);
        const cityParam = params.get("city") || "";
        const typeParam = params.get("type") || "";
        const budgetParam = params.get("budget") || "";
        const keywordParam = params.get("keyword") || "";

        // Prefill filter inputs if present
        const searchInput = document.getElementById("filterKeyword");
        const citySelect = document.getElementById("filterCity");
        const typeSelect = document.getElementById("filterType");
        const bhkSelect = document.getElementById("filterBhk");
        const budgetSelect = document.getElementById("filterBudget");
        const sortSelect = document.getElementById("filterSort");
        const resetBtn = document.getElementById("resetFiltersBtn");

        if (searchInput && keywordParam) searchInput.value = keywordParam;
        if (citySelect && cityParam) citySelect.value = cityParam;
        if (typeSelect && typeParam) typeSelect.value = typeParam;
        if (budgetSelect && budgetParam) budgetSelect.value = budgetParam;

        const applyFilters = () => {
            const kw = searchInput ? searchInput.value.trim() : "";
            const city = citySelect ? citySelect.value : "";
            const type = typeSelect ? typeSelect.value : "";
            const bhk = bhkSelect ? bhkSelect.value : "";
            const budget = budgetSelect ? budgetSelect.value : "";
            const sort = sortSelect ? sortSelect.value : "featured";

            let minPrice = 0;
            let maxPrice = 0;
            if (budget === "under-50l") {
                maxPrice = 5000000;
            } else if (budget === "50l-1cr") {
                minPrice = 5000000;
                maxPrice = 10000000;
            } else if (budget === "1cr-2cr") {
                minPrice = 10000000;
                maxPrice = 20000000;
            } else if (budget === "above-2cr") {
                minPrice = 20000000;
            }

            const buyProps = window.PropertyStore.getByPurpose("buy");
            let filtered = window.PropertyStore.filterProperties(buyProps, {
                keyword: kw,
                city: city,
                type: type,
                bhk: bhk,
                minPrice: minPrice,
                maxPrice: maxPrice
            });

            filtered = window.PropertyStore.sortProperties(filtered, sort);

            if (resultsCount) {
                resultsCount.textContent = `${filtered.length} Properties found for Sale`;
            }

            if (filtered.length === 0) {
                container.innerHTML = `
                    <div class="col-12 py-5 text-center">
                        <div class="p-5 bg-light rounded-4 border border-dashed">
                            <i class="bi bi-search text-muted display-4 mb-3"></i>
                            <h4 class="fw-bold text-dark">No Matching Properties Found</h4>
                            <p class="text-muted mb-4">Try adjusting your filters, location, or price range to explore more Indian properties.</p>
                            <button class="btn btn-primary rounded-pill px-4" onclick="document.getElementById('resetFiltersBtn').click()">
                                Reset All Filters
                            </button>
                        </div>
                    </div>
                `;
            } else {
                container.innerHTML = filtered.map(p => window.PropertyStore.renderPropertyCard(p)).join("");
            }
        };

        // Event listeners on filter changes
        [searchInput, citySelect, typeSelect, bhkSelect, budgetSelect, sortSelect].forEach(el => {
            if (el) {
                el.addEventListener("change", applyFilters);
                if (el === searchInput) {
                    el.addEventListener("input", applyFilters);
                }
            }
        });

        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                if (searchInput) searchInput.value = "";
                if (citySelect) citySelect.value = "all";
                if (typeSelect) typeSelect.value = "all";
                if (bhkSelect) bhkSelect.value = "all";
                if (budgetSelect) budgetSelect.value = "all";
                if (sortSelect) sortSelect.value = "featured";
                applyFilters();
            });
        }

        // Initial run
        applyFilters();
    },

    // ----------------------------------------------------
    // RENT PAGE LOGIC
    // ----------------------------------------------------
    initRentPage: function() {
        const container = document.getElementById("rentPropertiesContainer");
        const resultsCount = document.getElementById("rentResultsCount");
        if (!container || !window.PropertyStore) return;

        const searchInput = document.getElementById("rentKeyword");
        const citySelect = document.getElementById("rentCity");
        const typeSelect = document.getElementById("rentType");
        const bhkSelect = document.getElementById("rentBhk");
        const budgetSelect = document.getElementById("rentBudget");
        const furnishSelect = document.getElementById("rentFurnishing");
        const sortSelect = document.getElementById("rentSort");
        const resetBtn = document.getElementById("rentResetBtn");

        const applyFilters = () => {
            const kw = searchInput ? searchInput.value.trim() : "";
            const city = citySelect ? citySelect.value : "";
            const type = typeSelect ? typeSelect.value : "";
            const bhk = bhkSelect ? bhkSelect.value : "";
            const budget = budgetSelect ? budgetSelect.value : "";
            const furnish = furnishSelect ? furnishSelect.value : "";
            const sort = sortSelect ? sortSelect.value : "featured";

            let minPrice = 0;
            let maxPrice = 0;
            if (budget === "under-25k") {
                maxPrice = 25000;
            } else if (budget === "25k-50k") {
                minPrice = 25000;
                maxPrice = 50000;
            } else if (budget === "50k-1l") {
                minPrice = 50000;
                maxPrice = 100000;
            } else if (budget === "above-1l") {
                minPrice = 100000;
            }

            const rentProps = window.PropertyStore.getByPurpose("rent");
            let filtered = window.PropertyStore.filterProperties(rentProps, {
                keyword: kw,
                city: city,
                type: type,
                bhk: bhk,
                furnishing: furnish,
                minPrice: minPrice,
                maxPrice: maxPrice
            });

            filtered = window.PropertyStore.sortProperties(filtered, sort);

            if (resultsCount) {
                resultsCount.textContent = `${filtered.length} Rental Properties Available`;
            }

            if (filtered.length === 0) {
                container.innerHTML = `
                    <div class="col-12 py-5 text-center">
                        <div class="p-5 bg-light rounded-4 border border-dashed">
                            <i class="bi bi-building text-muted display-4 mb-3"></i>
                            <h4 class="fw-bold text-dark">No Rental Listings Found</h4>
                            <p class="text-muted mb-4">Try clearing some filters or searching a different Indian city.</p>
                            <button class="btn btn-primary rounded-pill px-4" onclick="document.getElementById('rentResetBtn').click()">
                                Reset Rental Filters
                            </button>
                        </div>
                    </div>
                `;
            } else {
                container.innerHTML = filtered.map(p => window.PropertyStore.renderPropertyCard(p)).join("");
            }
        };

        [searchInput, citySelect, typeSelect, bhkSelect, budgetSelect, furnishSelect, sortSelect].forEach(el => {
            if (el) {
                el.addEventListener("change", applyFilters);
                if (el === searchInput) {
                    el.addEventListener("input", applyFilters);
                }
            }
        });

        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                if (searchInput) searchInput.value = "";
                if (citySelect) citySelect.value = "all";
                if (typeSelect) typeSelect.value = "all";
                if (bhkSelect) bhkSelect.value = "all";
                if (budgetSelect) budgetSelect.value = "all";
                if (furnishSelect) furnishSelect.value = "all";
                if (sortSelect) sortSelect.value = "featured";
                applyFilters();
            });
        }

        applyFilters();
    },

    // ----------------------------------------------------
    // PROPERTY DETAILS PAGE LOGIC
    // ----------------------------------------------------
    initPropertyDetailsPage: function() {
        if (!window.PropertyStore) return;

        const params = new URLSearchParams(window.location.search);
        let propId = params.get("id");

        // Fallback to first property if ID missing or invalid
        let property = propId ? window.PropertyStore.getById(propId) : null;
        if (!property) {
            property = window.PropertyStore.getAllProperties()[0];
        }

        if (!property) return;

        // Record recent view
        window.PropertyStore.recordView(property.id);

        // Update page title
        document.title = `${property.title} | HILLTOP Real Estate`;

        // Render Property Header Info
        const titleEl = document.getElementById("propDetailTitle");
        const addressEl = document.getElementById("propDetailAddress");
        const priceEl = document.getElementById("propDetailPrice");
        const pricePerSqftEl = document.getElementById("propDetailPricePerSqft");
        const badgePurposeEl = document.getElementById("propDetailPurposeBadge");
        const badgeStatusEl = document.getElementById("propDetailStatusBadge");
        const reraEl = document.getElementById("propDetailRera");
        const favBtn = document.getElementById("propDetailFavBtn");

        if (titleEl) titleEl.textContent = property.title;
        if (addressEl) addressEl.innerHTML = `<i class="bi bi-geo-alt-fill text-danger me-1"></i> ${property.address}`;
        if (priceEl) {
            priceEl.textContent = property.purpose === 'rent' ? property.formattedPrice : (property.formattedPrice || window.PropertyStore.formatINR(property.price));
        }
        if (pricePerSqftEl) {
            if (property.purpose === 'rent') {
                pricePerSqftEl.textContent = `Security Deposit: ${property.securityDeposit || '2 Months Rent'}`;
            } else {
                pricePerSqftEl.textContent = property.pricePerSqft || `₹${Math.round(property.price / property.carpetArea).toLocaleString('en-IN')}/sq.ft`;
            }
        }
        if (badgePurposeEl) {
            badgePurposeEl.textContent = property.purpose === 'rent' ? 'FOR RENT' : 'FOR SALE';
            badgePurposeEl.className = property.purpose === 'rent' ? 'badge bg-info text-dark' : 'badge bg-primary';
        }
        if (badgeStatusEl) {
            badgeStatusEl.textContent = property.possession || 'Ready to Move';
        }
        if (reraEl) {
            reraEl.innerHTML = `<i class="bi bi-shield-check text-success me-1"></i> <strong>RERA ID:</strong> ${property.reraId || 'Verified Project Listing (Demo Note: ID for presentation purposes)'}`;
        }
        if (favBtn) {
            const isFav = window.PropertyStore.isFavourite(property.id);
            favBtn.innerHTML = `<i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'} me-1"></i> ${isFav ? 'Saved' : 'Save Property'}`;
            favBtn.onclick = () => {
                const added = window.PropertyStore.toggleFavourite(property.id);
                favBtn.innerHTML = `<i class="bi ${added ? 'bi-heart-fill text-danger' : 'bi-heart'} me-1"></i> ${added ? 'Saved' : 'Save Property'}`;
                HilltopUI.showToast(added ? "Added to Favourites" : "Removed from Favourites", added ? "success" : "info");
            };
        }

        // Render Gallery
        const mainImg = document.getElementById("propDetailMainImage");
        const thumbsContainer = document.getElementById("propDetailThumbs");
        const images = property.images && property.images.length > 0 ? property.images : ["assets/images/property-1.jpg"];

        if (mainImg) {
            mainImg.src = images[0];
            mainImg.alt = property.title;
        }

        if (thumbsContainer) {
            thumbsContainer.innerHTML = images.map((img, i) => `
                <div class="col-3">
                    <img src="${img}" class="img-fluid rounded-3 cursor-pointer prop-thumb-btn border ${i === 0 ? 'border-primary border-2' : ''}" 
                         alt="Thumbnail ${i + 1}" 
                         onclick="document.getElementById('propDetailMainImage').src='${img}'; document.querySelectorAll('.prop-thumb-btn').forEach(b => b.classList.remove('border-primary', 'border-2')); this.classList.add('border-primary', 'border-2');">
                </div>
            `).join("");
        }

        // Render Quick Specs Grid
        const specsContainer = document.getElementById("propDetailSpecs");
        if (specsContainer) {
            specsContainer.innerHTML = `
                <div class="col-6 col-md-3">
                    <div class="p-3 bg-light rounded-3 text-center border">
                        <i class="bi bi-door-open fs-3 text-primary mb-1"></i>
                        <small class="text-muted d-block">Bedrooms</small>
                        <strong class="fs-6">${property.bhk || 2} BHK</strong>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="p-3 bg-light rounded-3 text-center border">
                        <i class="bi bi-droplet fs-3 text-primary mb-1"></i>
                        <small class="text-muted d-block">Bathrooms</small>
                        <strong class="fs-6">${property.bathrooms || 2} Baths</strong>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="p-3 bg-light rounded-3 text-center border">
                        <i class="bi bi-bounding-box-circles fs-3 text-primary mb-1"></i>
                        <small class="text-muted d-block">Carpet Area</small>
                        <strong class="fs-6">${property.carpetArea} sq.ft</strong>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="p-3 bg-light rounded-3 text-center border">
                        <i class="bi bi-layers fs-3 text-primary mb-1"></i>
                        <small class="text-muted d-block">Super Built-Up</small>
                        <strong class="fs-6">${property.builtUpArea || Math.round(property.carpetArea * 1.25)} sq.ft</strong>
                    </div>
                </div>
            `;
        }

        // Render Details Table
        const tableBody = document.getElementById("propDetailTableBody");
        if (tableBody) {
            tableBody.innerHTML = `
                <tr><th class="text-muted w-40">Property Type</th><td><strong>${property.type}</strong></td></tr>
                <tr><th class="text-muted">Furnishing</th><td>${property.furnishing || 'Semi-Furnished'}</td></tr>
                <tr><th class="text-muted">Facing</th><td>${property.facing || 'East (Vastu Compliant)'}</td></tr>
                <tr><th class="text-muted">Floor</th><td>${property.floor || '5th of 14 Floors'}</td></tr>
                <tr><th class="text-muted">Car Parking</th><td>${property.parking || '1 Reserved Parking'}</td></tr>
                <tr><th class="text-muted">Balconies</th><td>${property.balconies || 1} Balconies</td></tr>
                <tr><th class="text-muted">Maintenance</th><td>${property.maintenance || '₹3,000/month'}</td></tr>
                ${property.purpose === 'rent' ? `<tr><th class="text-muted">Available From</th><td><span class="badge bg-success-subtle text-success">${property.availableFrom || 'Immediate'}</span></td></tr>` : ''}
            `;
        }

        // Render Description
        const descEl = document.getElementById("propDetailDescription");
        if (descEl) descEl.innerHTML = `<p class="lead fs-6 text-secondary">${property.description}</p>`;

        // Render Amenities
        const amenitiesEl = document.getElementById("propDetailAmenities");
        if (amenitiesEl && property.amenities) {
            amenitiesEl.innerHTML = property.amenities.map(a => `
                <div class="col-md-4 col-sm-6 mb-2">
                    <div class="d-flex align-items-center gap-2 p-2 rounded-3 bg-light border">
                        <i class="bi bi-check-circle-fill text-success fs-5"></i>
                        <span class="small fw-semibold text-dark">${a}</span>
                    </div>
                </div>
            `).join("");
        }

        // Render Nearby Facilities
        const nearbyEl = document.getElementById("propDetailNearby");
        if (nearbyEl && property.nearbyFacilities) {
            nearbyEl.innerHTML = property.nearbyFacilities.map(f => `
                <li class="list-group-item d-flex justify-content-between align-items-center py-2 px-3">
                    <div class="d-flex align-items-center gap-2">
                        <i class="bi bi-pin-map text-primary"></i>
                        <span class="fw-medium text-dark">${f.name}</span>
                    </div>
                    <span class="badge bg-light text-dark border font-monospace">${f.distance}</span>
                </li>
            `).join("");
        }

        // Render Owner / Agent Info
        const ownerNameEl = document.getElementById("propOwnerName");
        const ownerDesigEl = document.getElementById("propOwnerDesig");
        const ownerPhoneEl = document.getElementById("propOwnerPhone");
        const ownerEmailEl = document.getElementById("propOwnerEmail");

        if (property.owner) {
            if (ownerNameEl) ownerNameEl.textContent = property.owner.name;
            if (ownerDesigEl) ownerDesigEl.textContent = property.owner.designation;
            if (ownerPhoneEl) {
                ownerPhoneEl.textContent = property.owner.phone;
                ownerPhoneEl.href = `tel:${property.owner.phone}`;
            }
            if (ownerEmailEl) {
                ownerEmailEl.textContent = property.owner.email;
                ownerEmailEl.href = `mailto:${property.owner.email}`;
            }
        }

        // Render Similar Properties
        const similarContainer = document.getElementById("similarPropertiesContainer");
        if (similarContainer) {
            const all = window.PropertyStore.getAllProperties();
            const similar = all.filter(p => p.id !== property.id && (p.city === property.city || p.purpose === property.purpose)).slice(0, 3);
            similarContainer.innerHTML = similar.map(p => window.PropertyStore.renderPropertyCard(p)).join("");
        }
    },

    // ----------------------------------------------------
    // FAVOURITES PAGE LOGIC
    // ----------------------------------------------------
    initFavouritesPage: function() {
        const container = document.getElementById("favouritesGrid");
        const countSpan = document.getElementById("favouritesCountHeader");
        if (!container || !window.PropertyStore) return;

        const renderFavs = () => {
            const favIds = window.PropertyStore.getFavourites();
            const all = window.PropertyStore.getAllProperties();
            const favProperties = favIds.map(id => all.find(p => p.id === id)).filter(Boolean);

            if (countSpan) countSpan.textContent = favProperties.length;

            if (favProperties.length === 0) {
                container.innerHTML = `
                    <div class="col-12 py-5 text-center">
                        <div class="p-5 bg-white rounded-4 shadow-sm border text-center">
                            <i class="bi bi-heartbreak text-muted display-3 mb-3"></i>
                            <h4 class="fw-bold text-dark">No Saved Properties Yet</h4>
                            <p class="text-muted mb-4">Click the heart icon on any property to save it to your favourites list for quick comparison.</p>
                            <div class="d-flex justify-content-center gap-3">
                                <a href="/buy.html" class="btn btn-primary rounded-pill px-4">Browse Properties for Sale</a>
                                <a href="/rent.html" class="btn btn-outline-primary rounded-pill px-4">Browse Rentals</a>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                container.innerHTML = favProperties.map(p => window.PropertyStore.renderPropertyCard(p)).join("");
            }
        };

        window.addEventListener("hilltop:favouritesChanged", renderFavs);
        renderFavs();
    },

    // ----------------------------------------------------
    // USER DASHBOARD LOGIC
    // ----------------------------------------------------
    initDashboardPage: function() {
        if (!window.AuthStore || !window.PropertyStore) return;

        const user = window.AuthStore.getCurrentUser();
        if (!user) {
            // If not logged in, prompt or redirect
            const container = document.getElementById("dashboardContentArea");
            if (container) {
                container.innerHTML = `
                    <div class="p-5 text-center bg-white rounded-4 shadow-sm">
                        <i class="bi bi-shield-lock display-3 text-warning mb-3"></i>
                        <h4 class="fw-bold">Sign In Required</h4>
                        <p class="text-muted mb-4">Please log in to view your profile, saved properties, recent visits, and submitted demo listings.</p>
                        <a href="/login.html" class="btn btn-primary rounded-pill px-4 me-2">Log In</a>
                        <a href="/register.html" class="btn btn-outline-primary rounded-pill px-4">Create Account</a>
                    </div>
                `;
            }
            return;
        }

        // Update profile header
        const nameEl = document.getElementById("dashUserName");
        const emailEl = document.getElementById("dashUserEmail");
        const roleEl = document.getElementById("dashUserRole");
        const phoneEl = document.getElementById("dashUserPhone");

        if (nameEl) nameEl.textContent = user.fullName;
        if (emailEl) emailEl.textContent = user.email;
        if (roleEl) roleEl.textContent = `${user.role} Account`;
        if (phoneEl) phoneEl.textContent = user.phone;

        // Render Saved Properties in dashboard
        const favContainer = document.getElementById("dashFavouritesList");
        if (favContainer) {
            const favIds = window.PropertyStore.getFavourites();
            const all = window.PropertyStore.getAllProperties();
            const favProps = favIds.map(id => all.find(p => p.id === id)).filter(Boolean);
            const favBadge = document.getElementById("dashFavCount");
            if (favBadge) favBadge.textContent = favProps.length;

            if (favProps.length === 0) {
                favContainer.innerHTML = `<div class="p-4 text-center text-muted">You have not saved any properties yet. <a href="/buy.html">Explore now</a>.</div>`;
            } else {
                favContainer.innerHTML = favProps.slice(0, 4).map(p => window.PropertyStore.renderPropertyCard(p)).join("");
            }
        }

        // Render Recently Viewed
        const recentContainer = document.getElementById("dashRecentList");
        if (recentContainer) {
            const recentViews = window.PropertyStore.getRecentViews();
            const viewBadge = document.getElementById("dashRecentCount");
            if (viewBadge) viewBadge.textContent = recentViews.length;

            if (recentViews.length === 0) {
                recentContainer.innerHTML = `<div class="p-4 text-center text-muted">No recently viewed properties.</div>`;
            } else {
                recentContainer.innerHTML = recentViews.slice(0, 4).map(p => window.PropertyStore.renderPropertyCard(p)).join("");
            }
        }

        // Render My Submitted Demo Properties
        const submittedContainer = document.getElementById("dashSubmittedList");
        if (submittedContainer) {
            const customProps = window.PropertyStore.getCustomProperties();
            const submitBadge = document.getElementById("dashSubmittedCount");
            if (submitBadge) submitBadge.textContent = customProps.length;

            if (customProps.length === 0) {
                submittedContainer.innerHTML = `
                    <div class="p-5 text-center bg-light rounded-3">
                        <i class="bi bi-house-add display-4 text-muted mb-2"></i>
                        <h6 class="fw-bold">You haven't listed any demo properties yet</h6>
                        <p class="text-muted small mb-3">Want to list your apartment, house, or land? Submissions are stored locally in your browser.</p>
                        <a href="/sell.html" class="btn btn-primary btn-sm rounded-pill px-3">List Your Property Free</a>
                    </div>
                `;
            } else {
                submittedContainer.innerHTML = customProps.map(p => `
                    <div class="col-md-6 mb-3" id="submitted-prop-${p.id}">
                        <div class="card border rounded-3 overflow-hidden shadow-sm h-100">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="${p.images[0]}" class="img-fluid h-100 object-fit-cover" alt="${p.title}" onerror="this.src='assets/images/property-1.jpg'">
                                </div>
                                <div class="col-8">
                                    <div class="card-body p-3">
                                        <div class="d-flex justify-content-between">
                                            <span class="badge bg-warning text-dark fs-xxs">Demo Submission</span>
                                            <span class="fw-bold text-primary">${p.formattedPrice}</span>
                                        </div>
                                        <h6 class="card-title fw-bold text-truncate mt-1 mb-1">${p.title}</h6>
                                        <p class="card-text text-muted small mb-2"><i class="bi bi-geo-alt"></i> ${p.locality}, ${p.city}</p>
                                        <div class="d-flex gap-2">
                                            <a href="/property-details.html?id=${p.id}" class="btn btn-sm btn-outline-primary py-0 px-2 rounded-pill fs-xs">View</a>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2 rounded-pill fs-xs" onclick="HilltopUI.deleteDemoListing('${p.id}')">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join("");
            }
        }
    },

    deleteDemoListing: function(id) {
        if (confirm("Are you sure you want to remove this demo listing from your browser storage?")) {
            window.PropertyStore.deleteCustomProperty(id);
            this.showToast("Demo listing removed", "info");
            this.initDashboardPage();
        }
    }
};

// Initialize when DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    HilltopUI.init();
});

// Expose globally
window.HilltopUI = HilltopUI;


// =================================
// HILLTOP DARK / LIGHT THEME
// =================================


// =================================
// HILLTOP DARK / LIGHT THEME
// =================================

document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const themeText = document.getElementById("themeText");

    if (!themeToggle) return;

    function applyTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark-theme");

            themeIcon.className = "bi bi-moon-stars-fill";
            themeText.textContent = "Dark";

            themeToggle.classList.remove("btn-outline-light");
            themeToggle.classList.add("btn-dark");

        } else {
            document.body.classList.remove("dark-theme");

            themeIcon.className = "bi bi-sun-fill";
            themeText.textContent = "White";

            themeToggle.classList.remove("btn-dark");
            themeToggle.classList.add("btn-light");
        }

        localStorage.setItem("hilltopTheme", theme);
    }
    // Load saved theme
    const savedTheme = localStorage.getItem("hilltopTheme") || "light";

    applyTheme(savedTheme);

    // Toggle theme correctly
    themeToggle.addEventListener("click", function () {

        const darkModeActive = document.body.classList.contains("dark-theme");

        if (darkModeActive) {
            applyTheme("light");
        } else {
            applyTheme("dark");
        }

    });

});
