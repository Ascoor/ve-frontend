export const categories = [
  {
    id: 101,
    name: "النساء",
    dropdown: [
      { id: 102, name: "فساتين" },
      { id: 103, name: "قمصان" },
      { id: 104, name: "كنزات" },
      { id: 105, name: "جاكيتات" },
    ],
  },
  {
    id: 106,
    name: "الرجال",
    dropdown: [
      { id: 107, name: "تيشيرتات" },
      { id: 108, name: "قمصان" },
      { id: 109, name: "كنزات" },
      { id: 110, name: "جاكيتات" },
    ],
  },
  {
    id: 111,
    name: "الأطفال",
    dropdown: [
      { id: 112, name: "ملابس الأطفال" },
      { id: 113, name: "أحذية الأطفال" },
      { id: 114, name: "مستلزمات العناية بالأطفال" },
      { id: 115, name: "ألعاب الأطفال" },
    ],
  },
  {
    id: 116,
    name: "المنزل",
    dropdown: [
      { id: 117, name: "أدوات المطبخ" },
      { id: 118, name: "أقمشة منزلية" },
      { id: 119, name: "ديكورات المنزل" },
      { id: 120, name: "الإضاءة" },
    ],
  },
  {
    id: 121,
    name: "الكتب",
    dropdown: [
      { id: 122, name: "كتب الأطفال" },
      { id: 123, name: "الأدب والخيال" },
      { id: 124, name: "السير الذاتية والمذكرات" },
      { id: 125, name: "الأعمال والاقتصاد" },
    ],
  },
  {
    id: 126,
    name: "مستحضرات التجميل",
    dropdown: [
      { id: 127, name: "المكياج" },
      { id: 128, name: "العناية بالبشرة" },
      { id: 129, name: "العناية بالشعر" },
      { id: 130, name: "العطور ومزيلات العرق" },
    ],
  },
  {
    id: 131,
    name: "الأحذية والحقائب",
    dropdown: [
      { id: 132, name: "الأحذية الرياضية" },
      { id: 133, name: "الأحذية بكعب عالي" },
      { id: 134, name: "حقائب الظهر" },
      { id: 135, name: "الحقائب اليدوية" },
    ],
  },
  {
    id: 136,
    name: "الإكسسوارات",
    dropdown: [
      { id: 137, name: "الساعات" },
      { id: 138, name: "النظارات الشمسية" },
      { id: 139, name: "المجوهرات" },
      { id: 140, name: "المحافظ" },
    ],
  },
  {
    id: 141,
    name: "الإلكترونيات",
    dropdown: [
      { id: 142, name: "الهواتف المحمولة" },
      { id: 143, name: "التلفزيونات" },
      { id: 144, name: "الحواسيب المحمولة" },
      { id: 145, name: "الأجهزة المنزلية" },
    ],
  },
  {
    id: 146,
    name: "الرياضة",
    dropdown: [
      { id: 147, name: "معدات رياضية" },
      { id: 148, name: "معدات اللياقة البدنية" },
      { id: 149, name: "مكملات غذائية رياضية" },
      { id: 150, name: "ملابس رياضية" },
    ],
  },
];

export const brands = [
  { id: 201, name: "Nike", logo: "/assets/brands/nike.PNG" },
  { id: 202, name: "Apple", logo: "/assets/brands/apple.PNG" },
  { id: 203, name: "Adidas", logo: "/assets/brands/adidas.PNG" },
  { id: 204, name: "Puma", logo: "/assets/brands/puma.PNG" },
  { id: 205, name: "Amazon", logo: "/assets/brands/amazon.PNG" },
  { id: 206, name: "SHEIN", logo: "/assets/brands/shein.PNG" },
  { id: 207, name: "H&M", logo: "/assets/brands/h&m.PNG" },
  { id: 208, name: "D&G", logo: "/assets/brands/d&g.PNG" },
  { id: 209, name: "CHANEL", logo: "/assets/brands/channel.PNG" },
  { id: 210, name: "GUCCI", logo: "/assets/brands/gucci.PNG" },
  { id: 211, name: "ZARA", logo: "/assets/brands/zara.PNG" },
];


