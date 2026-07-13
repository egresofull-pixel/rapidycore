const STORAGE_KEY = "rapidycore-language";
const supportedLanguages = ["en", "ru", "uk"];
const releaseDownloads = {
  latest: "downloads/RapidyCoreInstall-1.2.1-Beta.exe",
  previous: "downloads/RapidyCoreInstall-1.2-Beta.exe",
  older: "downloads/RapidyCoreInstall-1.1-Beta.exe"
};

const translations = {
  en: {
    metaTitle: "RapidyCore - Windows Automation Utility",
    a11y: {
      skip: "Skip to content"
    },
    nav: {
      features: "Features",
      preview: "Preview",
      how: "How it works",
      download: "Download",
      changelog: "Changelog",
      faq: "FAQ"
    },
    hero: {
      kicker: "Official RapidyCore website",
      tagline: "RapidyCore is a lightweight Windows utility for configurable hotkeys, external screen-based triggers, fast mouse input, and AFK automation.",
      download: "Download",
      features: "View features",
      changelog: "Changelog",
      points: [
        "External screen-based detection",
        "Mouse button hotkeys",
        "Local settings",
        "No account required"
      ]
    },
    features: {
      kicker: "Core toolkit",
      title: "Configurable input control, kept local.",
      copy: "RapidyCore focuses on user-controlled Windows automation with clear settings, visual feedback, and no account requirement.",
      items: [
        {
          title: "External color trigger",
          text: "Screen-based color detection can react to configured pixels without cloud services or hidden online logic."
        },
        {
          title: "Mouse hotkeys",
          text: "Use regular keyboard keys or supported mouse buttons such as Mouse4 and Mouse5 for faster control."
        },
        {
          title: "Fast LMB spam",
          text: "Configure high-rate left mouse input with user-controlled timing and clear on-screen status."
        },
        {
          title: "AFK Space mode",
          text: "Run a simple Space press routine at a chosen interval for personal idle automation."
        },
        {
          title: "Target process filter",
          text: "Limit automation behavior to a selected Windows process so settings stay more predictable."
        },
        {
          title: "Mini-status window",
          text: "Keep compact feedback visible while the main window stays out of the way."
        },
        {
          title: "Diagnostics",
          text: "Review useful runtime details in a dedicated info panel while tuning your setup."
        },
        {
          title: "Installer options",
          text: "Optional setup choices are visible and user-controlled, including Microsoft Defender exclusion."
        }
      ]
    },
    preview: {
      kicker: "Interface preview",
      title: "Real interface snapshots.",
      copy: "Current screenshots from the desktop app: main control window, trigger settings, and diagnostics panel.",
      label: "Screenshot placeholder",
      items: [
        {
          title: "Main control window",
          text: "A future screenshot can show the current dark UI, mode tabs, and active status."
        },
        {
          title: "Trigger configuration",
          text: "Reserve this area for color selection, trigger profiles, and process targeting."
        },
        {
          title: "Diagnostics panel",
          text: "Use this slot for runtime information, status checks, and transparency details."
        }
      ]
    },
    how: {
      kicker: "How it works",
      title: "Simple setup, visible behavior.",
      steps: [
        {
          title: "Choose a mode",
          text: "Enable spam input, external color trigger, trigger profile, or AFK Space mode."
        },
        {
          title: "Set your hotkeys",
          text: "Bind keyboard or mouse buttons and validate conflicts before running a mode."
        },
        {
          title: "Tune local options",
          text: "Adjust timing, process filtering, color values, and visual theme on your PC."
        },
        {
          title: "Watch status",
          text: "Use the mini-status window and diagnostics panel to see what is active."
        }
      ]
    },
    safety: {
      kicker: "Safety and transparency",
      title: "Local by design, clear about what it does.",
      copy: "RapidyCore is designed around external screen-based detection and normal Windows input. It does not require an account, cloud backend, or hidden background services.",
      items: [
        "Uses external screen capture and normal Windows input.",
        "Runs with local configuration data on your Windows PC.",
        "Does not require a user account or paid cloud backend.",
        "Should be described as a local automation utility, not as a hidden modification tool.",
        "Microsoft Defender exclusion is optional and user-controlled.",
        "Official website download includes the current beta installer.",
        "Trigger Bot reacts to the configured screen color; similar colors in the scan area can also be detected."
      ]
    },
    download: {
      kicker: "Release status",
      title: "RapidyCore v1.2.1 Beta is available.",
      copy: "Use the official Windows installer below. Privacy and Terms stay available before you install.",
      button: "Download installer"
    },
    changelog: {
      kicker: "Versions",
      title: "Version history.",
      copy: "Current website and app version: v1.2.1 Beta.",
      betaNotePrefix: "RapidyCore is currently in beta. Bugs are possible. Please report issues through Telegram: ",
      betaNoteSuffix: " or in RapidyCore™ Chat|Bug reports.",
      versions: [
        {
          label: "Latest",
          title: "Version 1.1 Beta",
          items: [
            "Mouse button hotkey support.",
            "Improved Trigger Bot configuration.",
            "Spam and AFK improvements.",
            "Website setup guide added.",
            "Still beta; bugs may exist."
          ]
        },
        {
          label: "Previous",
          title: "Version 1.0 Beta",
          items: [
            "Initial public beta foundation.",
            "Trigger Bot external color detection.",
            "Spam LMB.",
            "AFK Space mode.",
            "Mini-status window.",
            "Basic diagnostics and installer."
          ]
        }
      ]
    },
    faq: {
      kicker: "FAQ",
      title: "Common questions.",
      items: [
        {
          question: "What is RapidyCore?",
          answer: "RapidyCore is a Windows desktop utility for configurable hotkeys, external screen-based triggers, fast mouse input, AFK Space automation, and local diagnostics."
        },
        {
          question: "Does RapidyCore need an account?",
          answer: "No. The current product positioning does not require user accounts, subscriptions, or sign-in flows."
        },
        {
          question: "Does it use cloud services?",
          answer: "No. The website and utility are presented around local configuration and local Windows behavior."
        },
        {
          question: "Can I use mouse buttons as hotkeys?",
          answer: "Yes. Supported mouse buttons such as Mouse4 and Mouse5 can be used as alternatives to keyboard hotkeys."
        },
        {
          question: "What is external color detection?",
          answer: "It means RapidyCore checks colors from the visible screen and reacts according to user-configured settings."
        },
        {
          question: "Can similar colors trigger it?",
          answer: "Yes. Trigger Bot reacts to the configured color in the scanned screen area. Any object or effect with the same or similar color, such as swords, visual effects, UI highlights, or particles, may also be detected."
        },
        {
          question: "Why can some keyboard combinations fail?",
          answer: "Some keyboards cannot physically report certain key combinations. This is called keyboard ghosting. Mouse4 or Mouse5 can be useful alternative hotkeys when a keyboard combo is unreliable."
        },
        {
          question: "Why does the installer offer Microsoft Defender exclusion?",
          answer: "The option is intended to be explicit and user-controlled. It is optional, and the website should describe it as an installer choice rather than a hidden behavior."
        },
        {
          question: "Is the download public yet?",
          answer: "Not yet. The official website can be published, but the download remains unavailable until a real public release file is ready."
        }
      ]
    },
    footer: {
      copy: "Personal Windows automation with local settings and transparent controls.",
      donate: "Donate",
      privacy: "Privacy",
      terms: "Terms"
    }
  },
  ru: {
    metaTitle: "RapidyCore - Windows-утилита автоматизации",
    a11y: {
      skip: "Перейти к содержимому"
    },
    nav: {
      features: "Возможности",
      preview: "Превью",
      how: "Как работает",
      download: "Скачать",
      changelog: "Изменения",
      faq: "FAQ"
    },
    hero: {
      kicker: "Официальный сайт RapidyCore",
      tagline: "RapidyCore - легкая Windows-утилита для настраиваемых хоткеев, внешних экранных триггеров, быстрого ввода мыши и AFK-режима.",
      download: "Скачать",
      features: "Смотреть возможности",
      changelog: "Изменения",
      points: [
        "Внешнее экранное определение",
        "Хоткеи на кнопках мыши",
        "Локальные настройки",
        "Аккаунт не нужен"
      ]
    },
    features: {
      kicker: "Основной набор",
      title: "Настраиваемое управление вводом, которое остается локальным.",
      copy: "RapidyCore сосредоточен на пользовательской Windows-автоматизации с понятными настройками, визуальной обратной связью и без требования аккаунта.",
      items: [
        {
          title: "Внешний цветовой триггер",
          text: "Экранное определение цвета может реагировать на настроенные пиксели без облачных сервисов и скрытой онлайн-логики."
        },
        {
          title: "Хоткеи мыши",
          text: "Используйте обычные клавиши или поддерживаемые кнопки мыши, например Mouse4 и Mouse5, для быстрого управления."
        },
        {
          title: "Быстрый ввод ЛКМ",
          text: "Настраивайте частый ввод левой кнопки мыши с пользовательским таймингом и понятным статусом на экране."
        },
        {
          title: "AFK-режим Space",
          text: "Запускайте простую периодическую отправку Space с выбранным интервалом для личной idle-автоматизации."
        },
        {
          title: "Фильтр процесса",
          text: "Ограничивайте поведение автоматизации выбранным процессом Windows, чтобы настройки были предсказуемее."
        },
        {
          title: "Мини-статус",
          text: "Держите компактную обратную связь видимой, пока основное окно не мешает работе."
        },
        {
          title: "Диагностика",
          text: "Проверяйте полезные сведения о работе программы в отдельной информационной панели во время настройки."
        },
        {
          title: "Опции установщика",
          text: "Дополнительные параметры установки видимы и управляются пользователем, включая исключение Microsoft Defender."
        }
      ]
    },
    preview: {
      kicker: "Превью интерфейса",
      title: "Раздел подготовлен для настоящих скриншотов продукта.",
      copy: "Эти блоки резервируют место для скриншотов главного окна, настроек триггеров и панели диагностики.",
      label: "Место для скриншота",
      items: [
        {
          title: "Главное окно управления",
          text: "Будущий скриншот может показать текущий темный UI, вкладки режимов и активный статус."
        },
        {
          title: "Настройка триггера",
          text: "Этот блок можно использовать для выбора цвета, профилей триггеров и фильтра процесса."
        },
        {
          title: "Панель диагностики",
          text: "Здесь можно показать сведения о работе, проверки статуса и детали прозрачности."
        }
      ]
    },
    how: {
      kicker: "Как это работает",
      title: "Простая настройка и видимое поведение.",
      steps: [
        {
          title: "Выберите режим",
          text: "Включите быстрый ввод, внешний цветовой триггер, профиль триггера или AFK-режим Space."
        },
        {
          title: "Назначьте хоткеи",
          text: "Привяжите клавиши или кнопки мыши и проверьте конфликты перед запуском режима."
        },
        {
          title: "Настройте локальные опции",
          text: "Измените тайминг, фильтр процесса, цветовые значения и визуальную тему на своем ПК."
        },
        {
          title: "Следите за статусом",
          text: "Используйте мини-статус и панель диагностики, чтобы видеть активные функции."
        }
      ]
    },
    safety: {
      kicker: "Безопасность и прозрачность",
      title: "Локальный подход и понятное описание поведения.",
      copy: "RapidyCore построен вокруг внешнего экранного определения и обычного ввода Windows. Ему не нужен аккаунт, облачный backend или скрытые фоновые сервисы.",
      items: [
        "Использует внешний захват экрана и обычный ввод Windows.",
        "Работает с локальными настройками на вашем Windows-ПК.",
        "Не требует аккаунта пользователя или платного облачного backend.",
        "Должен описываться как локальная утилита автоматизации, а не как скрытый инструмент модификации.",
        "Исключение Microsoft Defender является опциональным и управляется пользователем.",
        "Кнопки скачивания остаются отключенными до готовности публичного релиза.",
        "Trigger Bot реагирует на настроенный цвет экрана; похожие цвета в области сканирования тоже могут определяться."
      ]
    },
    download: {
      kicker: "Статус релиза",
      title: "Скачивание пока не публичное.",
      copy: "Публичный релиз будет добавлен позже. Этот сайт заранее готовит раздел релиза без ссылок на несуществующий установщик.",
      button: "Скачивание недоступно"
    },
    changelog: {
      kicker: "Версии",
      title: "История версий.",
      copy: "Текущая версия сайта и приложения: 1.1 Beta.",
      betaNotePrefix: "RapidyCore сейчас находится в бета-версии. Возможны ошибки. Сообщайте о проблемах через Telegram: ",
      betaNoteSuffix: " или в RapidyCore™ Chat|Bug reports.",
      versions: [
        {
          label: "Последняя",
          title: "Version 1.1 Beta",
          items: [
            "Поддержка хоткеев на кнопках мыши.",
            "Улучшена настройка Trigger Bot.",
            "Улучшения Spam и AFK.",
            "Добавлен гайд по настройке на сайте.",
            "Версия все еще бета; ошибки возможны."
          ]
        },
        {
          label: "Предыдущая",
          title: "Version 1.0 Beta",
          items: [
            "База первой публичной бета-версии.",
            "Внешнее определение цвета для Trigger Bot.",
            "Spam LMB.",
            "AFK Space mode.",
            "Мини-статус.",
            "Базовая диагностика и установщик."
          ]
        }
      ]
    },
    faq: {
      kicker: "FAQ",
      title: "Частые вопросы.",
      items: [
        {
          question: "Что такое RapidyCore?",
          answer: "RapidyCore - Windows-утилита для настраиваемых хоткеев, внешних экранных триггеров, быстрого ввода мыши, AFK-автоматизации Space и локальной диагностики."
        },
        {
          question: "Нужен ли RapidyCore аккаунт?",
          answer: "Нет. Текущее позиционирование продукта не требует аккаунтов, подписок или входа в систему."
        },
        {
          question: "Использует ли он облачные сервисы?",
          answer: "Нет. Сайт и утилита представлены вокруг локальных настроек и локального поведения Windows."
        },
        {
          question: "Можно ли использовать кнопки мыши как хоткеи?",
          answer: "Да. Поддерживаемые кнопки мыши, например Mouse4 и Mouse5, можно использовать вместо клавиатурных хоткеев."
        },
        {
          question: "Что такое внешнее определение цвета?",
          answer: "Это значит, что RapidyCore проверяет цвета на видимом экране и реагирует согласно настройкам пользователя."
        },
        {
          question: "Могут ли похожие цвета вызвать срабатывание?",
          answer: "Да. Trigger Bot реагирует на настроенный цвет в области сканирования экрана. Любой объект или эффект с таким же или похожим цветом, например мечи, визуальные эффекты, UI-подсветка или частицы, тоже может попасть под определение."
        },
        {
          question: "Почему некоторые сочетания клавиш могут не работать?",
          answer: "Некоторые клавиатуры физически не могут передавать определенные сочетания клавиш. Это называется keyboard ghosting. Mouse4 или Mouse5 могут быть удобной альтернативой, если комбинация клавиш ненадежна."
        },
        {
          question: "Почему установщик предлагает исключение Microsoft Defender?",
          answer: "Эта опция должна быть явной и управляемой пользователем. Она необязательна, а сайт должен описывать ее как выбор установщика, а не скрытое поведение."
        },
        {
          question: "Скачивание уже публичное?",
          answer: "Пока нет. Официальный сайт можно публиковать, но скачивание остается недоступным, пока не будет готов настоящий файл публичного релиза."
        }
      ]
    },
    footer: {
      copy: "Персональная Windows-автоматизация с локальными настройками и прозрачным управлением.",
      privacy: "Конфиденциальность",
      terms: "Условия"
    }
  },
  uk: {
    metaTitle: "RapidyCore - Windows-утиліта автоматизації",
    a11y: {
      skip: "Перейти до вмісту"
    },
    nav: {
      features: "Можливості",
      preview: "Превью",
      how: "Як працює",
      download: "Завантажити",
      changelog: "Зміни",
      faq: "FAQ"
    },
    hero: {
      kicker: "Офіційний сайт RapidyCore",
      tagline: "RapidyCore - легка Windows-утиліта для налаштовуваних хоткеїв, зовнішніх екранних тригерів, швидкого введення мишею та AFK-режиму.",
      download: "Завантажити",
      features: "Переглянути можливості",
      changelog: "Зміни",
      points: [
        "Зовнішнє екранне визначення",
        "Хоткеї на кнопках миші",
        "Локальні налаштування",
        "Акаунт не потрібен"
      ]
    },
    features: {
      kicker: "Основний набір",
      title: "Налаштовуване керування вводом, що залишається локальним.",
      copy: "RapidyCore зосереджений на користувацькій Windows-автоматизації з прозорими налаштуваннями, візуальним статусом і без потреби в акаунті.",
      items: [
        {
          title: "Зовнішній кольоровий тригер",
          text: "Екранне визначення кольору може реагувати на налаштовані пікселі без хмарних сервісів або прихованої онлайн-логіки."
        },
        {
          title: "Хоткеї миші",
          text: "Використовуйте звичайні клавіші або підтримувані кнопки миші, наприклад Mouse4 і Mouse5, для швидшого керування."
        },
        {
          title: "Швидке введення ЛКМ",
          text: "Налаштовуйте часте введення лівої кнопки миші з користувацьким таймінгом і зрозумілим статусом на екрані."
        },
        {
          title: "AFK-режим Space",
          text: "Запускайте просте періодичне натискання Space з обраним інтервалом для персональної idle-автоматизації."
        },
        {
          title: "Фільтр процесу",
          text: "Обмежуйте поведінку автоматизації вибраним процесом Windows, щоб налаштування були передбачуванішими."
        },
        {
          title: "Міні-статус",
          text: "Тримайте компактний зворотний зв'язок видимим, поки головне вікно не заважає роботі."
        },
        {
          title: "Діагностика",
          text: "Переглядайте корисні відомості про роботу програми в окремій інформаційній панелі під час налаштування."
        },
        {
          title: "Опції інсталятора",
          text: "Додаткові параметри встановлення видимі та керовані користувачем, включно з винятком Microsoft Defender."
        }
      ]
    },
    preview: {
      kicker: "Превью інтерфейсу",
      title: "Розділ підготовлено для справжніх скриншотів продукту.",
      copy: "Ці блоки резервують місце для скриншотів головного вікна, налаштувань тригерів і панелі діагностики.",
      label: "Місце для скриншота",
      items: [
        {
          title: "Головне вікно керування",
          text: "Майбутній скриншот може показати поточний темний UI, вкладки режимів і активний статус."
        },
        {
          title: "Налаштування тригера",
          text: "Цей блок можна використати для вибору кольору, профілів тригерів і фільтра процесу."
        },
        {
          title: "Панель діагностики",
          text: "Тут можна показати відомості про роботу, перевірки статусу та деталі прозорості."
        }
      ]
    },
    how: {
      kicker: "Як це працює",
      title: "Просте налаштування і видима поведінка.",
      steps: [
        {
          title: "Виберіть режим",
          text: "Увімкніть швидке введення, зовнішній кольоровий тригер, профіль тригера або AFK-режим Space."
        },
        {
          title: "Призначте хоткеї",
          text: "Прив'яжіть клавіші або кнопки миші та перевірте конфлікти перед запуском режиму."
        },
        {
          title: "Налаштуйте локальні опції",
          text: "Змініть таймінг, фільтр процесу, кольорові значення та візуальну тему на своєму ПК."
        },
        {
          title: "Стежте за статусом",
          text: "Використовуйте міні-статус і панель діагностики, щоб бачити активні функції."
        }
      ]
    },
    safety: {
      kicker: "Безпека і прозорість",
      title: "Локальний підхід і зрозумілий опис поведінки.",
      copy: "RapidyCore побудований навколо зовнішнього екранного визначення та звичайного введення Windows. Йому не потрібні акаунт, хмарний backend або приховані фонові сервіси.",
      items: [
        "Використовує зовнішнє захоплення екрана та звичайне введення Windows.",
        "Працює з локальними налаштуваннями на вашому Windows-ПК.",
        "Не потребує акаунта користувача або платного хмарного backend.",
        "Має описуватися як локальна утиліта автоматизації, а не як прихований інструмент модифікації.",
        "Виняток Microsoft Defender є опціональним і керованим користувачем.",
        "Кнопки завантаження залишаються вимкненими до готовності публічного релізу.",
        "Trigger Bot реагує на налаштований колір екрана; схожі кольори в зоні сканування також можуть визначатися."
      ]
    },
    download: {
      kicker: "Статус релізу",
      title: "Завантаження поки не публічне.",
      copy: "Публічний реліз буде додано пізніше. Цей сайт заздалегідь готує розділ релізу без посилань на неіснуючий інсталятор.",
      button: "Завантаження недоступне"
    },
    changelog: {
      kicker: "Версії",
      title: "Історія версій.",
      copy: "Поточна версія сайту й застосунку: 1.1 Beta.",
      betaNotePrefix: "RapidyCore зараз перебуває в бета-версії. Можливі помилки. Повідомляйте про проблеми через Telegram: ",
      betaNoteSuffix: " або в RapidyCore™ Chat|Bug reports.",
      versions: [
        {
          label: "Остання",
          title: "Version 1.1 Beta",
          items: [
            "Підтримка хоткеїв на кнопках миші.",
            "Покращено налаштування Trigger Bot.",
            "Покращення Spam і AFK.",
            "Додано гайд із налаштування на сайті.",
            "Версія все ще бета; помилки можливі."
          ]
        },
        {
          label: "Попередня",
          title: "Version 1.0 Beta",
          items: [
            "Основа першої публічної бета-версії.",
            "Зовнішнє визначення кольору для Trigger Bot.",
            "Spam LMB.",
            "AFK Space mode.",
            "Міні-статус.",
            "Базова діагностика та інсталятор."
          ]
        }
      ]
    },
    faq: {
      kicker: "FAQ",
      title: "Поширені питання.",
      items: [
        {
          question: "Що таке RapidyCore?",
          answer: "RapidyCore - Windows-утиліта для налаштовуваних хоткеїв, зовнішніх екранних тригерів, швидкого введення мишею, AFK-автоматизації Space і локальної діагностики."
        },
        {
          question: "Чи потрібен RapidyCore акаунт?",
          answer: "Ні. Поточне позиціонування продукту не потребує акаунтів, підписок або входу в систему."
        },
        {
          question: "Чи використовує він хмарні сервіси?",
          answer: "Ні. Сайт і утиліта представлені навколо локальних налаштувань і локальної поведінки Windows."
        },
        {
          question: "Чи можна використовувати кнопки миші як хоткеї?",
          answer: "Так. Підтримувані кнопки миші, наприклад Mouse4 і Mouse5, можна використовувати замість клавіатурних хоткеїв."
        },
        {
          question: "Що таке зовнішнє визначення кольору?",
          answer: "Це означає, що RapidyCore перевіряє кольори на видимому екрані та реагує відповідно до налаштувань користувача."
        },
        {
          question: "Чи можуть схожі кольори викликати спрацювання?",
          answer: "Так. Trigger Bot реагує на налаштований колір у зоні сканування екрана. Будь-який об'єкт або ефект із таким самим або схожим кольором, наприклад мечі, візуальні ефекти, UI-підсвітка чи частинки, також може бути виявлений."
        },
        {
          question: "Чому деякі комбінації клавіш можуть не працювати?",
          answer: "Деякі клавіатури фізично не можуть передавати певні комбінації клавіш. Це називається keyboard ghosting. Mouse4 або Mouse5 можуть бути зручною альтернативою, якщо комбінація клавіш ненадійна."
        },
        {
          question: "Чому інсталятор пропонує виняток Microsoft Defender?",
          answer: "Ця опція має бути явною та керованою користувачем. Вона необов'язкова, а сайт має описувати її як вибір інсталятора, а не приховану поведінку."
        },
        {
          question: "Завантаження вже публічне?",
          answer: "Поки ні. Офіційний сайт можна публікувати, але завантаження залишається недоступним, доки не буде готовий справжній файл публічного релізу."
        }
      ]
    },
    footer: {
      copy: "Персональна Windows-автоматизація з локальними налаштуваннями та прозорим керуванням.",
      privacy: "Конфіденційність",
      terms: "Умови"
    }
  }
};

