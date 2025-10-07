// Данные статей по категориям
const articlesData = {
    yk: [
        {
            id: 1,
            title: "6.1 Нанесение телесных повреждений",
            time: "40 мин",
            description: "ч.1 ★★★★ Умышленное нанесение побоев/телесных повреждений легкой или средней тяжести (драка с нанесением ударов)<br>ч.2 ★★★★★ Умышленное нанесение особо тяжких телесных повреждений (ножевые ранения)<br>ч.3 ★★★★ Нанесение особо тяжких телесных повреждений по неосторожности/в состоянии аффекта (сбил насмерть)"
        },
        {
            id: 2,
            title: "6.2 Убийство",
            time: "40 мин",
            description: "ч.1 ★★★★ Умышленное причинение смерти другому человеку (стрелял по гражданскому, тот умер)"
        },
        {
            id: 3,
            title: "6.3 Тяжкое убийство",
            time: "50 мин",
            description: "★★★★★ Убийство двух или более лиц; лица в связи с служебной деятельностью; с особой жестокостью; общеопасным способом; группой лиц; из корыстных побуждений"
        },
        {
            id: 6,
            title: "10.5 Неправомерное завладение ТС",
            time: "30 мин",
            description: "★★★ Неправомерное завладение автомобилем или иным транспортным средством"
        },
        {
            id: 7,
            title: "10.6 Уничтожение чужого имущества",
            time: "30 мин",
            description: "★★★ Умышленные уничтожение чужого имущества"
        },
        {
            id: 8,
            title: "10.8 Уничтожение госимущества",
            time: "30 мин",
            description: "★★★ Умышленные уничтожение или повреждение государственного имущества из хулиганских побуждений"
        },
        {
            id: 9,
            title: "12.7 Незаконное проникновение",
            time: "30 мин",
            description: "ч.1 ★★★ Незаконное проникновение<br>ч.2 ★★★★ Незаконное проникновение на особо охраняемом объекте (ФИБ, САНГ)<br>ч.3 ★★★★★ Проникновение должностным лицом к другой фракции"
        },
        {
            id: 10,
            title: "12.8 Незаконный оборот оружия",
            time: "40 мин",
            description: "ч.1 ★★★★ Покупка/передача незаконного оружия<br>ч.2 Незаконное хранение, ношение или использование оружия с серийными номерами"
        },
        {
            id: 11,
            title: "12.8.1 Незаконное использование спецсредств",
            time: "50 мин",
            description: "★★★★★ Незаконное использование/хранение спецсредств гособразца: бронежилеты, тайзер, дубинки, наручники, медпрепараты с серийными номерами"
        },
        {
            id: 13,
            title: "13.1 Производство наркотиков",
            time: "30 мин",
            description: "★★★ Незаконное кустарное производство и сбор наркотических веществ"
        },
        {
            id: 14,
            title: "13.2 Хранение наркотиков",
            time: "40 мин",
            description: "★★★★ Незаконные приобретение, хранение, перевозка наркотических средств от 3 грамм"
        },
        {
            id: 15,
            title: "13.2.1 Крупный оборот наркотиков",
            time: "50 мин",
            description: "★★★★★ Незаконные приобретение, хранение, перевозка наркотических средств свыше 25 грамм или с целью сбыта"
        },
        {
            id: 16,
            title: "15.1 Превышение должностных полномочий",
            time: "40 мин",
            description: "ч.1 ★★★★ Действия должностного лица, явно выходящие за пределы полномочий<br>ч.2 ★★★★★ С применением насилия, оружия, причинением тяжких последствий, группой лиц, из корыстных побуждений"
        },
        {
            id: 17,
            title: "15.1.1 Злоупотребление должностными полномочиями",
            time: "50 мин",
            description: "ч.1 Использование полномочий вопреки интересам службы<br>ч.2 Вмешательство в процесс задержания/ареста<br>ч.3 Совершение сотрудником органа по расследованию должностных преступлений"
        },
        {
            id: 19,
            title: "15.6 Халатность",
            time: "40/50 мин",
            description: "ч.1 ★★★★ Неисполнение должностных обязанностей, повлекшее крупный ущерб<br>ч.2 ★★★★★ Повлекшее по неосторожности причинение тяжкого вреда здоровью или смерть"
        },
        {
            id: 20,
            title: "17.1 Посягательство на жизнь сотрудника",
            time: "50 мин",
            description: "★★★★★ Посягательство на жизнь сотрудника правоохранительного органа (стрелял по госнику)"
        },
        {
            id: 21,
            title: "17.2 Применение насилия к сотруднику",
            time: "40 мин",
            description: "★★★★ Применение насилия. Ударил, дал пощечину - эта статья"
        },
        {
            id: 22,
            title: "17.3 Оскорбление сотрудника",
            time: "30 мин",
            description: "★★★ Оскорбление сотрудника при исполнении"
        },
        {
            id: 23,
            title: "17.6 Неповиновение",
            time: "30 мин",
            description: "★★★ Неповиновение законному требованию"
        },
        {
            id: 24,
            title: "17.7 Отказ от оплаты штрафа",
            time: "30 мин",
            description: "★★★ Отказ от оплаты штрафа"
        }
    ],
    pc: [
        {
            id: 3,
            title: "6. Презумпция невиновности",
            description: "ч.1 Обвиняемый считается невиновным, пока его виновность в совершении правонарушения не будет доказана в предусмотренном настоящим Кодексом. <br>ч.2 Подозреваемый или обвиняемый не обязан доказывать свою невиновность. Бремя доказывания обвинения и опровержения доводов, приводимых в защиту подозреваемого или обвиняемого, лежит на стороне обвинения. <br>ч.3 Все сомнения в виновности обвиняемого, которые не могут быть устранены в порядке, установленном настоящим Кодексом, толкуются в пользу обвиняемого.  <br>ч.4 Обвинительный приговор не может быть основан на предположениях."
        },
        {
            id: 4,
            title: "16. Задержание подозреваемого",
            description: "Мера пресечения в виде заключения под стражу избирается судом.<br>ч. 1. Лицо может быть задержано по подозрению в совершении правонарушения, за которое может быть назначено наказание в виде лишения свободы или иных санкций, предусмотренных законом.<br>ч. 2. Лицо может быть задержано при наличии хотя бы одного из следующих оснований:<br>а) Когда лицо застигнуто в момент совершения правонарушения или непосредственно после его совершения, государственным служащим;<br>б) Когда 3 и более свидетелей указывают на данное лицо как на совершившее правонарушения;<br>в) Когда есть фото или видео фиксация совершенного правонарушения этим лицом;<br>г) Когда имеется ориентировка на транспортное средство или данное лицо;<br>ч. 3. Если лицо намеренно отказывается предъявлять документы; отказывается снять предмет, который скрывает его личность, то по отношению к данному лицу должна быть инициирована процедура установки личности, порядок которой описан ниже.<br>а) Надеть наручники на задержанного<br>б) Разъяснить задержанному основания для установления личности<br>в) Предпринять все законные меры для оперативного установления личности задержанного, включая обращение к базам данных, а так же досмотреть документы задержанного.<br>г) Сверить лицо задержанного с фотороботом.<br>д) Провести личный обыск задержанного, в случае обнаружения нелегальных предметов - провести процесс задержания регламентированный статьей 17 настоящего Кодекса."
        }
    ],
    xz: [
        {
            id: 5,
            content: "1. Надеть наручники <br>2. Показать опз (удо/жетон) <br>3.Провести первичный обыск (доки, лицензии) <br>4. Сказать статьи задержания и зачитать миранду <br>5. Доставить в КПЗ <br>6.Проверить документы, удостоверение, сверить фоторобот (если есть розыск — инкриминируйте 16.15 УК) <br>7. Реализовать права <br>8. Провести вторичный обыск с изьятием <br>9. Обновить розыск <br>10. Назвать статьи задержания повторно <br>11. Посадить в кпз"
        }
    ],
    "advokat": [
        {
            id: 6,
            content: "1. Покажите удостоверение"
        },
        {
            id: 7,
            content: "2. Начните первый диалог. Расскажите подробно что натворил задержанный и за что его задержали"
        },
        {
            id: 8,
            content: "3. После этого предложите им провести конфиденциальную беседу с задержанным"
        },
        {
            id: 9,
            content: "Если адвокат заноза в жопе и спрашивает вас 'Субъективная, объективная сторона преступления' и бла бла бла. Скажите, что всё покажите на видеофиксации."
        },
        {
            id: 10,
            content: "Если адвокат начинает нести из рода: 'Быстро мне отвечайте, вы что, препятствуете моей деятельности???' Ваш ответ должен быть: 'Нет, я вам покажу на видеофиксации всё. Ситуацию уже рассказал, что не поняли — покажу на видео.'"
        },
        {
            id: 11,
            content: "❗️Если адвокат продолжает грузить вопросами❗️ Начните задавать вопросы адвокату, пример:"
        },
        {
            id: 12,
            content: "- Какую стратегию защиты выбрали, для защиты задержанного? Я должен убедиться, что вы способны защитить его конституционные права. (Если скажет «никакую» — можете рискнуть кафнуть, как повезёт)"
        },
        {
            id: 13,
            content: "- При выстраивании линии защиты на какие принципы и нормы процессуального законодательства вы опираетесь?"
        },
        {
            id: 14,
            content: "- Основываясь на конституционный патернализм и нормы процессуального законодательства, какие претензии со стороны доверителя ко мне, как представителю государства? (на каждый ответ — «Вы меня не так поняли» и задавайте снова)"
        },
        {
            id: 15,
            content: "- При досудебных разбирательствах, согласно нормам процессуального законодательства, какие материалы необходимы и почему?"
        },
        {
            id: 16,
            content: "⚠️ Помните: адвокат даёт РЕКОМЕНДАЦИЮ, вы можете её не принять и посадить нарушителя ⚠️"
        }
    ],
    macros: [
        {
            id: 7,
            content: "Макросы для автоматизации юридических процессов:<br>- Автозаполнение ходатайств<br>- Шаблоны жалоб<br>- Автоматическое вычисление сроков<br>- Генерация процессуальных документов"
        }
    ],
    information: [
        {
            id: 8,
            content: "Памятка была сделанна под сервер Phoenix [15]"
        },
        {
            id: 9,
            content: "Выход под залог: 1 звезда - 25.000$, больше 4 звезд залог можно не давать"
        },
        {
            id: 10,
            content: "Судимости: Выдается от 4 звезд, если садите с судимкой залог можно не делать"
        },
        {
            id: 9,
            content: "Обычная миранда: Вы имеете право хранить молчание. Всё, что вы скажете, может и будет использовано против Вас в суде. Вы имеете право на один телефонный звонок. Также Вы имеете право на адвоката. Если вам необходим адвокат, он будет для Вас запрошен. Вы понимаете свои права?"
        },
        {
            id: 10,
            content: "Краткая миранда: Вы имеете право хранить молчание, на один телефонный звонок до 3 минут, на адвоката. Вам ясны ваши права?"
        },
        {
            id: 11,
            content: "Большая миранда: Так, гражданин, вы готовы? Гражданин, перед тем как мы продолжим какие-либо следственные действия, я обязан зачитать вам ваши права в соответствии с законодательством нашего штата. Во-первых, вы имеете право хранить молчание. Это означает, что с этого момента вы не обязаны отвечать на какие-либо вопросы, которые вам будут заданы сотрудниками правоохранительского органа, включая меня. Это ваше конституционное право, оно защищает вас от возможности самообороны или предоставления информации, которая может быть интерпретирована против вас в дальнейшем. Я подчеркиваю, все, что вы скажете сейчас, в дальнейшем может и будет использовано против вас. Это включает в себя как устные, так и письменные заявления, а также любые ваши действия, зафиксированные в ходе нашего взаимодействия. Даже если ваши слова окажутся вам безобидными, все может трактоваться в рамках уголовного дела. Поэтому вы имеете полное право отказаться от дачи каких-либо пояснений без присутствия адвоката. Во-вторых, вы имеете право на юридическую защиту, то есть право на адвоката. Вы можете воспользоваться услугами частного адвоката по вашему выбору. Этот адвокат может присутствовать при всех допросах и других следственных действиях, и он будет представлять ваши интересы, следить за соблюдением процедуры и помогать вам давать или не давать показания. В рамках законодательства нашего штата госзащитники предоставляются, то есть вы можете рассчитывать на бесплатного адвоката от государства, однако у вас есть право на один телефон-звонок исключительно для того, чтобы связаться с частным адвокатом, если у вас такого не имеется или если вы знаете, к кому обратиться. Этот звонок будет предоставлен вам в разумные сроки при первой возможности, как только это будет безопасно и процессуально возможно. Если вы сообщите нам контактные данные вашего адвоката, мы обеспечим связь. Обратите внимание, что любые разговоры за исключением общения с вашим адвокатом могут быть записаны и использованы как доказательства. Также хочу подметить, что отказ от использования этих прав это ваше личное решение. Вы можете добровольно отказаться от молчания и начать давать показания. Однако, если вы решите начать говорить, а затем передумаете вы все еще можете в любой момент заявить что хотите воспользоваться правом на молчание или адвоката, мы не можем вас заставлять продолжать говорить, кроме того любые угрозы психологическое давление, физ.насилие или провокация с нашей стороны не допустимы, если такое произойдет вы имеете право подать жалобу в соответствующие инстанции, мы обязаны соблюдать процедуры а вы защищены законом, сейчас на данный момент прошу вас внимательно подумать над своими правами, если вы что-то не поняли вы можете задать вопросы, я обязан объяснить вам все пункты максимально доступно, подтвердите пожалуйста что вы понимаете свои права как они были вам зачтены, после этого вы можете принять решение будете ли вы говорить или воспользуетесь правом на молчание и правом на адвоката, мы не торопимся, все что вы скажете или не скажете будет отражено в протоколе использовано строго в рамках закона. Вам понятно гражданин?"
        }
    ]
};