export const bestSellers = [
  {
    "id": 1,
    "title": "حقيبة ظهر قابلة للطي",
    "category": "اكسسوارات",
    "price": 79.99,
    "description": "حقيبة مثالية للاستخدام اليومي والمشي في الغابة. قم بتخزين الكمبيوتر المحمول (حتى 15 بوصة) في الجراب المبطن، حقيبتك اليومية.",
    "rating": {
      "rate": 4.8,
      "count": 250
    },
    "image": "/assets/products/accessores/bag.jpg"
  },
  {
    "id": 2,
    "category": "ملابس رجالية",
    "title": "تي شيرت رجالي كاجوال ممتاز بقصّة Slim Fit",
    "rating": {
      "rate": 4,
      "count": 259
    },
    "description": "تصميم ملائم لشكل الجسم، وأكمام طويلة من قماش راجلان بلون متباين، وفتحة هنلي بثلاثة أزرار، وقماش خفيف الوزن وناعم لارتداء مريح وجيد التهوية. وقمصان مخيطة بشكل متين مع رقبة مستديرة مصنوعة من أجل المتانة ومناسبة تمامًا للارتداء في الموضة غير الرسمية ومحبي البيسبول المتحمسين. يتضمن خط العنق المستدير على طراز هنلي فتحة بثلاثة أزرار.",
    "price": 22.3,
    "image": "/assets/products/clothes/shirt.jpg"
  },
  {
    "id": 3,
    "category": "ملابس رجالية",
    "title": "جاكيت رجالي قطني",
    "rating": {
      "rate": 5,
      "count": 500
    },
    "description": "سترات خارجية رائعة للربيع/الخريف/الشتاء، مناسبة للعديد من المناسبات، مثل العمل، والمشي لمسافات طويلة، والتخييم، وتسلق الجبال/الصخور، وركوب الدراجات، والسفر أو الأنشطة الخارجية الأخرى. اختيار هدية جيد لك أو لعضو عائلتك. حب دافئ للأب أو الزوج أو الابن في عيد الشكر أو عيد الميلاد هذا.",
    "price": 55.99,
    "image": "/assets/products/clothes/coat-2.jpg"
  },
  {
    "id": 4,
    "category": "ملابس رجالية",
    "title": "بنطلون رجالي كاجوال بقصّة Slim Fit",
    "rating": {
      "rate": 2,
      "count": 430
    },
    "description": "قد يختلف اللون قليلاً بين ما يظهر على الشاشة وفي الممارسة العملية. يرجى ملاحظة أن أشكال الجسم تختلف باختلاف الشخص، لذلك يجب مراجعة معلومات الحجم التفصيلية أدناه في وصف المنتج.",
    "price": 15.99,
    "image": "/assets/products/clothes/casual.jpg"
  },
  {
    "id": 5,
    "category": "مجوهرات",
    "title": "ميكروباف صغير الحجم من الذهب الصلب",
    "rating": {
      "rate": 0,
      "count": 70
    },
    "description": "الرضا مضمون. إرجاع أو استبدال أي طلب خلال 30 يومًا من تصميم مركز حفيظ وبيعه في الولايات المتحدة. الرضا مضمون. إرجاع أو استبدال أي طلب خلال 30 يومًا.",
    "price": 168.0,
    "image": "/assets/products/jewelry/debla.jpg"
  },
  {
    "id": 6,
    "category": "مجوهرات",
    "title": "الأميرة المطلية بالذهب الأبيض",
    "rating": {
      "rate": 3,
      "count": 400
    },
    "description": "خاتم وعد كلاسيكي من سوليتير الماسي لخطوبة الزفاف من أجلها. هدايا لتفسد حبك أكثر للخطوبة، الزفاف، الذكرى السنوية، عيد الحب...",
    "price": 9.99,
    "image": "/assets/products/jewelry/w-ring.jpg"
  },
  {
    "id": 7,
    "category": "مجوهرات",
    "title": "بومة مثقوبة مطلية بالذهب الوردي من الفولاذ المقاوم للصدأ مزدوجة",
    "rating": {
      "rate": 0,
      "count": 100
    },
    "description": "أقراط أذن مزدوجة مطلية بالذهب الوردي، مصنوعة من الفولاذ المقاوم للصدأ 316L",
    "price": 10.99,
    "image": "/assets/products/jewelry/g-ring.jpg"
  },
  {
    "id": 8,
    "category": "مجوهرات",
    "title": "سوار جون هاردي ليجندز ناغا الذهبي والفضي بسلسلة التنين للنساء",
    "rating": {
      "rate": 4,
      "count": 100
    },
    "description": "من مجموعة الأساطير لدينا، استوحينا تصميم Naga من تنين الماء الأسطوري الذي يحمي لؤلؤ المحيط. ارتدِ هذا الخاتم مواجهًا للداخل لتنعم بالحب والوفرة، أو مواجهًا للخارج للحماية.",
    "price": 10.99,
    "image": "/assets/products/jewelry/ring.jpg"
  }
];
// data/womenProducts.js
export const womenProducts = [
  {
    "id": 9,
    "category": "ملابس نسائية",
    "title": "معاطف شتوية 3 في 1 من BIYLACLESEN للنساء للتزلج على الجليد",
    "rating": {
      "rate": 3,
      "count": 235
    },
    "description": "ملحوظة: الجاكيت بمقاس قياسي أمريكي، يرجى اختيار المقاس كملابسك المعتادة. الخامة: 100% بوليستر؛ بطانة قابلة للفصل القماش: صوف دافئ. بطانة وظيفية قابلة للفصل: لطيفة على البشرة، خفيفة الوزن ودافئة. سترة بطانة بياقة واقفة، تبقيك دافئًا في الطقس البارد. جيوب بسحّاب: جيبان لليدين بسحّاب، وجيبان بسحّاب على الصدر (يكفي لحفظ البطاقات أو المفاتيح) وجيب مخفي بالداخل. جيوب لليدين بسحّاب وجيب مخفي تحافظ على أغراضك آمنة. تصميم إنساني: غطاء رأس قابل للتعديل والفصل وأساور قابلة للتعديل لمنع الرياح والماء، لملاءمة مريحة. تصميم قابل للفصل 3 في 1 يوفر المزيد من الراحة، يمكنك فصل المعطف والجزء الداخلي حسب الحاجة، أو ارتداؤه معًا. مناسب لفصول مختلفة ويساعدك على التكيف مع المناخات المختلفة.",
    "price": 56.99,
    "image": "/assets/products/slide-clothes/slide-coat.jpg"
  },
  {
    "id": 10,
    "category": "ملابس نسائية",
    "title": "سترة موتو بايكر النسائية من الجلد الصناعي بغطاء للرأس وقابلة للإزالة من Lock and Love",
    "rating": {
      "rate": 5,  // "NaN" تم تحويله إلى 0
      "count": 340
    },
    "description": "100% بولي يوريثين (الغلاف) 100% بوليستر (البطانة) 75% بوليستر 25% قطن (سترة)، مادة جلدية صناعية للأناقة والراحة / جيبان في الأمام، سترة من الجلد الصناعي بغطاء رأس 2 مقابل واحد، تفاصيل أزرار على الخصر / خياطة تفصيلية على الجانبين، يُغسل يدويًا فقط / لا تستخدم المبيضات / يُجفف بالتعليق / لا يُكوى",
    "price": 29.95,
    "image": "/assets/products/slide-clothes/slide-coat2.jpg"
  },
  {
    "id": 11,
    "category": "ملابس نسائية",
    "title": "سترة واقية من المطر للنساء، معاطف مطر مخططة للتسلق",
    "rating": {
      "rate": 4,  // "NaN" تم تحويله إلى 0
      "count": 679
    },
    "description": "خفيف الوزن مثالي للرحلات أو الملابس غير الرسمية ---أكمام طويلة مع غطاء للرأس، تصميم خصر برباط قابل للتعديل. معطف واق من المطر بأزرار وسحاب أمامي، مبطن بالكامل بخطوط، ويحتوي المعطف على جيبين جانبيين بحجم جيد لحمل جميع أنواع الأشياء، ويغطي الوركين، والغطاء واسع ولكنه لا يبالغ فيه. غطاء مبطن بالقطن مرفق مع أربطة قابلة للتعديل يمنحه مظهرًا أنيقًا حقيقيًا.",
    "price": 39.99,
    "image": "/assets/products/slide-clothes/slide-bluecoat.jpg"
  },
  {
    "id": 12,
    "category": "ملابس نسائية",
    "title": "قميص نسائي من MBJ بأكمام قصيرة ورقبة على شكل حرف V",
    "rating": {
      "rate": 3,  // "NaN" تم تحويله إلى 0
      "count": 130
    },
    "description": "95% رايون 5% سباندكس، مصنوع في الولايات المتحدة الأمريكية أو مستورد، لا تستخدم المبيضات، نسيج خفيف الوزن مع تمدد رائع للراحة، مضلع على الأكمام وخط الرقبة / خياطة مزدوجة على الحاشية السفلية",
    "price": 9.85,
    "image": "/assets/products/slide-clothes/slide-whiteshert.jpg"
  },
  {
    "id": 13,
    "category": "ملابس نسائية",
    "title": "قميص أوبنا النسائي ذو الأكمام القصيرة للترطيب",
    "rating": {
      "rate": 1,  // "NaN" تم تحويله إلى 0
      "count": 146
    },
    "description": "100% بوليستر، قابل للغسيل في الغسالة، 100% بوليستر كاتيوني متشابك، قابل للغسيل في الغسالة ومُقلص مسبقًا للحصول على ملاءمة رائعة، خفيف الوزن، واسع وجيد التهوية مع نسيج يمتص الرطوبة مما يساعد على إبعاد الرطوبة، نسيج خفيف الوزن ناعم مع طوق مريح على شكل حرف V وملاءمة أنحف، يوفر صورة ظلية أنيقة وأكثر أنوثة وراحة إضافية",
    "price": 7.95,
    "image": "/assets/products/slide-clothes/slide-redshert.jpg"
  },
  {
    "id": 14,
    "category": "ملابس نسائية",
    "title": "تي شيرت نسائي قصير من القطن من DANVOUY",
    "rating": {
      "rate": 2,  // "NaN" تم تحويله إلى 0
      "count": 145
    },
    "description": "95% قطن، 5% سباندكس، المميزات: كاجوال، أكمام قصيرة، طباعة حروف، رقبة على شكل حرف V، تي شيرت عصري، القماش ناعم وبه بعض المرونة، المناسبة: كاجوال/مكتب/شاطئ/مدرسة/منزل/شارع. الموسم: الربيع، الصيف، الخريف، الشتاء.",
    "price": 12.99,
    "image": "/assets/products/slide-clothes/slide-collection.jpg"
  }
];