Object.assign(translations.en.nav, {
  setup: "Setup"
});

translations.en.setup = {
  kicker: "Setup Guide",
  title: "Match the visible signal with RapidyCore.",
  copy: "Configure the in-game highlight color and match it with RapidyCore's external color trigger.",
  summary: "The game shows a visible color signal, RapidyCore detects that color externally from the screen, and then uses the configured normal Windows input action.",
  warning: "Trigger Bot reacts to the configured color in the scanned screen area. Any object or effect with the same or similar color, such as swords, visual effects, UI highlights, or particles, may also be detected.",
  note: "RapidyCore uses external screen-based color detection and normal Windows input.",
  imageLabel: "Guide image",
  steps: [
    {
      title: "Open the in-game settings",
      text: "Open the settings panel inside BladeBall and go to the area where visual signal options are configured.",
      caption: "BladeBall settings entry point.",
      alt: "BladeBall settings screen showing where to open settings"
    },
    {
      title: "Find the highlight color setting",
      text: "Find the highlight or color setting that controls the visible signal shown on screen.",
      caption: "Highlight color setting location.",
      alt: "BladeBall settings showing the highlight color option"
    },
    {
      title: "Set the highlight color",
      text: "Use the recommended color #2DFF00, or use your own color and make sure the same color is configured in RapidyCore.",
      caption: "Recommended starting color: #2DFF00.",
      alt: "Color picker showing the selected highlight color"
    },
    {
      title: "Match the color in RapidyCore",
      text: "Open RapidyCore Trigger Bot settings, set Target color to the same value, and adjust scan size or cooldown only if needed. Mouse4 or Mouse5 can help when keyboard combinations are limited by ghosting.",
      caption: "RapidyCore Trigger Bot color settings.",
      alt: "RapidyCore Trigger Bot settings window"
    },
    {
      title: "Compare inactive and active examples",
      text: "In the inactive example, no trigger signal should be detected. In the active example, the visible signal is present and RapidyCore can react using the configured normal Windows input.",
      caption: "Inactive versus active visible signal.",
      alt: "Inactive and active examples of the visible trigger signal",
      images: [
        {
          caption: "Inactive: no visible signal should be detected.",
          alt: "Inactive example without visible trigger signal"
        },
        {
          caption: "Active: visible signal is present.",
          alt: "Active example with visible trigger signal"
        }
      ]
    }
  ]
};

