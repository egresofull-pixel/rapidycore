const STORAGE_KEY = "rapidycore-language";
const supportedLanguages = ["en", "ru", "uk"];
const languageFadeMs = 120;
const legalRevealSelector = [
  ".legal-hero .container",
  ".legal-section",
  ".footer-inner"
].join(", ");
const reducedMotionQuery = window.matchMedia
  ? window.matchMedia("(prefers-reduced-motion: reduce)")
  : { matches: false };
let languageTransitionTimer = 0;
let revealObserver;

const legalTranslations = {
  en: {
    common: {
      backHome: "Home",
      privacy: "Privacy",
      terms: "Terms",
      footer: "Personal Windows automation with local settings and transparent controls."
    },
    privacy: {
      metaTitle: "Privacy Policy - RapidyCore",
      kicker: "Privacy Policy",
      title: "Privacy Policy",
      updated: "Prepared for public website publishing.",
      lead: "RapidyCore is designed as a local Windows utility. This policy explains what the app and website do with data.",
      sections: [
        {
          title: "No account required",
          items: [
            "RapidyCore does not require a user account, subscription, or sign-in flow.",
            "The desktop app is designed to work without a cloud backend."
          ]
        },
        {
          title: "Local settings",
          items: [
            "App settings and profiles are stored locally on the user's Windows PC.",
            "RapidyCore does not advertise telemetry or remote analytics in the current version."
          ]
        },
        {
          title: "User-controlled installer choices",
          items: [
            "The optional Microsoft Defender exclusion is controlled by the user during setup.",
            "RapidyCore uses external screen-based detection and normal Windows input."
          ]
        },
        {
          title: "Website hosting",
          items: [
            "GitHub Pages or another hosting provider may process standard technical logs such as IP address, user agent, and request time.",
            "The website does not provide a public download until a real release file is ready."
          ]
        }
      ]
    },
    terms: {
      metaTitle: "Terms of Use - RapidyCore",
      kicker: "Terms of Use",
      title: "Terms of Use",
      updated: "Prepared for public website publishing.",
      lead: "Use RapidyCore responsibly and only where automation is allowed by the software, game, or platform you use it with.",
      sections: [
        {
          title: "As-is software",
          items: [
            "RapidyCore is provided as-is, without a promise that it will fit every setup or work without bugs.",
            "Beta versions may contain bugs or unfinished behavior."
          ]
        },
        {
          title: "User responsibility",
          items: [
            "You are responsible for following the rules of the games, platforms, and software where you use RapidyCore.",
            "Do not use RapidyCore where automation is prohibited."
          ]
        },
        {
          title: "Technical scope",
          items: [
            "RapidyCore uses external screen-based detection and normal Windows input.",
            "RapidyCore works from the screen image and normal Windows input controls."
          ]
        },
        {
          title: "Bug reports",
          items: [
            "Report issues through Telegram at https://t.me/rapidycore or in RapidyCore™ Chat|Bug reports.",
            "Download links should only be added when an approved public release file exists."
          ]
        }
      ]
    }
  },
  ru: {
    common: {
      backHome: "Главная",
      privacy: "Конфиденциальность",
      terms: "Условия",
      footer: "Персональная Windows-автоматизация с локальными настройками и прозрачным управлением."
    },
    privacy: {
      metaTitle: "Политика конфиденциальности - RapidyCore",
      kicker: "Политика конфиденциальности",
      title: "Политика конфиденциальности",
      updated: "Подготовлено для публикации публичного сайта.",
      lead: "RapidyCore разработан как локальная Windows-утилита. Эта политика объясняет, как приложение и сайт относятся к данным.",
      sections: [
        {
          title: "Аккаунт не требуется",
          items: [
            "RapidyCore не требует аккаунта, подписки или входа в систему.",
            "Десктопное приложение рассчитано на работу без облачного backend."
          ]
        },
        {
          title: "Локальные настройки",
          items: [
            "Настройки и профили приложения хранятся локально на Windows-ПК пользователя.",
            "В текущей версии RapidyCore не заявляет телеметрию или удаленную аналитику."
          ]
        },
        {
          title: "Выбор пользователя в установщике",
          items: [
            "Опциональное исключение Microsoft Defender контролируется пользователем во время установки.",
            "RapidyCore использует внешнее экранное определение и обычный ввод Windows. Он не внедряется в игры, не читает память процессов и не заявляет возможность избегать систем античита."
          ]
        },
        {
          title: "Хостинг сайта",
          items: [
            "GitHub Pages или другой провайдер хостинга может обрабатывать стандартные технические логи, например IP-адрес, user agent и время запроса.",
            "На сайте не публикуется скачивание, пока не готов настоящий файл релиза."
          ]
        }
      ]
    },
    terms: {
      metaTitle: "Условия использования - RapidyCore",
      kicker: "Условия использования",
      title: "Условия использования",
      updated: "Подготовлено для публикации публичного сайта.",
      lead: "Используйте RapidyCore ответственно и только там, где автоматизация разрешена правилами программы, игры или платформы.",
      sections: [
        {
          title: "Предоставляется как есть",
          items: [
            "RapidyCore предоставляется как есть, без обещания, что он подойдет для любой системы или будет работать без ошибок.",
            "Бета-версии могут содержать ошибки или незавершенное поведение."
          ]
        },
        {
          title: "Ответственность пользователя",
          items: [
            "Вы отвечаете за соблюдение правил игр, платформ и программ, где используете RapidyCore.",
            "Не используйте RapidyCore там, где автоматизация запрещена."
          ]
        },
        {
          title: "Технические рамки",
          items: [
            "RapidyCore использует внешнее экранное определение и обычный ввод Windows.",
            "RapidyCore не внедряется в другое ПО, не читает память и не заявляет возможность избегать систем античита."
          ]
        },
        {
          title: "Отчеты об ошибках",
          items: [
            "Сообщайте о проблемах через Telegram: https://t.me/rapidycore или в RapidyCore™ Chat|Bug reports.",
            "Ссылки на скачивание следует добавлять только после появления утвержденного файла публичного релиза."
          ]
        }
      ]
    }
  },
  uk: {
    common: {
      backHome: "Головна",
      privacy: "Конфіденційність",
      terms: "Умови",
      footer: "Персональна Windows-автоматизація з локальними налаштуваннями та прозорим керуванням."
    },
    privacy: {
      metaTitle: "Політика конфіденційності - RapidyCore",
      kicker: "Політика конфіденційності",
      title: "Політика конфіденційності",
      updated: "Підготовлено для публікації публічного сайту.",
      lead: "RapidyCore розроблено як локальну Windows-утиліту. Ця політика пояснює, як застосунок і сайт ставляться до даних.",
      sections: [
        {
          title: "Акаунт не потрібен",
          items: [
            "RapidyCore не потребує акаунта, підписки або входу в систему.",
            "Десктопний застосунок розрахований на роботу без хмарного backend."
          ]
        },
        {
          title: "Локальні налаштування",
          items: [
            "Налаштування та профілі застосунку зберігаються локально на Windows-ПК користувача.",
            "У поточній версії RapidyCore не заявляє телеметрію або віддалену аналітику."
          ]
        },
        {
          title: "Вибір користувача в інсталяторі",
          items: [
            "Опціональний виняток Microsoft Defender контролюється користувачем під час встановлення.",
            "RapidyCore використовує зовнішнє екранне визначення та звичайне введення Windows. Він не впроваджується в ігри, не читає пам'ять процесів і не заявляє можливість уникати систем античиту."
          ]
        },
        {
          title: "Хостинг сайту",
          items: [
            "GitHub Pages або інший провайдер хостингу може обробляти стандартні технічні логи, наприклад IP-адресу, user agent і час запиту.",
            "На сайті не публікується завантаження, доки не готовий справжній файл релізу."
          ]
        }
      ]
    },
    terms: {
      metaTitle: "Умови використання - RapidyCore",
      kicker: "Умови використання",
      title: "Умови використання",
      updated: "Підготовлено для публікації публічного сайту.",
      lead: "Використовуйте RapidyCore відповідально і тільки там, де автоматизація дозволена правилами програми, гри або платформи.",
      sections: [
        {
          title: "Надається як є",
          items: [
            "RapidyCore надається як є, без обіцянки, що він підійде для будь-якої системи або працюватиме без помилок.",
            "Бета-версії можуть містити помилки або незавершену поведінку."
          ]
        },
        {
          title: "Відповідальність користувача",
          items: [
            "Ви відповідаєте за дотримання правил ігор, платформ і програм, де використовуєте RapidyCore.",
            "Не використовуйте RapidyCore там, де автоматизація заборонена."
          ]
        },
        {
          title: "Технічні межі",
          items: [
            "RapidyCore використовує зовнішнє екранне визначення та звичайне введення Windows.",
            "RapidyCore не впроваджується в інше ПЗ, не читає пам'ять і не заявляє можливість уникати систем античиту."
          ]
        },
        {
          title: "Звіти про помилки",
          items: [
            "Повідомляйте про проблеми через Telegram: https://t.me/rapidycore або в RapidyCore™ Chat|Bug reports.",
            "Посилання на завантаження слід додавати тільки після появи затвердженого файлу публічного релізу."
          ]
        }
      ]
    }
  }
};

