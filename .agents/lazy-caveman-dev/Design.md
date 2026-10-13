# GLOBAL DESIGN SYSTEM
# Anti-Vibe-Coded Web Design System
# Tailwind CSS v4 Edition

## 1. PERAN DAN FILOSOFI

Bertindak sebagai Principal UI/UX Designer dan Frontend Architect.

Tugas utama adalah menghasilkan antarmuka web yang memiliki hierarki visual jelas, konsisten, responsif, mudah digunakan, mudah dibaca, dan memiliki identitas visual yang berasal dari brand atau konteks project.

Design system ini bersifat GLOBAL.

Aturan dalam file ini berlaku untuk seluruh project, termasuk tetapi tidak terbatas pada:

- Website sekolah.
- Website madrasah.
- Website desa.
- Website organisasi.
- Website perusahaan.
- Website UMKM.
- Landing page.
- Portfolio.
- Website produk.
- Website layanan.
- Dashboard.
- CMS.
- Aplikasi web.

Jangan mengasumsikan jenis organisasi, industri, warna brand, gaya komunikasi, atau karakter visual tertentu kecuali informasi tersebut diberikan melalui brand.md atau brief project.

Hukum utama:

Setiap warna, ukuran, spacing, radius, shadow, typography, layout, dan elemen interaksi harus memiliki alasan fungsional.

Desain harus melayani konten, tujuan pengguna, identitas brand, dan konteks project.

Jangan membuat desain hanya karena sebuah pola sedang populer.

Jangan membuat interface yang terlihat seperti template AI generik.


## 2. HIERARKI SUMBER DESAIN

Gunakan sumber berikut dengan urutan prioritas:

1. Brief project.
2. brand.md.
3. design.md.
4. Framework dan teknologi project.
5. Default browser behavior.

Jika terdapat konflik antara design.md dan brand.md, gunakan brand.md untuk keputusan identitas visual.

Jika terdapat konflik antara design.md dan kebutuhan usability atau accessibility, prioritaskan usability dan accessibility.

Jangan mengubah identitas brand hanya untuk mengikuti tren desain.


## 3. PEMISAHAN DESIGN SYSTEM DAN BRAND SYSTEM

design.md mengatur bagaimana interface dibangun.

brand.md mengatur bagaimana interface tersebut terlihat dan terasa sebagai sebuah brand.

design.md mengatur:

- Layout.
- Spacing.
- Typography roles.
- Color roles.
- Radius.
- Border.
- Shadow.
- Components.
- Interaction.
- Animation.
- Responsive behavior.
- Accessibility.
- Image treatment.
- Design quality.
- Anti-vibe-coded rules.

brand.md mengatur:

- Nama brand.
- Brand personality.
- Primary color.
- Secondary color.
- Background color.
- Typography.
- Logo.
- Photography style.
- Illustration style.
- Decorative language.
- Content tone.
- Brand-specific components.

Jangan memasukkan warna brand tertentu ke dalam design.md.

Jangan memasukkan nama organisasi tertentu ke dalam design.md.

Jangan membuat design.md bergantung pada satu jenis industri.


## 4. TAILWIND CSS v4

Gunakan pendekatan CSS-first Tailwind CSS v4.

Gunakan @theme untuk mendefinisikan design tokens.

Jangan membuat konfigurasi Tailwind lama jika project menggunakan Tailwind CSS v4.

Contoh struktur:

@import "tailwindcss";

@theme {

  --color-primary: ...;
  --color-primary-hover: ...;
  --color-primary-light: ...;

  --color-secondary: ...;
  --color-secondary-hover: ...;
  --color-secondary-light: ...;

  --color-background: ...;
  --color-surface: ...;
  --color-surface-subtle: ...;

  --color-heading: ...;
  --color-body: ...;
  --color-muted: ...;

  --color-border: ...;
  --color-border-subtle: ...;

  --font-display: ...;
  --font-heading: ...;
  --font-body: ...;
  --font-accent: ...;

  --radius-subtle: ...;
  --radius-card: ...;
  --radius-section: ...;
  --radius-pill: ...;

  --shadow-hairline: ...;
  --shadow-card: ...;
  --shadow-dropdown: ...;
}

Nilai aktual token mengikuti brand.md.


## 5. SEMANTIC COLOR SYSTEM

Gunakan semantic color token.

Jangan memilih warna berdasarkan nama warna.

Warna harus memiliki fungsi.

Primary:

Digunakan untuk identitas utama dan tindakan utama.

Contoh:

- CTA utama.
- Active navigation.
- Link utama.
- Button utama.
- Highlight penting.
- Interactive state.

Gunakan:

bg-primary
text-primary
border-primary
hover:bg-primary-hover


Primary Hover:

Digunakan untuk state hover atau interaction pada elemen primary.


