// 中英文切换功能
const i18n = {
    currentLang: localStorage.getItem('lang') || 'zh',
    
    translations: {
        zh: {
            'welcome': '欢迎光临吉首大学网络空间安全课题组网站',
            'language': '语言选择：',
            'site-title': '吉首大学网络空间安全课题组',
            'nav-home': '首页',
            'nav-intro': '课题组简介',
            'nav-research': '科研进展',
            'nav-team': '成员介绍',
            'nav-about': '关于我们',
            'nav-menu': '导航菜单',
            'search-placeholder': '请输入关键词',
            'search-btn': '搜索',
            'slide1-title': '攻防对抗与漏洞挖掘',
            'slide1-desc': '面向真实场景的安全研究与实践训练',
            'slide2-title': '数据安全与隐私保护',
            'slide2-desc': '访问控制 / 信息流控制 / 隐私计算',
            'slide3-title': '云数据安全与边云协同',
            'slide3-desc': '安全协议、形式化分析与系统安全评估',
            'home-intro-title': '课题组简介',
            'home-intro-text1': '本课题组面向国家网络空间安全重大战略需求，围绕"安全可信、攻防对抗、数据保护与治理"开展研究与人才培养，致力于提升复杂网络与信息系统的安全防护能力与风险治理水平。',
            'home-intro-text2': '研究工作强调理论方法与工程实践结合，通过构建可验证的安全机制、可解释的检测模型与可落地的防护体系，为政企单位、关键基础设施与新型应用场景提供技术支撑。',
            'more-info': '了解更多',
            'view-team': '查看团队',
            'research-card1-title': '网络攻防',
            'research-card1-desc': '漏洞分析、利用链构造、安全加固',
            'research-card2-title': '入侵检测',
            'research-card2-desc': '恶意样本分析、流量检测、溯源取证',
            'research-card3-title': '隐私保护',
            'research-card3-desc': '数据脱敏、访问控制、隐私计算',
            'research-card4-title': '应用安全',
            'research-card4-desc': '渗透测试、安全评估、防护体系',
            'related-links': '相关链接:',
            'nsfc': '国家自然科学基金委',
            'contact-info': '单位：吉首大学计算机科学与工程学院     地址：湖南省吉首市吉首大学计算机科学与工程学院 邮箱：（请填写邮箱）',
            'site-name': '吉首大学-网络空间安全课题组',
            'visit-count': '本站访问量：',
            'times': '次',
            'visitor-count': '访客数：',
            'people': '人',
            'intro-research-area': '研究领域',
            'intro-area-text1': '本课题组面向国家网络空间安全重大战略需求，围绕"安全可信、攻防对抗、数据保护与治理"开展研究与人才培养，致力于提升复杂网络与信息系统的安全防护能力与风险治理水平。研究工作强调理论方法与工程实践结合，通过构建可验证的安全机制、可解释的检测模型与可落地的防护体系，为政企单位、关键基础设施与新型应用场景提供技术支撑。',
            'intro-area-text2': 'Our group focuses on cybersecurity research and education, aiming at building secure and trustworthy systems for real-world applications. We work on both fundamental theories and practical techniques, including vulnerability analysis, attack detection and defense, privacy-preserving computation, and security evaluation of emerging systems.',
            'intro-research-directions': '研究方向',
            'direction1': '网络攻防与漏洞挖掘：漏洞分析、利用链构造、补丁对比与安全加固。',
            'direction2': '恶意代码与入侵检测：恶意样本分析、流量检测、日志审计与溯源取证。',
            'direction3': '密码学与隐私保护：数据脱敏、访问控制、隐私计算与安全多方协作。',
            'direction4': 'Web/应用安全：渗透测试、供应链安全、应用安全评估与防护体系建设。',
            'direction5': '数据安全与AI安全：对抗样本、模型安全、内容安全与风险治理。',
            'intro-team-members': '团队成员',
            'teacher-lu': '鲁金钿',
            'teacher-lu-info': '鲁金钿老师，男，中共党员，工学博士，硕士生导师；于中山大学计算机学院获得工学博士学位。现主要从事云数据安全和隐私保护、边云协同、信息流控制、访问控制、安全协议及形式化分析（主要为模型检测）等方面研究工作。先后在Computers & Security，IEEE Internet of Things Journal，IEEE Transactions on Network and Service Management，Transactions on Emerging Telecommunications Technologies，电子与信息学报，通信学报等国际（内）SCI/EI期刊及会议发表学术论文20多篇；参与国家重点研发计划、国家自然科学基金面上项目、广东省重点领域研究计划等项目多项；申请发明专利6项，获授权4项。担任IEEE Transactions on Network and Service Management，Computers & Security，Journal of Systems Architecture，The Journal of Supercomputing 等SCI期刊审稿人。',
            'view-all-members': '查看所有成员',
            'team-teacher': '导师',
            'team-graduate': '研究生',
            'teacher-title': '特聘教授 / 硕士生导师',
            'teacher-lu-name': '鲁金钿',
            'teacher-lu-bio': '工学博士，硕士生导师。主要从事云数据安全和隐私保护、边云协同、信息流控制、访问控制、安全协议及形式化分析等方面研究工作。',
            'teacher-email': '（请填写邮箱）',
            'member1-name': '成员A',
            'member1-title': '研究生',
            'member1-bio': '研究方向：入侵检测/恶意代码分析/漏洞挖掘等',
            'member1-email': '（请填写邮箱）',
            'member2-name': '成员B',
            'member2-title': '研究生',
            'member2-bio': '研究方向：Web安全/数据安全/隐私保护等',
            'member2-email': '（请填写邮箱）',
            'member3-name': '成员C',
            'member3-title': '研究生',
            'member3-bio': '研究方向：AI安全/安全评估等',
            'member3-email': '（请填写邮箱）',
            'member4-name': '成员D',
            'member4-title': '研究生',
            'member4-bio': '研究方向：网络安全/系统安全等',
            'member4-email': '（请填写邮箱）',
            'research-papers': '发表论文',
            'research-projects': '科研项目 / 竞赛成果',
            'research-awards': '获奖荣誉',
            'about-environment': '科研环境',
            'about-env-text': '课题组具备网络空间安全实验环境与攻防训练平台，支持漏洞复现、渗透测试、流量采集分析、日志审计与溯源取证等实验。可根据实际补充：服务器/虚拟化平台、流量镜像与分析系统、样本库、自动化测试工具链、CTF训练平台等。',
            'about-activities': '组内活动',
            'about-activities-text': '课题组定期开展读书报告、论文分享、技术讨论与攻防训练，积极参加学术会议与网络安全竞赛，鼓励学生在实践中提升能力。',
            'about-contact': '联系我们',
            'about-email': '　　电子邮件：<strong>（请填写鲁金钿老师/课题组邮箱）</strong>',
            'about-address': '　　通讯地址：<strong>湖南省吉首市吉首大学计算机科学与工程学院</strong>',
            'about-office': '　　办公室：<strong>工科楼B609</strong>'
        },
        en: {
            'welcome': 'Welcome to Jishou University Cybersecurity Research Group',
            'language': 'Language:',
            'site-title': 'Jishou University Cybersecurity Research Group',
            'nav-home': 'Home',
            'nav-intro': 'Introduction',
            'nav-research': 'Research',
            'nav-team': 'Team',
            'nav-about': 'About',
            'nav-menu': 'Menu',
            'search-placeholder': 'Enter keywords',
            'search-btn': 'Search',
            'slide1-title': 'Attack-Defense & Vulnerability Mining',
            'slide1-desc': 'Security research and practice training for real-world scenarios',
            'slide2-title': 'Data Security & Privacy Protection',
            'slide2-desc': 'Access Control / Information Flow Control / Privacy Computing',
            'slide3-title': 'Cloud Data Security & Edge-Cloud Collaboration',
            'slide3-desc': 'Security protocols, formal analysis and system security evaluation',
            'home-intro-title': 'Group Introduction',
            'home-intro-text1': 'Our group focuses on national cybersecurity strategic needs, conducting research and talent cultivation around "secure and trustworthy, attack-defense, data protection and governance", committed to improving the security protection capabilities and risk governance level of complex networks and information systems.',
            'home-intro-text2': 'Research work emphasizes the combination of theoretical methods and engineering practice, providing technical support for government and enterprise units, critical infrastructure and new application scenarios through building verifiable security mechanisms, interpretable detection models and implementable protection systems.',
            'more-info': 'Learn More',
            'view-team': 'View Team',
            'research-card1-title': 'Network Attack-Defense',
            'research-card1-desc': 'Vulnerability analysis, exploit chain construction, security hardening',
            'research-card2-title': 'Intrusion Detection',
            'research-card2-desc': 'Malware analysis, traffic detection, log audit and forensics',
            'research-card3-title': 'Privacy Protection',
            'research-card3-desc': 'Data desensitization, access control, privacy computing',
            'research-card4-title': 'Application Security',
            'research-card4-desc': 'Penetration testing, security assessment, protection systems',
            'related-links': 'Related Links:',
            'nsfc': 'National Natural Science Foundation of China',
            'contact-info': 'Unit: School of Computer Science and Engineering, Jishou University     Address: School of Computer Science and Engineering, Jishou University, Jishou City, Hunan Province  Email: (Please fill in email)',
            'site-name': 'Jishou University - Cybersecurity Research Group',
            'visit-count': 'Site visits:',
            'times': 'times',
            'visitor-count': 'Visitors:',
            'people': 'people',
            'intro-research-area': 'Research Areas',
            'intro-area-text1': 'Our group focuses on national cybersecurity strategic needs, conducting research and talent cultivation around "secure and trustworthy, attack-defense, data protection and governance", committed to improving the security protection capabilities and risk governance level of complex networks and information systems. Research work emphasizes the combination of theoretical methods and engineering practice, providing technical support through building verifiable security mechanisms, interpretable detection models and implementable protection systems.',
            'intro-area-text2': 'Our group focuses on cybersecurity research and education, aiming at building secure and trustworthy systems for real-world applications. We work on both fundamental theories and practical techniques, including vulnerability analysis, attack detection and defense, privacy-preserving computation, and security evaluation of emerging systems.',
            'intro-research-directions': 'Research Directions',
            'direction1': 'Network Attack-Defense & Vulnerability Mining: vulnerability analysis, exploit chain construction, patch comparison and security hardening.',
            'direction2': 'Malware & Intrusion Detection: malware analysis, traffic detection, log audit and forensics.',
            'direction3': 'Cryptography & Privacy Protection: data desensitization, access control, privacy computing and secure multi-party collaboration.',
            'direction4': 'Web/Application Security: penetration testing, supply chain security, application security assessment and protection system construction.',
            'direction5': 'Data Security & AI Security: adversarial samples, model security, content security and risk governance.',
            'intro-team-members': 'Team Members',
            'teacher-lu': 'Lu Jindian',
            'teacher-lu-info': 'Dr. Lu Jindian, male, CPC member, Ph.D. in Engineering, Master\'s supervisor. Obtained Ph.D. from School of Computer Science, Sun Yat-sen University. Mainly engaged in cloud data security and privacy protection, edge-cloud collaboration, information flow control, access control, security protocols and formal analysis (mainly model checking) and other research work.',
            'view-all-members': 'View All Members',
            'team-teacher': 'Supervisor',
            'team-graduate': 'Graduate Students',
            'teacher-title': 'Distinguished Professor / Master Supervisor',
            'teacher-lu-name': 'Lu Jindian',
            'teacher-lu-bio': 'Ph.D. in Engineering, Master\'s supervisor. Mainly engaged in cloud data security and privacy protection, edge-cloud collaboration, information flow control, access control, security protocols and formal analysis.',
            'teacher-email': '(Please fill in email)',
            'member1-name': 'Member A',
            'member1-title': 'Graduate Student',
            'member1-bio': 'Research: Intrusion Detection / Malware Analysis / Vulnerability Mining',
            'member1-email': '(Please fill in email)',
            'member2-name': 'Member B',
            'member2-title': 'Graduate Student',
            'member2-bio': 'Research: Web Security / Data Security / Privacy Protection',
            'member2-email': '(Please fill in email)',
            'member3-name': 'Member C',
            'member3-title': 'Graduate Student',
            'member3-bio': 'Research: AI Security / Security Assessment',
            'member3-email': '(Please fill in email)',
            'member4-name': 'Member D',
            'member4-title': 'Graduate Student',
            'member4-bio': 'Research: Network Security / System Security',
            'member4-email': '(Please fill in email)',
            'research-papers': 'Publications',
            'research-projects': 'Research Projects / Competition Results',
            'research-awards': 'Awards & Honors',
            'about-environment': 'Research Environment',
            'about-env-text': 'The group has a cybersecurity experimental environment and attack-defense training platform, supporting vulnerability reproduction, penetration testing, traffic collection and analysis, log audit and forensics experiments.',
            'about-activities': 'Group Activities',
            'about-activities-text': 'The group regularly conducts reading reports, paper sharing, technical discussions and attack-defense training, actively participates in academic conferences and cybersecurity competitions, and encourages students to improve their abilities in practice.',
            'about-contact': 'Contact Us',
            'about-email': 'Email: <strong>(Please fill in email)</strong>',
            'about-address': 'Address: <strong>School of Computer Science and Engineering, Jishou University, Jishou City, Hunan Province</strong>',
            'about-office': 'Office: <strong>Engineering Building B609</strong>'
        }
    },
    
    init: function() {
        this.currentLang = localStorage.getItem('lang') || 'zh';
        this.applyLanguage();
        this.bindEvents();
    },
    
    applyLanguage: function() {
        const lang = this.translations[this.currentLang];
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
        
        // 更新所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (lang[key]) {
                el.textContent = lang[key];
            }
        });
        
        // 更新 placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (lang[key]) {
                el.placeholder = lang[key];
            }
        });
        
        // 更新 value
        document.querySelectorAll('[data-i18n-value]').forEach(el => {
            const key = el.getAttribute('data-i18n-value');
            if (lang[key]) {
                el.value = lang[key];
            }
        });
        
        // 更新语言切换按钮状态
        document.querySelectorAll('.lang-switch').forEach(btn => {
            btn.classList.remove('active');
        });
        if (this.currentLang === 'zh') {
            document.getElementById('langZh')?.classList.add('active');
        } else {
            document.getElementById('langEn')?.classList.add('active');
        }
    },
    
    bindEvents: function() {
        const self = this;
        
        document.getElementById('langZh')?.addEventListener('click', function(e) {
            e.preventDefault();
            self.currentLang = 'zh';
            localStorage.setItem('lang', 'zh');
            self.applyLanguage();
        });
        
        document.getElementById('langEn')?.addEventListener('click', function(e) {
            e.preventDefault();
            self.currentLang = 'en';
            localStorage.setItem('lang', 'en');
            self.applyLanguage();
        });
    }
};

// 页面加载时初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}

