import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources: Resource = {
    en: {
        general: {
            cv: 'CV',
            skills: 'Skills',
            see_more: 'See More..',
        },
        header: {
            nav_hero: 'Hero',
            nav_about: 'About',
            nav_projects: 'Projects',
            nav_testimonials: 'Testimonials',
            nav_contact: 'Contact',
        },
        hero: {
            info: {
                username: 'AbdessadekDev',
                name: 'Abdessadek Sbaai',
                brief: 'I am a full-stack developer passionate about building innovative applications with React.js, Laravel, Node.js, and MongoDB, always striving for clean and efficient code',
                description: 'I am a full-stack developer with hands-on experience across the modern tech stack, including React.js, Laravel, Node.js, MongoDB, and MySQL. From intuitive front-end interfaces to robust back-end solutions,💻 I believe in writing clean, efficient code and grounding my work in strong fundamentals. With a constant drive to learn and improve, I am passionate about turning complex challenges into simple, effective solutions.🌍 Based in Morocco, I am motivated by a blend of creativity, technical skill, and the desire to bring ideas to life. Always open to collaborating and sharing knowledge.',
            },
        },
        about: {
            who_am_i: 'Who Am I?',
        },
        testimonials: {
            ahmed: {
                name: 'Ahmed',
                feedback: 'Working with Abdo was a game-changer for our project. His frontend expertise brought our vision to life with incredible attention to detail!',
            },
            fatima: {
                name: 'Fatima',
                feedback: 'Abdessadek Sbaai is a backend wizard! The system he developed was not only efficient but also scalable and easy to maintain.',
            },
            hamid: {
                name: 'Hamid',
                feedback: 'A. Sbaai’s ability to integrate frontend designs with backend functionality is second to none. The result was a flawless user experience!',
            },
            joud: {
                name: 'Joud',
                feedback: 'Abdo is the developer you want on your team. His professionalism, dedication, and technical skills are unmatched. Highly recommend!',
            },
        },
    },
    ar: {
        general: {
            cv: 'السيرة الذاتية',
            skills: 'مهارات',
            see_more: 'المزيد..',
        },
        header: {
            nav_hero: 'رئيسية',
            nav_about: 'عني',
            nav_projects: 'مشاريع',
            nav_testimonials: 'شهادات',
            nav_contact: 'اتصال',
        },
        hero: {
            info: {
                username: 'عبدالصاق ديف',
                name: 'عبدالصادق السباعي',
                brief: 'أنا مطور Full-Stack شغوف ببناء تطبيقات مبتكرة باستخدام React.js، Laravel، Node.js، وMongoDB، وأسعى دائمًا لكتابة كود نظيف وفعال',
                description: '👨‍💻 أنا مطور Full-Stack أمتلك خبرة عملية مع أحدث تقنيات التطوير، بما في ذلك React.js، Laravel، Node.js، MongoDB، وMySQL. من واجهات أمامية سلسة إلى حلول خلفية قوية،💻 أؤمن بكتابة كود نظيف وفعال يعتمد على أسس قوية. مدفوعًا دائمًا للتعلم والتطوير، أنا شغوف بتحويل التحديات المعقدة إلى حلول بسيطة وفعالة.🌍 أعيش في المغرب، وأستلهم الإبداع من مزيج بين المهارات التقنية والرغبة في تحويل الأفكار إلى واقع. دائمًا منفتح على التعاون ومشاركة المعرفة.',
            },
        },
        about: {
            who_am_i: 'من أكون ؟',
        },
        testimonials: {
            ahmed: {
                name: 'أحمــــد',
                feedback: 'العمل مع عبدو كان نقطة تحول في مشروعنا. خبرته في الواجهة الأمامية جلبت رؤيتنا إلى الحياة مع اهتمام مذهل بالتفاصيل!',
            },
            fatima: {
                name: 'فــــاطمة',
                feedback: 'عبدالصادق السباعي ساحر في تطوير الخلفية! النظام الذي طوّره كان فعالاً، قابلاً للتوسع وسهل الصيانة.',
            },
            hamid: {
                name: 'حميــــــد',
                feedback: 'قدرة عبدالصادق السباعي على دمج تصميمات الواجهة الأمامية مع وظائف الخلفية لا مثيل لها. والنتيجة كانت تجربة مستخدم سلسة!',
            },
            joud: {
                name: 'جــــــود',
                feedback: 'عبدو هو المطور الذي تريده في فريقك. احترافيته، تفانيه، ومهاراته التقنية لا تُضاهى. أوصي به بشدة!',
            },
        },
    },
    fr: {
        general: {
            cv: 'CV',
            skills: 'Compétance',
            see_more: 'Voir plus..',
        },
        header: {
            nav_hero: 'Accueil',
            nav_about: 'À propos',
            nav_projects: 'Projets',
            nav_testimonials: 'Témoignages',
            nav_contact: 'Contact',
        },
        hero: {
            info: {
                username: 'AbdessadekDev',
                name: 'Abdessadek Sbaai',
                brief: 'Je suis un développeur full-stack passionné par la création d’applications innovantes avec React.js, Laravel, Node.js et MongoDB, en cherchant toujours à écrire du code propre et efficace',
                description: '👨‍💻 Je suis un développeur full-stack avec une expérience pratique dans les technologies modernes, notamment React.js, Laravel, Node.js, MongoDB et MySQL. Des interfaces front-end intuitives aux solutions back-end robustes,💻 Je crois en l\'écriture d\'un code propre et efficace basé sur des fondamentaux solides. Toujours motivé pour apprendre et m\'améliorer, je suis passionné par la transformation des défis complexes en solutions simples et efficaces.🌍 Basé au Maroc, je suis inspiré par un mélange de créativité, de compétences techniques et du désir de concrétiser des idées. Toujours ouvert à la collaboration et au partage de connaissances.',
            },
        },
        about: {
            who_am_i: 'Que Suis-je ?',
        },
        testimonials: {
            ahmed: {
                name: 'Ahmed',
                feedback: 'Travailler avec Abdo a complètement transformé notre projet. Son expertise en frontend a donné vie à notre vision avec une attention incroyable aux détails!',
            },
            fatima: {
                name: 'Fatima',
                feedback: 'Abdessadek Sbaai est un magicien du backend! Le système qu’il a développé était non seulement efficace, mais aussi évolutif et facile à maintenir.',
            },
            hamid: {
                name: 'Hamid',
                feedback: 'La capacité de A. Sbaai à intégrer les designs frontend avec la fonctionnalité backend est inégalée. Le résultat était une expérience utilisateur parfaite!',
            },
            joud: {
                name: 'Joud',
                feedback: 'Abdo est le développeur que vous voulez dans votre équipe. Son professionnalisme, son dévouement et ses compétences techniques sont incomparables. Je le recommande vivement!',
            },
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;