Object.assign(translations.ru.nav, {
  setup: "Настройка"
});

translations.ru.setup = {
  kicker: "Гайд по настройке",
  title: "Сопоставьте видимый сигнал с RapidyCore.",
  copy: "Настройте цвет подсветки в игре и укажите тот же цвет во внешнем цветовом триггере RapidyCore.",
  summary: "Игра показывает видимый цветовой сигнал, RapidyCore определяет этот цвет с экрана внешним способом, а затем использует настроенное обычное действие ввода Windows.",
  warning: "Trigger Bot реагирует на настроенный цвет в области сканирования экрана. Любой объект или эффект с таким же или похожим цветом, например мечи, визуальные эффекты, UI-подсветка или частицы, тоже может попасть под определение.",
  note: "RapidyCore использует внешнее определение цвета с экрана. Он не внедряется в Roblox, не читает память и не выполняет код внутри игры.",
  imageLabel: "Изображение гайда",
  steps: [
    {
      title: "Откройте настройки в игре",
      text: "Откройте панель настроек внутри BladeBall и перейдите к параметрам, где настраиваются визуальные сигналы.",
      caption: "Вход в настройки BladeBall.",
      alt: "Экран настроек BladeBall с местом открытия настроек"
    },
    {
      title: "Найдите настройку цвета подсветки",
      text: "Найдите параметр подсветки или цвета, который управляет видимым сигналом на экране.",
      caption: "Расположение настройки цвета подсветки.",
      alt: "Настройки BladeBall с параметром цвета подсветки"
    },
    {
      title: "Задайте цвет подсветки",
      text: "Используйте рекомендуемый цвет #2DFF00 или свой цвет, но убедитесь, что тот же цвет указан в RapidyCore.",
      caption: "Рекомендуемый стартовый цвет: #2DFF00.",
      alt: "Палитра выбора цвета с выбранным цветом подсветки"
    },
    {
      title: "Сопоставьте цвет в RapidyCore",
      text: "Откройте настройки Trigger Bot в RapidyCore, задайте Target color тем же значением и меняйте scan size или cooldown только при необходимости. Mouse4 или Mouse5 могут помочь, если сочетания клавиш ограничены ghosting.",
      caption: "Настройки цвета RapidyCore Trigger Bot.",
      alt: "Окно настроек RapidyCore Trigger Bot"
    },
    {
      title: "Сравните неактивный и активный примеры",
      text: "В неактивном примере сигнал триггера не должен определяться. В активном примере видимый сигнал присутствует, и RapidyCore может реагировать через настроенный обычный ввод Windows.",
      caption: "Неактивный и активный видимый сигнал.",
      alt: "Неактивный и активный примеры видимого сигнала триггера",
      images: [
        {
          caption: "Неактивно: видимый сигнал не должен определяться.",
          alt: "Неактивный пример без видимого сигнала триггера"
        },
        {
          caption: "Активно: видимый сигнал присутствует.",
          alt: "Активный пример с видимым сигналом триггера"
        }
      ]
    }
  ]
};

Object.assign(translations.uk.nav, {
  setup: "Налаштування"
});

translations.uk.setup = {
  kicker: "Гайд з налаштування",
  title: "Зіставте видимий сигнал із RapidyCore.",
  copy: "Налаштуйте колір підсвічування в грі та вкажіть той самий колір у зовнішньому кольоровому тригері RapidyCore.",
  summary: "Гра показує видимий кольоровий сигнал, RapidyCore визначає цей колір з екрана зовнішнім способом, а потім використовує налаштовану звичайну дію введення Windows.",
  warning: "Trigger Bot реагує на налаштований колір у зоні сканування екрана. Будь-який об'єкт або ефект із таким самим або схожим кольором, наприклад мечі, візуальні ефекти, UI-підсвітка чи частинки, також може бути виявлений.",
  note: "RapidyCore використовує зовнішнє визначення кольору з екрана. Він не впроваджується в Roblox, не читає пам'ять і не виконує код усередині гри.",
  imageLabel: "Зображення гайда",
  steps: [
    {
      title: "Відкрийте налаштування в грі",
      text: "Відкрийте панель налаштувань у BladeBall і перейдіть до параметрів, де налаштовуються візуальні сигнали.",
      caption: "Вхід до налаштувань BladeBall.",
      alt: "Екран налаштувань BladeBall із місцем відкриття налаштувань"
    },
    {
      title: "Знайдіть налаштування кольору підсвічування",
      text: "Знайдіть параметр підсвічування або кольору, який керує видимим сигналом на екрані.",
      caption: "Розташування налаштування кольору підсвічування.",
      alt: "Налаштування BladeBall із параметром кольору підсвічування"
    },
    {
      title: "Задайте колір підсвічування",
      text: "Використовуйте рекомендований колір #2DFF00 або власний колір, але переконайтеся, що той самий колір указано в RapidyCore.",
      caption: "Рекомендований стартовий колір: #2DFF00.",
      alt: "Палітра вибору кольору з вибраним кольором підсвічування"
    },
    {
      title: "Зіставте колір у RapidyCore",
      text: "Відкрийте налаштування Trigger Bot у RapidyCore, задайте Target color тим самим значенням і змінюйте scan size або cooldown лише за потреби. Mouse4 або Mouse5 можуть допомогти, якщо комбінації клавіш обмежені ghosting.",
      caption: "Налаштування кольору RapidyCore Trigger Bot.",
      alt: "Вікно налаштувань RapidyCore Trigger Bot"
    },
    {
      title: "Порівняйте неактивний і активний приклади",
      text: "У неактивному прикладі сигнал тригера не має визначатися. В активному прикладі видимий сигнал присутній, і RapidyCore може реагувати через налаштоване звичайне введення Windows.",
      caption: "Неактивний та активний видимий сигнал.",
      alt: "Неактивний та активний приклади видимого сигналу тригера",
      images: [
        {
          caption: "Неактивно: видимий сигнал не має визначатися.",
          alt: "Неактивний приклад без видимого сигналу тригера"
        },
        {
          caption: "Активно: видимий сигнал присутній.",
          alt: "Активний приклад із видимим сигналом тригера"
        }
      ]
    }
  ]
};

const previewContent = {
  en: {
    title: "Real interface snapshots.",
    copy: "Current screenshots from the desktop app: main control window, trigger settings, and diagnostics panel.",
    label: "Live app screenshot",
    items: [
      {
        title: "Main control window",
        text: "Overview of the main modes, hotkeys, and the active status area.",
        alt: "RapidyCore main control window screenshot",
        image: "assets/preview-main-panel.png"
      },
      {
        title: "Trigger settings",
        text: "Color trigger tuning, profiles, and process targeting in the current desktop build.",
        alt: "RapidyCore trigger settings screenshot",
        image: "assets/preview-trigger-settings.png"
      },
      {
        title: "Diagnostics panel",
        text: "Runtime details and troubleshooting information shown inside the diagnostics panel.",
        alt: "RapidyCore diagnostics panel screenshot",
        image: "assets/preview-diagnostics-panel.png"
      }
    ]
  },
  ru: {
    title: "Реальные снимки интерфейса.",
    copy: "Актуальные скриншоты десктопного приложения: главное окно управления, настройки триггера и панель диагностики.",
    label: "Скриншот приложения",
    items: [
      {
        title: "Главное окно управления",
        text: "Обзор основных режимов, хоткеев и активной статусной области.",
        alt: "Скриншот главного окна RapidyCore",
        image: "assets/preview-main-panel.png"
      },
      {
        title: "Настройки триггера",
        text: "Настройка цветового триггера, профилей и фильтра процесса в текущей десктопной версии.",
        alt: "Скриншот настроек триггера RapidyCore",
        image: "assets/preview-trigger-settings.png"
      },
      {
        title: "Панель диагностики",
        text: "Информация о работе приложения и данные для проверки в панели диагностики.",
        alt: "Скриншот панели диагностики RapidyCore",
        image: "assets/preview-diagnostics-panel.png"
      }
    ]
  },
  uk: {
    title: "Реальні знімки інтерфейсу.",
    copy: "Актуальні скриншоти десктопного застосунку: головне вікно керування, налаштування тригера та панель діагностики.",
    label: "Скриншот застосунку",
    items: [
      {
        title: "Головне вікно керування",
        text: "Огляд основних режимів, хоткеїв і активної статусної області.",
        alt: "Скриншот головного вікна RapidyCore",
        image: "assets/preview-main-panel.png"
      },
      {
        title: "Налаштування тригера",
        text: "Налаштування кольорового тригера, профілів і фільтра процесу в поточній десктопній версії.",
        alt: "Скриншот налаштувань тригера RapidyCore",
        image: "assets/preview-trigger-settings.png"
      },
      {
        title: "Панель діагностики",
        text: "Інформація про роботу програми та дані для перевірки на панелі діагностики.",
        alt: "Скриншот панелі діагностики RapidyCore",
        image: "assets/preview-diagnostics-panel.png"
      }
    ]
  }
};

const downloadContent = {
  en: {
    kicker: "Download",
    title: "RapidyCore v1.2.1 Beta is available.",
    copy: "Use the official Windows installer below. Privacy and Terms stay available before you install.",
    button: "Download installer",
    versionLabel: "Version",
    versionValue: "v1.2.1 Beta",
    typeLabel: "File type",
    typeValue: "Windows installer",
    note: "Beta build. Windows may ask for confirmation, and the installer still includes the optional Microsoft Defender exclusion step.",
    safetyItem: "Official website download includes the current beta installer.",
    faqAnswer: "Yes. The official Windows installer for RapidyCore v1.2.1 Beta is available in the download section.",
    unavailableToast: "Version 1.0 Beta is not available for download or install."
  },
  ru: {
    kicker: "Скачать",
    title: "RapidyCore v1.2.1 Beta доступна.",
    copy: "Ниже размещен официальный установщик для Windows. Privacy и Terms по-прежнему доступны перед установкой.",
    button: "Скачать установщик",
    versionLabel: "Версия",
    versionValue: "v1.2.1 Beta",
    typeLabel: "Тип файла",
    typeValue: "Установщик Windows",
    note: "Бета-сборка. Windows может запросить подтверждение, а в установщике по-прежнему есть опциональный шаг с исключением Microsoft Defender.",
    safetyItem: "На официальном сайте доступен текущий бета-установщик.",
    faqAnswer: "Да. Официальный установщик Windows для RapidyCore v1.2.1 Beta доступен в разделе скачивания.",
    unavailableToast: "Version 1.0 Beta пока недоступен для скачивания и установки."
  },
  uk: {
    kicker: "Завантаження",
    title: "RapidyCore v1.2.1 Beta доступна.",
    copy: "Нижче розміщено офіційний інсталятор для Windows. Privacy і Terms, як і раніше, доступні перед встановленням.",
    button: "Завантажити інсталятор",
    versionLabel: "Версія",
    versionValue: "v1.2.1 Beta",
    typeLabel: "Тип файла",
    typeValue: "Інсталятор Windows",
    note: "Бета-збірка. Windows може попросити підтвердження, а в інсталяторі як і раніше є опціональний крок із винятком Microsoft Defender.",
    safetyItem: "На офіційному сайті доступний поточний бета-інсталятор.",
    faqAnswer: "Так. Офіційний інсталятор Windows для RapidyCore v1.2.1 Beta доступний у розділі завантаження.",
    unavailableToast: "Version 1.0 Beta поки недоступний для завантаження та встановлення."
  }
};

