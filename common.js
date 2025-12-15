// 公共功能脚本

// 轮播图功能
(function () {
    const slider = document.getElementById('slider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.slide'));
    const dotsWrap = slider.querySelector('.dots');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

    if (!slides.length || !dotsWrap) return;

    let index = 0;
    let timer = null;
    const interval = 4500;

    // 生成 dots
    const dots = slides.map((_, i) => {
        const d = document.createElement('button');
        d.className = 'dot' + (i === 0 ? ' active' : '');
        d.type = 'button';
        d.setAttribute('aria-label', `跳转到第 ${i + 1} 张`);
        d.addEventListener('click', () => go(i));
        dotsWrap.appendChild(d);
        return d;
    });

    function render() {
        slides.forEach((s, i) => {
            s.classList.toggle('active', i === index);
        });
        dots.forEach((d, i) => {
            d.classList.toggle('active', i === index);
        });
    }

    function go(i) {
        index = (i + slides.length) % slides.length;
        render();
        restart();
    }

    function next() { go(index + 1); }
    function prev() { go(index - 1); }

    function start() {
        timer = setInterval(next, interval);
    }

    function stop() {
        if (timer) clearInterval(timer);
        timer = null;
    }

    function restart() {
        stop();
        start();
    }

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);

    slider.setAttribute('tabindex', '0');
    slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    });

    render();
    start();
})();

// 搜索功能
(function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchArea = document.getElementById('searchArea');
    const searchClose = document.getElementById('searchClose');
    
    if (searchBtn && searchArea) {
        searchBtn.addEventListener('click', () => {
            searchArea.style.display = searchArea.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    if (searchClose && searchArea) {
        searchClose.addEventListener('click', () => {
            searchArea.style.display = 'none';
        });
    }
})();

// 移动端导航
(function() {
    const navBtn = document.getElementById('navBtn');
    const leftNav = document.getElementById('leftNav');
    const opacity2 = document.getElementById('opacity2');
    
    if (navBtn && leftNav) {
        navBtn.addEventListener('click', () => {
            leftNav.classList.add('page-active');
            if (opacity2) opacity2.style.display = 'block';
        });
    }
    
    if (opacity2) {
        opacity2.addEventListener('click', () => {
            if (leftNav) leftNav.classList.remove('page-active');
            opacity2.style.display = 'none';
        });
    }
    
    // 点击导航链接后关闭菜单
    const navLinks = document.querySelectorAll('.model-leftnav-main .nnav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (leftNav) leftNav.classList.remove('page-active');
            if (opacity2) opacity2.style.display = 'none';
        });
    });
})();

// 返回顶部按钮
(function() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.pointerEvents = 'auto';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.pointerEvents = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();

// 导航高亮（根据当前页面）
(function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a, .model-leftnav-main .nnav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.parentElement.classList.add('on');
        }
    });
})();

// 平滑滚动（仅用于锚点链接）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