Object.assign(legalTranslations.en.privacy, {
  lead: "RapidyCore is a local Windows utility. The current website describes an external screen-based Blade Ball setup and explains what the app and website do with data."
});
legalTranslations.en.privacy.sections[2].items[1] = "RapidyCore is intended for external screen-based workflows such as the Blade Ball setup described on the website.";

Object.assign(legalTranslations.en.terms, {
  lead: "Use RapidyCore responsibly and only where automation is allowed. The current website describes an external screen-based Blade Ball workflow."
});
legalTranslations.en.terms.sections[2].items = [
  "RapidyCore is intended for external screen-based workflows such as the Blade Ball setup described on the website.",
  "RapidyCore works from the screen image and normal Windows input controls."
];

Object.assign(legalTranslations.ru.privacy, {
  lead: "RapidyCore — локальная Windows-утилита. Текущий сайт описывает внешний screen-based сценарий для Blade Ball и объясняет, как приложение и сайт относятся к данным."
});
legalTranslations.ru.privacy.sections[2].items[1] = "RapidyCore предназначен для внешних screen-based сценариев, таких как настройка Blade Ball, описанная на сайте. Он не внедряется в Roblox, не читает память и не выполняет код внутри игры.";

Object.assign(legalTranslations.ru.terms, {
  lead: "Используйте RapidyCore ответственно и только там, где автоматизация разрешена. Текущий сайт описывает внешний screen-based сценарий для Blade Ball."
});
legalTranslations.ru.terms.sections[2].items = [
  "RapidyCore предназначен для внешних screen-based сценариев, таких как настройка Blade Ball, описанная на сайте.",
  "RapidyCore не внедряется в Roblox, не читает память и не выполняет код внутри игры."
];