const supportContent = {
  en: {
    kicker: "Support development",
    title: "Support RapidyCore",
    copy: "RapidyCore is free. If the project helps you, you can support development with a voluntary donation. Donations help with testing, bug fixes, documentation, website updates, and future improvements.",
    note: "Donations are optional and do not unlock extra features.",
    button: "Donate on Ko-fi"
  },
  ru: {
    kicker: "Поддержка разработки",
    title: "Поддержать RapidyCore",
    copy: "RapidyCore бесплатный. Если проект оказался полезным, вы можете добровольно поддержать разработку донатом. Донаты помогают с тестами, исправлениями, документацией, обновлением сайта и будущими улучшениями.",
    note: "Донаты добровольные и не открывают дополнительные функции.",
    button: "Поддержать на Ko-fi"
  },
  uk: {
    kicker: "Підтримка розробки",
    title: "Підтримати RapidyCore",
    copy: "RapidyCore безкоштовний. Якщо проєкт став корисним, ви можете добровільно підтримати розробку донатом. Донати допомагають із тестами, виправленнями, документацією, оновленням сайту та майбутніми покращеннями.",
    note: "Донати добровільні та не відкривають додаткові функції.",
    button: "Підтримати на Ko-fi"
  }
};

const changelogContent = {
  en: {
    copy: "Current website and app version: v1.2.1 Beta.",
    betaNotePrefix: "RapidyCore is currently in beta. Bugs are possible. Please report issues through Telegram: ",
    betaNoteSuffix: " or in the RapidyCore Telegram chat.",
    versions: [
      {
        label: "Latest",
        title: "Version 1.1 Beta",
        action: "download",
        cta: "Open download section",
        items: [
          "Mouse button hotkey support.",
          "Improved Trigger Bot configuration.",
          "Spam and AFK improvements.",
          "Website setup guide added.",
          "Still beta; bugs may exist."
        ]
      },
      {
        label: "Previous",
        title: "Version 1.0 Beta",
        action: "unavailable",
        cta: "Download not available",
        items: [
          "Initial public beta foundation.",
          "Trigger Bot external color detection.",
          "Spam LMB.",
          "AFK Space mode.",
          "Mini-status window.",
          "Basic diagnostics and installer."
        ]
      }
    ]
  },
  ru: {
    copy: "Текущая версия сайта и приложения: 1.1 Beta.",
    betaNotePrefix: "RapidyCore сейчас находится в бета-версии. Возможны ошибки. Сообщайте о проблемах через Telegram: ",
    betaNoteSuffix: " или в Telegram-чате RapidyCore.",
    versions: [
      {
        label: "Последняя",
        title: "Version 1.1 Beta",
        action: "download",
        cta: "Открыть раздел скачивания",
        items: [
          "Поддержка хоткеев на кнопках мыши.",
          "Улучшена настройка Trigger Bot.",
          "Улучшения Spam и AFK.",
          "На сайте добавлен гайд по настройке.",
          "Версия все еще бета; ошибки возможны."
        ]
      },
      {
        label: "Предыдущая",
        title: "Version 1.0 Beta",
        action: "unavailable",
        cta: "Скачивание недоступно",
        items: [
          "База первой публичной бета-версии.",
          "Внешнее определение цвета для Trigger Bot.",
          "Spam LMB.",
          "AFK Space mode.",
          "Мини-статус окно.",
          "Базовая диагностика и установщик."
        ]
      }
    ]
  },
  uk: {
    copy: "Поточна версія сайту й застосунку: 1.1 Beta.",
    betaNotePrefix: "RapidyCore зараз перебуває в бета-версії. Можливі помилки. Повідомляйте про проблеми через Telegram: ",
    betaNoteSuffix: " або в Telegram-чаті RapidyCore.",
    versions: [
      {
        label: "Остання",
        title: "Version 1.1 Beta",
        action: "download",
        cta: "Відкрити розділ завантаження",
        items: [
          "Підтримка хоткеїв на кнопках миші.",
          "Покращено налаштування Trigger Bot.",
          "Покращення Spam і AFK.",
          "На сайті додано гайд із налаштування.",
          "Версія все ще бета; помилки можливі."
        ]
      },
      {
        label: "Попередня",
        title: "Version 1.0 Beta",
        action: "unavailable",
        cta: "Завантаження недоступне",
        items: [
          "Основа першої публічної бета-версії.",
          "Зовнішнє визначення кольору для Trigger Bot.",
          "Spam LMB.",
          "AFK Space mode.",
          "Міні-статус вікно.",
          "Базова діагностика та інсталятор."
        ]
      }
    ]
  }
};

Object.assign(translations.en, {
  metaTitle: "RapidyCore - Blade Ball External Color Trigger Utility",
  metaDescription: "RapidyCore is a Windows utility for Blade Ball with external screen-based color trigger setup, mouse hotkeys, LMB spam, AFK Space mode, diagnostics and setup guides."
});

Object.assign(translations.en.hero, {
  kicker: "Official RapidyCore website for Blade Ball",
  title: "RapidyCore for Blade Ball",
  tagline: "A Windows utility for Blade Ball with external screen-based color triggers, mouse hotkeys, LMB spam, AFK Space mode and diagnostics.",
  points: [
    "Blade Ball external trigger setup",
    "Mouse button hotkeys",
    "Visible color signal workflow",
    "Local settings"
  ]
});

Object.assign(translations.en.features, {
  copy: "RapidyCore is a local Windows utility with a Blade Ball external color trigger setup, visible status, and user-controlled settings.",
  items: [
    {
      title: "Blade Ball external color trigger setup",
      text: "Match Blade Ball's visible highlight color with RapidyCore's external screen-based trigger workflow."
    },
    {
      title: "Mouse hotkeys",
      text: "Use regular keyboard keys or supported mouse buttons such as Mouse4 and Mouse5 for faster Blade Ball control."
    },
    {
      title: "Fast LMB spam",
      text: "Configure high-rate left mouse input with user-controlled timing and clear on-screen status."
    },
    {
      title: "AFK Space mode",
      text: "Run a simple Space press routine at a chosen interval for personal idle automation."
    },
    {
      title: "Target process filter",
      text: "Limit automation behavior to a selected Windows process so settings stay more predictable."
    },
    {
      title: "Mini-status window",
      text: "Keep compact feedback visible while the main window stays out of the way."
    },
    {
      title: "Diagnostics",
      text: "Review useful runtime details in a dedicated info panel while tuning your Blade Ball setup."
    },
    {
      title: "Installer options",
      text: "Optional setup choices are visible and user-controlled, including Microsoft Defender exclusion."
    }
  ]
});

Object.assign(translations.en.faq, {
  items: [
    {
      question: "What is RapidyCore?",
      answer: "RapidyCore is a Windows desktop utility with configurable hotkeys, external screen-based triggers, fast mouse input, AFK Space automation, and diagnostics."
    },
    {
      question: "Is RapidyCore for all Roblox games?",
      answer: "The current setup guide and external color trigger workflow are made for Blade Ball. RapidyCore uses external screen-based detection and normal Windows input."
    },
    {
      question: "Does RapidyCore need an account?",
      answer: "No. The current product positioning does not require user accounts, subscriptions, or sign-in flows."
    },
    {
      question: "Does it use cloud services?",
      answer: "No. The website and utility are presented around local configuration and local Windows behavior."
    },
    {
      question: "Can I use mouse buttons as hotkeys?",
      answer: "Yes. Supported mouse buttons such as Mouse4 and Mouse5 can be used as alternatives to keyboard hotkeys."
    },
    {
      question: "What is external color detection?",
      answer: "It means RapidyCore checks a visible Blade Ball highlight color from the screen and reacts according to user-configured settings."
    },
    {
      question: "Can it react to other same-colored effects?",
      answer: "Yes. Trigger Bot reacts to the configured color in the scanned screen area. Swords, effects, UI highlights, particles, or other objects with the same or similar color may also be detected."
    },
    {
      question: "Why can some keyboard combinations fail?",
      answer: "Some keyboards cannot physically report certain key combinations. This is called keyboard ghosting. Mouse4 or Mouse5 can be useful alternative hotkeys when a keyboard combo is unreliable."
    },
    {
      question: "Why does the installer offer Microsoft Defender exclusion?",
      answer: "The option is intended to be explicit and user-controlled. It is optional, and the website should describe it as an installer choice rather than a hidden behavior."
    },
    {
      question: "Is the download public yet?",
      answer: "The official Windows installer for RapidyCore v1.2.1 Beta is available in the download section."
    }
  ]
});

translations.en.setup = {
  kicker: "Blade Ball Setup Guide",
  title: "Match Blade Ball's visible signal with RapidyCore.",
  copy: "Configure Blade Ball's highlight color and match it with RapidyCore's external color trigger.",
  summary: "This guide is for Blade Ball. It explains how to match Blade Ball's visible highlight color with RapidyCore's external trigger color. RapidyCore reacts to a visible screen color, not internal game data.",
  warning: "Trigger Bot reacts to the configured color in the scanned screen area. Swords, effects, UI highlights, particles, or other objects with the same or similar color may also be detected.",
  note: "RapidyCore uses external screen-based color detection and normal Windows input.",
  imageLabel: "Blade Ball guide image",
  steps: [
    {
      title: "Open the Blade Ball settings",
      text: "Open the settings panel inside Blade Ball and go to the area where visible highlight options are configured.",
      caption: "Blade Ball settings entry point.",
      alt: "Blade Ball settings screen showing where to open settings"
    },
    {
      title: "Find the Blade Ball highlight color",
      text: "Find the highlight or color setting that controls the visible signal shown on screen in Blade Ball.",
      caption: "Blade Ball highlight color setting location.",
      alt: "Blade Ball settings showing the highlight color option"
    },
    {
      title: "Set the highlight color",
      text: "Use the recommended color #2DFF00, or use your own color and make sure the same color is configured in RapidyCore.",
      caption: "Recommended starting color: #2DFF00.",
      alt: "Color picker showing the selected Blade Ball highlight color"
    },
    {
      title: "Match the color in RapidyCore",
      text: "Open RapidyCore Trigger Bot settings, set Target color to the same value, and adjust scan size or cooldown only if needed. Mouse4 or Mouse5 can help when keyboard combinations are limited by ghosting.",
      caption: "RapidyCore Trigger Bot color settings.",
      alt: "RapidyCore Trigger Bot settings window"
    },
    {
      title: "Compare inactive and active examples",
      text: "In the inactive example, no visible trigger signal should be detected. In the active example, the visible signal is present and RapidyCore can react using the configured normal Windows input.",
      caption: "Inactive versus active visible signal.",
      alt: "Inactive and active examples of the visible trigger signal",
      images: [
        {
          caption: "Inactive: no visible signal should be detected.",
          alt: "Inactive example without visible trigger signal"
        },
        {
          caption: "Active: visible signal is present.",
          alt: "Active example with visible trigger signal"
        }
      ]
    }
  ]
};

Object.assign(downloadContent.en, {
  title: "RapidyCore v1.2.1 Beta is available.",
  note: "Beta build. Windows may ask for confirmation, and the installer still includes the optional Microsoft Defender exclusion step.",
  safetyItem: "Official website download includes the current beta installer.",
  faqAnswer: "The official Windows installer for RapidyCore v1.2.1 Beta is available in the download section."
});

downloadContent.en.freeNote = "RapidyCore is free. Donations are optional.";
downloadContent.ru.freeNote = "RapidyCore бесплатный. Донаты добровольные.";
downloadContent.uk.freeNote = "RapidyCore безкоштовний. Донати добровільні.";

translations.ru.footer.donate = "Донат";
translations.uk.footer.donate = "Донат";

downloadContent.en.freeNote = "RapidyCore is free. Donations are optional.";
downloadContent.ru.freeNote = "RapidyCore бесплатный. Донаты добровольные.";
downloadContent.uk.freeNote = "RapidyCore безкоштовний. Донати добровільні.";

translations.ru.footer.donate = "Донат";
translations.uk.footer.donate = "Донат";

Object.assign(changelogContent.en, {
  copy: "Current website and app version: v1.2.1 Beta."
});
changelogContent.en.versions[0].title = "Version 1.1 Beta";

Object.assign(translations.ru, {
  metaTitle: "RapidyCore для Blade Ball",
  metaDescription: "RapidyCore — Windows-утилита для Blade Ball с внешней настройкой цветового триггера, mouse hotkeys, LMB spam, AFK Space mode, диагностикой и гайдом по настройке."
});

Object.assign(translations.ru.hero, {
  kicker: "Официальный сайт RapidyCore для Blade Ball",
  title: "RapidyCore для Blade Ball",
  tagline: "Windows-утилита для Blade Ball с внешними экранными цвет-триггерами, mouse hotkeys, LMB spam, AFK Space mode и диагностикой.",
  points: [
    "Настройка внешнего триггера для Blade Ball",
    "Хоткеи на кнопках мыши",
    "Работа по видимому цветовому сигналу",
    "Локальные настройки"
  ]
});

