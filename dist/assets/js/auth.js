/**
 * HILLTOP REAL ESTATE - Indian Property Marketplace
 * auth.js - Client-Side Demo Authentication & User Session Manager
 */

const STORAGE_USERS = "hilltop_registered_users";
const STORAGE_CURRENT_USER = "hilltop_current_user";

// Seed initial demo users if not present
const DEFAULT_DEMO_USERS = [
    {
        id: "USR-001",
        fullName: "Arun Menon",
        email: "arun@hilltop.in",
        phone: "+91 98470 12345",
        password: "buyer123",
        role: "Buyer",
        city: "Kochi",
        state: "Kerala",
        registeredOn: "2026-09-15"
    },
    {
        id: "USR-002",
        fullName: "Priya Nambiar",
        email: "priya@hilltop.in",
        phone: "+91 98200 54321",
        password: "seller123",
        role: "Seller",
        city: "Bengaluru",
        state: "Karnataka",
        registeredOn: "2026-10-01"
    },
    {
        id: "USR-003",
        fullName: "Rahul Verma",
        email: "rahul@hilltop.in",
        phone: "+91 98110 98765",
        password: "tenant123",
        role: "Tenant",
        city: "Mumbai",
        state: "Maharashtra",
        registeredOn: "2026-10-10"
    }
];