Object.assign(legalTranslations.uk.privacy, {
  lead: "RapidyCore — локальна Windows-утиліта. Поточний сайт описує зовнішній screen-based сценарій для Blade Ball і пояснює, як застосунок і сайт ставляться до даних."
});
legalTranslations.uk.privacy.sections[2].items[1] = "RapidyCore призначений для зовнішніх screen-based сценаріїв, таких як налаштування Blade Ball, описане на сайті. Він не впроваджується в Roblox, не читає пам'ять і не виконує код усередині гри.";

Object.assign(legalTranslations.uk.terms, {
  lead: "Використовуйте RapidyCore відповідально і лише там, де автоматизація дозволена. Поточний сайт описує зовнішній screen-based сценарій для Blade Ball."
});
legalTranslations.uk.terms.sections[2].items = [
  "RapidyCore призначений для зовнішніх screen-based сценаріїв, таких як налаштування Blade Ball, описане на сайті.",
  "RapidyCore не впроваджується в Roblox, не читає пам'ять і не виконує код усередині гри."
];

legalTranslations.en.privacy.sections[3].items[1] = "The website provides the current approved public installer in the download section.";
legalTranslations.en.terms.sections[3].items[0] = "Report issues through Telegram: https://t.me/rapidycore. Community chat invite: https://t.me/+GZCNSRBBcKJjMDRi. Channel boost: https://t.me/boost/rapidycore.";

legalTranslations.ru.privacy.sections[3].items[1] = "На сайте доступен текущий утвержденный публичный установщик в разделе скачивания.";
legalTranslations.ru.terms.sections[3].items[0] = "Сообщайте о проблемах через Telegram: https://t.me/rapidycore. Приглашение в чат сообщества: https://t.me/+GZCNSRBBcKJjMDRi. Boost канала: https://t.me/boost/rapidycore.";

legalTranslations.uk.privacy.sections[3].items[1] = "На сайті доступний поточний затверджений публічний інсталятор у розділі завантаження.";
legalTranslations.uk.terms.sections[3].items[0] = "Повідомляйте про проблеми через Telegram: https://t.me/rapidycore. Запрошення до чату спільноти: https://t.me/+GZCNSRBBcKJjMDRi. Boost каналу: https://t.me/boost/rapidycore.";

legalTranslations.en.privacy.sections.push({
  title: "Voluntary donations",
  items: [
    "Donations are handled by Ko-fi and its payment providers.",
    "RapidyCore itself does not process payment card data.",
    "If you choose to donate, review Ko-fi's own privacy and payment policies."
  ]
});
legalTranslations.en.terms.sections.push({
  title: "Free software and donations",
  items: [
    "RapidyCore is free to use.",
    "Donations are voluntary and do not purchase access to extra features.",
    "Donations do not guarantee custom features, priority support, or future updates unless explicitly stated."
  ]
});