Primary Light:

Digunakan untuk background lembut yang berhubungan dengan primary.

Contoh:

- Badge.
- Informasi ringan.
- Selected state.
- Background kecil.


Secondary:

Digunakan sebagai aksen visual atau secondary action.

Jangan menjadikan secondary sebagai warna dominan pada seluruh halaman.


Secondary Hover:

Digunakan untuk state hover secondary.


Secondary Light:

Digunakan sebagai tint atau background lembut.


Background:

Digunakan sebagai latar utama halaman.

Background harus memiliki kontras yang cukup terhadap surface.


Surface:

Digunakan untuk:

- Card.
- Modal.
- Dropdown.
- Navigation.
- Content container.
- Form container.


Surface Subtle:

Digunakan untuk:

- Section alternatif.
- Table header.
- Area grouping.
- Background sekunder.


Heading:

Digunakan untuk:

- H1.
- H2.
- H3.
- Heading card.
- Label penting.


Body:

Digunakan untuk:

- Paragraph.
- Description.
- Informasi utama.


Muted:

Digunakan untuk:

- Metadata.
- Caption.
- Supporting information.
- Timestamp.
- Secondary information.


Border:

Digunakan untuk:

- Divider.
- Card border.
- Input border.
- Table border.


Border Subtle:

Digunakan untuk pembatas dengan tingkat visual yang lebih rendah.


## 6. ATURAN WARNA

Gunakan semantic token.

Hindari:

