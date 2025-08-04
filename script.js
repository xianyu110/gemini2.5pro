// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initHeroAnimations();
    initDataUpdates();
    initVisitorCounter();
    initScrollEffects();
    initTableResponsive();
    initContactForms();
});

// 导航栏功能
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // 移动端菜单切换
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // 点击导航链接时关闭移动端菜单
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // 滚动时改变导航栏样式
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 滚动方向检测
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动，隐藏导航栏
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动或在顶部，显示导航栏
            navbar.style.transform = 'translateY(0)';
        }
        
        // 添加背景透明度
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        }
        
        lastScrollTop = scrollTop;
    });
}


// 英雄区动画
function initHeroAnimations() {
    // 打字机效果
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        animateTypewriter(heroTitle);
    }
    
    // 浮动卡片动画增强
    const floatingCard = document.querySelector('.floating-card');
    if (floatingCard) {
        enhanceFloatingAnimation(floatingCard);
    }
    
    // 按钮悬停效果
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 打字机动画效果
function animateTypewriter(element) {
    const text = element.innerHTML;
    element.innerHTML = '';
    element.style.borderRight = '2px solid #4285f4';
    
    let index = 0;
    const timer = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(timer);
            // 移除光标
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }, 50);
}

// 增强浮动动画
function enhanceFloatingAnimation(card) {
    let angle = 0;
    const amplitude = 20;
    const frequency = 0.02;
    
    function animate() {
        angle += frequency;
        const y = Math.sin(angle) * amplitude;
        const rotation = Math.sin(angle * 0.5) * 5;
        
        card.style.transform = `translateY(${y}px) rotate(${rotation}deg)`;
        requestAnimationFrame(animate);
    }
    
    animate();
}

// 数据更新功能
function initDataUpdates() {
    updateDateAndTime();
    updateVisitorStats();
    updateMethodAvailability();
    
    // 每小时更新一次数据
    setInterval(() => {
        updateDateAndTime();
        updateVisitorStats();
        updateMethodAvailability();
    }, 3600000); // 1小时
}

// 更新日期和时间
function updateDateAndTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        timeZone: 'Asia/Shanghai'
    };
    
    const dateString = now.toLocaleDateString('zh-CN', options);
    
    // 更新页面中的日期显示
    const updateTimeElement = document.getElementById('updateTime');
    const lastUpdateElement = document.getElementById('lastUpdate');
    
    if (updateTimeElement) {
        updateTimeElement.textContent = dateString;
    }
    
    if (lastUpdateElement) {
        const hour = now.getHours();
        let timeOfDay;
        if (hour < 6) timeOfDay = '凌晨';
        else if (hour < 12) timeOfDay = '上午';
        else if (hour < 18) timeOfDay = '下午';
        else timeOfDay = '晚上';
        
        lastUpdateElement.textContent = `${timeOfDay}更新`;
    }
}

// 更新访客统计
function updateVisitorStats() {
    const visitorCountElement = document.getElementById('visitorCount');
    if (!visitorCountElement) return;
    
    // 从localStorage获取访问次数
    let visitCount = localStorage.getItem('gemini-guide-visits') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('gemini-guide-visits', visitCount);
    
    // 模拟全站访问量（基于本地访问次数和随机数）
    const baseCount = 12340;
    const randomIncrement = Math.floor(Math.random() * 100);
    const totalVisits = baseCount + parseInt(visitCount) * 10 + randomIncrement;
    
    // 数字滚动动画
    animateNumber(visitorCountElement, totalVisits);
}

// 数字滚动动画
function animateNumber(element, targetNumber) {
    const startNumber = parseInt(element.textContent.replace(/,/g, '')) || 0;
    const increment = (targetNumber - startNumber) / 50;
    let currentNumber = startNumber;
    
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentNumber).toLocaleString();
    }, 50);
}

// 更新方案可用性
function updateMethodAvailability() {
    // 模拟实时检测各方案状态
    const methods = [
        {
            selector: '.method-card:nth-child(1)', // 教育邮箱
            available: true,
            status: '正常服务'
        },
        {
            selector: '.method-card:nth-child(2)', // 国内镜像
            available: checkMirrorAvailability(),
            status: '服务正常'
        },
        {
            selector: '.method-card:nth-child(3)', // 官网订阅
            available: true,
            status: '官方服务'
        },
        {
            selector: '.method-card:nth-child(4)', // API服务
            available: Math.random() > 0.1, // 90%可用率
            status: 'API正常'
        },
        {
            selector: '.method-card:nth-child(5)', // AI Studio
            available: false,
            status: '暂时停用'
        }
    ];
    
    methods.forEach(method => {
        const card = document.querySelector(method.selector);
        if (card) {
            updateMethodStatus(card, method.available, method.status);
        }
    });
}

