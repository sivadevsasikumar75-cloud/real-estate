/**
 * HILLTOP REAL ESTATE - Indian Property Marketplace
 * forms.js - Client-Side Form Validations, Image Previews & Demo Submissions
 */

const FormHandlers = {
    // Regex for Indian mobile number: 10 digits starting with 6, 7, 8, or 9 (with optional +91 or 0 prefix)
    indianPhoneRegex: /^(?:\+91|91|0)?[6-9]\d{9}$/,
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

    init: function() {
        this.initPasswordToggles();
        this.initSellForm();
        this.initContactForm();
        this.initLoginForm();
        this.initRegisterForm();
        this.initNewsletterForm();
        this.initOwnerInquiryForm();
    },

    // Show/Hide password toggle
    initPasswordToggles: function() {
        document.querySelectorAll(".btn-toggle-password").forEach(btn => {
            btn.addEventListener("click", function() {
                const targetId = this.getAttribute("data-target");
                const input = document.getElementById(targetId);
                const icon = this.querySelector("i");
                if (!input) return;

                if (input.type === "password") {
                    input.type = "text";
                    if (icon) {
                        icon.classList.remove("bi-eye");
                        icon.classList.add("bi-eye-slash");
                    }
                } else {
                    input.type = "password";
                    if (icon) {
                        icon.classList.remove("bi-eye-slash");
                        icon.classList.add("bi-eye");
                    }
                }
            });
        });
    },

    // Validate Indian Phone Number
    isValidPhone: function(phone) {
        if (!phone) return false;
        const cleaned = phone.toString().replace(/[\s\-()]/g, "");
        return this.indianPhoneRegex.test(cleaned);
    },

    // Validate Email
    isValidEmail: function(email) {
        if (!email) return false;
        return this.emailRegex.test(email.trim());
    },

    // Helper: Mark field error
    setFieldError: function(element, message) {
        if (!element) return;
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        let feedback = element.nextElementSibling;
        if (!feedback || !feedback.classList.contains("invalid-feedback")) {
            feedback = element.parentElement.querySelector(".invalid-feedback");
        }
        if (feedback) {
            feedback.textContent = message;
        }
    },

    // Helper: Clear field error
    clearFieldError: function(element) {
        if (!element) return;
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
    },

    // Initialize Sell Property Form
    initSellForm: function() {
        const form = document.getElementById("sellPropertyForm");
        const imageInput = document.getElementById("propertyImages");
        const previewContainer = document.getElementById("imagePreviewContainer");

        if (!form) return;

        // Image file picker preview
        if (imageInput && previewContainer) {
            imageInput.addEventListener("change", function() {
                previewContainer.innerHTML = "";
                const files = this.files;
                if (!files || files.length === 0) return;

                Array.from(files).slice(0, 5).forEach((file, idx) => {
                    if (!file.type.startsWith("image/")) return;
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const col = document.createElement("div");
                        col.className = "col-4 col-sm-3 col-md-2 position-relative";
                        col.innerHTML = `
                            <div class="border rounded-3 overflow-hidden shadow-sm ratio ratio-1x1 position-relative">
                                <img src="${e.target.result}" class="img-fluid object-fit-cover w-100 h-100" alt="Preview ${idx + 1}">
                                <span class="badge bg-dark bg-opacity-75 position-absolute top-0 start-0 m-1 fs-xxs">#${idx + 1}</span>
                            </div>
                        `;
                        previewContainer.appendChild(col);
                    };
                    reader.readAsDataURL(file);
                });
            });
        }

        // Form Submit
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            let isValid = true;

            // Fields
            const title = document.getElementById("propTitle");
            const purpose = document.querySelector('input[name="propPurpose"]:checked');
            const propType = document.getElementById("propType");
            const city = document.getElementById("propCity");
            const locality = document.getElementById("propLocality");
            const address = document.getElementById("propAddress");
            const price = document.getElementById("propPrice");
            const carpetArea = document.getElementById("propCarpetArea");
            const bhk = document.getElementById("propBhk");
            const bathrooms = document.getElementById("propBathrooms");
            const furnishing = document.getElementById("propFurnishing");
            const description = document.getElementById("propDescription");
            const contactName = document.getElementById("sellerName");
            const contactPhone = document.getElementById("sellerPhone");
            const contactEmail = document.getElementById("sellerEmail");
            const agreeTerms = document.getElementById("sellerAgree");

            // Validations
            if (!title.value.trim() || title.value.trim().length < 8) {
                FormHandlers.setFieldError(title, "Please enter a descriptive property title (minimum 8 characters).");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(title);
            }

            if (!propType.value) {
                FormHandlers.setFieldError(propType, "Please select property type.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(propType);
            }

            if (!city.value.trim()) {
                FormHandlers.setFieldError(city, "Please enter property city.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(city);
            }

            if (!locality.value.trim()) {
                FormHandlers.setFieldError(locality, "Please enter locality/neighborhood.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(locality);
            }

            if (!address.value.trim() || address.value.trim().length < 10) {
                FormHandlers.setFieldError(address, "Please enter full street address (at least 10 characters).");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(address);
            }

            const priceNum = parseFloat(price.value);
            if (isNaN(priceNum) || priceNum <= 0) {
                FormHandlers.setFieldError(price, "Please enter a valid price in INR.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(price);
            }

            const areaNum = parseFloat(carpetArea.value);
            if (isNaN(areaNum) || areaNum <= 50) {
                FormHandlers.setFieldError(carpetArea, "Please enter realistic carpet area (minimum 50 sq.ft).");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(carpetArea);
            }

            if (!description.value.trim() || description.value.trim().length < 20) {
                FormHandlers.setFieldError(description, "Please provide at least 20 characters describing key highlights.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(description);
            }

            if (!contactName.value.trim()) {
                FormHandlers.setFieldError(contactName, "Please provide contact person name.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(contactName);
            }

            if (!FormHandlers.isValidPhone(contactPhone.value)) {
                FormHandlers.setFieldError(contactPhone, "Enter a valid 10-digit Indian mobile number (+91 / 9XXXXXXXXX).");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(contactPhone);
            }

            if (!FormHandlers.isValidEmail(contactEmail.value)) {
                FormHandlers.setFieldError(contactEmail, "Enter a valid email address.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(contactEmail);
            }

            if (agreeTerms && !agreeTerms.checked) {
                FormHandlers.setFieldError(agreeTerms, "You must agree to demo marketplace terms.");
                isValid = false;
            } else if (agreeTerms) {
                FormHandlers.clearFieldError(agreeTerms);
            }

            if (!isValid) {
                const firstInvalid = form.querySelector(".is-invalid");
                if (firstInvalid) firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
                return;
            }

            // Gather Amenities checked
            const amenities = [];
            form.querySelectorAll('input[name="amenities"]:checked').forEach(cb => {
                amenities.push(cb.value);
            });
            if (amenities.length === 0) {
                amenities.push("24/7 Water Supply", "Car Parking", "Security");
            }

            // Selected purpose
            const selectedPurpose = purpose ? purpose.value : "buy";

            // Default image fallback if user didn't pick
            let chosenImages = ["assets/images/property-2.jpg", "assets/images/property-1.jpg", "assets/images/about.jpg"];

            // If preview has an image, use standard high-res local asset
            const propertyObj = {
                title: title.value.trim(),
                purpose: selectedPurpose,
                type: propType.value,
                city: city.value.trim(),
                locality: locality.value.trim(),
                address: address.value.trim(),
                state: "India",
                price: priceNum,
                carpetArea: areaNum,
                builtUpArea: Math.round(areaNum * 1.25),
                bhk: parseInt(bhk.value) || 2,
                bathrooms: parseInt(bathrooms.value) || 2,
                furnishing: furnishing.value,
                possession: "Ready to Move",
                facing: "East (Vastu Compliant)",
                floor: "Mid Floor",
                parking: "1 Reserved Covered Parking",
                reraId: "Demo Submitted Listing",
                isReraVerified: false,
                images: chosenImages,
                description: description.value.trim(),
                amenities: amenities,
                owner: {
                    name: contactName.value.trim(),
                    designation: "Property Owner / Demo Seller",
                    phone: contactPhone.value.trim(),
                    email: contactEmail.value.trim(),
                    verified: false
                }
            };

            const saved = PropertyStore.saveCustomProperty(propertyObj);

            if (saved) {
                // Show modal or alert
                const modalEl = document.getElementById("sellSuccessModal");
                if (modalEl && typeof bootstrap !== "undefined") {
                    const modal = new bootstrap.Modal(modalEl);
                    const propIdSpan = document.getElementById("modalPropertyId");
                    if (propIdSpan) propIdSpan.textContent = saved.id;
                    modal.show();
                } else {
                    alert(`Success! Your property has been saved to your local demo listings with ID: ${saved.id}. You can view it on the Buy/Rent page or in your Dashboard.`);
                    window.location.href = `/property-details.html?id=${saved.id}`;
                }
                form.reset();
                if (previewContainer) previewContainer.innerHTML = "";
            }
        });
    },

    // Contact Form Handler
    initContactForm: function() {
        const form = document.getElementById("contactForm");
        if (!form) return;

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById("contactName");
            const email = document.getElementById("contactEmail");
            const phone = document.getElementById("contactPhone");
            const subject = document.getElementById("contactSubject");
            const message = document.getElementById("contactMessage");

            if (!name.value.trim()) {
                FormHandlers.setFieldError(name, "Please enter your full name.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(name);
            }

            if (!FormHandlers.isValidEmail(email.value)) {
                FormHandlers.setFieldError(email, "Please enter a valid email address.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(email);
            }

            if (!FormHandlers.isValidPhone(phone.value)) {
                FormHandlers.setFieldError(phone, "Please enter a 10-digit Indian mobile number (+91 / 9XXXXXXXXX).");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(phone);
            }

            if (!subject.value.trim()) {
                FormHandlers.setFieldError(subject, "Please select or enter inquiry subject.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(subject);
            }

            if (!message.value.trim() || message.value.trim().length < 15) {
                FormHandlers.setFieldError(message, "Message must contain at least 15 characters.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(message);
            }

            if (!isValid) return;

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : "Send Message";
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Sending...`;
            }

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }
                const alertBox = document.getElementById("contactFormAlert");
                if (alertBox) {
                    alertBox.className = "alert alert-info d-flex align-items-center gap-3 shadow-sm rounded-3 mt-3";
                    alertBox.innerHTML = `
                        <i class="bi bi-info-circle-fill fs-3 text-primary"></i>
                        <div>
                            <strong>Demo only: message not sent</strong><br>
                            <small class="text-muted">Thank you, ${name.value.trim()}. This static website has no contact service, so your message was not transmitted.</small>
                        </div>
                    `;
                    alertBox.classList.remove("d-none");
                } else if (window.HilltopUI && window.HilltopUI.showToast) {
                    window.HilltopUI.showToast("Demo only: no contact service is configured, so your message was not sent.", "info");
                }
                form.reset();
            }, 800);
        });
    },

    // Login Form Handler
    initLoginForm: function() {
        const form = document.getElementById("loginForm");
        if (!form) return;

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const identifier = document.getElementById("loginIdentifier");
            const pass = document.getElementById("loginPassword");
            const remember = document.getElementById("rememberMe") ? document.getElementById("rememberMe").checked : true;
            const errorAlert = document.getElementById("loginErrorAlert");

            let isValid = true;
            if (!identifier.value.trim()) {
                FormHandlers.setFieldError(identifier, "Enter registered email or mobile number.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(identifier);
            }

            if (!pass.value) {
                FormHandlers.setFieldError(pass, "Please enter your password.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(pass);
            }

            if (!isValid) return;

            const res = AuthStore.login(identifier.value, pass.value, remember);
            if (res.success) {
                if (errorAlert) errorAlert.classList.add("d-none");
                if (window.HilltopUI && window.HilltopUI.showToast) {
                    window.HilltopUI.showToast(res.message, "success");
                }
                setTimeout(() => {
                    window.location.href = "/dashboard.html";
                }, 600);
            } else {
                if (errorAlert) {
                    errorAlert.textContent = res.message;
                    errorAlert.classList.remove("d-none");
                } else {
                    alert(res.message);
                }
            }
        });
    },

    // Register Form Handler
    initRegisterForm: function() {
        const form = document.getElementById("registerForm");
        if (!form) return;

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("regFullName");
            const email = document.getElementById("regEmail");
            const phone = document.getElementById("regPhone");
            const password = document.getElementById("regPassword");
            const confirmPass = document.getElementById("regConfirmPassword");
            const role = document.getElementById("regRole");
            const terms = document.getElementById("regTerms");
            const errorAlert = document.getElementById("registerErrorAlert");

            let isValid = true;

            if (!name.value.trim() || name.value.trim().length < 3) {
                FormHandlers.setFieldError(name, "Enter your full legal name (at least 3 characters).");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(name);
            }

            if (!FormHandlers.isValidEmail(email.value)) {
                FormHandlers.setFieldError(email, "Enter a valid email address.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(email);
            }

            if (!FormHandlers.isValidPhone(phone.value)) {
                FormHandlers.setFieldError(phone, "Enter a valid 10-digit Indian mobile number (+91).");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(phone);
            }

            if (!password.value || password.value.length < 6) {
                FormHandlers.setFieldError(password, "Password must be at least 6 characters.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(password);
            }

            if (confirmPass.value !== password.value) {
                FormHandlers.setFieldError(confirmPass, "Passwords do not match.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(confirmPass);
            }

            if (terms && !terms.checked) {
                FormHandlers.setFieldError(terms, "You must accept demo marketplace terms & conditions.");
                isValid = false;
            } else if (terms) {
                FormHandlers.clearFieldError(terms);
            }

            if (!isValid) return;

            const res = AuthStore.register({
                fullName: name.value,
                email: email.value,
                phone: phone.value,
                password: password.value,
                role: role ? role.value : "Buyer"
            });

            if (res.success) {
                if (errorAlert) errorAlert.classList.add("d-none");
                if (window.HilltopUI && window.HilltopUI.showToast) {
                    window.HilltopUI.showToast(res.message, "success");
                }
                setTimeout(() => {
                    window.location.href = "/dashboard.html";
                }, 700);
            } else {
                if (errorAlert) {
                    errorAlert.textContent = res.message;
                    errorAlert.classList.remove("d-none");
                } else {
                    alert(res.message);
                }
            }
        });
    },

    // Owner Contact Inquiry Form on Property Details
    initOwnerInquiryForm: function() {
        const form = document.getElementById("ownerInquiryForm");
        if (!form) return;

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("inqName");
            const phone = document.getElementById("inqPhone");
            const email = document.getElementById("inqEmail");
            const msg = document.getElementById("inqMessage");

            let isValid = true;
            if (!name.value.trim()) {
                FormHandlers.setFieldError(name, "Enter your name.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(name);
            }

            if (!FormHandlers.isValidPhone(phone.value)) {
                FormHandlers.setFieldError(phone, "Enter a valid 10-digit Indian phone number.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(phone);
            }

            if (!FormHandlers.isValidEmail(email.value)) {
                FormHandlers.setFieldError(email, "Enter a valid email.");
                isValid = false;
            } else {
                FormHandlers.clearFieldError(email);
            }

            if (!isValid) return;

            const alertBox = document.getElementById("inquirySuccessAlert");
            if (alertBox) {
                alertBox.className = "alert alert-info mt-3 small p-2";
                alertBox.textContent = "Demo only: this inquiry was not sent because no contact service is configured.";
                alertBox.classList.remove("d-none");
            }
            form.reset();
        });
    },

    // Newsletter subscription form
    initNewsletterForm: function() {
        document.querySelectorAll(".newsletter-form").forEach(form => {
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                if (emailInput && FormHandlers.isValidEmail(emailInput.value)) {
                    if (window.HilltopUI && window.HilltopUI.showToast) {
                        window.HilltopUI.showToast("Newsletter signup is not connected on this demo site. Your email was not saved.", "info");
                    }
                    emailInput.value = "";
                } else if (emailInput) {
                    emailInput.classList.add("is-invalid");
                    setTimeout(() => emailInput.classList.remove("is-invalid"), 3000);
                }
            });
        });
    }
};

// Initialize when DOM ready
document.addEventListener("DOMContentLoaded", () => {
    FormHandlers.init();
});

// Expose globally
window.FormHandlers = FormHandlers;
