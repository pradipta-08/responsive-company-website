const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("mainNavigation");

if (menuToggle && navLinks) {

    /* Open / close mobile menu */

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close menu after clicking a navigation link */

    const navigationItems =
        navLinks.querySelectorAll("a");

    navigationItems.forEach((link) => {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    /* Close menu when pressing Escape */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            navLinks.classList.contains("open")
        ) {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.focus();

        }

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", function (event) {

        const clickedInsideNavigation =
            navLinks.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);

        if (
            !clickedInsideNavigation &&
            !clickedMenuButton &&
            navLinks.classList.contains("open")
        ) {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    /* Close menu when returning to desktop */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    const nameInput =
        document.getElementById("name");

    const emailInput =
        document.getElementById("email");

    const subjectInput =
        document.getElementById("subject");

    const messageInput =
        document.getElementById("message");


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const subjectError =
        document.getElementById("subjectError");

    const messageError =
        document.getElementById("messageError");


    const formSuccess =
        document.getElementById("formSuccess");


    /* ---------- Clear Validation Errors ---------- */

    function clearErrors() {

        const groups =
            document.querySelectorAll(".form-group");

        groups.forEach((group) => {

            group.classList.remove("has-error");

        });

        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";

        formSuccess.textContent = "";

    }


    /* ---------- Display Error ---------- */

    function showError(
        input,
        errorElement,
        message
    ) {

        input
            .closest(".form-group")
            .classList.add("has-error");

        errorElement.textContent = message;

    }


    /* ---------- Email Validation ---------- */

    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }


    /* ---------- Form Submission ---------- */

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            clearErrors();

            let isValid = true;

            let firstInvalidInput = null;


            /* ---------- Name ---------- */

            const name =
                nameInput.value.trim();

            if (name === "") {

                showError(
                    nameInput,
                    nameError,
                    "Please enter your name."
                );

                isValid = false;
                firstInvalidInput = firstInvalidInput || nameInput;

            } else if (name.length < 2) {

                showError(
                    nameInput,
                    nameError,
                    "Name must contain at least 2 characters."
                );

                isValid = false;
                firstInvalidInput = firstInvalidInput || nameInput;

            }


            /* ---------- Email ---------- */

            const email =
                emailInput.value.trim();

            if (email === "") {

                showError(
                    emailInput,
                    emailError,
                    "Please enter your email address."
                );

                isValid = false;
                firstInvalidInput = firstInvalidInput || emailInput;

            } else if (!isValidEmail(email)) {

                showError(
                    emailInput,
                    emailError,
                    "Please enter a valid email address."
                );

                isValid = false;
                firstInvalidInput = firstInvalidInput || emailInput;

            }


            /* ---------- Subject ---------- */

            const subject =
                subjectInput.value.trim();

            if (subject === "") {

                showError(
                    subjectInput,
                    subjectError,
                    "Please enter a subject."
                );

                isValid = false;
                firstInvalidInput = firstInvalidInput || subjectInput;

            }


            /* ---------- Message ---------- */

            const message =
                messageInput.value.trim();

            if (message === "") {

                showError(
                    messageInput,
                    messageError,
                    "Please enter your message."
                );

                isValid = false;
                firstInvalidInput = firstInvalidInput || messageInput;

            } else if (message.length < 10) {

                showError(
                    messageInput,
                    messageError,
                    "Message must contain at least 10 characters."
                );

                isValid = false;
                firstInvalidInput = firstInvalidInput || messageInput;

            }


            /* ---------- Focus First Invalid Field ---------- */

            if (!isValid && firstInvalidInput) {

                firstInvalidInput.focus();

                return;

            }


            /* ---------- Success ---------- */

            formSuccess.textContent =
                "Thanks! Your message has been received.";

            contactForm.reset();

        }
    );


    /* ---------- Remove Error While Typing ---------- */

    const formInputs = [
        nameInput,
        emailInput,
        subjectInput,
        messageInput
    ];


    formInputs.forEach((input) => {

        input.addEventListener(
            "input",
            function () {

                const group =
                    input.closest(".form-group");

                group.classList.remove(
                    "has-error"
                );


                const errorElement =
                    group.querySelector(".form-error");

                errorElement.textContent = "";

                formSuccess.textContent = "";

            }
        );

    });

}