translations.ru.setup = {
  kicker: "Гайд по настройке Blade Ball",
  title: "Сопоставьте видимый сигнал Blade Ball с RapidyCore.",
  copy: "Настройте цвет подсветки в Blade Ball и укажите такой же цвет во внешнем цвет-триггере RapidyCore.",
  summary: "Этот гайд сделан для Blade Ball. Он объясняет, как сопоставить видимый цвет подсветки Blade Ball с внешним trigger color в RapidyCore. RapidyCore реагирует на видимый цвет на экране, а не на внутренние данные игры.",
  warning: "Trigger Bot реагирует на настроенный цвет в области сканирования экрана. Мечи, эффекты, UI-подсветка, частицы или другие объекты с таким же или похожим цветом тоже могут определяться.",
  note: "RapidyCore использует внешнее определение цвета с экрана. Он не внедряется в Roblox, не читает память и не выполняет код внутри игры.",
  imageLabel: "Изображение гайда Blade Ball",
  steps: [
    {
      title: "Откройте настройки Blade Ball",
      text: "Откройте панель настроек внутри Blade Ball и перейдите к параметрам, где настраиваются видимые сигналы подсветки.",
      caption: "Точка входа в настройки Blade Ball.",
      alt: "Экран настроек Blade Ball с местом открытия настроек"
    },
    {
      title: "Найдите цвет подсветки Blade Ball",
      text: "Найдите параметр подсветки или цвета, который управляет видимым сигналом на экране в Blade Ball.",
      caption: "Расположение настройки цвета подсветки Blade Ball.",
      alt: "Настройки Blade Ball с параметром цвета подсветки"
    },
    {
      title: "Задайте цвет подсветки",
      text: "Используйте рекомендуемый цвет #2DFF00 или свой цвет, но убедитесь, что тот же цвет указан в RapidyCore.",
      caption: "Рекомендуемый стартовый цвет: #2DFF00.",
      alt: "Палитра выбора цвета с выбранным цветом подсветки Blade Ball"
    },
    {
      title: "Сопоставьте цвет в RapidyCore",
      text: "Откройте настройки Trigger Bot в RapidyCore, задайте Target color тем же значением и меняйте scan size или cooldown только при необходимости. Mouse4 или Mouse5 могут помочь, если сочетания клавиш ограничены ghosting.",
      caption: "Настройки цвета RapidyCore Trigger Bot.",
      alt: "Окно настроек RapidyCore Trigger Bot"
    },
    {
      title: "Сравните неактивный и активный примеры",
      text: "В неактивном примере видимый сигнал не должен определяться. В активном примере видимый сигнал присутствует, и RapidyCore может реагировать через настроенный обычный Windows input.",
      caption: "Неактивный и активный видимый сигнал.",
      alt: "Неактивный и активный примеры видимого сигнала триггера",
      images: [
        {
          caption: "Неактивно: видимый сигнал не должен определяться.",
          alt: "Неактивный пример без видимого сигнала триггера"
        },
        {
          caption: "Активно: видимый сигнал присутствует.",
          alt: "Активный пример с видимым сигналом триггера"
        }
      ]
    }
  ]
};

Object.assign(translations.ru.faq, {
  items: [
    {
      question: "Что такое RapidyCore?",
      answer: "RapidyCore — это Windows-утилита с настраиваемыми хоткеями, внешними экранными триггерами, быстрым вводом мыши, AFK Space и диагностикой."
    },
    {
      question: "RapidyCore подходит для всех игр Roblox?",
      answer: "Текущий гайд и сценарий внешнего цвет-триггера сделаны для Blade Ball. RapidyCore использует определение цвета с экрана и обычный Windows input, поэтому не читает память Roblox и не внедряет код в игру."
    },
    {
      question: "Нужен ли аккаунт?",
      answer: "Нет. Текущее позиционирование продукта не требует аккаунтов, подписок или входа."
    },
    {
      question: "Используются ли облачные сервисы?",
      answer: "Нет. Сайт и утилита ориентированы на локальную конфигурацию и локальное поведение Windows."
    },
    {
      question: "Можно ли использовать кнопки мыши как хоткеи?",
      answer: "Да. Поддерживаемые кнопки мыши, например Mouse4 и Mouse5, можно использовать вместо клавиатурных хоткеев."
    },
    {
      question: "Что такое внешнее определение цвета?",
      answer: "Это значит, что RapidyCore проверяет видимый цвет подсветки Blade Ball на экране и реагирует согласно пользовательским настройкам."
    },
    {
      question: "Может ли он реагировать на другие объекты того же цвета?",
      answer: "Да. Trigger Bot реагирует на настроенный цвет в области сканирования экрана. Мечи, эффекты, UI-подсветка, частицы или другие объекты с таким же или похожим цветом тоже могут определяться."
    },
    {
      question: "Почему некоторые сочетания клавиш могут не срабатывать?",
      answer: "Некоторые клавиатуры физически не могут передавать отдельные комбинации. Это называется ghosting. Mouse4 или Mouse5 могут быть полезной альтернативой."
    },
    {
      question: "Почему установщик предлагает исключение Microsoft Defender?",
      answer: "Эта опция должна оставаться явной и управляемой пользователем. Она необязательна и описывается как выбор в установщике."
    },
    {
      question: "Скачивание уже публичное?",
      answer: "Официальный установщик Windows для RapidyCore v1.2.1 Beta доступен в разделе скачивания."
    }
  ]
});

Object.assign(downloadContent.ru, {
  title: "RapidyCore v1.2.1 Beta для Blade Ball",
  note: "Бета-сборка для текущего сценария Blade Ball. Windows может запросить подтверждение, а в установщике по-прежнему есть опциональный шаг с исключением Microsoft Defender.",
  safetyItem: "На официальном сайте доступен текущий бета-установщик для Blade Ball.",
  faqAnswer: "Официальный установщик Windows для RapidyCore v1.2.1 Beta доступен в разделе скачивания."
});

Object.assign(changelogContent.ru, {
  copy: "Текущая версия сайта и приложения: RapidyCore v1.2.1 Beta."
});
changelogContent.ru.versions[0].title = "Версия v1.2.1 Beta";

Object.assign(translations.uk, {
  metaTitle: "RapidyCore для Blade Ball",
  metaDescription: "RapidyCore — Windows-утиліта для Blade Ball із зовнішнім налаштуванням color-тригера, mouse hotkeys, LMB spam, AFK Space mode, діагностикою та гайдом із налаштування."
});

Object.assign(translations.uk.hero, {
  kicker: "Офіційний сайт RapidyCore для Blade Ball",
  title: "RapidyCore для Blade Ball",
  tagline: "Windows-утиліта для Blade Ball із зовнішніми екранними color-тригерами, mouse hotkeys, LMB spam, AFK Space mode та діагностикою.",
  points: [
    "Налаштування зовнішнього тригера для Blade Ball",
    "Хоткеї на кнопках миші",
    "Робота за видимим кольоровим сигналом",
    "Локальні налаштування"
  ]
});

translations.uk.setup = {
  kicker: "Гайд із налаштування Blade Ball",
  title: "Зіставте видимий сигнал Blade Ball із RapidyCore.",
  copy: "Налаштуйте колір підсвітки в Blade Ball і вкажіть такий самий колір у зовнішньому color-тригері RapidyCore.",
  summary: "Цей гайд зроблено для Blade Ball. Він пояснює, як зіставити видимий колір підсвітки Blade Ball із зовнішнім trigger color у RapidyCore. RapidyCore реагує на видимий колір на екрані, а не на внутрішні дані гри.",
  warning: "Trigger Bot реагує на налаштований колір у зоні сканування екрана. Мечі, ефекти, UI-підсвітка, частинки або інші об'єкти з таким самим чи схожим кольором також можуть визначатися.",
  note: "RapidyCore використовує зовнішнє визначення кольору з екрана. Він не впроваджується в Roblox, не читає пам'ять і не виконує код усередині гри.",
  imageLabel: "Зображення гайда Blade Ball",
  steps: [
    {
      title: "Відкрийте налаштування Blade Ball",
      text: "Відкрийте панель налаштувань у Blade Ball і перейдіть до параметрів, де налаштовуються видимі сигнали підсвітки.",
      caption: "Точка входу до налаштувань Blade Ball.",
      alt: "Екран налаштувань Blade Ball із місцем відкриття налаштувань"
    },
    {
      title: "Знайдіть колір підсвітки Blade Ball",
      text: "Знайдіть параметр підсвітки або кольору, який керує видимим сигналом на екрані в Blade Ball.",
      caption: "Розташування налаштування кольору підсвітки Blade Ball.",
      alt: "Налаштування Blade Ball із параметром кольору підсвітки"
    },
    {
      title: "Задайте колір підсвітки",
      text: "Використовуйте рекомендований колір #2DFF00 або власний колір, але переконайтеся, що той самий колір указано в RapidyCore.",
      caption: "Рекомендований стартовий колір: #2DFF00.",
      alt: "Палітра вибору кольору з вибраним кольором підсвітки Blade Ball"
    },
    {
      title: "Зіставте колір у RapidyCore",
      text: "Відкрийте налаштування Trigger Bot у RapidyCore, задайте Target color тим самим значенням і змінюйте scan size або cooldown лише за потреби. Mouse4 або Mouse5 можуть допомогти, якщо комбінації клавіш обмежені ghosting.",
      caption: "Налаштування кольору RapidyCore Trigger Bot.",
      alt: "Вікно налаштувань RapidyCore Trigger Bot"
    },
    {
      title: "Порівняйте неактивний і активний приклади",
      text: "У неактивному прикладі видимий сигнал не має визначатися. В активному прикладі видимий сигнал присутній, і RapidyCore може реагувати через налаштований звичайний Windows input.",
      caption: "Неактивний та активний видимий сигнал.",
      alt: "Неактивний та активний приклади видимого сигналу тригера",
      images: [
        {
          caption: "Неактивно: видимий сигнал не має визначатися.",
          alt: "Неактивний приклад без видимого сигналу тригера"
        },
        {
          caption: "Активно: видимий сигнал присутній.",
          alt: "Активний приклад із видимим сигналом тригера"
        }
      ]
    }
  ]
};

Object.assign(translations.uk.faq, {
  items: [
    {
      question: "Що таке RapidyCore?",
      answer: "RapidyCore — це Windows-утиліта з налаштовуваними хоткеями, зовнішніми екранними тригерами, швидким введенням миші, AFK Space та діагностикою."
    },
    {
      question: "RapidyCore підходить для всіх ігор Roblox?",
      answer: "Поточний гайд і сценарій зовнішнього color-тригера зроблені для Blade Ball. RapidyCore використовує визначення кольору з екрана та звичайний Windows input, тому не читає пам'ять Roblox і не впроваджує код у гру."
    },
    {
      question: "Чи потрібен акаунт?",
      answer: "Ні. Поточне позиціонування продукту не потребує акаунтів, підписок або входу."
    },
    {
      question: "Чи використовуються хмарні сервіси?",
      answer: "Ні. Сайт і утиліта орієнтовані на локальну конфігурацію та локальну поведінку Windows."
    },
    {
      question: "Чи можна використовувати кнопки миші як хоткеї?",
      answer: "Так. Підтримувані кнопки миші, наприклад Mouse4 і Mouse5, можна використовувати замість клавіатурних хоткеїв."
    },
    {
      question: "Що таке зовнішнє визначення кольору?",
      answer: "Це означає, що RapidyCore перевіряє видимий колір підсвітки Blade Ball на екрані та реагує згідно з користувацькими налаштуваннями."
    },
    {
      question: "Чи може він реагувати на інші об'єкти того самого кольору?",
      answer: "Так. Trigger Bot реагує на налаштований колір у зоні сканування екрана. Мечі, ефекти, UI-підсвітка, частинки або інші об'єкти з таким самим чи схожим кольором також можуть визначатися."
    },
    {
      question: "Чому деякі комбінації клавіш можуть не спрацьовувати?",
      answer: "Деякі клавіатури фізично не можуть передавати окремі комбінації. Це називається ghosting. Mouse4 або Mouse5 можуть бути корисною альтернативою."
    },
    {
      question: "Чому інсталятор пропонує виняток Microsoft Defender?",
      answer: "Ця опція має залишатися явною та керованою користувачем. Вона необов'язкова і описується як вибір в інсталяторі."
    },
    {
      question: "Завантаження вже публічне?",
      answer: "Офіційний інсталятор Windows для RapidyCore v1.2.1 Beta доступний у розділі завантаження."
    }
  ]
});

Object.assign(downloadContent.uk, {
  title: "RapidyCore v1.2.1 Beta для Blade Ball",
  note: "Бета-збірка для поточного сценарію Blade Ball. Windows може попросити підтвердження, а в інсталяторі, як і раніше, є опціональний крок із винятком Microsoft Defender.",
  safetyItem: "На офіційному сайті доступний поточний бета-інсталятор для Blade Ball.",
  faqAnswer: "Офіційний інсталятор Windows для RapidyCore v1.2.1 Beta доступний у розділі завантаження."
});