// Глобальные переменные
let currentCategory = 'yk';
let currentSearchQuery = '';

function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 300;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 8 + 5;
        const animationDelay = Math.random() * 5;
        const twinkleDuration = Math.random() * 3 + 2;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${left}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animation = `fall ${animationDuration}s linear ${animationDelay}s infinite, twinkle ${twinkleDuration}s ease-in-out ${animationDelay}s infinite`;
        
        starsContainer.appendChild(star);
    }
}

// Выполнение поиска по всем категориям
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        clearSearchResults();
        return;
    }
    
    currentSearchQuery = query;
    loadAllArticles(query);
}

// Очистка результатов поиска
function clearSearchResults() {
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    currentSearchQuery = '';
    loadArticles(currentCategory);
}

// Загрузка всех статей из всех категорий для поиска
function loadAllArticles(searchQuery = '') {
    const articlesContainer = document.getElementById('articles-container');
    let allArticles = [];
    
    // Собираем все статьи из всех категорий
    Object.keys(articlesData).forEach(category => {
        const categoryArticles = articlesData[category];
        categoryArticles.forEach(article => {
            allArticles.push({
                ...article,
                category: category
            });
        });
    });
    
    // Фильтрация по поисковому запросу
    if (searchQuery) {
        allArticles = allArticles.filter(article => {
            if (article.title) {
                return article.title.toLowerCase().includes(searchQuery) ||
                       article.description.toLowerCase().includes(searchQuery);
            } else if (article.content) {
                return article.content.toLowerCase().includes(searchQuery);
            }
            return false;
        });
    }
    
    articlesContainer.innerHTML = '';
    
    if (allArticles.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <div class="no-results-message">Статьи не найдены</div>
            ${searchQuery ? `<div class="search-query">По запросу: "${searchQuery}"</div>` : ''}
        `;
        articlesContainer.appendChild(noResults);
        return;
    }
    
    allArticles.forEach(article => {
        const articleElement = createArticleElement(article, searchQuery);
        articlesContainer.appendChild(articleElement);
        
        // Автоматически открываем описание если поиск был по описанию
        if (searchQuery && article.description && article.description.toLowerCase().includes(searchQuery)) {
            articleElement.classList.add('active');
        }
    });
}

// Создание элемента статьи
// Создание элемента статьи
function createArticleElement(article, searchQuery = '') {
    const articleElement = document.createElement('div');
    articleElement.className = 'article-item';
    articleElement.setAttribute('data-id', article.id);
    
    // Автоматически скрываем время если его нет
    if (!article.time) {
        articleElement.classList.add('no-time');
    }
    
    // Проверяем длину описания для добавления прокрутки
    const isLongDescription = article.description && article.description.length > 200;
    const descriptionClass = isLongDescription ? 'article-description-window scrollable' : 'article-description-window';
    
    // Для категорий с обычными статьями (yk, pc)
    if (article.title) {
        // Подсветка совпадений в названии
        let highlightedTitle = article.title;
        if (searchQuery) {
            const regex = new RegExp(`(${searchQuery})`, 'gi');
            highlightedTitle = article.title.replace(regex, '<mark>$1</mark>');
        }
        
        articleElement.innerHTML = `
            <div class="article-title-window">
                <div class="article-title">${highlightedTitle}</div>
            </div>
            ${article.time ? `
            <div class="article-time-window">
                <div class="article-time">${article.time}</div>
            </div>
            ` : ''}
            <div class="${descriptionClass}">
                <div class="article-description">${article.description}</div>
            </div>
        `;
        
        // Подсветка совпадений в описании
        if (searchQuery && article.description) {
            const regex = new RegExp(`(${searchQuery})`, 'gi');
            const highlightedDescription = article.description.replace(regex, '<mark>$1</mark>');
            articleElement.querySelector('.article-description').innerHTML = highlightedDescription;
        }
        
        // Обработчик для открытия/закрытия описания по ЛКМ
        const titleWindow = articleElement.querySelector('.article-title-window');
        titleWindow.addEventListener('click', function(e) {
            // Закрываем все остальные описания
            document.querySelectorAll('.article-item.active').forEach(item => {
                if (item !== articleElement) {
                    item.classList.remove('active');
                }
            });
            
            // Открываем/закрываем текущее описание
            articleElement.classList.toggle('active');
        });
    } 
    // Для категорий с простым текстом (xz, advokat, macros, information)
    else if (article.content) {
        let highlightedContent = article.content;
        if (searchQuery) {
            const regex = new RegExp(`(${searchQuery})`, 'gi');
            highlightedContent = article.content.replace(regex, '<mark>$1</mark>');
            highlightedContent = highlightedContent.replace(/<br>/g, '<br>');
        } else {
            highlightedContent = article.content.replace(/<br>/g, '<br>');
        }
        
        articleElement.innerHTML = `
            <div class="article-content-window">
                <div class="article-content">${highlightedContent}</div>
            </div>
        `;
        
        // Для текстовых статей сразу показываем содержимое
        articleElement.classList.add('text-content');
    }
    
    return articleElement;
}

// Загрузка статей для конкретной категории
function loadArticles(category, searchQuery = '') {
    const articlesContainer = document.getElementById('articles-container');
    const articles = articlesData[category] || [];
    
    articlesContainer.innerHTML = '';
    
    if (articles.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <div class="no-results-message">Статьи не найдены</div>
            ${searchQuery ? `<div class="search-query">По запросу: "${searchQuery}"</div>` : ''}
        `;
        articlesContainer.appendChild(noResults);
        return;
    }
    
    articles.forEach(article => {
        const articleElement = createArticleElement(article, searchQuery);
        articlesContainer.appendChild(articleElement);
    });
}

// Инициализация кнопок категорий
function initCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Обновляем текущую категорию
            currentCategory = this.getAttribute('data-category');
            
            // Если есть поисковый запрос, ищем по всем категориям
            if (currentSearchQuery) {
                loadAllArticles(currentSearchQuery);
            } else {
                // Иначе загружаем статьи выбранной категории
                loadArticles(currentCategory);
            }
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    initCategoryButtons();

    // Загружаем статьи для первой категории
    const firstCategory = document.querySelector('.category-btn.active');
    if (firstCategory) {
        currentCategory = firstCategory.getAttribute('data-category');
        loadArticles(currentCategory);
    }
    
    // Обработчики для поиска
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    searchInput.addEventListener('input', function(e) {
        if (this.value === '') {
            clearSearchResults();
        }
    });
    
    // Разрешаем выделение текста везде
    document.addEventListener('selectstart', function(e) {
        return true;
    });
});