// 检测镜像站点可用性
function checkMirrorAvailability() {
    // 简单的可用性检测（实际项目中可以使用 fetch 检测）
    return Math.random() > 0.05; // 95%可用率
}

// 更新方案状态
function updateMethodStatus(card, available, status) {
    let statusElement = card.querySelector('.method-status');
    
    if (!statusElement) {
        statusElement = document.createElement('div');
        statusElement.className = 'method-status';
        card.querySelector('.method-content').prepend(statusElement);
    }
    
    statusElement.innerHTML = `
        <div class="status-indicator ${available ? 'available' : 'unavailable'}">
            <i class="fas fa-circle"></i>
            <span>${status}</span>
        </div>
    `;
    
    // 添加对应的CSS样式
    if (!document.getElementById('status-styles')) {
        const style = document.createElement('style');
        style.id = 'status-styles';
        style.textContent = `
            .method-status {
                margin-bottom: 1rem;
                padding: 0.5rem;
                background: #f8f9fa;
                border-radius: 8px;
                font-size: 0.875rem;
            }
            .status-indicator {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .status-indicator.available i {
                color: #34a853;
            }
            .status-indicator.unavailable i {
                color: #ea4335;
            }
            .status-indicator i {
                font-size: 0.75rem;
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
        `;
        document.head.appendChild(style);
    }
}

// 访客计数器
function initVisitorCounter() {
    // 记录页面访问
    const sessionKey = 'gemini-guide-session-' + new Date().toDateString();
    if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, 'visited');
        
        // 发送访问统计（模拟）
        recordPageVisit();
    }
}

// 记录页面访问
function recordPageVisit() {
    // 获取访问信息
    const visitInfo = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct',
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    
    // 在实际项目中，这里可以发送到分析服务
    console.log('页面访问记录:', visitInfo);
    
    // 更新本地统计
    updateLocalStats(visitInfo);
}

// 更新本地统计
function updateLocalStats(visitInfo) {
    const stats = JSON.parse(localStorage.getItem('gemini-guide-stats') || '{}');
    
    // 更新各项统计
    stats.totalVisits = (stats.totalVisits || 0) + 1;
    stats.lastVisit = visitInfo.timestamp;
    stats.referrers = stats.referrers || {};
    stats.referrers[visitInfo.referrer] = (stats.referrers[visitInfo.referrer] || 0) + 1;
    
    localStorage.setItem('gemini-guide-stats', JSON.stringify(stats));
}

// 滚动效果
function initScrollEffects() {
    // 滚动时显示元素
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('.method-card, .recommendation-card, .comparison-table');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 表格响应式处理
function initTableResponsive() {
    const table = document.querySelector('.comparison-table');
    if (!table) return;
    
    // 在移动端添加滑动提示
    if (window.innerWidth <= 768) {
        const wrapper = table.closest('.comparison-table-wrapper');
        if (wrapper && !wrapper.querySelector('.scroll-hint')) {
            const hint = document.createElement('div');
            hint.className = 'scroll-hint';
            hint.innerHTML = '← 滑动查看更多 →';
            hint.style.cssText = `
                text-align: center;
                padding: 0.5rem;
                background: #e8f0fe;
                color: #1a73e8;
                font-size: 0.875rem;
                border-radius: 0 0 8px 8px;
            `;
            wrapper.appendChild(hint);
            
            // 滚动时隐藏提示
            wrapper.addEventListener('scroll', function() {
                if (this.scrollLeft > 50) {
                    hint.style.opacity = '0';
                } else {
                    hint.style.opacity = '1';
                }
            });
        }
    }
}

// 联系表单处理
function initContactForms() {
    // 复制联系方式到剪贴板
    document.querySelectorAll('.contact-info').forEach(element => {
        element.addEventListener('click', function(e) {
            if (e.target.tagName === 'STRONG') {
                const text = e.target.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    showToast('联系方式已复制到剪贴板');
                });
            }
        });
    });
}