Object.assign(changelogContent.uk, {
  copy: "Поточна версія сайту й застосунку: RapidyCore v1.2.1 Beta."
});
changelogContent.uk.versions[0].title = "Версія v1.2.1 Beta";

Object.assign(previewContent.en, {
  copy: "Current screenshots from the desktop app: settings, trigger configuration, and live diagnostics.",
  items: [
    {
      title: "Settings workspace",
      text: "Settings, target process filtering, session protection, and the profile import/export controls.",
      alt: "RapidyCore settings workspace screenshot",
      image: "assets/preview-main-panel.png"
    },
    {
      title: "Trigger settings",
      text: "Trigger hotkeys, target color, scan size, cooldown timing, and the smart trigger option in the current build.",
      alt: "RapidyCore trigger settings screenshot",
      image: "assets/preview-trigger-settings.png"
    },
    {
      title: "Diagnostics panel",
      text: "Live trigger state, capture state, match state, input state, and timing diagnostics for troubleshooting.",
      alt: "RapidyCore diagnostics panel screenshot",
      image: "assets/preview-diagnostics-panel.png"
    }
  ]
});

Object.assign(previewContent.ru, {
  copy: "Актуальные скриншоты десктопного приложения: настройки, конфигурация триггера и живая диагностика.",
  items: [
    {
      title: "Раздел настроек",
      text: "Settings, target process filtering, session protection, and the profile import/export controls.",
      alt: "Скриншот раздела настроек RapidyCore",
      image: "assets/preview-main-panel.png"
    },
    {
      title: "Настройки триггера",
      text: "Горячие клавиши триггера, целевой цвет, размер сканирования, пауза и опция smart trigger в текущей сборке.",
      alt: "Скриншот настроек триггера RapidyCore",
      image: "assets/preview-trigger-settings.png"
    },
    {
      title: "Панель диагностики",
      text: "Состояние триггера, захвата, совпадения, ввода и тайминговая диагностика для проверки поведения.",
      alt: "Скриншот панели диагностики RapidyCore",
      image: "assets/preview-diagnostics-panel.png"
    }
  ]
});

Object.assign(previewContent.uk, {
  copy: "Актуальні скриншоти десктопного застосунку: налаштування, конфігурація тригера та жива діагностика.",
  items: [
    {
      title: "Розділ налаштувань",
      text: "Settings, target process filtering, session protection, and the profile import/export controls.",
      alt: "Скриншот розділу налаштувань RapidyCore",
      image: "assets/preview-main-panel.png"
    },
    {
      title: "Налаштування тригера",
      text: "Гарячі клавіші тригера, цільовий колір, розмір сканування, пауза та опція smart trigger у поточній збірці.",
      alt: "Скриншот налаштувань тригера RapidyCore",
      image: "assets/preview-trigger-settings.png"
    },
    {
      title: "Панель діагностики",
      text: "Стан тригера, захоплення, збігу, вводу та таймінгова діагностика для перевірки поведінки.",
      alt: "Скриншот панелі діагностики RapidyCore",
      image: "assets/preview-diagnostics-panel.png"
    }
  ]
});

Object.assign(downloadContent.en, {
  title: "RapidyCore v1.2.1 Beta is available.",
  note: "Beta build. A practical LMB Spam starting point is 4-6 ms. Windows may ask for confirmation, and the installer still includes the optional Microsoft Defender exclusion step.",
  safetyItem: "Official website download includes the current beta installer.",
  faqAnswer: "Yes. The official Windows installer for RapidyCore v1.2.1 Beta is available in the download section."
});

Object.assign(downloadContent.ru, {
  title: "RapidyCore v1.2.1 Beta доступна.",
  note: "Бета-сборка. Для Spam ЛКМ практичная стартовая настройка — 4-6 мс. Windows может запросить подтверждение, а в установщике по-прежнему есть опциональный шаг с исключением Microsoft Defender.",
  safetyItem: "На официальном сайте доступен текущий бета-установщик.",
  faqAnswer: "Да. Официальный установщик Windows для RapidyCore v1.2.1 Beta доступен в разделе скачивания."
});

Object.assign(downloadContent.uk, {
  title: "RapidyCore v1.2.1 Beta доступна.",
  note: "Бета-збірка. Для Spam ЛКМ практичний стартовий діапазон — 4-6 мс. Windows може попросити підтвердження, а в інсталяторі, як і раніше, є опціональний крок із винятком Microsoft Defender.",
  safetyItem: "На офіційному сайті доступний поточний бета-інсталятор.",
  faqAnswer: "Так. Офіційний інсталятор Windows для RapidyCore v1.2.1 Beta доступний у розділі завантаження."
});

Object.assign(changelogContent.en, {
  copy: "Current website and app version: v1.2.1 Beta.",
  betaNotePrefix: "RapidyCore is currently in beta. Bugs are possible. Follow us on Telegram: ",
  betaNoteSuffix: "."
});
changelogContent.en.versions[0].title = "Version 1.1 Beta";

Object.assign(changelogContent.ru, {
  copy: "Текущая версия сайта и приложения: 1.1 Beta.",
  betaNotePrefix: "RapidyCore сейчас находится в бета-версии. Возможны ошибки. Следите за обновлениями в Telegram: ",
  betaNoteSuffix: "."
});
changelogContent.ru.versions[0].title = "Version 1.1 Beta";

Object.assign(changelogContent.uk, {
  copy: "Поточна версія сайту й застосунку: 1.1 Beta.",
  betaNotePrefix: "RapidyCore зараз перебуває в бета-версії. Можливі помилки. Слідкуйте за оновленнями в Telegram: ",
  betaNoteSuffix: "."
});
changelogContent.uk.versions[0].title = "Version 1.1 Beta";

translations.en.faq.items.splice(translations.en.faq.items.length - 1, 0, {
  question: "What delay is a good starting point for LMB Spam?",
  answer: "A practical starting point is 4-6 ms. Lower values may not always register reliably and may increase load."
});

translations.ru.faq.items.splice(translations.ru.faq.items.length - 1, 0, {
  question: "Какая задержка подходит для старта Spam ЛКМ?",
  answer: "Практичная стартовая настройка — 4-6 мс. Более низкие значения не всегда стабильно засчитываются и могут повышать нагрузку."
});

translations.uk.faq.items.splice(translations.uk.faq.items.length - 1, 0, {
  question: "Яка затримка підходить для старту Spam ЛКМ?",
  answer: "Практичний стартовий діапазон — 4-6 мс. Нижчі значення не завжди стабільно зараховуються та можуть підвищувати навантаження."
});

const versionHistoryContent = {
  en: {
    title: "Version history.",
    copy: "Current website and app version: v1.2.1 Beta.",
    versions: [
      {
        label: "Latest",
        title: "Version v1.2.1 Beta",
        action: "download",
        cta: "Install v1.2.1 Beta",
        items: [
          "Compatibility update.",
          "Fixed VC++ Runtime dependency issue.",
          "Rebuilt RapidyCore and installer with static MSVC runtime.",
          "RapidyCore should no longer require users to manually install Microsoft Visual C++ Redistributable just to open the app or installer.",
          "General compatibility cleanup."
        ]
      },
      {
        label: "Previous beta",
        title: "Version v1.2 Beta",
        action: "versions",
        cta: "View old versions",
        items: [
          "Main v1.2 feature/stability update.",
          "Improved Trigger Bot color matching.",
          "Reduced false positives from unrelated colors such as yellow and orange.",
          "Added Mini Status lock / click-through mode.",
          "Added Reset position for Mini Status.",
          "Added AFK activity indicator to Mini Status.",
          "Removed Coordinate Mode because it was unreliable in real gameplay.",
          "General stability cleanup."
        ]
      },
      {
        label: "Older beta",
        title: "Version v1.1 Beta",
        action: "versions",
        cta: "View old versions",
        items: [
          "Previous beta version.",
          "Includes core RapidyCore features: Trigger Bot, Trigger Bot #2, LMB Spam, AFK Space mode, mouse hotkeys, target process filter, diagnostics, and mini status window.",
          "Kept available for users who need the older build."
        ]
      }
    ]
  },
  ru: {
    title: "История версий.",
    copy: "Текущая версия сайта и приложения: v1.2.1 Beta.",
    versions: [
      {
        label: "Актуальная",
        title: "Версия v1.2.1 Beta",
        action: "download",
        cta: "Установить v1.2.1 Beta",
        items: [
          "Обновление совместимости.",
          "Исправлена проблема зависимости от VC++ Runtime.",
          "RapidyCore и установщик пересобраны со статическим MSVC runtime.",
          "RapidyCore больше не должен требовать ручной установки Microsoft Visual C++ Redistributable только для запуска приложения или установщика.",
          "Общая чистка совместимости."
        ]
      },
      {
        label: "Предыдущая beta-версия",
        title: "Версия v1.2 Beta",
        action: "versions",
        cta: "Посмотреть старые версии",
        items: [
          "Основное обновление функций и стабильности v1.2.",
          "Улучшено распознавание цвета в Trigger Bot.",
          "Уменьшены ложные срабатывания от посторонних цветов, например желтого и оранжевого.",
          "Добавлена блокировка Mini Status / режим click-through.",
          "Добавлен сброс позиции Mini Status.",
          "Добавлен индикатор активности AFK в Mini Status.",
          "Coordinate Mode удален, потому что был ненадежен в реальной игре.",
          "Общая чистка стабильности."
        ]
      },
      {
        label: "Старая beta-версия",
        title: "Версия v1.1 Beta",
        action: "versions",
        cta: "Посмотреть старые версии",
        items: [
          "Предыдущая beta-версия.",
          "Содержит основные функции RapidyCore: Trigger Bot, Trigger Bot #2, LMB Spam, AFK Space mode, хоткеи мыши, фильтр целевого процесса, диагностику и окно Mini Status.",
          "Оставлена доступной для пользователей, которым нужна старая сборка."
        ]
      }
    ]
  },
  uk: {
    title: "Історія версій.",
    copy: "Поточна версія сайту та застосунку: v1.2.1 Beta.",
    versions: [
      {
        label: "Актуальна",
        title: "Версія v1.2.1 Beta",
        action: "download",
        cta: "Встановити v1.2.1 Beta",
        items: [
          "Оновлення сумісності.",
          "Виправлено проблему залежності від VC++ Runtime.",
          "RapidyCore та інсталятор перескладені зі статичним MSVC runtime.",
          "RapidyCore більше не повинен вимагати ручного встановлення Microsoft Visual C++ Redistributable лише для запуску застосунку або інсталятора.",
          "Загальне очищення сумісності."
        ]
      },
      {
        label: "Попередня beta-версія",
        title: "Версія v1.2 Beta",
        action: "versions",
        cta: "Переглянути старі версії",
        items: [
          "Основне оновлення функцій і стабільності v1.2.",
          "Покращено розпізнавання кольору в Trigger Bot.",
          "Зменшено хибні спрацювання від сторонніх кольорів, наприклад жовтого та помаранчевого.",
          "Додано блокування Mini Status / режим click-through.",
          "Додано скидання позиції Mini Status.",
          "Додано індикатор активності AFK у Mini Status.",
          "Coordinate Mode видалено, тому що він був ненадійним у реальній грі.",
          "Загальне очищення стабільності."
        ]
      },
      {
        label: "Стара beta-версія",
        title: "Версія v1.1 Beta",
        action: "versions",
        cta: "Переглянути старі версії",
        items: [
          "Попередня beta-версія.",
          "Містить основні функції RapidyCore: Trigger Bot, Trigger Bot #2, LMB Spam, AFK Space mode, хоткеї миші, фільтр цільового процесу, діагностику та вікно Mini Status.",
          "Залишена доступною для користувачів, яким потрібна стара збірка."
        ]
      }
    ]
  }
};

