(() => {
  const root = document.documentElement;
  const header = document.querySelector("[data-site-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-site-navigation]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  root.classList.add("js");

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeNavigation = () => {
    header?.classList.remove("navigation-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  };

  menuToggle?.addEventListener("click", () => {
    const open = header?.classList.toggle("navigation-open");
    menuToggle.setAttribute("aria-expanded", String(Boolean(open)));
  });

  navigation?.addEventListener("click", event => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeNavigation();
  });

  const revealElements = [...document.querySelectorAll(".reveal")];
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(element => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -22px" });

    revealElements.forEach(element => observer.observe(element));
  }

  document.querySelectorAll("[data-current-year]").forEach(element => {
    element.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-product-demo]").forEach(demo => {
    const tabs = [...demo.querySelectorAll("[data-demo-tab]")];
    const panels = [...demo.querySelectorAll("[data-demo-panel]")];
    const themeChoices = [...demo.querySelectorAll("[data-demo-theme]")];

    const activateTab = tab => {
      const selected = tab.dataset.demoTab;
      tabs.forEach(item => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
        item.tabIndex = active ? 0 : -1;
      });
      panels.forEach(panel => {
        const active = panel.dataset.demoPanel === selected;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activateTab(tab));
      tab.addEventListener("keydown", event => {
        if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex]);
      });
    });

    themeChoices.forEach(choice => {
      choice.addEventListener("click", () => {
        demo.dataset.theme = choice.dataset.demoTheme;
        themeChoices.forEach(item => {
          const active = item === choice;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-checked", String(active));
        });
      });
    });
  });

  const authModal = document.querySelector("[data-auth-modal]");
  const authForm = authModal?.querySelector("[data-auth-form]");
  const authEmail = authModal?.querySelector("#auth-email");
  const authPassword = authModal?.querySelector("#auth-password");
  const authConfirmPassword = authModal?.querySelector("#auth-confirm-password");
  const authRegisterField = authModal?.querySelector("[data-auth-register-field]");
  const authForgot = authModal?.querySelector("[data-auth-forgot]");
  const authSwitch = authModal?.querySelector("[data-auth-switch]");
  const authKicker = authModal?.querySelector("#auth-kicker");
  const authTitle = authModal?.querySelector("#auth-title");
  const authCopy = authModal?.querySelector("#auth-copy");
  const authContext = authModal?.querySelector("#auth-context");
  const authSubmit = authModal?.querySelector("#auth-submit");
  const authSwitchCopy = authModal?.querySelector("#auth-switch-copy");
  const authMessage = authModal?.querySelector("#auth-message");
  let authMode = "login";
  let authTrigger = null;
  let closeTimer;

  const setAuthMessage = (message = "", prepared = false) => {
    if (!authMessage) return;
    authMessage.textContent = message;
    authMessage.classList.toggle("is-prepared", prepared);
  };

  const setInputValidity = (input, invalid) => {
    if (!input) return;
    input.setAttribute("aria-invalid", String(invalid));
  };

  const setAuthMode = mode => {
    authMode = mode;
    const registering = mode === "register";
    authModal?.classList.toggle("is-registering", registering);
    if (authRegisterField) authRegisterField.hidden = !registering;
    if (authForgot) authForgot.hidden = registering;
    if (authConfirmPassword) {
      authConfirmPassword.required = registering;
      authConfirmPassword.autocomplete = registering ? "new-password" : "off";
    }
    if (authPassword) authPassword.autocomplete = registering ? "new-password" : "current-password";
    if (authKicker) authKicker.textContent = registering ? "NEW TO SOLVAR" : "WELCOME BACK";
    if (authTitle) authTitle.textContent = registering ? "Create a Solvar account." : "Sign in to Solvar.";
    if (authCopy) authCopy.textContent = registering ? "Registration is prepared for future account integration." : "Account access is being prepared for future integration.";
    if (authSubmit) authSubmit.innerHTML = registering ? "Create account <b>→</b>" : "Sign in <b>→</b>";
    if (authSwitchCopy) authSwitchCopy.textContent = registering ? "Already have an account?" : "New to Solvar?";
    if (authSwitch) {
      authSwitch.dataset.authSwitch = registering ? "login" : "register";
      authSwitch.textContent = registering ? "Sign in" : "Create an account";
    }
    [authEmail, authPassword, authConfirmPassword].forEach(input => setInputValidity(input, false));
    setAuthMessage();
  };

  const modalFocusableElements = () => [...authModal?.querySelectorAll("button:not([hidden]), input:not([hidden]), [href]:not([hidden])") || []]
    .filter(element => !element.disabled && element.offsetParent !== null);

  const openAuthModal = ({ plan = "", trigger = null } = {}) => {
    if (!authModal) return;
    window.clearTimeout(closeTimer);
    authTrigger = trigger || document.activeElement;
    authForm?.reset();
    setAuthMode("login");
    if (authContext) {
      authContext.hidden = !plan;
      authContext.textContent = plan ? "Continue with " + plan + " once account access is connected." : "";
    }
    authModal.hidden = false;
    document.body.classList.add("modal-open");
    window.requestAnimationFrame(() => {
      authModal.classList.add("is-open");
      window.setTimeout(() => authEmail?.focus({ preventScroll: true }), reducedMotion ? 0 : 24);
    });
  };

  const closeAuthModal = () => {
    if (!authModal || authModal.hidden) return;
    authModal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    closeTimer = window.setTimeout(() => {
      authModal.hidden = true;
      if (authContext) authContext.hidden = true;
      if (authTrigger instanceof HTMLElement && document.contains(authTrigger)) authTrigger.focus();
      authTrigger = null;
    }, reducedMotion ? 0 : 270);
  };

  authModal?.querySelectorAll("[data-auth-close]").forEach(control => control.addEventListener("click", closeAuthModal));
  authSwitch?.addEventListener("click", () => {
    setAuthMode(authSwitch.dataset.authSwitch || "login");
    authEmail?.focus();
  });
  authForgot?.addEventListener("click", () => {
    setAuthMessage("Password recovery will be available with account integration.", true);
  });
  authForm?.addEventListener("submit", event => {
    event.preventDefault();
    const emailIsValid = Boolean(authEmail?.value.trim()) && Boolean(authEmail?.validity.valid);
    const passwordIsPresent = Boolean(authPassword?.value);
    const confirmationMatches = authMode !== "register" || (Boolean(authConfirmPassword?.value) && authConfirmPassword?.value === authPassword?.value);
    setInputValidity(authEmail, !emailIsValid);
    setInputValidity(authPassword, !passwordIsPresent);
    setInputValidity(authConfirmPassword, !confirmationMatches);
    if (!emailIsValid) {
      setAuthMessage("Enter a valid email address.");
      authEmail?.focus();
      return;
    }
    if (!passwordIsPresent) {
      setAuthMessage("Enter a password.");
      authPassword?.focus();
      return;
    }
    if (!confirmationMatches) {
      setAuthMessage("Passwords must match.");
      authConfirmPassword?.focus();
      return;
    }
    if (authPassword) authPassword.value = "";
    if (authConfirmPassword) authConfirmPassword.value = "";
    setAuthMessage(authMode === "register" ? "Registration is not connected yet. No account was created." : "Sign-in is not connected yet. No credentials were submitted or stored.", true);
  });
  document.addEventListener("keydown", event => {
    if (!authModal || authModal.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeAuthModal();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = modalFocusableElements();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.querySelectorAll("[data-account-action]").forEach(control => {
    control.addEventListener("click", () => {
      const accountState = root.dataset.accountState || "unauthenticated";
      const detail = { source: control.dataset.accountSource || "unknown", plan: control.dataset.accountPlan || "" };
      if (accountState === "authenticated") {
        document.dispatchEvent(new CustomEvent("rapidycore:account-access-request", { bubbles: true, cancelable: true, detail }));
        return;
      }
      openAuthModal({ plan: detail.plan, trigger: control });
    });
  });
})();