legalTranslations.ru.privacy.sections.push({
  title: "Добровольные донаты",
  items: [
    "Донаты обрабатываются Ko-fi и его платёжными провайдерами.",
    "Сам RapidyCore не обрабатывает данные банковских карт.",
    "Если вы решите поддержать проект, ознакомьтесь с политиками Ko-fi и его платёжных провайдеров."
  ]
});
legalTranslations.ru.terms.sections.push({
  title: "Бесплатный доступ и донаты",
  items: [
    "RapidyCore распространяется бесплатно.",
    "Донаты добровольные и не покупают доступ к дополнительным функциям.",
    "Донаты не гарантируют кастомные функции, приоритетную поддержку или будущие обновления, если это не указано отдельно."
  ]
});

legalTranslations.uk.privacy.sections.push({
  title: "Добровільні донати",
  items: [
    "Донати обробляються Ko-fi та його платіжними провайдерами.",
    "Сам RapidyCore не обробляє дані банківських карток.",
    "Якщо ви вирішите підтримати проєкт, ознайомтеся з політиками Ko-fi та його платіжних провайдерів."
  ]
});
legalTranslations.uk.terms.sections.push({
  title: "Безкоштовний доступ і донати",
  items: [
    "RapidyCore поширюється безкоштовно.",
    "Донати добровільні та не купують доступ до додаткових функцій.",
    "Донати не гарантують кастомні функції, пріоритетну підтримку або майбутні оновлення, якщо це не зазначено окремо."
  ]
});

function getTranslation(lang, path) {
  return path.split(".").reduce((value, key) => {
    if (value && Object.prototype.hasOwnProperty.call(value, key)) {
      return value[key];
    }
    return undefined;
  }, legalTranslations[lang]);
}

function safeStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return supportedLanguages.includes(stored) ? stored : "en";
  } catch (error) {
    return "en";
  }
}

function safeSaveLanguage(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    // localStorage can be unavailable in some locked-down browser contexts.
  }
}

function updateLanguageButtons(lang) {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function prefersReducedMotion() {
  return reducedMotionQuery.matches;
}

function refreshRevealItems(showImmediately = false) {
  const items = document.querySelectorAll(legalRevealSelector);

  items.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", `${Math.min((index % 8) * 45, 220)}ms`);

    if (showImmediately || prefersReducedMotion() || !revealObserver) {
      item.classList.add("is-visible");
      return;
    }

    item.classList.remove("is-visible");
    revealObserver.observe(item);
  });
}

function setupRevealAnimations() {
  if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
    refreshRevealItems(true);
    return;
  }

  document.body.classList.add("reveal-ready");

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  refreshRevealItems(false);
}

function handleReducedMotionChange() {
  document.body.classList.remove("is-language-switching");

  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = undefined;
  }

  document.body.classList.toggle("reveal-ready", !prefersReducedMotion());
  setupRevealAnimations();
}

function renderLegalPage(lang, options = {}) {
  const page = document.body.dataset.legalPage === "terms" ? "terms" : "privacy";
  const pageData = legalTranslations[lang][page];
  document.documentElement.lang = lang;
  document.title = pageData.metaTitle;

  document.querySelectorAll("[data-legal-i18n]").forEach((element) => {
    const text = getTranslation(lang, element.dataset.legalI18n);
    if (typeof text === "string") {
      element.textContent = text;
    }
  });

  const content = document.querySelector("#legal-content");
  content.innerHTML = "";

  pageData.sections.forEach((section) => {
    const article = document.createElement("article");
    article.className = "legal-section";
    const items = section.items.map((item) => `<li>${item}</li>`).join("");
    article.innerHTML = `
      <h2>${section.title}</h2>
      <ul class="legal-list">${items}</ul>
    `;
    content.appendChild(article);
  });

  updateLanguageButtons(lang);

  if (options.refreshReveal !== false) {
    refreshRevealItems(false);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLanguage = safeStoredLanguage();
  renderLegalPage(initialLanguage, { refreshReveal: false });
  setupRevealAnimations();

  if (reducedMotionQuery.addEventListener) {
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang;
      if (!supportedLanguages.includes(nextLanguage)) {
        return;
      }

      window.clearTimeout(languageTransitionTimer);
      safeSaveLanguage(nextLanguage);
      document.body.classList.add("is-language-switching");
      languageTransitionTimer = window.setTimeout(() => {
        renderLegalPage(nextLanguage);
        window.requestAnimationFrame(() => {
          document.body.classList.remove("is-language-switching");
        });
      }, languageFadeMs);
    });
  });
});