bg-[#123456]
text-[#123456]
border-[#123456]

jika warna tersebut sebenarnya merupakan bagian dari sistem brand.

Prioritaskan:

bg-primary
text-primary
bg-secondary
text-heading
text-body
text-muted
bg-surface
bg-surface-subtle
border-border

Arbitrary color hanya boleh digunakan jika benar-benar dibutuhkan untuk kebutuhan khusus yang tidak dapat direpresentasikan melalui design token.

Jangan membuat banyak warna baru tanpa alasan.

Satu interface harus memiliki hierarki warna yang jelas.

Jangan menggunakan terlalu banyak warna dengan tingkat visual yang sama.

Jangan membuat semua elemen terlihat penting.


## 7. COLOR CONTRAST

Semua teks utama harus memiliki kontras yang memadai terhadap background.

Prioritaskan readability daripada estetika.

Teks penting jangan menggunakan warna muted.

Jangan menggunakan warna abu-abu terlalu terang untuk informasi yang harus dibaca.

Pastikan:

- Heading mudah dibaca.
- Body text mudah dibaca.
- Button memiliki kontras.
- Link dapat dikenali.
- Form label jelas.
- Placeholder tidak menjadi satu-satunya indikator informasi.


## 8. TYPOGRAPHY SYSTEM

Typography harus memiliki hierarchy.

Gunakan role:

- Display.
- Heading.
- Body.
- Label.
- Caption.
- Accent jika diperlukan.

Jangan menganggap semua project harus menggunakan font yang sama.

Font aktual mengikuti brand.md.

Contoh:

Display:

font-display

Heading:

font-heading

Body:

font-body

Accent:

font-accent


## 9. TYPOGRAPHY HIERARCHY

H1 harus menjadi elemen tipografi paling dominan pada halaman.

Gunakan ukuran yang responsif.

Contoh:

<h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-heading leading-[1.08]">
  Judul Utama
</h1>

H2 digunakan untuk section utama.

H3 digunakan untuk subsection atau card heading.

Body text harus memiliki line-height yang cukup.

Contoh:

<p class="font-body text-base text-body leading-relaxed max-w-prose">
  Konten utama.
</p>

Jangan menggunakan font-size besar hanya untuk membuat halaman terlihat menarik.

Ukuran typography harus mengikuti hierarchy konten.


## 10. TEXT WIDTH

Paragraph panjang jangan memenuhi seluruh lebar layar.

Gunakan max-w-prose atau ukuran maksimum yang sesuai.

Contoh:

<p class="max-w-prose text-body leading-relaxed">
  ...
</p>

Headline boleh memiliki width yang lebih sempit untuk meningkatkan hierarchy dan readability.

Hindari heading yang terlalu panjang dalam satu baris pada desktop.


## 11. SPACING SYSTEM

Gunakan spacing yang konsisten.

Jangan menentukan spacing secara acak untuk setiap elemen.

Spacing harus membentuk hierarchy.

Gunakan prinsip:

Small spacing:

Untuk elemen yang memiliki hubungan langsung.

Medium spacing:

Untuk kelompok elemen.

Large spacing:

Untuk memisahkan section.

Extra large spacing:

Untuk perubahan konteks utama halaman.


Contoh:

Icon + text:

gap-2

Label + heading:

gap-3

Heading + paragraph:

gap-4

Content group:

gap-6

Section:

py-16 atau py-20

Hero:

py-20 atau lebih sesuai konteks.


## 12. LAYOUT SYSTEM

Prioritaskan layout yang memiliki struktur jelas.

Gunakan:

- Container.
- Grid.
- Flex.
- Stack.
- Split layout.
- Editorial layout.
- Table layout.
- Content-first layout.

Gunakan max-width untuk menjaga readability.

Contoh:

<div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
  ...
</div>

Jangan membuat content terlalu lebar hanya untuk memenuhi layar.


## 13. GRID SYSTEM

Gunakan grid sesuai kebutuhan konten.

Contoh:

grid-cols-1
md:grid-cols-2
lg:grid-cols-3

Untuk layout kompleks gunakan grid 12 kolom jika diperlukan.

Contoh:

<section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
  <div class="lg:col-span-7">
    ...
  </div>

  <div class="lg:col-span-5">
    ...
  </div>
</section>

Jangan menggunakan grid kompleks jika layout sederhana sudah cukup.


## 14. ASYMMETRIC AND EDITORIAL LAYOUT

Layout tidak harus selalu menggunakan card grid.

Gunakan:

- Split section.
- Editorial layout.
- Large typography.
- Image and text composition.
- Content-led layout.
- Offset grid.
- Asymmetric composition jika memiliki tujuan.

Contoh:

<section class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
  <div class="lg:col-span-7">
    ...
  </div>

  <div class="lg:col-span-5">
    ...
  </div>
</section>

Asymmetry harus membantu hierarchy.

Jangan menggunakan asymmetry hanya agar terlihat unik.


## 15. ANTI-BENTO GENERIC

Jangan membungkus setiap konten dalam:

rounded-3xl
p-6
bg-white
shadow-xl

Jangan membuat semua informasi menjadi card.

Card hanya digunakan jika terdapat hubungan logis antara container dan kontennya.

Gunakan layout editorial, section, divider, typography, whitespace, atau table ketika lebih sesuai.


## 16. CARD SYSTEM

Card digunakan untuk mengelompokkan informasi yang memang memiliki batas visual.

Card dapat digunakan untuk:

- Produk.
- Artikel.
- Fasilitas.
- Statistik.
- Service.
- Profile.
- Data group.

Card tidak harus selalu memiliki shadow.

Pilihan hierarchy:

Level 1:

border border-border

Level 2:

border border-border shadow-hairline

Level 3:

shadow-card

Gunakan level paling rendah yang sudah cukup untuk membedakan container.


## 17. RADIUS SYSTEM

Gunakan radius berdasarkan hierarchy.

Subtle:

Untuk:

- Input.
- Badge.
- Small component.
- Small container.

Card:

Untuk:

- Card.
- Dialog.
- Content module.

Section:

Untuk:

- Large visual container.
- Featured section.
- Banner.

Pill:

Untuk:

- CTA tertentu.
- Badge.
- Filter.
- Tag.

Jangan menggunakan rounded-3xl pada seluruh interface.


## 18. BORDER SYSTEM

Gunakan border sebagai alat grouping.

Prioritaskan:

border border-border

daripada shadow besar.

Border harus terlihat tenang.

Hindari border yang terlalu tebal kecuali memiliki fungsi khusus.

Gunakan divider untuk memisahkan informasi yang berdekatan.


## 19. SHADOW SYSTEM

Shadow digunakan untuk menunjukkan elevation.

Gunakan shadow secara terukur.

Hindari:

shadow-2xl

pada semua card.

Gunakan:

shadow-hairline

untuk elevation ringan.

Gunakan:

shadow-card

untuk card yang perlu separation.

Gunakan:

shadow-dropdown

untuk dropdown, popover, dan floating UI.


## 20. DECORATIVE ELEMENTS

Dekorasi harus memiliki hubungan dengan brand atau konteks.

Prioritaskan:

- Fotografi.
- Pattern brand.
- Typography.
- Divider.
- Grid.
- Shape yang berasal dari brand.
- Illustration.
- Texture.
- Iconography yang relevan.

Jangan menambahkan dekorasi hanya untuk memenuhi ruang kosong.


## 21. ANTI-VIBE-CODED RULES

Jangan membuat interface yang terlihat seperti hasil template AI generik.

Hindari:

- Gradient ungu ke pink sebagai default.
- Neon cyan sebagai default.
- Glow biru pada background gelap.
- Floating orb tanpa fungsi.
- Sparkle icon pada setiap headline.
- Excessive glassmorphism.
- Excessive rounded cards.
- Excessive gradients.
- Excessive shadows.
- Excessive icon usage.
- Bento grid tanpa alasan.
- Animasi terus menerus.
- Decorative blobs tanpa hubungan dengan brand.
- Layout yang terlalu ramai.
- Semua section menggunakan pola visual yang sama.

Jangan menganggap dark mode, glassmorphism, gradient, bento, blur, dan glow sebagai default modern design.

Gunakan hanya jika sesuai dengan brand dan kebutuhan project.


## 22. ICON SYSTEM

Icon harus memiliki fungsi.

Gunakan icon untuk:

- Menjelaskan action.
- Menjelaskan status.
- Membantu scanning.
- Mendukung navigation.
- Menjelaskan kategori.

Jangan menggunakan icon hanya untuk dekorasi.

Jangan menambahkan icon pada setiap card secara otomatis.

Ukuran icon harus proporsional dengan teks.

Gunakan aria-hidden="true" untuk icon dekoratif.


## 23. BUTTON SYSTEM

Button harus memiliki hierarchy.

Primary:

Untuk action utama.

Secondary:

Untuk action pendamping.

Tertiary:

Untuk action ringan.

Destructive:

Untuk action yang menghapus atau membatalkan data.

Contoh primary:

<a
  href="/action"
  class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-hover"
>
  Action Utama
</a>

Button harus memiliki:

- Label jelas.
- Area klik yang cukup.
- State hover.
- State focus.
- State disabled jika diperlukan.


## 24. LINK SYSTEM

Link harus dapat dikenali sebagai interactive element.

Gunakan perubahan:

- Color.
- Underline.
- Weight.
- Background.

Jangan hanya mengandalkan perubahan warna yang terlalu halus.


## 25. NAVIGATION SYSTEM

Navigation harus sederhana.

Gunakan:

- Active state.
- Hover state.
- Focus state.
- Mobile navigation.
- CTA jika dibutuhkan.

Header dapat menggunakan:

bg-surface/90
backdrop-blur-md
border-b
border-border

Backdrop blur tidak wajib.

Jika background solid sudah cukup, gunakan background solid.


## 26. HERO SECTION

Hero harus menyampaikan:

- Apa yang ditawarkan.
- Siapa targetnya.
- Value utama.
- Primary action.

Hero tidak harus selalu fullscreen.

Hero dapat menggunakan:

- Typography.
- Image.
- Video.
- Product visual.
- Editorial layout.
- Split layout.

Gunakan foto atau visual yang relevan dengan brand.

Jangan menggunakan stock image generik jika tersedia visual yang lebih relevan.


## 27. IMAGE SYSTEM

Gunakan image yang relevan dengan konteks.

Prioritaskan:

- Dokumentasi asli.
- Product photography.
- Brand photography.
- Illustration yang konsisten.

Gunakan aspect ratio yang konsisten.

Contoh:

aspect-[4/3]
aspect-video
aspect-square

Gunakan:

object-cover

ketika gambar digunakan sebagai visual container.

Gunakan alt text yang informatif untuk image yang memiliki makna.

Gunakan alt="" untuk image dekoratif.


## 28. PERFORMANCE IMAGE

Optimalkan gambar.

Prioritaskan:

- WebP.
- AVIF jika sesuai.
- Responsive image.
- Lazy loading untuk image non-critical.
- Width dan height yang sesuai.
- Image optimization dari framework.

Hero image atau image penting yang muncul pada initial viewport tidak selalu harus menggunakan lazy loading.


## 29. GALLERY

Gallery harus memiliki visual rhythm.

Gunakan aspect ratio yang konsisten.

Caption harus informatif jika konteks membutuhkan.

Jangan menggunakan caption generik seperti:

Foto 1
Foto 2
Gambar 3


## 30. LIGHTBOX

Lightbox digunakan untuk image yang membutuhkan viewing lebih besar.

Gunakan backdrop yang cukup gelap.

Contoh:

bg-black/90

Gunakan:

- Close button.
- Keyboard support.
- Focus management.
- Accessible label.

Jangan membuat lightbox hanya bergantung pada klik mouse.


## 31. FORM SYSTEM

Form harus memiliki:

- Label.
- Input.
- Helper text jika diperlukan.
- Error state.
- Success state jika diperlukan.
- Focus state.
- Disabled state.

Label tidak boleh hanya digantikan placeholder.

Contoh:

<label class="text-sm font-medium text-heading">
  Nama Lengkap
</label>

<input
  type="text"
  class="w-full rounded-(--radius-subtle) border border-border bg-surface px-4 py-3 text-body outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
/>


## 32. TABLE SYSTEM

Table digunakan untuk data terstruktur.

Contoh:

<div class="overflow-x-auto rounded-(--radius-card) border border-border bg-surface">
  <table class="w-full text-left text-sm">
    <thead class="border-b border-border bg-surface-subtle text-xs uppercase text-muted">
      ...
    </thead>

    <tbody class="divide-y divide-border text-body">
      ...
    </tbody>
  </table>
</div>

Table harus responsive.

Gunakan horizontal scrolling jika diperlukan.

Jangan mengecilkan typography secara ekstrem hanya agar table muat di mobile.


## 33. BADGE AND STATUS

Badge digunakan untuk:

- Status.
- Category.
- Label.
- Metadata.

Jangan menggunakan badge untuk semua jenis teks.

Status harus memiliki makna yang jelas.

Contoh semantic status:

Success.
Warning.
Error.
Info.
Neutral.

Warna status harus konsisten dalam seluruh aplikasi.


## 34. MODAL AND DIALOG

Modal harus digunakan untuk konteks yang membutuhkan perhatian pengguna.

Modal tidak boleh digunakan untuk setiap interaction.

Gunakan:

- Backdrop.
- Close action.
- Focus management.
- Keyboard support.
- Clear heading.
- Clear action.

Radius mengikuti radius card atau section sesuai ukuran dialog.


## 35. DROPDOWN AND POPOVER

Dropdown harus memiliki elevation yang cukup.

Gunakan:

shadow-dropdown

Pastikan:

- Positioning stabil.
- Keyboard navigation.
- Focus state.
- Clear active state.


## 36. RESPONSIVE DESIGN

Design harus dibuat mobile-first.

Prioritaskan:

1. Mobile usability.
2. Tablet adaptation.
3. Desktop layout.

Jangan sekadar mengecilkan desktop layout untuk mobile.

Mobile harus memiliki:

- Navigation yang mudah digunakan.
- Button yang mudah ditekan.
- Typography yang terbaca.
- Spacing yang cukup.
- Horizontal overflow yang terkendali.


## 37. BREAKPOINT

Gunakan breakpoint Tailwind sesuai kebutuhan.

Jangan membuat terlalu banyak breakpoint.

Gunakan breakpoint ketika layout memang membutuhkan perubahan.

Contoh:

sm:
Untuk peningkatan ruang kecil.

md:
Untuk perubahan layout tablet.

lg:
Untuk layout desktop.

xl:
Untuk layout besar.


## 38. MOBILE FIRST

Markup harus tetap masuk akal tanpa breakpoint.

Contoh:

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  ...
</div>

Jangan membuat mobile sebagai versi desktop yang dipaksa mengecil.


## 39. ACCESSIBILITY

Interface harus memperhatikan accessibility.

Gunakan:

- Semantic HTML.
- Label yang jelas.
- Alt text.
- Focus state.
- Keyboard navigation.
- Sufficient contrast.
- Accessible button label.
- aria attributes jika diperlukan.

Jangan menggunakan div sebagai button jika button element dapat digunakan.


## 40. FOCUS STATE

Semua interactive element harus memiliki focus state yang jelas.

Jangan menghapus outline tanpa menggantinya dengan focus indicator yang terlihat.


## 41. ANIMATION

Animation harus memiliki tujuan.

Gunakan animation untuk:

- Feedback.
- State change.
- Navigation.
- Modal.
- Dropdown.
- Loading.
- Content transition.

Hindari continuous animation tanpa alasan.

Jangan membuat:

- Floating arrow terus menerus.
- Bouncing button.
- Rotating decorative object.
- Pulsing orb.
- Infinite floating cards.

Animation harus singkat dan terasa natural.


## 42. TRANSITION

Gunakan transition yang sederhana.

Contoh:

transition-colors duration-200

atau:

transition-all duration-200 ease-out

Jangan menggunakan durasi terlalu lama untuk interaction sederhana.

Untuk interaction umum, gunakan sekitar 150ms sampai 250ms.


## 43. HOVER

Hover harus memberikan feedback.

Contoh:

hover:text-primary
hover:bg-primary-hover
hover:border-primary

Jangan menggunakan transform besar hanya untuk membuat hover terlihat menarik.


## 44. REDUCED MOTION

Jika project memiliki animation kompleks, hormati:

prefers-reduced-motion

Pengguna yang memilih reduced motion harus tetap dapat menggunakan interface.


## 45. CONTENT HIERARCHY

Visual hierarchy harus mengikuti hierarchy informasi.

Urutan umum:

Primary message.

Supporting message.

Primary action.

Secondary information.

Metadata.

Jangan membuat elemen sekunder terlihat lebih penting daripada primary message.


## 46. EMPTY STATE

Empty state harus menjelaskan:

- Apa yang kosong.
- Mengapa kosong jika relevan.
- Apa yang dapat dilakukan pengguna.

Jangan hanya menampilkan:

No Data

Gunakan message yang membantu pengguna memahami kondisi.


## 47. ERROR STATE

Error harus:

- Jelas.
- Spesifik.
- Actionable jika memungkinkan.

Jangan hanya menampilkan:

Something went wrong.

Berikan informasi yang membantu pengguna melanjutkan.


## 48. LOADING STATE

Loading state harus digunakan ketika pengguna memang perlu menunggu.

Gunakan:

- Skeleton.
- Spinner.
- Progress indicator.

Pilih berdasarkan konteks.

Jangan membuat loading animation yang berlebihan.


## 49. DASHBOARD

Dashboard harus memprioritaskan data.

Gunakan:

- Clear hierarchy.
- Compact navigation.
- Tables.
- Filters.
- Search.
- Status.
- Data visualization jika diperlukan.

Jangan membuat setiap metric menjadi card besar.

Gunakan whitespace dan grouping untuk hierarchy.


## 50. CMS

CMS harus memprioritaskan productivity.

Gunakan:

- Sidebar yang jelas.
- Content area yang luas.
- Form yang terstruktur.
- Table untuk data.
- Search.
- Filter.
- Status.

Visual CMS boleh berbeda dari public website selama masih mengikuti global design system.


## 51. DARK MODE

Dark mode tidak wajib.

Jika project membutuhkan dark mode, gunakan semantic token.

Jangan sekadar membalik:

white menjadi black.

Pastikan:

- Contrast.
- Surface hierarchy.
- Border visibility.
- Muted text.
- Interactive state.

tetap terbaca.


## 52. DECORATIVE GRADIENT

Gradient boleh digunakan jika sesuai dengan brand.

Gradient tidak boleh menjadi default.

Jangan menggunakan gradient hanya karena area terasa kosong.

Gradient harus memiliki fungsi visual yang jelas.


## 53. GLASSMORPHISM

Glassmorphism bukan default.

Gunakan hanya ketika:

- Brand mendukung.
- Background mendukung.
- Contrast tetap aman.
- Content tetap mudah dibaca.

Jangan menggunakan backdrop-blur pada seluruh interface.


## 54. DESIGN CONSISTENCY

Jika sebuah pola digunakan untuk satu komponen, gunakan pola yang sama untuk komponen sejenis.

Contoh:

Semua primary button memiliki:

- radius yang sama.
- typography yang sama.
- padding yang sebanding.
- interaction yang konsisten.

Jangan membuat setiap section memiliki gaya visual berbeda tanpa alasan.


## 55. COMPONENT REUSE

Prioritaskan reusable component.

Contoh:

Button.
Card.
Badge.
Input.
Modal.
Dropdown.
Section.
Container.
Table.
Navigation.
Footer.

Jangan membuat variasi komponen baru jika variasi existing dapat menangani kebutuhan tersebut.


## 56. COMPONENT VARIANT

Jika komponen membutuhkan variasi, gunakan variant.

Contoh:

Button:

primary
secondary
outline
ghost
destructive

Card:

default
featured
compact

Badge:

neutral
success
warning
error
info

Jangan membuat class yang sangat panjang hanya untuk satu instance jika pola tersebut akan digunakan kembali.


## 57. CODE QUALITY

Gunakan class Tailwind yang readable.

Jika class menjadi terlalu panjang, pertimbangkan:

- Component extraction.
- Variant.
- Utility class.
- CSS token.
- Reusable component.

Jangan membuat abstraction hanya untuk satu element yang tidak akan digunakan kembali.


## 58. ARBITRARY VALUE

Arbitrary value boleh digunakan ketika memang diperlukan.

Contoh:

max-w-[...] 
leading-[...]
grid-cols-[...]

Tetapi jangan menggunakan arbitrary value sebagai pengganti design system.

Hindari:

bg-[#123456]
text-[#abcdef]

jika nilai tersebut seharusnya menjadi brand token.


## 59. BRAND INTEGRATION

Jika brand.md tersedia, gunakan brand.md sebagai sumber utama untuk:

- Warna.
- Font.
- Logo.
- Photography.
- Illustration.
- Tone.
- Visual personality.

Jangan mengubah brand identity hanya karena design system menggunakan semantic token.


## 60. PROJECT WITHOUT BRAND.MD

Jika brand.md tidak tersedia:

Gunakan brief project untuk menentukan visual direction.

Jika brief juga tidak memberikan identitas visual, gunakan neutral design system.

Jangan mengarang identitas brand seolah-olah merupakan informasi resmi.


## 61. ANTI-HALLUCINATION DESIGN

Jangan membuat:

- Logo palsu.
- Data statistik palsu.
- Nama orang palsu.
- Akreditasi palsu.
- Nomor resmi palsu.
- Testimonial palsu.
- Partner palsu.
- Award palsu.
- Social proof palsu.

Jika data belum tersedia, gunakan struktur placeholder yang jelas.

Jangan membuat placeholder terlihat seperti data nyata.


## 62. CONTENT FIRST

Desain harus mengikuti konten.

Jika konten panjang:

Gunakan layout yang mendukung readability.

Jika konten berbentuk data:

Gunakan table.

Jika konten berbentuk pilihan:

Gunakan card atau list.

Jika konten berbentuk proses:

Gunakan step layout.

Jika konten berbentuk visual:

Gunakan gallery atau media-focused layout.

Jangan memaksakan semua konten menjadi card.


## 63. VISUAL HIERARCHY AUDIT

Setiap halaman harus memiliki:

- Primary visual focus.
- Secondary focus.
- Supporting content.
- Clear action.

Jika semua elemen terlihat sama penting, hierarchy harus diperbaiki.


## 64. SPACING AUDIT

Periksa:

- Apakah section terlalu rapat?
- Apakah section terlalu renggang?
- Apakah heading memiliki hubungan yang jelas dengan content?
- Apakah card memiliki internal spacing yang konsisten?
- Apakah mobile spacing tetap nyaman?

Whitespace harus digunakan untuk membangun hierarchy.


## 65. COLOR AUDIT

Periksa:

- Apakah primary digunakan terlalu sering?
- Apakah secondary mengambil perhatian terlalu banyak?
- Apakah muted text masih terbaca?
- Apakah background dan surface memiliki perbedaan yang cukup?
- Apakah status menggunakan warna yang konsisten?
- Apakah terdapat arbitrary color yang seharusnya menjadi token?


## 66. TYPOGRAPHY AUDIT

Periksa:

- Apakah H1 paling dominan?
- Apakah H2 dan H3 memiliki hierarchy?
- Apakah body text mudah dibaca?
- Apakah line-height cukup?
- Apakah panjang paragraph terkendali?
- Apakah terlalu banyak font weight?
- Apakah terlalu banyak jenis font?


## 67. COMPONENT AUDIT

Periksa:

- Apakah button konsisten?
- Apakah radius konsisten?
- Apakah card konsisten?
- Apakah input konsisten?
- Apakah icon memiliki fungsi?
- Apakah interactive state tersedia?


## 68. RESPONSIVE AUDIT

Periksa minimal:

Mobile.

Tablet.

Desktop.

Pastikan:

- Tidak ada horizontal overflow yang tidak disengaja.
- Typography tidak terlalu besar.
- Button tidak terlalu kecil.
- Navigation tetap usable.
- Image tidak terpotong secara buruk.
- Table tetap dapat digunakan.


## 69. PERFORMANCE AUDIT

Periksa:

- Image optimization.
- Lazy loading.
- Font loading.
- Unnecessary animation.
- Unnecessary JavaScript.
- Large asset.
- Duplicate component.
- Excessive third-party library.

Jangan menambahkan dependency hanya untuk kebutuhan visual sederhana.


## 70. DESIGN AUDIT SEBELUM COMMIT

Sebelum menyelesaikan halaman atau component, jawab:

1. Apakah hierarchy visualnya jelas?

2. Apakah warna menggunakan semantic token?

3. Apakah typography mengikuti hierarchy?

4. Apakah spacing konsisten?

5. Apakah radius digunakan secara proporsional?

6. Apakah shadow benar-benar diperlukan?

7. Apakah setiap card memiliki alasan?

8. Apakah setiap icon memiliki fungsi?

9. Apakah terdapat dekorasi yang tidak memiliki fungsi?

10. Apakah terdapat gradient atau glow yang tidak diperlukan?

11. Apakah terdapat animation tanpa tujuan?

12. Apakah mobile layout sudah diperiksa?

13. Apakah contrast sudah memadai?

14. Apakah keyboard interaction tetap dapat digunakan?

15. Apakah image memiliki treatment yang sesuai?

16. Apakah data yang digunakan benar-benar tersedia?

17. Apakah terdapat placeholder yang terlihat seperti data nyata?

18. Apakah design sesuai dengan brand.md?

19. Apakah design tetap konsisten dengan global design system?

20. Apakah halaman terasa seperti produk yang dirancang secara sengaja, bukan template generik?


## 71. ATURAN IMPLEMENTASI FRONTEND

Di frontend:

Patuhi semantic design tokens.

Gunakan:

bg-primary
bg-secondary
bg-background
bg-surface
bg-surface-subtle

Gunakan:

text-heading
text-body
text-muted

Gunakan:

border-border
border-border-subtle

Gunakan:

font-display
font-heading
font-body
font-accent

Gunakan:

rounded-(--radius-subtle)
rounded-(--radius-card)
rounded-(--radius-section)
rounded-full

Gunakan:

shadow-hairline
shadow-card
shadow-dropdown


## 72. ATURAN IMPLEMENTASI CMS

CMS harus menggunakan semantic token yang sama jika berada dalam project yang sama.

CMS boleh memiliki visual hierarchy yang berbeda dari public website.

CMS harus memprioritaskan:

- Productivity.
- Data density.
- Readability.
- Navigation.
- Form usability.
- Status visibility.


## 73. ATURAN UNTUK AI CODING AGENT

Sebelum membuat atau mengubah UI:

1. Baca design.md.

2. Jika tersedia, baca brand.md.

3. Identifikasi semantic tokens yang tersedia.

4. Identifikasi reusable components yang sudah tersedia.

5. Gunakan component yang sudah ada sebelum membuat component baru.

6. Jangan membuat warna baru tanpa alasan.

7. Jangan membuat radius baru tanpa alasan.

8. Jangan membuat shadow baru tanpa alasan.

9. Jangan menambahkan animation tanpa tujuan.

10. Jangan mengganti brand identity.

11. Jangan membuat data yang tidak tersedia.

12. Jangan membuat visual decoration hanya untuk memenuhi ruang.

13. Pastikan responsive behavior.

14. Pastikan accessibility.

15. Periksa hasil akhir terhadap design audit.


## 74. ATURAN KETIKA MEMBUAT HALAMAN BARU

Sebelum coding, tentukan:

Page purpose.

Target user.

Primary action.

Primary content.

Secondary content.

Visual hierarchy.

Required components.

Responsive behavior.

Brand requirements.


Kemudian tentukan struktur:

Header.

Hero atau page heading jika diperlukan.

Primary content.

Supporting content.

CTA jika diperlukan.

Footer.


Jangan menggunakan struktur tersebut secara otomatis jika konteks halaman tidak membutuhkannya.


## 75. ATURAN KETIKA MENGEDIT EXISTING DESIGN

Jangan melakukan redesign total jika pengguna hanya meminta perubahan kecil.

Pertahankan:

- Existing brand identity.
- Existing information architecture.
- Existing component behavior.
- Existing content.

Ubah hanya bagian yang diminta, kecuali perubahan tersebut diperlukan untuk memperbaiki consistency atau usability.


## 76. ATURAN KETIKA DESIGN TERLIHAT KURANG MENARIK

Jangan langsung menambahkan:

- Gradient.
- Glow.
- Shadow besar.
- Blur.
- Animation.
- Sparkle.
- Decorative orb.

Periksa terlebih dahulu:

- Typography.
- Spacing.
- Composition.
- Image quality.
- Color hierarchy.
- Content hierarchy.
- Alignment.
- White space.

Masalah visual sering disebabkan oleh hierarchy dan spacing, bukan kurangnya dekorasi.


## 77. ATURAN KETIKA DESIGN TERLIHAT TERLALU SEDERHANA

Jangan langsung menambahkan dekorasi.

Pertimbangkan:

- Typography scale.
- Image treatment.
- Layout composition.
- Section contrast.
- Editorial composition.
- Content grouping.
- Brand-specific visual elements.

Tambahkan elemen hanya jika meningkatkan komunikasi.


## 78. PRINCIPLE: LESS BUT INTENTIONAL

Gunakan jumlah elemen yang diperlukan.

Jangan menambahkan elemen hanya karena tersedia.

Setiap elemen harus memiliki salah satu fungsi:

- Inform.
- Guide.
- Organize.
- Differentiate.
- Interact.
- Reinforce brand.

Jika sebuah elemen tidak memiliki fungsi yang jelas, pertimbangkan untuk menghapusnya.


## 79. GLOBAL DESIGN TOKEN REFERENCE

Global semantic tokens:

Primary:
Warna utama brand.

Primary Hover:
Warna interaction primary.

Primary Light:
Tint primary.

Secondary:
Warna aksen brand.

Secondary Hover:
Warna interaction secondary.

Secondary Light:
Tint secondary.

Background:
Latar halaman.

Surface:
Container utama.

Surface Subtle:
Container sekunder.

Heading:
Teks heading.

Body:
Teks utama.

Muted:
Teks sekunder.

Border:
Pembatas utama.

Border Subtle:
Pembatas ringan.

Font Display:
Typography display.

Font Heading:
Typography heading.

Font Body:
Typography body.

Font Accent:
Typography dekoratif jika diperlukan.

Radius Subtle:
Radius kecil.

Radius Card:
Radius card.

Radius Section:
Radius container besar.

Radius Pill:
Radius penuh.

Shadow Hairline:
Elevation rendah.

Shadow Card:
Elevation medium.

Shadow Dropdown:
Elevation floating.


## 80. FINAL DESIGN PRINCIPLE

Interface harus:

Clear.

Consistent.

Purposeful.

Readable.

Responsive.

Accessible.

Brand-aware.

Content-first.

Performance-conscious.

Avoid generic AI aesthetics.

Gunakan design system sebagai fondasi.

Gunakan brand system sebagai identitas.

Gunakan konten sebagai pusat keputusan desain.

Jangan membuat desain berdasarkan tren semata.