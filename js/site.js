(function () {
    const LANGUAGE_KEY = 'site-language';
    const DEFAULT_LANGUAGE = 'zh-CN';
    const SUPPORTED_LANGUAGES = ['zh-CN', 'en'];

    const translations = {
        'zh-CN': {
            'common.brand.zhiguan': '止观 AI',
            'common.brand.dacheng': '大成智慧',
            'common.nav.home': '首 卷',
            'common.nav.ai': 'AI',
            'common.nav.community': '社区',
            'common.nav.download': '下载',
            'common.nav.knowledge': '知 识 库',
            'common.nav.account': '居士',
            'common.ui.search': '搜索',
            'common.ui.language': '切换语言',
            'common.search.placeholder': '输入关键字...',
            'common.lang.title': '选择语言',
            'common.lang.zh.name': '简体中文',
            'common.lang.zh.desc': '标准语境',
            'common.lang.en.name': 'English',
            'common.lang.en.desc': 'Global Preview',
            'index.title': '止观AI - 让千年止观进入 AI 时代',
            'index.hero.title': '止观',
            'index.hero.subtitle': '让千年止观进入 AI 时代',
            'index.hero.ctaPrimary': '开始修习',
            'index.hero.ctaSecondary': '加入共建',
            'index.about.card1.title': '止观 AI 在做什么',
            'index.about.card1.body': '止观AI 是一个面向未来的心智训练项目。它试图把传统止观中的专注、观照、调心与训练经验，与人工智能、沉浸式体验和更细致的反馈机制结合起来，构建一种新的数字化修习入口。',
            'index.about.card1.intro': '它更关心的是：',
            'index.about.card1.list': '<li style="margin-bottom: 8px;">- 如何降低心智训练的入门门槛</li><li style="margin-bottom: 8px;">- 如何让练习过程更可见、可反馈、可持续</li><li style="margin-bottom: 8px;">- 如何让古老的方法与当代工具真正相遇</li>',
            'index.about.card2.title': '我们为什么做这件事',
            'index.about.card2.body': '传统修习有它深厚的价值，但在现代语境里也面临许多现实难题：',
            'index.about.card2.list': '<li style="margin-bottom: 8px;">- 依赖长期陪伴与指导，入门门槛高</li><li style="margin-bottom: 8px;">- 练习过程难以量化，效果不易感知</li><li style="margin-bottom: 8px;">- 很多人知道重要，却很难坚持</li><li style="margin-bottom: 8px;">- 抽象概念很多，现代用户难以进入</li>',
            'index.about.card2.quote': '我们相信，<strong>技术不应该取代内在训练本身，但技术可以成为桥梁</strong>，帮助更多人进入、理解并坚持一条真实的成长路径。',
            'index.directions.title': '核心方向',
            'index.directions.card1.category': '【 根 基 】',
            'index.directions.card1.title': '训练方法',
            'index.directions.card1.body': '以止观式的专注与观照方法为核心，不脱离真正的训练体验。',
            'index.directions.card2.category': '【 赋 能 】',
            'index.directions.card2.title': 'AI 辅助',
            'index.directions.card2.body': '让 AI 参与结构化引导、练习反馈、知识整理与个性化陪伴。',
            'index.directions.card3.category': '【 临 场 】',
            'index.directions.card3.title': '沉浸式体验',
            'index.directions.card3.body': '通过更好的交互设计，帮助用户更自然地进入练习状态。',
            'index.directions.card4.category': '【 反 馈 】',
            'index.directions.card4.title': '成长闭环',
            'index.directions.card4.body': '围绕记录、复盘、提醒与阶段总结，建立持续练习的动力。',
            'index.value.negative.title': '止观 AI ✖ 绝不是...',
            'index.value.negative.list': '<li>不是普通的情绪安抚工具</li><li>不是简单的冥想打卡产品</li><li>不是空泛的 AI 心灵包装</li><li>不是只讲技术、不讲训练根基的实验品</li>',
            'index.value.positive.title': '止观 AI ✔ 真正在做...',
            'index.value.positive.list': '<li>把传统心法转译为当代人可进入的训练路径</li><li>用技术降低门槛，而不是替代修习</li><li>用反馈增强坚持，而不是制造幻觉</li><li>在传承、公益与创新之间寻找新的可能性</li>',
            'index.join.title': '一起把止观带入 AI 时代',
            'index.join.desc': '如果你相信：人的内在训练值得被认真对待；古老的方法可以与新技术相遇；技术不只是效率工具，也可以成为心智成长的桥梁。<br>那么你很可能适合加入止观 AI。',
            'index.join.whyTitle': '为什么现在值得加入？',
            'index.join.whyBody1': '止观 AI 还处在早期，但方向已经很清楚：项目已启动并形成核心团队；已完成项目方案与商业计划；已经形成组织的底层机制；正在从“理念”走向“系统化建构”。',
            'index.join.whyBody2': '这意味着现在加入，不只是围观一个已经成型的产品，而是有机会参与一件事情的早期定义：<strong>它如何被理解、设计，如何真正落地，并最终服务怎样的人。</strong>',
            'index.join.peopleTitle': '我们欢迎怎样的人？',
            'index.join.peopleBody': '<p><strong class="font-kai">对训练与成长有真实兴趣：</strong>不只是把它当作概念，而是真的关心人如何改变自己。</p><p><strong class="font-kai">有跨界实践能力：</strong>可以来自 AI、产品、设计、内容、社群或研究领域。</p><p><strong class="font-kai">愿意长期共建：</strong>止观 AI 更像一个持续生长中的体系，而不是一次性项目。</p>',
            'index.join.cta': '加入止观 AI',
            'index.faq.title': '释疑 (FAQ)',
            'index.faq.q1': '◈ 止观 AI 是一个什么项目？',
            'index.faq.a1': '一个把心智训练方法与 AI、交互设计和长期成长机制结合起来的数字化项目。',
            'index.faq.q2': '◈ 它是宗教项目吗？',
            'index.faq.a2': '它借鉴了东方训练传统的经验，但希望用更开放、更现代、更可进入的方式表达与实践。',
            'index.faq.q3': '◈ 它现在已经是完整产品了吗？',
            'index.faq.a3': '还不是。当前网页端更像一个官网与产品原型，用来承接方向说明和后续能力入口。',
            'index.faq.q4': '◈ 为什么需要 AI？',
            'index.faq.a4': 'AI 不是为了替代人，而是为了帮助整理知识、提供引导、承接问题，并形成更连续的成长反馈。',
            'index.footer': '© 2026 止观 AI. 探索心智的数字化成长之路.',
            'index.notice.header': '⚡ 最新动态 (Latest News)',
            'index.notice.title': '寻找 100 位内测用户',
            'index.notice.desc': '我们正在进行首期体验招募，邀请你参与止观 AI 的早期测试与共建。',
            'index.notice.link': '立即了解 →',
            'index.terminal.input': '输入 help、begin、knowledge、community...',
            'index.terminal.submit': '发 问',
            'community.title': '社区 - 交流与共建',
            'community.header.title': '社区',
            'community.header.subtitle': '交流、提问、记录与同行',
            'community.write': '✐ 发起讨论',
            'community.category.all': '全部讨论',
            'community.category.practice': '练习问答',
            'community.category.case': '案例拆解',
            'community.category.life': '生活笔记',
            'community.post1.time': '一炷香前',
            'community.post1.title': '练习时总是走神，该怎么重新拉回注意力？',
            'community.post1.excerpt': '最近开始做每日 10 分钟的呼吸练习，但一坐下就容易想到工作和消息。越想让自己专注，越会被打断。大家有没有更温和、可持续的练习方法？',
            'community.post1.stats': '<span style="color: var(--accent-green);">💬</span> 12 回响',
            'community.post1.views': '<span>👁</span> 342 参阅',
            'community.post2.time': '昨日辰时',
            'community.post2.title': '【方法连载】如何把抽象的练习拆成日常可执行动作',
            'community.post2.excerpt': '很多人知道训练重要，但不知道如何开始。本帖尝试把“觉察、回到当下、稳定节奏”拆成几个可以每天实践的小动作，适合新手先走通第一步。',
            'community.post2.stats': '<span style="color: var(--accent-green);">💬</span> 56 回响',
            'community.post2.views': '<span>👁</span> 1205 参阅',
            'community.post3.time': '三日前',
            'community.post3.title': '分享一次断开手机提醒后的三天观察',
            'community.post3.excerpt': '把通知全部关闭三天后，我开始更清楚地看见自己在焦虑和空闲之间来回切换。记录这次经历，想听听大家怎么处理碎片化注意力。',
            'community.post3.stats': '<span style="color: var(--accent-green);">💬</span> 8 回响',
            'community.post3.views': '<span>👁</span> 210 参阅',
            'community.pagination.prev': '上一页',
            'community.pagination.next': '下一页',
            'community.footer': '© 2026 大成智慧. 让成长更可交流。',
            'download.title': '下载 - 止观 AI',
            'download.hero.title': '随身练习',
            'download.hero.desc': '无论身处繁华闹市，亦或安静角落。<br>在更小的空间里，也能开始稳定而持续的练习。',
            'download.store.ios': '🍏 App Store',
            'download.store.android': '🤖 Android APK',
            'download.store.qr': '📱 扫码下载',
            'download.version.current': '当前版本：V 3.0.1 (原型预览)',
            'download.version.log': '更新日志：新增首页互动终端、统一导航入口，并为 AI 与知识库能力预留后续升级位。',
            'download.float1': '菩提本无树',
            'download.float2': '明镜亦非台',
            'download.mockup.title': '早课',
            'download.mockup.center': '静',
            'download.mockup.time': '今日已练习：45 分钟',
            'download.footer': '© 2026 大成智慧. All Rights Reserved.',
            'auth.title': '账号登录 - 止观 AI',
            'auth.closeTitle': '返回首页',
            'auth.header.title': '账号登录',
            'auth.header.subtitle': '进入止观 AI',
            'auth.header.note': '登录后可进入知识库与后续私有功能。',
            'auth.input.username': '用户名 / 邮箱',
            'auth.input.password': '密码',
            'auth.remember': '记住我',
            'auth.forgot': '忘记密码？',
            'auth.submit': '登录',
            'auth.registerPrefix': '还没有账号？',
            'auth.register': '注册账号',
            'auth.footerSeal': 'AI',
            'ai.title': 'AI - 止观 AI',
            'ai.badge': 'AI 共修原型',
            'ai.hero.title': '与 AI 一起练习专注、观照与成长',
            'ai.hero.desc': '当前页面是一个前端伪聊天原型，用来预演未来的共修体验。你可以通过预设问题或输入自己的想法，感受未来 AI 入口的对话方式。',
            'ai.hero.note': '知识库不会直接公开展示，登录后才会开放相关内容与引用能力。',
            'ai.hero.login': '登录查看知识库',
            'ai.hero.community': '去社区看看',
            'ai.chat.title': '共修对话窗口',
            'ai.chat.desc': '这里展示的是原型交互，不会发送真实请求，也不会保存对话。',
            'ai.suggestions.title': '可以从这些问题开始',
            'ai.suggestion.1': '我总是很难安静下来',
            'ai.suggestion.2': '给我一个今天能开始的练习',
            'ai.suggestion.3': '如果只有 5 分钟，我能做什么？',
            'ai.suggestion.4': '知识库为什么要登录后开放？',
            'ai.input.placeholder': '输入一个问题，体验原型对话...',
            'ai.send': '发送',
            'ai.disclaimer': '演示说明：当前仅为前端原型，不连接真实 AI、账号系统或知识库。',
            'ai.status': '当前状态：可体验对话壳、预设回复与知识库入口逻辑。'
        },
        en: {
            'common.brand.zhiguan': 'Zhiguan AI',
            'common.brand.dacheng': 'Dacheng Wisdom',
            'common.nav.home': 'Home',
            'common.nav.ai': 'AI',
            'common.nav.community': 'Community',
            'common.nav.download': 'Download',
            'common.nav.knowledge': 'Knowledge',
            'common.nav.account': 'Account',
            'common.ui.search': 'Search',
            'common.ui.language': 'Switch language',
            'common.search.placeholder': 'Type a keyword...',
            'common.lang.title': 'Choose a language',
            'common.lang.zh.name': 'Simplified Chinese',
            'common.lang.zh.desc': 'Default experience',
            'common.lang.en.name': 'English',
            'common.lang.en.desc': 'Global preview',
            'index.title': 'Zhiguan AI - Bring timeless practice into the AI era',
            'index.hero.title': 'Zhiguan',
            'index.hero.subtitle': 'Bring timeless inner practice into the AI era',
            'index.hero.ctaPrimary': 'Start practice',
            'index.hero.ctaSecondary': 'Join the build',
            'index.about.card1.title': 'What Zhiguan AI is building',
            'index.about.card1.body': 'Zhiguan AI is a future-facing training project. It tries to connect traditional methods of attention, observation, and inner regulation with AI, immersive interaction, and better feedback loops.',
            'index.about.card1.intro': 'It cares about:',
            'index.about.card1.list': '<li style="margin-bottom: 8px;">- lowering the barrier to start meaningful practice</li><li style="margin-bottom: 8px;">- making training more visible, trackable, and sustainable</li><li style="margin-bottom: 8px;">- helping timeless methods meet modern tools</li>',
            'index.about.card2.title': 'Why we are doing this',
            'index.about.card2.body': 'Traditional inner work has deep value, but it also faces real problems in modern life:',
            'index.about.card2.list': '<li style="margin-bottom: 8px;">- it often depends on long-term guidance and high entry barriers</li><li style="margin-bottom: 8px;">- progress is hard to observe or quantify</li><li style="margin-bottom: 8px;">- many people know it matters, but struggle to stay with it</li><li style="margin-bottom: 8px;">- abstract concepts can feel too distant for everyday users</li>',
            'index.about.card2.quote': 'We believe that <strong>technology should not replace inner training itself, but it can become a bridge</strong> that helps more people begin, understand, and continue a real path of growth.',
            'index.directions.title': 'Core directions',
            'index.directions.card1.category': '[ FOUNDATION ]',
            'index.directions.card1.title': 'Training method',
            'index.directions.card1.body': 'Keep attention and observation at the center instead of drifting into empty ideas.',
            'index.directions.card2.category': '[ ENABLEMENT ]',
            'index.directions.card2.title': 'AI support',
            'index.directions.card2.body': 'Use AI for structured guidance, reflection prompts, knowledge support, and personalized companionship.',
            'index.directions.card3.category': '[ EXPERIENCE ]',
            'index.directions.card3.title': 'Immersive design',
            'index.directions.card3.body': 'Use thoughtful interaction to help people enter practice with less friction.',
            'index.directions.card4.category': '[ LOOP ]',
            'index.directions.card4.title': 'Growth loop',
            'index.directions.card4.body': 'Build a practice loop around records, review, reminders, and stage summaries.',
            'index.value.negative.title': 'Zhiguan AI is NOT...',
            'index.value.negative.list': '<li>not a generic mood-soothing tool</li><li>not a simple meditation check-in app</li><li>not empty AI spirituality packaging</li><li>not a tech demo detached from real training</li>',
            'index.value.positive.title': 'Zhiguan AI is trying to...',
            'index.value.positive.list': '<li>translate deep practice into an approachable modern path</li><li>use technology to lower barriers, not replace practice</li><li>use feedback to support consistency, not illusion</li><li>find a new balance among tradition, public value, and innovation</li>',
            'index.join.title': 'Bring Zhiguan into the AI era',
            'index.join.desc': 'If you believe inner training deserves serious attention, timeless methods can meet new tools, and technology can become a bridge for growth, you may be a great fit for Zhiguan AI.',
            'index.join.whyTitle': 'Why join now?',
            'index.join.whyBody1': 'Zhiguan AI is still early, but the direction is clear: the project has started, a core team is forming, and the system is moving from idea to structure.',
            'index.join.whyBody2': 'Joining now means more than watching a finished product. It means shaping how this project is understood, designed, and brought into the world.',
            'index.join.peopleTitle': 'Who we hope to meet',
            'index.join.peopleBody': '<p><strong class="font-kai">People who care about practice and growth:</strong> not just as a concept, but as lived work.</p><p><strong class="font-kai">People with cross-disciplinary skills:</strong> AI, product, design, content, community, or research.</p><p><strong class="font-kai">People willing to build for the long term:</strong> Zhiguan AI is a growing system, not a one-off project.</p>',
            'index.join.cta': 'Join Zhiguan AI',
            'index.faq.title': 'FAQ',
            'index.faq.q1': 'What kind of project is Zhiguan AI?',
            'index.faq.a1': 'A digital project that combines inner training methods with AI, interface design, and long-term growth mechanics.',
            'index.faq.q2': 'Is it a religious project?',
            'index.faq.a2': 'It draws from Eastern traditions of practice, but aims to express and apply them in a more open and modern way.',
            'index.faq.q3': 'Is it already a full product?',
            'index.faq.a3': 'Not yet. The current site is closer to a public-facing prototype for direction, storytelling, and future entry points.',
            'index.faq.q4': 'Why involve AI at all?',
            'index.faq.a4': 'Not to replace people, but to help organize knowledge, provide guidance, receive questions, and support continuous feedback.',
            'index.footer': '© 2026 Zhiguan AI. Exploring digital pathways for inner growth.',
            'index.notice.header': '⚡ Latest news',
            'index.notice.title': 'Looking for 100 early testers',
            'index.notice.desc': 'We are opening the first round of early access and inviting people to help shape Zhiguan AI.',
            'index.notice.link': 'Learn more →',
            'index.terminal.input': 'Type help, begin, knowledge, community...',
            'index.terminal.submit': 'Send',
            'community.title': 'Community - Conversations and co-building',
            'community.header.title': 'Community',
            'community.header.subtitle': 'Ask, reflect, record, and grow with others',
            'community.write': '✐ Start a thread',
            'community.category.all': 'All topics',
            'community.category.practice': 'Practice Q&A',
            'community.category.case': 'Case notes',
            'community.category.life': 'Life reflections',
            'community.post1.time': 'moments ago',
            'community.post1.title': 'I keep drifting during practice. How do I return gently?',
            'community.post1.excerpt': 'I recently started a daily 10-minute breathing practice, but as soon as I sit down my mind jumps to work and notifications. The harder I push, the more distracted I feel. Any gentle and sustainable advice?',
            'community.post1.stats': '<span style="color: var(--accent-green);">💬</span> 12 replies',
            'community.post1.views': '<span>👁</span> 342 views',
            'community.post2.time': 'yesterday morning',
            'community.post2.title': '[Method notes] Turning abstract practice into daily actions',
            'community.post2.excerpt': 'Many people know training matters, but do not know how to start. This thread breaks awareness, grounding, and rhythm into small daily actions that beginners can actually try.',
            'community.post2.stats': '<span style="color: var(--accent-green);">💬</span> 56 replies',
            'community.post2.views': '<span>👁</span> 1205 views',
            'community.post3.time': 'three days ago',
            'community.post3.title': 'Three days without phone notifications: what I noticed',
            'community.post3.excerpt': 'After turning off all notifications for three days, I started seeing how often I bounce between anxiety and boredom. Sharing the experience here and curious how others handle fragmented attention.',
            'community.post3.stats': '<span style="color: var(--accent-green);">💬</span> 8 replies',
            'community.post3.views': '<span>👁</span> 210 views',
            'community.pagination.prev': 'Previous',
            'community.pagination.next': 'Next',
            'community.footer': '© 2026 Dacheng Wisdom. Make growth more discussable.',
            'download.title': 'Download - Zhiguan AI',
            'download.hero.title': 'Practice on the go',
            'download.hero.desc': 'Whether you are in a busy city or a quiet corner,<br>you can still begin a steady and repeatable practice in a smaller space.',
            'download.store.ios': '🍏 App Store',
            'download.store.android': '🤖 Android APK',
            'download.store.qr': '📱 Scan to download',
            'download.version.current': 'Current build: V 3.0.1 (prototype preview)',
            'download.version.log': 'Update notes: interactive terminal added to the homepage, navigation unified, and upgrade paths reserved for AI and knowledge features.',
            'download.float1': 'Bodhi originally has no tree',
            'download.float2': 'The mirror also has no stand',
            'download.mockup.title': 'Morning session',
            'download.mockup.center': 'Still',
            'download.mockup.time': 'Practice today: 45 min',
            'download.footer': '© 2026 Dacheng Wisdom. All Rights Reserved.',
            'auth.title': 'Sign in - Zhiguan AI',
            'auth.closeTitle': 'Back to home',
            'auth.header.title': 'Sign in',
            'auth.header.subtitle': 'Enter Zhiguan AI',
            'auth.header.note': 'Sign in to access the knowledge area and future private features.',
            'auth.input.username': 'Username / Email',
            'auth.input.password': 'Password',
            'auth.remember': 'Remember me',
            'auth.forgot': 'Forgot password?',
            'auth.submit': 'Sign in',
            'auth.registerPrefix': 'New here?',
            'auth.register': 'Create account',
            'auth.footerSeal': 'AI',
            'ai.title': 'AI - Zhiguan AI',
            'ai.badge': 'AI practice prototype',
            'ai.hero.title': 'Practice attention, reflection, and growth with AI',
            'ai.hero.desc': 'This page is a front-end chat prototype for the future practice experience. Use the suggested prompts or type your own question to preview the flow.',
            'ai.hero.note': 'The knowledge area will not be public by default. Related content and references open after sign-in.',
            'ai.hero.login': 'Sign in for knowledge',
            'ai.hero.community': 'Visit the community',
            'ai.chat.title': 'Practice conversation window',
            'ai.chat.desc': 'This is only a prototype. No real request is sent and no conversation is saved.',
            'ai.suggestions.title': 'Start with one of these prompts',
            'ai.suggestion.1': 'I cannot settle down at all',
            'ai.suggestion.2': 'Give me one practice I can do today',
            'ai.suggestion.3': 'What can I do if I only have 5 minutes?',
            'ai.suggestion.4': 'Why is the knowledge area sign-in only?',
            'ai.input.placeholder': 'Type a question to preview the chat prototype...',
            'ai.send': 'Send',
            'ai.disclaimer': 'Prototype note: this is front-end only and does not connect to a real AI, account system, or knowledge base.',
            'ai.status': 'Current state: conversation shell, preset replies, and knowledge entry logic are available.'
        }
    };

    const getStoredLanguage = () => {
        const stored = window.localStorage.getItem(LANGUAGE_KEY);
        return SUPPORTED_LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE;
    };

    const getTranslation = (key, lang) => {
        return translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key] ?? key;
    };

    const applyTextTranslations = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            element.textContent = getTranslation(element.dataset.i18n, lang);
        });

        document.querySelectorAll('[data-i18n-html]').forEach((element) => {
            element.innerHTML = getTranslation(element.dataset.i18nHtml, lang);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            element.setAttribute('placeholder', getTranslation(element.dataset.i18nPlaceholder, lang));
        });

        document.querySelectorAll('[data-i18n-title]').forEach((element) => {
            element.setAttribute('title', getTranslation(element.dataset.i18nTitle, lang));
        });
    };

    const updateLanguageTrigger = (lang) => {
        document.querySelectorAll('[data-lang-trigger]').forEach((button) => {
            button.textContent = lang === 'zh-CN' ? 'EN' : '中';
            button.title = getTranslation('common.ui.language', lang);
            button.setAttribute('aria-label', getTranslation('common.ui.language', lang));
        });
    };

    const updateLanguageOptions = (lang) => {
        document.querySelectorAll('.lang-option[data-lang]').forEach((option) => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });
    };

    const setDocumentLanguage = (lang) => {
        document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    };

    const applyLanguage = (lang) => {
        setDocumentLanguage(lang);
        applyTextTranslations(lang);
        updateLanguageTrigger(lang);
        updateLanguageOptions(lang);
        document.dispatchEvent(new CustomEvent('site:languagechange', { detail: { lang } }));
    };

    const ensureLanguageModal = () => {
        if (document.getElementById('langModal')) {
            return;
        }

        document.body.insertAdjacentHTML('beforeend', `
            <div class="overlay-modal" id="langModal">
                <button class="modal-close" type="button" data-close-modal="langModal">✕</button>
                <div class="lang-container">
                    <div class="lang-title" data-i18n="common.lang.title"></div>
                    <div class="lang-grid">
                        <button class="lang-option" type="button" data-lang="zh-CN">
                            <div class="lang-name" data-i18n="common.lang.zh.name"></div>
                            <div class="lang-desc" data-i18n="common.lang.zh.desc"></div>
                        </button>
                        <button class="lang-option" type="button" data-lang="en">
                            <div class="lang-name" data-i18n="common.lang.en.name"></div>
                            <div class="lang-desc" data-i18n="common.lang.en.desc"></div>
                        </button>
                    </div>
                </div>
            </div>
        `);
    };

    const bindSearchModal = () => {
        const btnSearch = document.getElementById('btnSearch');
        const searchModal = document.getElementById('searchModal');

        if (btnSearch && searchModal) {
            btnSearch.addEventListener('click', () => {
                searchModal.classList.add('active');
            });

            searchModal.addEventListener('click', (event) => {
                if (event.target === searchModal) {
                    searchModal.classList.remove('active');
                }
            });
        }
    };

    const bindLanguageModal = () => {
        ensureLanguageModal();

        const languageModal = document.getElementById('langModal');
        if (!languageModal) {
            return;
        }

        document.querySelectorAll('[data-lang-trigger]').forEach((button) => {
            button.addEventListener('click', () => {
                languageModal.classList.add('active');
            });
        });

        languageModal.addEventListener('click', (event) => {
            if (event.target === languageModal) {
                languageModal.classList.remove('active');
            }
        });

        document.querySelectorAll('[data-close-modal]').forEach((button) => {
            button.addEventListener('click', () => {
                const modal = document.getElementById(button.dataset.closeModal);
                if (modal) {
                    modal.classList.remove('active');
                }
            });
        });

        languageModal.querySelectorAll('.lang-option[data-lang]').forEach((button) => {
            button.addEventListener('click', () => {
                const nextLanguage = button.dataset.lang;
                window.localStorage.setItem(LANGUAGE_KEY, nextLanguage);
                applyLanguage(nextLanguage);
                languageModal.classList.remove('active');
            });
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        bindSearchModal();
        bindLanguageModal();
        applyLanguage(getStoredLanguage());
    });
})();
