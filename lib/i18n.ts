export type Language = "en" | "ar";

export const english = {
  projects: "Projects", experience: "Experience", skills: "Skills", about: "About", contact: "Contact",
  downloadCV: "Download CV", menuOpen: "Open navigation", menuClose: "Close navigation",
  lightTheme: "Light theme", darkTheme: "Dark theme", switchArabic: "Switch to Arabic", switchEnglish: "Switch to English",
  skip: "Skip to content", home: "Ahmed Hamdi, back to top", viewProjects: "View Projects", contactMe: "Contact Me",
  intro: "Building scalable web applications from UI to API with React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
  scroll: "Scroll to explore", technicalSkills: "Technical Skills", technologies: "Technologies I work with",
  selectedProjects: "Selected Projects", built: "Things I've built", featured: "Featured + pairs", compact: "Compact rows",
  layout: "Project layout", live: "Live project", source: "GitHub", openProject: "Open project", showImage: "Show image",
  work: "Where I've worked", aboutMe: "About Me", location: "Location", mainTech: "Main Technologies",
  aboutText: "I'm Ahmed Hamdi, a Full Stack, MERN Stack, and Frontend Developer focused on React, Next.js, TypeScript, Node.js, Express.js, and MongoDB. I build responsive interfaces, integrate APIs, implement authentication flows, and develop maintainable full-stack applications.",
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
  intro: "أطوّر تطبيقات ويب قابلة للتوسع، من واجهة المستخدم إلى الـAPI، باستخدام React وNext.js وTypeScript وNode.js وExpress.js وMongoDB.",
  scroll: "اكتشف المزيد", technicalSkills: "المهارات التقنية", technologies: "التقنيات التي أعمل بها",
  selectedProjects: "مشاريع مختارة", built: "مشاريع طوّرتها", featured: "مشروع مميز + أزواج", compact: "صفوف مدمجة",
  layout: "طريقة عرض المشاريع", live: "عرض المشروع", source: "GitHub", openProject: "افتح المشروع", showImage: "عرض الصورة",
  work: "خبراتي العملية", aboutMe: "عني", location: "الموقع", mainTech: "التقنيات الأساسية",
  aboutText: "أنا أحمد حمدي، مطوّر Full Stack وMERN Stack وFrontend. أعمل باستخدام React وNext.js وTypeScript وNode.js وExpress.js وMongoDB، وأطوّر واجهات متجاوبة، وأربط الخدمات والـAPIs، وأطبّق أنظمة تسجيل الدخول، وأبني تطبيقات ويب متكاملة يسهل تطويرها وصيانتها.",
  cairo: "القاهرة، مصر", education: "التعليم والتدريب", certifications: "الشهادات والتعلّم",
  contactTitle: "خلّينا نسهّل الخطوة الجاية.", email: "البريد الإلكتروني", whatsapp: "افتح محادثة واتساب مع أحمد حمدي",
  backTop: "العودة للأعلى", roles: "Full Stack · MERN Stack · Frontend", unavailable: "معاينة المشروع",
};

export const arabicProjectSummaries = [
  "متجر بقالة عربي مع مزامنة سلة الزائر مع الحساب، ونظام مكافآت، وطلب عبر واتساب، ولوحة إدارة.",
  "منصة لإدارة المشاريع متعددة المساحات، مع صلاحيات المستخدمين، والتعاون المباشر، وKanban، والتقويم، والجداول الزمنية والتحليلات.",
  "منصة توظيف تربط أصحاب العمل بالمتقدمين من خلال الوظائف، ومتابعة الطلبات، والتحديثات المباشرة.",
  "تطوير الواجهة الأمامية لمتجر متعدد اللغات ولوحة إدارة، مع الدفع عبر Stripe وتحليلات المبيعات.",
  "تطبيق لياقة لاكتشاف خطط التمارين والوصفات الصحية وجلسات التدريب المنظمة.",
  "منصة اختبارات محددة الوقت، مع تسجيل الدخول، والنتائج الفورية، ودعم لغات متعددة.",
  "تجربة تسوّق تشمل تصفية المنتجات، والمفضلة، وتحديث السلة مباشرة، وتسجيل الدخول، والدفع عبر Stripe.",
];
export const arabicExperienceSummaries = [
  "تطوير منصة بقالة عربية متكاملة، مع التركيز على سير العمل الفعلي وتجربة استخدام سلسة.",
  "تطوير منصة SaaS متعددة المساحات لجامعة الإمام عبدالرحمن بن فيصل، لتوحيد متابعة المشاريع وحوكمتها بين الأقسام.",
  "تطوير تطبيقات متجاوبة باستخدام React.js وNext.js وTypeScript، وتطبيق تسجيل دخول آمن باستخدام NextAuth وJWT، والتحقق من النماذج باستخدام Zod وReact Hook Form، والعمل ضمن فريق Agile باستخدام Git.",
];
export const arabicCertificationDescriptions = [
  "دبلومة مكثفة في تطوير الواجهات الأمامية، تشمل هندسة الواجهات الحديثة، وبناء المكونات، وإدارة الحالة، وتسجيل الدخول، والتحقق من النماذج، والتصميم المتجاوب.",
  "مسار مكثف لتطوير التطبيقات المتكاملة، يركّز على تطوير APIs، ونمذجة قواعد MongoDB، وهندسة Express.js، وأدوات React من خلال مشاريع عملية.",
  "دورة لتطوير الخلفية البرمجية، تشمل هندسة Node.js المتقدمة، وNestJS، وتصميم قواعد PostgreSQL، وGraphQL APIs، وأمان تطبيقات الويب.",
];
