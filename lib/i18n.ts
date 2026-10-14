export type Language = "en" | "ar";

export const english = {
  projects: "Projects", experience: "Experience", skills: "Skills", about: "About", contact: "Contact",
  downloadCV: "Download CV", menuOpen: "Open navigation", menuClose: "Close navigation",
  lightTheme: "Light theme", darkTheme: "Dark theme", switchArabic: "Switch to Arabic", switchEnglish: "Switch to English",
  skip: "Skip to content", home: "Ahmed Hamdi, back to top", viewProjects: "View Projects", contactMe: "Contact Me",
  intro: "Building modern, scalable web applications with React, Next.js, TypeScript, Node.js, and MongoDB. From responsive interfaces to secure APIs and complete full-stack solutions.",
  scroll: "Scroll to explore", technicalSkills: "Technical Skills", technologies: "Technologies I work with",
  selectedProjects: "Selected Projects", built: "Things I've built", featured: "Featured + pairs", compact: "Compact rows",
  layout: "Project layout", live: "Live project", source: "GitHub", openProject: "Open project", showImage: "Show image",
  work: "Where I've worked", aboutMe: "About Me", location: "Location", mainTech: "Main Technologies",
  aboutText: "I'm Ahmed Hamdi, a Full Stack Developer specializing in the MERN stack, React, Next.js, and TypeScript.\n\nI've worked on freelance and team-based projects, building e-commerce platforms, SaaS applications, admin dashboards, and REST APIs.\n\nI focus on writing maintainable code, solving real-world problems, and delivering reliable, user-friendly web applications.",
  cairo: "Cairo, Egypt", education: "Education & Training", certifications: "Certifications & Learning",
  contactTitle: "Let's make the next step easy.", email: "Email", whatsapp: "Open WhatsApp chat with Ahmed Hamdi",
  backTop: "Back to top", roles: "Full Stack · MERN Stack · Frontend", unavailable: "Project preview",
} as const;
export type TranslationKey = keyof typeof english;
export function isolateLatin(text: string): string {
  return text.replace(/[A-Za-z][A-Za-z0-9.+/-]*(?: [A-Za-z][A-Za-z0-9.+/-]*)*/g, value => `\u2066${value}\u2069`);
}
export const arabic: Record<TranslationKey, string> = {
  projects: "المشاريع", experience: "الخبرات", skills: "المهارات", about: "عني", contact: "تواصل معي",
  downloadCV: "تحميل السيرة الذاتية", menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة",
  lightTheme: "المظهر الفاتح", darkTheme: "المظهر الداكن", switchArabic: "التبديل إلى العربية", switchEnglish: "Switch to English",
  skip: "انتقل إلى المحتوى", home: "أحمد حمدي، العودة للأعلى", viewProjects: "شاهد المشاريع", contactMe: "تواصل معي",
  intro: "أطوّر تطبيقات ويب حديثة وقابلة للتوسع باستخدام React وNext.js وTypeScript وNode.js وMongoDB، من بناء واجهات متجاوبة إلى تطوير APIs آمنة وحلول Full Stack متكاملة.",
  scroll: "اكتشف المزيد", technicalSkills: "المهارات التقنية", technologies: "التقنيات التي أعمل بها",
  selectedProjects: "مشاريع مختارة", built: "مشاريع طوّرتها", featured: "مشروع مميز + أزواج", compact: "صفوف مدمجة",
  layout: "طريقة عرض المشاريع", live: "عرض المشروع", source: "GitHub", openProject: "افتح المشروع", showImage: "عرض الصورة",
  work: "خبراتي العملية", aboutMe: "عني", location: "الموقع", mainTech: "التقنيات الأساسية",
  aboutText: "أنا أحمد حمدي، مطوّر Full Stack متخصص في MERN Stack وReact وNext.js وTypeScript.\n\nاشتغلت على مشاريع Freelance ومشاريع ضمن فرق تطوير، منها منصات تجارة إلكترونية، وأنظمة SaaS، ولوحات تحكم، وخدمات REST APIs.\n\nبركز على كتابة كود منظم وقابل للصيانة، وحل المشكلات العملية، وتطوير تطبيقات ويب مستقرة وسهلة الاستخدام.",
  cairo: "القاهرة، مصر", education: "التعليم والتدريب", certifications: "الشهادات والتعلّم",
  contactTitle: "خلّينا نسهّل الخطوة الجاية.", email: "البريد الإلكتروني", whatsapp: "افتح محادثة واتساب مع أحمد حمدي",
  backTop: "العودة للأعلى", roles: "Full Stack · MERN Stack · Frontend", unavailable: "معاينة المشروع",
};