const AuthStore = {
    // Initialize demo user store
    init: function() {
        if (!localStorage.getItem(STORAGE_USERS)) {
            localStorage.setItem(STORAGE_USERS, JSON.stringify(DEFAULT_DEMO_USERS));
        }
    },

    // Get all registered demo users
    getUsers: function() {
        this.init();
        try {
            const raw = localStorage.getItem(STORAGE_USERS);
            return raw ? JSON.parse(raw) : DEFAULT_DEMO_USERS;
        } catch (e) {
            return DEFAULT_DEMO_USERS;
        }
    },

    // Get currently logged-in user
    getCurrentUser: function() {
        try {
            const raw = localStorage.getItem(STORAGE_CURRENT_USER);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    },

    isLoggedIn: function() {
        return this.getCurrentUser() !== null;
    },

    // Demo Login
    login: function(identifier, password, remember = true) {
        this.init();
        const users = this.getUsers();
        const cleanId = String(identifier).trim().toLowerCase();
        const cleanPhone = cleanId.replace(/\s+/g, '');

        const user = users.find(u => {
            const matchEmail = u.email.toLowerCase() === cleanId;
            const matchPhone = u.phone.replace(/\s+/g, '').endsWith(cleanPhone) || u.phone.replace(/\s+/g, '') === cleanPhone;
            return (matchEmail || matchPhone) && u.password === password;
        });

        if (!user) {
            return {
                success: false,
                message: "Invalid email/mobile number or password. You may use demo credentials provided on the page."
            };
        }

        const sessionUser = {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            role: user.role,
            city: user.city || "Bengaluru",
            state: user.state || "India",
            loginTime: new Date().toISOString()
        };

        localStorage.setItem(STORAGE_CURRENT_USER, JSON.stringify(sessionUser));
        window.dispatchEvent(new CustomEvent("hilltop:authChanged", { detail: { user: sessionUser } }));
        return {
            success: true,
            user: sessionUser,
            message: `Welcome back, ${user.fullName}!`
        };
    },

    // Demo Registration
    register: function(userData) {
        this.init();
        const users = this.getUsers();
        const cleanEmail = userData.email.trim().toLowerCase();

        // Check if email already registered
        if (users.some(u => u.email.toLowerCase() === cleanEmail)) {
            return {
                success: false,
                message: "An account with this email address is already registered in the demo system."
            };
        }

        const newUser = {
            id: "USR-" + Math.floor(100 + Math.random() * 900),
            fullName: userData.fullName.trim(),
            email: cleanEmail,
            phone: userData.phone.trim(),
            password: userData.password,
            role: userData.role || "Buyer",
            city: userData.city || "Kochi",
            state: userData.state || "Kerala",
            registeredOn: new Date().toISOString().split('T')[0]
        };

        users.push(newUser);
        localStorage.setItem(STORAGE_USERS, JSON.stringify(users));

        // Auto login on registration
        this.login(newUser.email, newUser.password);

        return {
            success: true,
            user: newUser,
            message: `Account created successfully! Welcome to HILLTOP, ${newUser.fullName}.`
        };
    },

    // Logout
    logout: function() {
        localStorage.removeItem(STORAGE_CURRENT_USER);
        window.dispatchEvent(new CustomEvent("hilltop:authChanged", { detail: { user: null } }));
        return true;
    },

    // Helper to pre-populate login form with demo credentials
    prefillDemo: function(role) {
        const users = this.getUsers();
        const target = users.find(u => u.role.toLowerCase() === role.toLowerCase()) || users[0];
        const idField = document.getElementById("loginIdentifier");
        const passField = document.getElementById("loginPassword");
        if (idField && passField && target) {
            idField.value = target.email;
            passField.value = target.password;
            if (window.HilltopUI && window.HilltopUI.showToast) {
                window.HilltopUI.showToast(`Prefilled with demo credentials for ${target.role} (${target.fullName})`, "info");
            }
        }
    },

    // Update Navigation auth bar across all pages
    updateNavbar: function() {
        const user = this.getCurrentUser();
        const container = document.getElementById("navAuthContainer");
        if (!container) return;

        if (user) {
            container.innerHTML = `
                <div class="dropdown">
                    <button class="btn btn-outline-light d-flex align-items-center gap-2 dropdown-toggle rounded-pill px-3 py-1" type="button" id="userMenuBtn" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="user-avatar-badge">${user.fullName.charAt(0)}</span>
                        <div class="text-start d-none d-xl-block">
                            <span class="d-block fw-semibold text-white fs-xs">${user.fullName.split(' ')[0]}</span>
                            <span class="d-block text-white-50 fs-xxs">${user.role}</span>
                        </div>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow border-0 rounded-3 mt-2" aria-labelledby="userMenuBtn">
                        <li class="px-3 py-2 border-bottom">
                            <p class="mb-0 fw-bold text-dark">${user.fullName}</p>
                            <small class="text-muted">${user.email}</small>
                            <span class="badge bg-primary-subtle text-primary border border-primary-subtle d-inline-block mt-1">${user.role} Account</span>
                        </li>
                        <li><a class="dropdown-item py-2" href="/dashboard.html"><i class="bi bi-speedometer2 text-primary me-2"></i>My Dashboard</a></li>
                        <li><a class="dropdown-item py-2" href="/favourites.html"><i class="bi bi-heart text-danger me-2"></i>Saved Favourites</a></li>
                        <li><a class="dropdown-item py-2" href="/sell.html"><i class="bi bi-plus-circle text-success me-2"></i>List New Property</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item py-2 text-danger" href="javascript:void(0)" onclick="AuthStore.handleLogoutClick()"><i class="bi bi-box-arrow-right me-2"></i>Sign Out</a></li>
                    </ul>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="d-flex align-items-center gap-2">
                    <a href="/login.html" class="btn btn-outline-light rounded-pill px-3 py-1 fw-medium fs-sm">
                        <i class="bi bi-person me-1"></i> Login
                    </a>
                    <a href="/register.html" class="btn btn-primary rounded-pill px-3 py-1 fw-medium fs-sm shadow-sm">
                        Register
                    </a>
                </div>
            `;
        }
    },

    handleLogoutClick: function() {
        this.logout();
        if (window.HilltopUI && window.HilltopUI.showToast) {
            window.HilltopUI.showToast("You have been signed out successfully.", "success");
        }
        setTimeout(() => {
            window.location.href = "/index.html";
        }, 600);
    }
};

// Initialize on script load
AuthStore.init();

// Export globally
window.AuthStore = AuthStore;