// 显示提示消息
function showToast(message, duration = 3000) {
    // 移除现有的toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4285f4;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // 显示动画
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // 隐藏动画
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

// 性能监控
function initPerformanceMonitoring() {
    // 页面加载性能
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`页面加载时间: ${loadTime.toFixed(2)}ms`);
        
        // 记录性能指标
        const perfData = {
            loadTime: loadTime,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        };
        
        // 在实际项目中可以发送到分析服务
        localStorage.setItem('gemini-guide-perf', JSON.stringify(perfData));
    });
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    
    // 可以发送错误报告到监控服务
    const errorInfo = {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('gemini-guide-errors', JSON.stringify(errorInfo));
});

// 在线状态检测
function initOnlineStatus() {
    function updateOnlineStatus() {
        const status = navigator.onLine ? 'online' : 'offline';
        document.body.classList.toggle('offline', !navigator.onLine);
        
        if (!navigator.onLine) {
            showToast('当前处于离线状态，某些功能可能不可用', 5000);
        }
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
}

// 初始化所有监控功能
initPerformanceMonitoring();
initOnlineStatus();

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K 快速搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('#search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // ESC 关闭移动端菜单
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// 数据预加载
function preloadData() {
    // 预加载关键资源
    const criticalImages = [
        'https://restname.oss-cn-hangzhou.aliyuncs.com/202506161840056.jpeg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// 启动数据预加载
preloadData();

// PWA 支持检测
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // 可以在这里注册 Service Worker
        console.log('浏览器支持 PWA 功能');
    });
}

// 导出一些实用函数供全局使用
window.GeminiGuide = {
    showToast,
    updateVisitorStats,
    animateNumber
};

// 国际化(i18n)系统
let currentLanguage = "zh-CN";
let translations = {};

// 初始化国际化系统
function initI18n() {
    // 从localStorage获取保存的语言设置
    const savedLanguage = localStorage.getItem("gemini-guide-language") || "zh-CN";
    
    // 设置语言选择器的值
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
        languageSelect.value = savedLanguage;
        languageSelect.addEventListener("change", changeLanguage);
    }
    
    // 加载并应用语言
    loadLanguage(savedLanguage);
}

// 切换语言
function changeLanguage(event) {
    const selectedLanguage = event.target.value;
    loadLanguage(selectedLanguage);
    
    // 保存语言设置到localStorage
    localStorage.setItem("gemini-guide-language", selectedLanguage);
}

// 加载语言文件
async function loadLanguage(language) {
    try {
        // 如果已经加载过该语言，直接应用
        if (translations[language]) {
            applyTranslations(language);
            return;
        }
        
        // 加载语言文件
        const response = await fetch(`./languages/${language}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load language file: ${language}`);
        }
        
        const data = await response.json();
        translations[language] = data;
        
        // 应用翻译
        applyTranslations(language);
        
    } catch (error) {
        console.error("Error loading language:", error);
        // 如果加载失败，回退到中文
        if (language !== "zh-CN") {
            loadLanguage("zh-CN");
        }
    }
}

// 应用翻译
function applyTranslations(language) {
    currentLanguage = language;
    const data = translations[language];
    
    if (!data) return;
    
    // 获取所有带有data-i18n属性的元素
    const elements = document.querySelectorAll("[data-i18n]");
    
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        const translation = getNestedTranslation(data, key);
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // 更新页面语言属性
    document.documentElement.lang = language.split("-")[0];
    
    // 显示语言切换成功提示
    if (window.GeminiGuide && window.GeminiGuide.showToast) {
        const languageNames = {
            "zh-CN": "中文",
            "en-US": "English", 
            "ja-JP": "日本語",
            "ko-KR": "한국어",
            "es-ES": "Español"
        };
        window.GeminiGuide.showToast(`语言已切换到${languageNames[language]} / Language switched to ${languageNames[language]}`);
    }
}

// 获取嵌套的翻译值
function getNestedTranslation(obj, path) {
    return path.split(".").reduce((current, key) => {
        // 处理数组索引，如 "advantagesList.0"
        if (!isNaN(key)) {
            return current && current[parseInt(key)];
        }
        return current && current[key];
    }, obj);
}

// 获取当前语言的翻译
function t(key) {
    const data = translations[currentLanguage];
    return getNestedTranslation(data, key) || key;
}

// 添加到全局命名空间
if (!window.GeminiGuide) {
    window.GeminiGuide = {};
}
window.GeminiGuide.t = t;
window.GeminiGuide.changeLanguage = loadLanguage;
window.GeminiGuide.getCurrentLanguage = () => currentLanguage;


// 初始化国际化
document.addEventListener("DOMContentLoaded", function() {
    initI18n();
});