const versionsContent = {
  en: {
    kicker: "Old versions",
    title: "Available builds.",
    copy: "Previous RapidyCore builds are available here. The latest v1.2.1 Beta is available in the main download section above.",
    entries: [
      {
        badge: "Previous beta",
        title: "Beta 1.2",
        text: "Main v1.2 feature/stability update.",
        href: releaseDownloads.previous,
        button: "Download v1.2 Beta"
      },
      {
        badge: "Older beta",
        title: "Beta 1.1",
        text: "Kept available for users who need the older build.",
        href: releaseDownloads.older,
        button: "Download v1.1 Beta"
      }
    ]
  },
  ru: {
    kicker: "Старые версии",
    title: "Доступные сборки.",
    copy: "Здесь доступны предыдущие сборки RapidyCore. Актуальная v1.2.1 Beta находится в основном разделе загрузки выше.",
    entries: [
      {
        badge: "Предыдущая beta-версия",
        title: "Beta 1.2",
        text: "Основное обновление функций и стабильности v1.2.",
        href: releaseDownloads.previous,
        button: "Скачать v1.2 Beta"
      },
      {
        badge: "Старая beta-версия",
        title: "Beta 1.1",
        text: "Оставлена доступной для пользователей, которым нужна старая сборка.",
        href: releaseDownloads.older,
        button: "Скачать v1.1 Beta"
      }
    ]
  },
  uk: {
    kicker: "Старі версії",
    title: "Доступні збірки.",
    copy: "Тут доступні попередні збірки RapidyCore. Актуальна v1.2.1 Beta знаходиться в основному розділі завантаження вище.",
    entries: [
      {
        badge: "Попередня beta-версія",
        title: "Beta 1.2",
        text: "Основне оновлення функцій і стабільності v1.2.",
        href: releaseDownloads.previous,
        button: "Завантажити v1.2 Beta"
      },
      {
        badge: "Стара beta-версія",
        title: "Beta 1.1",
        text: "Залишена доступною для користувачів, яким потрібна стара збірка.",
        href: releaseDownloads.older,
        button: "Завантажити v1.1 Beta"
      }
    ]
  }
};

Object.assign(translations.en, {
  metaTitle: "RapidyCore - Blade Ball Free Windows Utility",
  metaDescription: "RapidyCore is a free Windows utility for Blade Ball using external screen-based color detection and normal Windows input."
});

Object.assign(translations.en.hero, {
  tagline: "RapidyCore is a free Windows utility for Blade Ball using external screen-based color detection and normal Windows input."
});

Object.assign(downloadContent.en, {
  title: "RapidyCore v1.2.1 Beta is available.",
  button: "Install v1.2.1 Beta",
  versionValue: "v1.2.1 Beta",
  note: "Beta compatibility update. RapidyCore and the installer were rebuilt with static MSVC runtime to fix the VC++ Runtime dependency issue.",
  safetyItem: "Official website download includes the current v1.2.1 Beta installer.",
  faqAnswer: "Yes. The official Windows installer for RapidyCore v1.2.1 Beta is available in the download section.",
  oldVersionsButton: "View old versions"
});

Object.assign(downloadContent.ru, {
  title: "RapidyCore v1.2.1 Beta доступна.",
  button: "Установить v1.2.1 Beta",
  versionValue: "v1.2.1 Beta",
  note: "Beta-обновление совместимости. RapidyCore и установщик пересобраны со статическим MSVC runtime, чтобы исправить проблему зависимости от VC++ Runtime.",
  safetyItem: "На официальном сайте доступен текущий установщик v1.2.1 Beta.",
  faqAnswer: "Да. Официальный установщик Windows для RapidyCore v1.2.1 Beta доступен в разделе скачивания.",
  oldVersionsButton: "Посмотреть старые версии"
});

Object.assign(downloadContent.uk, {
  title: "RapidyCore v1.2.1 Beta доступна.",
  button: "Встановити v1.2.1 Beta",
  versionValue: "v1.2.1 Beta",
  note: "Beta-оновлення сумісності. RapidyCore та інсталятор перескладені зі статичним MSVC runtime, щоб виправити проблему залежності від VC++ Runtime.",
  safetyItem: "На офіційному сайті доступний поточний інсталятор v1.2.1 Beta.",
  faqAnswer: "Так. Офіційний інсталятор Windows для RapidyCore v1.2.1 Beta доступний у розділі завантаження.",
  oldVersionsButton: "Переглянути старі версії"
});

Object.assign(changelogContent.en, {
  copy: versionHistoryContent.en.copy,
  versions: versionHistoryContent.en.versions
});

["en", "ru", "uk"].forEach((lang) => {
  translations[lang].changelog.title = versionHistoryContent[lang].title;
  Object.assign(changelogContent[lang], {
    copy: versionHistoryContent[lang].copy,
    versions: versionHistoryContent[lang].versions
  });
});

previewContent.en.items[0].text = "Settings, target process filtering, session protection, and the profile import/export controls.";
previewContent.ru.items[0].text = "Settings, target process filtering, session protection, and the profile import/export controls.";
previewContent.uk.items[0].text = "Settings, target process filtering, session protection, and the profile import/export controls.";

const telegramLinksByLang = {
  en: [
    { href: "https://t.me/rapidycore", label: "channel" },
    { href: "https://t.me/+GZCNSRBBcKJjMDRi", label: "chat" },
    { href: "https://t.me/boost/rapidycore", label: "boost" }
  ],
  ru: [
    { href: "https://t.me/rapidycore", label: "канал" },
    { href: "https://t.me/+GZCNSRBBcKJjMDRi", label: "чат" },
    { href: "https://t.me/boost/rapidycore", label: "boost" }
  ],
  uk: [
    { href: "https://t.me/rapidycore", label: "канал" },
    { href: "https://t.me/+GZCNSRBBcKJjMDRi", label: "чат" },
    { href: "https://t.me/boost/rapidycore", label: "boost" }
  ]
};

const accentCycle = ["cyan", "green", "violet", "cyan", "green", "violet", "cyan", "green"];
const guideImageGroups = [
  ["assets/guide-game-settings.png"],
  ["assets/guide-highlight-setting.png"],
  ["assets/guide-color-picker.png"],
  ["assets/guide-rapidycore-trigger.png"],
  ["assets/guide-inactive-example.png", "assets/guide-active-example.png"]
];
const languageFadeMs = 120;
const languageSettleMs = 220;
const ENABLE_ICE_SCROLL = true;
const ICE_SCROLL = {
  wheelMultiplier: 0.95,
  ease: 0.11,
  stopThreshold: 0.55,
  maxWheelDelta: 130,
  anchorDuration: 860,
  headerOffset: 88
};
const revealSelector = [
  ".section-heading",
  ".feature-card",
  ".preview-card",
  ".guide-summary",
  ".guide-warning",
  ".guide-step",
  ".guide-note",
  ".steps li",
  ".safety-layout > *",
  ".safety-list li",
  ".download-layout > *",
  ".version-card",
  ".changelog-item",
  ".changelog-note",
  ".faq-item",
  ".footer-inner"
].join(", ");

const reducedMotionQuery = window.matchMedia
  ? window.matchMedia("(prefers-reduced-motion: reduce)")
  : { matches: false };

let currentLanguage = "en";
let languageTransitionTimer = 0;
let languageFallbackTimer = 0;
let languageChangeToken = 0;
let revealObserver;
let iceTargetY = 0;
let iceCurrentY = 0;
let iceRafId = 0;
let anchorRafId = 0;
let isIceAnimating = false;
let isAnchorAnimating = false;
let isProgrammaticScroll = false;
let toastTimer = 0;

function getTranslation(lang, path) {
  return path.split(".").reduce((value, key) => {
    if (value && Object.prototype.hasOwnProperty.call(value, key)) {
      return value[key];
    }
    return undefined;
  }, translations[lang]);
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

function prefersReducedMotion() {
  return reducedMotionQuery.matches;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getLocalizedContent(map, lang) {
  return map[lang] ?? map.en;
}

function setNodeText(selector, value) {
  const node = document.querySelector(selector);

  if (node && typeof value === "string") {
    node.textContent = value;
  }
}

function maxScrollY() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function canUseIceScroll() {
  if (!ENABLE_ICE_SCROLL || prefersReducedMotion()) {
    return false;
  }

  if (!window.matchMedia) {
    return false;
  }

  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function normalizeWheelDelta(event) {
  let delta = event.deltaY;

  if (event.deltaMode === 1) {
    delta *= 18;
  } else if (event.deltaMode === 2) {
    delta *= window.innerHeight * 0.85;
  }

  delta = clamp(delta, -ICE_SCROLL.maxWheelDelta, ICE_SCROLL.maxWheelDelta);
  return delta * ICE_SCROLL.wheelMultiplier;
}

function setProgrammaticScroll(y) {
  isProgrammaticScroll = true;
  window.scrollTo(0, y);
  window.requestAnimationFrame(() => {
    isProgrammaticScroll = false;
  });
}

function syncIcePosition() {
  iceCurrentY = clamp(window.scrollY, 0, maxScrollY());
  iceTargetY = iceCurrentY;
}

function cancelIceAnimation() {
  if (iceRafId) {
    window.cancelAnimationFrame(iceRafId);
    iceRafId = 0;
  }

  if (anchorRafId) {
    window.cancelAnimationFrame(anchorRafId);
    anchorRafId = 0;
  }

  isIceAnimating = false;
  isAnchorAnimating = false;
  syncIcePosition();
}

function animateIceScroll() {
  const distance = iceTargetY - iceCurrentY;

  if (Math.abs(distance) <= ICE_SCROLL.stopThreshold) {
    iceCurrentY = iceTargetY;
    setProgrammaticScroll(iceCurrentY);
    isIceAnimating = false;
    iceRafId = 0;
    return;
  }

  iceCurrentY += distance * ICE_SCROLL.ease;
  setProgrammaticScroll(iceCurrentY);
  iceRafId = window.requestAnimationFrame(animateIceScroll);
}

function handleWheelScroll(event) {
  if (!canUseIceScroll() || event.defaultPrevented || event.ctrlKey || event.metaKey) {
    return;
  }

  if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
    return;
  }

  const delta = normalizeWheelDelta(event);

  if (Math.abs(delta) < 0.2) {
    return;
  }

  event.preventDefault();

  if (isAnchorAnimating) {
    cancelIceAnimation();
  }

  if (!isIceAnimating) {
    syncIcePosition();
  }

  iceTargetY = clamp(iceTargetY + delta, 0, maxScrollY());

  if (!isIceAnimating) {
    isIceAnimating = true;
    iceRafId = window.requestAnimationFrame(animateIceScroll);
  }
}

function getHeaderOffset() {
  const header = document.querySelector(".site-header");

  if (!header) {
    return ICE_SCROLL.headerOffset;
  }

  const position = window.getComputedStyle(header).position;
  return position === "sticky" || position === "fixed" ? header.offsetHeight + 16 : 18;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateToPosition(targetY, duration = ICE_SCROLL.anchorDuration) {
  if (prefersReducedMotion()) {
    cancelIceAnimation();
    setProgrammaticScroll(targetY);
    syncIcePosition();
    return;
  }

  if (iceRafId) {
    window.cancelAnimationFrame(iceRafId);
    iceRafId = 0;
  }

  if (anchorRafId) {
    window.cancelAnimationFrame(anchorRafId);
    anchorRafId = 0;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();
  isIceAnimating = false;
  isAnchorAnimating = true;

  const step = (now) => {
    const elapsed = now - startTime;
    const progress = clamp(elapsed / duration, 0, 1);
    const eased = easeInOutCubic(progress);
    const nextY = startY + distance * eased;

    setProgrammaticScroll(nextY);

    if (progress < 1) {
      anchorRafId = window.requestAnimationFrame(step);
      return;
    }

    isAnchorAnimating = false;
    anchorRafId = 0;
    syncIcePosition();
  };

  anchorRafId = window.requestAnimationFrame(step);
}

function scrollToSection(target, hash) {
  const targetY = clamp(window.scrollY + target.getBoundingClientRect().top - getHeaderOffset(), 0, maxScrollY());

  if (hash && window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  animateToPosition(targetY);
}

function setupInternalNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");

      if (!hash || hash === "#" || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = document.querySelector(hash);

      if (!target) {
        return;
      }

      event.preventDefault();
      scrollToSection(target, hash);
    });
  });
}

function isInteractiveElement(element) {
  if (!(element instanceof Element)) {
    return false;
  }

  return Boolean(element.closest("a, button, input, textarea, select, summary, [contenteditable='true']"));
}

function handleKeyboardScroll(event) {
  if (event.defaultPrevented || isInteractiveElement(event.target)) {
    return;
  }

  const current = window.scrollY;
  const page = window.innerHeight * 0.82;
  const line = 92;
  let target;

  if (event.key === "End") {
    target = maxScrollY();
  } else if (event.key === "Home") {
    target = 0;
  } else if (event.key === "PageDown" || (event.key === " " && !event.shiftKey)) {
    target = current + page;
  } else if (event.key === "PageUp" || (event.key === " " && event.shiftKey)) {
    target = current - page;
  } else if (event.key === "ArrowDown") {
    target = current + line;
  } else if (event.key === "ArrowUp") {
    target = current - line;
  } else {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  animateToPosition(clamp(target, 0, maxScrollY()), event.key === "ArrowDown" || event.key === "ArrowUp" ? 360 : 620);
}

function setupIceScroll() {
  document.documentElement.classList.add("has-scroll-controller");
  syncIcePosition();
  window.addEventListener("wheel", handleWheelScroll, { passive: false });
  window.addEventListener("resize", syncIcePosition);
  window.addEventListener("scroll", () => {
    if (isProgrammaticScroll || isIceAnimating || isAnchorAnimating) {
      return;
    }

    syncIcePosition();
  }, { passive: true });

  window.addEventListener("pointerdown", cancelIceAnimation, { passive: true });
  window.addEventListener("keydown", handleKeyboardScroll, { capture: true });

  window.addEventListener("popstate", () => {
    if (!window.location.hash) {
      animateToPosition(0);
      return;
    }

    const target = document.querySelector(window.location.hash);

    if (target) {
      scrollToSection(target, window.location.hash);
    }
  });
}

function setTextContent(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getTranslation(lang, key) ?? getTranslation("en", key);

    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  updateMetaTags(lang);
  document.documentElement.lang = lang;
}

function updateMetaTags(lang) {
  const page = translations[lang] ?? translations.en;
  const title = page.metaTitle ?? translations.en.metaTitle;
  const description = page.metaDescription ?? translations.en.metaDescription;

  document.title = title;

  [
    document.querySelector("#meta-description"),
    document.querySelector("#og-description"),
    document.querySelector("#twitter-description")
  ].forEach((node) => {
    if (node) {
      node.setAttribute("content", description);
    }
  });

  [
    document.querySelector("#og-title"),
    document.querySelector("#twitter-title")
  ].forEach((node) => {
    if (node) {
      node.setAttribute("content", title);
    }
  });
}

function renderHeroPoints(lang) {
  const list = document.querySelector("#hero-points");
  list.innerHTML = "";

  translations[lang].hero.points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    list.appendChild(item);
  });
}