export const arabicProjectSummaries = [
  "منصة تجارة إلكترونية متكاملة للبقالة، تشمل مزامنة سلة التسوق، ونظام مكافآت، والطلب عبر واتساب، وإدارة المخزون، ولوحة تحكم بصلاحيات متعددة.",
  "منصة SaaS متعددة المساحات لإدارة المشاريع والفرق، تشمل صلاحيات متقدمة، وتعاونًا لحظيًا، ولوحات Kanban، وإدارة المهام، والجداول الزمنية، وتحليلات أداء المشاريع.",
  "منصة توظيف متكاملة تربط أصحاب العمل بالباحثين عن فرص العمل، مع إدارة الوظائف والطلبات، وصلاحيات المستخدمين، والمحافظ، والإشعارات اللحظية، وتسجيل الحضور عبر QR Code.",
  "طوّرت الواجهة الأمامية لمتجر إلكتروني متعدد اللغات ولوحة إدارة باستخدام Next.js وTypeScript، مع دمج تسجيل الدخول والدفع عبر Stripe وإدارة المنتجات وتحليلات المبيعات.",
  "تطبيق لياقة لاكتشاف خطط التمارين والوصفات الصحية وجلسات التدريب المنظمة.",
  "منصة اختبارات محددة الوقت، مع تسجيل الدخول، والنتائج الفورية، ودعم لغات متعددة.",
  "تجربة تسوّق تشمل تصفية المنتجات، والمفضلة، وتحديث السلة مباشرة، وتسجيل الدخول، والدفع عبر Stripe.",
];
export const arabicExperienceSummaries = [
  "أطوّر تطبيقات Full Stack لعملاء مستقلين، منها منصات تجارة إلكترونية، وأنظمة لإدارة المشاريع، وواجهات APIs آمنة، ولوحات تحكم.",
  "طوّرت منصة تجارة إلكترونية متكاملة للبقالة، تشمل مزامنة سلة التسوق، ونظام مكافآت، وإدارة المخزون، ولوحة تحكم بصلاحيات متعددة.",
  "طوّرت منصة SaaS متعددة المساحات لمتابعة مشاريع الأقسام في جامعة الإمام عبدالرحمن بن فيصل، مع التعاون بين الفرق، وإدارة الصلاحيات، وتحليلات الأداء، ضمن مشروع مستقل.",
  "طوّرت تطبيقات متجاوبة باستخدام React وNext.js وTypeScript، مع دمج تسجيل الدخول، والتعامل مع APIs، والتحقق من النماذج.",
];
export const arabicCertificationDescriptions = [
  "دبلومة مكثفة في تطوير الواجهات الأمامية، تشمل هندسة الواجهات الحديثة، وبناء المكونات، وإدارة الحالة، وتسجيل الدخول، والتحقق من النماذج، والتصميم المتجاوب.",
  "مسار مكثف لتطوير التطبيقات المتكاملة، يركّز على تطوير APIs، ونمذجة قواعد MongoDB، وهندسة Express.js، وأدوات React من خلال مشاريع عملية.",
  "دورة لتطوير الخلفية البرمجية، تشمل هندسة Node.js المتقدمة، وNestJS، وتصميم قواعد PostgreSQL، وGraphQL APIs، وأمان تطبيقات الويب.",
];