function renderFeatures(lang) {
  const grid = document.querySelector("#feature-grid");
  grid.innerHTML = "";

  translations[lang].features.items.forEach((feature, index) => {
    const card = document.createElement("article");
    card.className = `feature-card accent-${accentCycle[index]}`;
    card.innerHTML = `
      <div class="feature-mark">${String(index + 1).padStart(2, "0")}</div>
      <h3>${feature.title}</h3>
      <p>${feature.text}</p>
    `;
    grid.appendChild(card);
  });
}

function renderPreview(lang) {
  const grid = document.querySelector("#preview-grid");
  const preview = getLocalizedContent(previewContent, lang);
  setNodeText("#preview-title", preview.title);
  setNodeText("#preview-copy", preview.copy);
  grid.innerHTML = "";

  preview.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "preview-card";

    const visual = document.createElement("div");
    visual.className = "preview-visual";

    const image = document.createElement("img");
    image.className = "preview-image";
    image.src = item.image;
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    visual.appendChild(image);

    const body = document.createElement("div");
    body.className = "preview-body";

    const label = document.createElement("p");
    label.className = "preview-label";
    label.textContent = preview.label;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const text = document.createElement("p");
    text.textContent = item.text;

    body.append(label, title, text);
    card.append(visual, body);
    grid.appendChild(card);
  });
}

function renderSteps(lang) {
  const list = document.querySelector("#steps-list");
  list.innerHTML = "";

  translations[lang].how.steps.forEach((step, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    `;
    list.appendChild(item);
  });
}

function renderGuide(lang) {
  const list = document.querySelector("#guide-steps");

  if (!list) {
    return;
  }

  list.innerHTML = "";

  translations[lang].setup.steps.forEach((step, index) => {
    const card = document.createElement("article");
    card.className = index === 0 ? "guide-step guide-card--settings-entry" : "guide-step";

    const copy = document.createElement("div");
    copy.className = "guide-step-copy";

    const number = document.createElement("span");
    number.className = "guide-step-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("h3");
    title.textContent = step.title;

    const text = document.createElement("p");
    text.textContent = step.text;

    copy.append(number, title, text);

    const media = document.createElement("div");
    media.className = guideImageGroups[index].length > 1 ? "guide-media guide-media-compare" : "guide-media";
    media.setAttribute("aria-label", translations[lang].setup.imageLabel);

    guideImageGroups[index].forEach((src, imageIndex) => {
      const imageText = step.images?.[imageIndex] ?? step;
      const figure = document.createElement("figure");
      figure.className = "guide-figure";

      const image = document.createElement("img");
      image.className = index === 0 ? "guide-image--settings-entry" : "";
      image.src = src;
      image.alt = imageText.alt;
      image.loading = "lazy";
      image.decoding = "async";

      const caption = document.createElement("figcaption");
      caption.textContent = imageText.caption;

      figure.append(image, caption);
      media.appendChild(figure);
    });

    card.append(copy, media);
    list.appendChild(card);
  });
}

function renderSafety(lang) {
  const list = document.querySelector("#safety-list");
  const items = [...translations[lang].safety.items];
  const download = getLocalizedContent(downloadContent, lang);
  list.innerHTML = "";

  if (items.length > 5) {
    items[5] = download.safetyItem;
  }

  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  });
}

function renderDownload(lang) {
  const download = getLocalizedContent(downloadContent, lang);
  const downloadButton = document.querySelector("#download-button");
  setNodeText("#download-kicker", download.kicker);
  setNodeText("#download-title", download.title);
  setNodeText("#download-copy", download.copy);
  setNodeText("#download-button", download.button);
  setNodeText("#old-versions-button", download.oldVersionsButton);
  setNodeText("#download-version-label", download.versionLabel);
  setNodeText("#download-version-value", download.versionValue);
  setNodeText("#download-type-label", download.typeLabel);
  setNodeText("#download-type-value", download.typeValue);
  setNodeText("#download-free-note", download.freeNote);
  setNodeText("#download-note", download.note);

  if (downloadButton) {
    downloadButton.href = releaseDownloads.latest;
  }
}

function renderSupport(lang) {
  const support = getLocalizedContent(supportContent, lang);
  setNodeText("#support-kicker", support.kicker);
  setNodeText("#support-title", support.title);
  setNodeText("#support-copy", support.copy);
  setNodeText("#support-note", support.note);
  setNodeText("#support-button", support.button);
}

function renderVersions(lang) {
  const grid = document.querySelector("#version-grid");

  if (!grid) {
    return;
  }

  const versions = getLocalizedContent(versionsContent, lang);
  setNodeText("#versions-kicker", versions.kicker);
  setNodeText("#versions-title", versions.title);
  setNodeText("#versions-copy", versions.copy);
  grid.innerHTML = "";

  versions.entries.forEach((entry, index) => {
    const card = document.createElement("article");
    card.className = "version-card";

    const badge = document.createElement("span");
    badge.className = "changelog-tag";
    badge.textContent = entry.badge;

    const title = document.createElement("h3");
    title.textContent = entry.title;

    const text = document.createElement("p");
    text.textContent = entry.text;

    const link = document.createElement("a");
    link.className = index === 0 ? "btn btn-primary version-download" : "btn btn-secondary version-download";
    link.href = entry.href;
    link.download = "";
    link.textContent = entry.button;

    card.append(badge, title, text, link);
    grid.appendChild(card);
  });
}

function ensureToastStack() {
  let stack = document.querySelector(".toast-stack");

  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    stack.setAttribute("aria-live", "polite");
    stack.setAttribute("aria-atomic", "true");
    document.body.appendChild(stack);
  }

  return stack;
}

function showToast(message) {
  const stack = ensureToastStack();
  stack.innerHTML = "";

  const toast = document.createElement("div");
  toast.className = "site-toast";
  toast.textContent = message;
  stack.appendChild(toast);

  window.requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => {
      if (toast.parentElement === stack) {
        toast.remove();
      }
    }, 220);
  }, 2800);
}

function handleVersionAction(action, lang) {
  if (action === "download") {
    const target = document.querySelector("#download");

    if (target) {
      scrollToSection(target, "#download");
    }

    return;
  }

  if (action === "versions") {
    const target = document.querySelector("#versions");

    if (target) {
      scrollToSection(target, "#versions");
    }

    return;
  }

  if (action === "unavailable") {
    const download = getLocalizedContent(downloadContent, lang);
    showToast(download.unavailableToast);
  }
}

function renderChangelog(lang) {
  const list = document.querySelector("#changelog-list");
  const changelog = getLocalizedContent(changelogContent, lang);
  setNodeText("#changelog-copy", changelog.copy);
  list.innerHTML = "";

  changelog.versions.forEach((version) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "changelog-item changelog-item-button";
    item.addEventListener("click", () => {
      handleVersionAction(version.action, lang);
    });

    const tag = document.createElement("span");
    tag.className = "changelog-tag";
    tag.textContent = version.label;

    const title = document.createElement("h3");
    title.textContent = version.title;

    const points = document.createElement("ul");
    points.className = "changelog-points";

    version.items.forEach((text) => {
      const point = document.createElement("li");
      point.textContent = text;
      points.appendChild(point);
    });

    const cta = document.createElement("p");
    cta.className = "changelog-cta";
    cta.textContent = version.cta;

    item.append(tag, title, points, cta);
    list.appendChild(item);
  });

  const note = document.createElement("article");
  note.className = "changelog-note";
  const paragraph = document.createElement("p");
  paragraph.appendChild(document.createTextNode(changelog.betaNotePrefix));
  const telegramLinks = telegramLinksByLang[lang] || telegramLinksByLang.en;
  telegramLinks.forEach((entry, index) => {
    if (index > 0) {
      paragraph.appendChild(document.createTextNode(" | "));
    }
    const link = document.createElement("a");
    link.href = entry.href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = entry.label;
    paragraph.appendChild(link);
  });
  paragraph.appendChild(document.createTextNode(changelog.betaNoteSuffix));
  note.appendChild(paragraph);
  list.appendChild(note);
}

function renderFaq(lang) {
  const list = document.querySelector("#faq-list");
  const entries = translations[lang].faq.items.map((entry) => ({ ...entry }));
  const download = getLocalizedContent(downloadContent, lang);
  list.innerHTML = "";

  if (entries.length > 0) {
    entries[entries.length - 1].answer = download.faqAnswer;
  }

  entries.forEach((entry) => {
    const item = document.createElement("details");
    item.className = "faq-item";
    item.innerHTML = `
      <summary>${entry.question}</summary>
      <p>${entry.answer}</p>
    `;
    list.appendChild(item);
  });
}

function updateLanguageButtons(lang) {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderPage(lang) {
  setTextContent(lang);
  renderHeroPoints(lang);
  renderFeatures(lang);
  renderPreview(lang);
  renderSteps(lang);
  renderGuide(lang);
  renderSafety(lang);
  renderDownload(lang);
  renderVersions(lang);
  renderSupport(lang);
  renderChangelog(lang);
  renderFaq(lang);
  updateLanguageButtons(lang);
}

function refreshRevealItems(showImmediately = false) {
  const items = document.querySelectorAll(revealSelector);

  items.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", `${Math.min((index % 8) * 45, 220)}ms`);

    if (showImmediately || prefersReducedMotion() || !revealObserver) {
      item.classList.add("is-visible");
      return;
    }

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
  cancelIceAnimation();

  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = undefined;
  }

  document.body.classList.toggle("reveal-ready", !prefersReducedMotion());
  setupRevealAnimations();
}

function applyLanguage(lang, shouldSave = true, options = {}) {
  const safeLang = supportedLanguages.includes(lang) ? lang : "en";
  const canAnimate = options.animate === true && !prefersReducedMotion() && document.body.classList.contains("is-ready");
  languageChangeToken += 1;
  const token = languageChangeToken;

  window.clearTimeout(languageTransitionTimer);
  window.clearTimeout(languageFallbackTimer);
  updateLanguageButtons(safeLang);

  const commitLanguage = () => {
    if (token !== languageChangeToken) {
      return;
    }

    renderPage(safeLang);
    currentLanguage = safeLang;

    if (document.body.classList.contains("reveal-ready") || revealObserver) {
      refreshRevealItems(canAnimate);
    }

    window.requestAnimationFrame(syncIcePosition);

    if (shouldSave) {
      safeSaveLanguage(safeLang);
    }
  };

  if (!canAnimate) {
    document.body.classList.remove("is-language-switching");
    commitLanguage();
    return;
  }

  document.body.classList.add("is-language-switching");

  languageTransitionTimer = window.setTimeout(() => {
    commitLanguage();

    window.requestAnimationFrame(() => {
      if (token === languageChangeToken) {
        document.body.classList.remove("is-language-switching");
      }
    });
  }, languageFadeMs);

  languageFallbackTimer = window.setTimeout(() => {
    if (token === languageChangeToken) {
      document.body.classList.remove("is-language-switching");
    }
  }, languageFadeMs + languageSettleMs);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang, true, { animate: true });
    });
  });

  applyLanguage(safeStoredLanguage(), false, { animate: false });
  setupRevealAnimations();
  setupInternalNavigation();
  setupIceScroll();
  document.body.classList.add("is-ready");

  if (typeof reducedMotionQuery.addEventListener === "function") {
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
  }
});
