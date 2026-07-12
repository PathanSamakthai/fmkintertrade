# FMK Intertrade ออกแบบเว็บ

_Started 2026-07-12 01:12 UTC_

---

## User

ต้องการออกแบบหน้าเว้ปใหม่# DEVELOPMENT BRIEF — FMK INTERTRADE CORPORATE HOMEPAGE

คุณรับบทเป็น Senior UX/UI Designer, Brand Strategist, Frontend Architect และ Full-stack Web Developer ระดับองค์กร

ให้สร้างหน้าแรกเว็บไซต์ใหม่สำหรับบริษัท **FMK Intertrade Company Limited** โดยยึดหลักว่าเว็บไซต์ต้องมีภาพลักษณ์:

* น่าเชื่อถือสูง
* มั่นคง
* เป็นมืออาชีพ
* มีมาตรฐานระดับสากล
* ดูเป็นบริษัท B2B ขนาดใหญ่
* พร้อมรองรับการเติบโตในระดับภูมิภาคอาเซียน
* ไม่ดูเหมือนร้านขายสินค้าเกษตรทั่วไป
* ไม่ดูเหมือนเว็บไซต์สำเร็จรูปหรือ WordPress Template ราคาถูก

เว็บไซต์เดิม:

```text
https://fmkintertrade.com/
```

ให้อ่านและวิเคราะห์เว็บไซต์เดิมก่อนเริ่มพัฒนา เพื่อทำความเข้าใจข้อมูลบริษัท กลุ่มธุรกิจ ผลิตภัณฑ์ บริการ สาขา ช่องทางติดต่อ และข้อมูลที่มีอยู่จริง

ห้ามคัดลอกรูปแบบ UX/UI ของเว็บไซต์เดิมมาใช้ตรง ๆ
ให้ใช้ข้อมูลเดิมเป็นฐานข้อมูลทางธุรกิจ แล้วออกแบบประสบการณ์และโครงสร้างการสื่อสารใหม่ทั้งหมด

---

# 1. BRAND IDENTITY

## Brand Positioning

กำหนดตำแหน่งของ FMK เป็น:

> Trusted Infrastructure Partner for Agriculture and Livestock Industries

ภาษาไทย:

> พันธมิตรด้านโครงสร้างพื้นฐานและโซลูชันครบวงจรสำหรับอุตสาหกรรมเกษตรและปศุสัตว์

FMK ต้องไม่ถูกนำเสนอเป็นเพียง Trading Company หรือผู้ขายสินค้า แต่ต้องถูกนำเสนอเป็นบริษัทที่เชื่อมโยงองค์ประกอบสำคัญในห่วงโซ่ธุรกิจ ได้แก่:

* Agricultural Products
* Livestock Solutions
* Animal Health
* Feed Solutions
* Engineering Systems
* Livestock Housing
* Greenhouse Systems
* Cold Storage
* Packing Services
* Logistics
* Cross-border Trade
* International Distribution

## Brand Concept

ใช้แนวคิดหลัก:

> The Infrastructure Partner

และใช้แนวคิดรอง:

> Building Sustainable Growth for Agriculture and Livestock

## Brand Archetype

ใช้บุคลิกแบรนด์:

```text
80% The Ruler
20% The Sage
```

### The Ruler

สื่อถึง:

* ความมั่นคง
* ความเป็นผู้นำ
* มาตรฐาน
* ความมีระบบ
* ความรับผิดชอบ
* ความน่าเชื่อถือระยะยาว

### The Sage

สื่อถึง:

* ความเชี่ยวชาญ
* ความรู้
* การให้คำปรึกษา
* การวิเคราะห์
* การแก้ปัญหาที่ซับซ้อน

## Brand Personality

ทุกส่วนของเว็บไซต์ต้องสะท้อนคำเหล่านี้:

```text
Stable
Trusted
Professional
Engineering
Global
Reliable
Structured
Premium
Industrial
Responsible
Long-term Partnership
Sustainable
```

---

# 2. VISUAL IDENTITY

## Primary Color

Deep Forest Green

```css
--color-primary: #0B2F22;
```

ใช้เป็นสีหลักของ:

* Header
* CTA หลัก
* Section สำคัญ
* Footer
* Corporate Background
* Icon Background บางส่วน

ความหมาย:

* ความมั่นคง
* การเติบโต
* เกษตรกรรม
* ความยั่งยืน
* ความน่าเชื่อถือ

## Secondary Color

Graphite Gray

```css
--color-secondary: #3B4148;
```

ใช้สื่อถึง:

* วิศวกรรม
* เครื่องจักร
* อุตสาหกรรม
* ความเป็นมืออาชีพ

## Accent Color

Executive Gold

```css
--color-accent: #C4A263;
```

ใช้เฉพาะจุดสำคัญ เช่น:

* Eyebrow text
* Highlight
* Active state
* Key number
* เส้นตกแต่ง
* Premium detail

ห้ามใช้สีทองมากเกินไปจนเว็บไซต์ดูหรูหราแบบโรงแรมหรืออสังหาริมทรัพย์

## Neutral Colors

```css
--color-background: #F4F7F5;
--color-surface: #FFFFFF;
--color-text: #17211D;
--color-text-muted: #68736E;
--color-border: #DCE3DF;
```

## ข้อห้ามเรื่องสี

ห้ามใช้:

* สีเขียวสดแบบร้านปุ๋ย
* สีเขียวนีออน
* สีเหลืองสดจำนวนมาก
* Gradient สีฉูดฉาด
* สีที่ทำให้ดูเหมือน Marketplace
* สีจำนวนมากเกินไป
* พื้นหลังทุก Section เป็นคนละสีโดยไม่มีระบบ

---

# 3. TYPOGRAPHY

ใช้ Typography ที่ทันสมัย อ่านง่าย และดูเป็นองค์กรระดับสากล

## ภาษาอังกฤษ

แนะนำ:

```text
Manrope
Inter
IBM Plex Sans
```

## ภาษาไทย

แนะนำ:

```text
Noto Sans Thai
IBM Plex Sans Thai
LINE Seed Sans TH
```

## Typography Rules

* Headline ต้องดูแข็งแรงและมี Authority
* Body text ต้องอ่านง่าย
* ห้ามใช้ฟอนต์ลายมือ
* ห้ามใช้ฟอนต์แนวแฟชั่น
* ห้ามใช้ตัวหนาทุกข้อความ
* จำกัดความกว้างของข้อความแต่ละบรรทัดให้เหมาะสม
* ใช้ Letter Spacing อย่างระมัดระวัง
* Heading ภาษาอังกฤษสามารถใช้ Negative Letter Spacing ได้เล็กน้อย
* ภาษาไทยต้องไม่บีบตัวอักษรมากเกินไป

ตัวอย่างขนาด Desktop:

```css
Hero H1: 64–84px
Section H2: 42–58px
Card H3: 20–26px
Body Large: 17–20px
Body: 14–16px
Caption: 11–13px
```

บน Mobile ต้องใช้ `clamp()` และลดขนาดให้เหมาะสมโดยไม่ทำให้ข้อความล้น

---

# 4. PHOTOGRAPHY DIRECTION

รูปภาพต้องสะท้อนธุรกิจจริงและสร้างความน่าเชื่อถือ

ใช้ภาพประเภท:

* ฟาร์มปศุสัตว์ขนาดใหญ่
* โรงเรือนระบบปิด
* ระบบ Evaporative Cooling
* Greenhouse
* ห้องเย็น
* คลังสินค้า
* รถขนส่ง
* ตู้คอนเทนเนอร์
* ศูนย์กระจายสินค้า
* ทีมวิศวกรในไซต์งาน
* ทีมงานประชุมกับลูกค้า
* ระบบเกษตรอุตสาหกรรม
* เครื่องจักร
* โครงการจริงของบริษัท
* ทีมผู้บริหารและบุคลากรจริง

ภาพต้องมีลักษณะ:

* จริง
* เป็นธรรมชาติ
* มีคุณภาพสูง
* Lighting แบบ Corporate
* มีมิติ
* ไม่แต่งเกินจริง
* ไม่ดูเป็นภาพ Stock ราคาถูก

หลีกเลี่ยง:

* ภาพการ์ตูน
* ภาพ AI ที่ผิดธรรมชาติ
* ภาพสัตว์แบบน่ารัก
* ภาพสินค้าตัดพื้นขาวเป็นภาพ Hero
* ภาพเกษตรกรถือผักแบบเว็บไซต์ทั่วไป
* ภาพที่ไม่ตรงกับขนาดธุรกิจจริง
* ภาพที่สร้างความเข้าใจผิดว่าเป็นโครงการของ FMK

หากยังไม่มีภาพจริง ให้ใช้ Placeholder ที่ระบุชัดเจนว่า:

```text
PLACEHOLDER — Replace with verified FMK project image
```

---

# 5. WEBSITE DESIGN DIRECTION

ใช้แนวทาง:

```text
Modern Corporate
Industrial Agriculture
Engineering-led
B2B Enterprise
International Trade
Premium Minimal
Structured Layout
High Trust
```

อารมณ์โดยรวมควรมีลักษณะใกล้เคียงการผสมกันระหว่าง:

* บริษัทวิศวกรรม
* บริษัทเกษตรอุตสาหกรรม
* บริษัทโลจิสติกส์
* บริษัทโครงสร้างพื้นฐานระดับภูมิภาค

ห้ามคัดลอกเว็บไซต์ของแบรนด์อื่นโดยตรง

---

# 6. HOMEPAGE OBJECTIVES

หน้าแรกต้องทำหน้าที่หลัก 5 ประการ:

1. อธิบายว่า FMK คือบริษัทอะไรภายในไม่เกิน 5 วินาที
2. ทำให้ลูกค้ารู้สึกว่า FMK เป็นองค์กรที่มั่นคงและเชื่อถือได้
3. แสดงกลุ่มธุรกิจอย่างเป็นระบบ
4. แสดงหลักฐานความสามารถและผลงาน
5. กระตุ้นให้ลูกค้าติดต่อ ขอคำปรึกษา หรือขอใบเสนอราคา

กลุ่มผู้ใช้งานหลัก:

* เจ้าของฟาร์ม
* ผู้ประกอบการปศุสัตว์
* โรงงานอาหารสัตว์
* บริษัทเกษตรอุตสาหกรรม
* ผู้ลงทุนโครงการ
* ฝ่ายจัดซื้อองค์กร
* ผู้จัดจำหน่าย
* คู่ค้าต่างประเทศ
* หน่วยงานภาครัฐ
* นักลงทุน
* ลูกค้าโครงการขนาดใหญ่

---

# 7. HOMEPAGE INFORMATION ARCHITECTURE

สร้างหน้าแรกตามลำดับต่อไปนี้

---

## SECTION 01 — CORPORATE TOP BAR

แสดงข้อมูลแบบกระชับ เช่น:

```text
FMK INTERTRADE
Thailand · Laos P.D.R. · Myanmar
Integrated Agriculture & Livestock Solutions
```

Top Bar ต้อง:

* สูงประมาณ 32–40px
* ใช้สี Deep Forest Green หรือสีเข้มกว่า
* ตัวหนังสือเล็กแต่ยังอ่านง่าย
* ไม่ใส่ข้อมูลจำนวนมาก
* บน Mobile สามารถซ่อนข้อมูลรองบางส่วนได้

---

## SECTION 02 — MAIN HEADER

Header ต้องเป็นแบบ Sticky

องค์ประกอบ:

* โลโก้ FMK
* ชื่อ FMK INTERTRADE
* Brand descriptor
* Main navigation
* Language selector
* CTA

Navigation:

```text
Home
About FMK
Solutions
Products
Projects
Knowledge
Our Network
Contact
```

CTA หลัก:

```text
Request Consultation
```

CTA รอง:

```text
View Projects
```

พฤติกรรม:

* เมื่อ Scroll ให้ Header ลดความสูงลงเล็กน้อย
* มี Background Blur อย่างพอดี
* มี Bottom Border แบบบาง
* Dropdown ต้องรองรับ Keyboard
* Mobile ใช้ Off-canvas Menu
* กด Escape เพื่อปิดเมนูได้
* Lock Body Scroll เมื่อเปิด Mobile Menu
* แสดง Focus State ชัดเจน

---

## SECTION 03 — HERO SECTION

Hero ต้องมีความสูงประมาณ:

```text
Desktop: 680–820px
Tablet: 600–720px
Mobile: 580–700px
```

ใช้ภาพโครงการหรือภาพธุรกิจขนาดใหญ่แบบ Full Width

ใช้ Overlay สีเขียวเข้ม เพื่อให้ข้อความอ่านง่าย

### Eyebrow

```text
TRUSTED INFRASTRUCTURE PARTNER
```

### Main Headline

ใช้ข้อความ:

```text
Building Sustainable Growth for Agriculture and Livestock
```

ภาษาไทย:

```text
สร้างการเติบโตที่ยั่งยืนให้แก่อุตสาหกรรมเกษตรและปศุสัตว์
```

### Supporting Copy

```text
FMK delivers integrated products, engineering systems, cold-chain logistics and international trade solutions designed for long-term business performance across Southeast Asia.
```

ภาษาไทย:

```text
FMK ส่งมอบสินค้า ระบบวิศวกรรม โซลูชันห่วงโซ่ความเย็น และบริการการค้าระหว่างประเทศแบบครบวงจร เพื่อเสริมสร้างศักยภาพทางธุรกิจระยะยาวให้แก่ลูกค้าทั่วเอเชียตะวันออกเฉียงใต้
```

### CTA

Primary:

```text
Explore Our Solutions
```

Secondary:

```text
Discuss Your Project
```

Hero ต้องมีพื้นที่แสดง Value Summary เช่น:

```text
Products
Engineering
Cold Chain
Regional Trade
```

หรือใช้ Glass Card ด้านขวาบน Desktop

บน Mobile ให้ซ่อนหรือนำ Card ไปเรียงใต้ข้อความ ห้ามทำให้หน้าจอแน่นเกินไป

---

## SECTION 04 — TRUST SIGNAL BAR

สร้างแถบแสดงจุดแข็งขององค์กร 4 รายการ

ตัวอย่าง:

```text
Integrated Solutions
Products, engineering and logistics

Regional Network
Thailand, Laos and Myanmar

B2B Capability
Big-lot supply and project delivery

Long-term Partnership
Reliable support throughout the value chain
```

หากมีตัวเลขจริงและตรวจสอบได้ สามารถแสดง:

* จำนวนปีดำเนินธุรกิจ
* จำนวนสาขา
* จำนวนประเทศ
* จำนวนโครงการ
* จำนวนลูกค้าองค์กร

ห้ามสร้างหรือเดาตัวเลขเอง

หากไม่มีข้อมูลยืนยัน ให้ใช้ข้อความเชิงคุณค่าแทนตัวเลข

---

## SECTION 05 — ABOUT FMK

หัวข้อ:

```text
More Than a Trading Company
```

ข้อความหลัก:

```text
A partner across the entire agricultural and livestock value chain.
```

อธิบายว่า FMK เชื่อมโยง:

* สินค้า
* ระบบวิศวกรรม
* การจัดจำหน่าย
* คลังและห้องเย็น
* การขนส่ง
* การค้าข้ามพรมแดน

แสดง Brand Principles 4 ด้าน:

```text
Reliability
Technical Capability
Regional Reach
Sustainable Growth
```

แต่ละด้านต้องมีคำอธิบายสั้น ๆ

ควรใช้ภาพองค์กรหรือภาพโครงการจริงทางซ้าย และข้อความทางขวา

Desktop:

```text
Image 45%
Content 55%
```

Mobile:

```text
Image
Content
```

---

## SECTION 06 — INTEGRATED SOLUTIONS

หัวข้อ:

```text
One Ecosystem of Solutions for Modern Agriculture
```

สร้าง Solution Card จำนวน 6 กลุ่ม:

### 1. Agricultural Inputs

ครอบคลุม:

* Fertilizer
* Soil Conditioner
* Agricultural Materials
* Crop Inputs

### 2. Feed and Animal Health

ครอบคลุม:

* Animal Feed
* Premix
* Feed Additive
* Veterinary Medicine
* Vaccine
* Animal Health Products

### 3. Livestock Housing Systems

ครอบคลุม:

* Poultry Housing
* Swine Housing
* Evaporative Cooling
* Ventilation
* Environmental Control
* Farm Equipment

### 4. Greenhouse Solutions

ครอบคลุม:

* Greenhouse Structure
* Protected Cultivation
* Irrigation
* Environmental Systems
* Agricultural Equipment

### 5. Cold Storage and Packing

ครอบคลุม:

* Cold Storage
* Temperature-controlled Storage
* Product Packing
* Handling
* Distribution Preparation

### 6. Logistics and Cross-border Trade

ครอบคลุม:

* Transportation
* Shipping
* Import
* Export
* Cross-border Trade
* Regional Distribution

แต่ละ Card ต้องมี:

* เลขลำดับ
* Icon
* ชื่อกลุ่มบริการ
* คำอธิบาย
* CTA
* Hover State

ใช้ Icon แบบ:

* Outline
* Consistent stroke
* Professional
* ห้ามใช้ Emoji
* ห้ามใช้ Icon หลาย Style ปนกัน

แนะนำใช้:

```text
Lucide Icons
Phosphor Icons
Tabler Icons
```

เลือกเพียง Library เดียว

---

## SECTION 07 — FEATURED PROJECTS

หัวข้อ:

```text
Infrastructure Built Around Real Operations
```

ส่วนนี้มีความสำคัญมากต่อความน่าเชื่อถือ

แสดง Project Cards หรือ Case Studies โดยต้องรองรับข้อมูล:

* Project Name
* Project Type
* Location
* Year
* Scope of Work
* Project Size
* Client Industry
* Challenge
* Solution
* Result
* Project Gallery

หน้าแรกแสดง 3 โครงการเด่น

Layout:

* โครงการหลัก 1 Card ขนาดใหญ่
* โครงการรอง 2 Card
* Desktop ใช้ Layout แบบ Editorial
* Mobile เรียงเป็นแนวตั้ง

ห้ามสร้างชื่อโครงการ ลูกค้า มูลค่า หรือผลลัพธ์ปลอม

หากข้อมูลจริงยังไม่มี ให้แสดงข้อความ:

```text
Project information pending verification
```

และระบุในโค้ดว่าเป็น Placeholder

CTA:

```text
View All Projects
```

---

## SECTION 08 — WHY FMK

หัวข้อ:

```text
Standards That Build Lasting Confidence
```

แสดง 3–4 เสาหลัก:

```text
Responsible Partnership
Operational Reliability
Technical Expertise
Sustainable Progress
```

แต่ละ Card มี:

* Number
* Heading
* Short explanation
* Minimal Icon หรือไม่มี Icon ก็ได้

ออกแบบให้ดูสงบ มั่นคง และมีพื้นที่ว่างเพียงพอ

---

## SECTION 09 — REGIONAL NETWORK

หัวข้อ:

```text
Connected Locally. Positioned Regionally.
```

แสดง Network ของบริษัทจากข้อมูลที่ตรวจสอบได้

ตัวอย่างสถานที่จากข้อมูลเว็บไซต์เดิม:

```text
Bangkok
Chiang Mai
Nakhon Phanom
Nakhon Ratchasima
Laos P.D.R.
Myanmar
```

ต้องกลับไปตรวจสอบชื่อ ที่อยู่ และสถานะสำนักงานจากเว็บไซต์เดิมอีกครั้งก่อนนำมาแสดงจริง

สามารถออกแบบเป็น:

* Regional Map
* Location Cards
* Office List
* Country Tabs

ห้ามใช้แผนที่ที่ทำให้เข้าใจผิดว่า FMK มีสำนักงานในประเทศที่ไม่มีข้อมูลยืนยัน

---

## SECTION 10 — PARTNERS / CLIENT TRUST

สร้างพื้นที่รองรับ:

* Client Logos
* Partner Logos
* Certification
* Brand Distribution Rights
* Supplier Network
* Memberships
* Quality Standards

ห้ามสร้างโลโก้คู่ค้าหรือใบรับรองขึ้นเอง

หากไม่มีข้อมูล ให้ซ่อน Section นี้ด้วย Feature Flag หรือ Comment ไว้ในโค้ด

ตัวอย่าง:

```js
const showPartnersSection = false;
```

---

## SECTION 11 — KNOWLEDGE AND INSIGHTS

หัวข้อ:

```text
Industry Knowledge and Practical Insights
```

แสดงบทความล่าสุด 3 รายการ

หมวดเนื้อหา:

* Livestock Management
* Animal Health
* Feed and Nutrition
* Greenhouse Technology
* Cold Chain
* Logistics
* Cross-border Trade
* Agriculture Industry Trends

แต่ละบทความต้องมี:

* Category
* Image
* Title
* Short excerpt
* Published date
* Read more link

หากยังไม่มีบทความจริง ให้ใช้ Placeholder ที่ไม่อ้างว่าเผยแพร่แล้ว

---

## SECTION 12 — FINAL CTA

ใช้ Background Image หรือสีเขียวเข้ม

Headline:

```text
Let’s Build Your Next Operation Together
```

ข้อความ:

```text
Talk to FMK about big-lot supply, livestock systems, agricultural projects, cold storage or regional logistics.
```

CTA:

```text
Request Consultation
```

CTA รอง:

```text
Contact Our Team
```

สามารถแสดงข้อมูลติดต่อหลัก:

* Phone
* Email
* LINE
* WhatsApp
* Contact Form

ต้องตรวจสอบข้อมูลจริงจากเว็บไซต์เดิมก่อนใช้

---

## SECTION 13 — FOOTER

Footer ต้องดูเป็น Corporate Footer ระดับองค์กร

แบ่ง Column:

### Company

* About FMK
* Vision and Mission
* Management
* Careers
* Contact

### Solutions

* Agricultural Inputs
* Feed and Animal Health
* Livestock Engineering
* Greenhouse
* Cold Chain
* Logistics

### Resources

* Projects
* Knowledge
* Downloads
* News
* FAQ

### Contact

* Head Office
* Phone
* Email
* Business Hours
* Social Media

ด้านล่างแสดง:

```text
Copyright
Privacy Policy
Terms of Use
Cookie Policy
Sitemap
```

---

# 8. LEAD GENERATION

หน้าแรกต้องออกแบบเพื่อสร้าง Lead

สร้างปุ่ม:

```text
Request Consultation
Request Quotation
Discuss Your Project
Contact Specialist
Download Company Profile
```

สร้าง Modal หรือ Drawer สำหรับ Request Consultation

Form Fields:

```text
Full Name
Company Name
Job Position
Email
Phone
Country
Interested Solution
Estimated Project Type
Message
Preferred Contact Method
Privacy Consent
```

Validation:

* ตรวจ Required Fields
* ตรวจ Email Format
* ตรวจ Phone Format ขั้นพื้นฐาน
* แสดง Error ใต้ Field
* แสดง Success State
* Disable ปุ่มระหว่างส่ง
* ป้องกันการกดซ้ำ
* รองรับ Server Error
* รองรับ Anti-spam
* เตรียมจุดเชื่อมต่อ API

ห้ามแสดงข้อความว่าส่งสำเร็จ หากยังไม่ได้ส่งข้อมูลจริง

สำหรับ Prototype ให้ใช้ข้อความ:

```text
Demo form — backend integration required
```

---

# 9. RESPONSIVE DESIGN

ต้องรองรับ:

```text
Desktop ≥ 1280px
Laptop 1024–1279px
Tablet 768–1023px
Mobile 375–767px
Small Mobile 320–374px
```

ต้องตรวจสอบ:

* ไม่มี Horizontal Scroll
* Header ไม่ล้น
* Navigation ใช้งานได้
* Hero Text ไม่ชน
* CTA กดง่าย
* Card เรียงถูกต้อง
* Form ใช้งานได้
* Footer อ่านง่าย
* รูปไม่ยืด
* Typography ไม่ใหญ่หรือเล็กเกินไป

Touch Target ขั้นต่ำ:

```text
44 × 44px
```

---

# 10. ACCESSIBILITY

ให้พัฒนาตามแนวทาง WCAG 2.2 ระดับ AA เท่าที่เหมาะสม

ต้องมี:

* Semantic HTML
* Correct heading hierarchy
* Alt text
* Keyboard navigation
* Visible focus states
* Sufficient contrast
* ARIA attributes เฉพาะที่จำเป็น
* Label สำหรับทุก Form Field
* Skip to main content
* Reduced motion support
* ไม่ใช้สีเพียงอย่างเดียวในการสื่อความหมาย

รองรับ:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 11. PERFORMANCE

ตั้งเป้าหมาย:

```text
Lighthouse Performance ≥ 90
Accessibility ≥ 95
Best Practices ≥ 95
SEO ≥ 95
```

ต้องทำ:

* ใช้ WebP หรือ AVIF
* Lazy-load รูปนอก Above the Fold
* ระบุ Width และ Height ของรูป
* ลด Layout Shift
* Preload เฉพาะ Resource สำคัญ
* ลด JavaScript ที่ไม่จำเป็น
* ห้ามใช้ Animation Library ขนาดใหญ่โดยไม่มีเหตุผล
* Minify CSS และ JS ใน Production
* ใช้ SVG Icon
* Optimize Font Loading
* ใช้ Font Display Swap
* หลีกเลี่ยง Video Background บน Mobile

---

# 12. SEO

กำหนด SEO สำหรับหน้าแรก

## Title

```text
FMK Intertrade | Agriculture, Livestock, Engineering & Cold Chain Solutions
```

## Meta Description

```text
FMK Intertrade delivers integrated agriculture, livestock, engineering, cold storage, logistics and cross-border trade solutions across Southeast Asia.
```

ต้องมี:

* Canonical URL
* Open Graph
* Twitter Card
* Favicon
* Web App Manifest
* Organization Schema
* WebSite Schema
* Breadcrumb Schema เฉพาะหน้าภายใน
* Language Alternate Tags เมื่อรองรับหลายภาษา
* Semantic URL
* robots.txt
* sitemap.xml

ห้ามใส่ข้อมูลใน Structured Data ที่ไม่มีอยู่จริง เช่น:

* Review
* Rating
* Award
* จำนวนลูกค้า
* ปีดำเนินธุรกิจ
* ใบรับรอง

---

# 13. MULTILINGUAL PREPARATION

เตรียมโครงสร้างรองรับ:

```text
Thai
English
Lao
Myanmar
```

เวอร์ชันแรกสามารถแสดง Thai และ English

ห้าม Hard-code ข้อความกระจายทั่ว Component

ให้สร้าง Translation Structure เช่น:

```js
const translations = {
  th: {},
  en: {}
};
```

หรือใช้ i18n Library ตาม Technology Stack

Path ที่แนะนำ:

```text
/th/
/en/
```

หรือใช้ Default Language ตาม Requirement ของระบบ

---

# 14. COMPONENT ARCHITECTURE

แยก Component อย่างเป็นระบบ

ตัวอย่าง:

```text
components/
├── layout/
│   ├── TopBar
│   ├── Header
│   ├── MobileNavigation
│   └── Footer
│
├── home/
│   ├── HeroSection
│   ├── TrustBar
│   ├── AboutSection
│   ├── SolutionsSection
│   ├── SolutionCard
│   ├── FeaturedProjects
│   ├── ProjectCard
│   ├── WhyFMKSection
│   ├── RegionalNetwork
│   ├── PartnersSection
│   ├── KnowledgeSection
│   └── FinalCTA
│
├── forms/
│   ├── ConsultationForm
│   ├── FormField
│   ├── SelectField
│   └── ConsentField
│
└── ui/
    ├── Button
    ├── Container
    ├── SectionHeading
    ├── Icon
    ├── Modal
    └── Badge
```

ห้ามเขียนทุกอย่างรวมในไฟล์เดียว หากเป็น Production Project

---

# 15. DATA STRUCTURE

ข้อมูลที่เปลี่ยนแปลงได้ต้องแยกออกจาก Component

ตัวอย่าง:

```text
data/
├── company.ts
├── navigation.ts
├── solutions.ts
├── projects.ts
├── locations.ts
├── articles.ts
└── contact.ts
```

แต่ละรายการต้องมี Type หรือ Interface ชัดเจน

ตัวอย่าง:

```ts
interface Solution {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  href: string;
  order: number;
  isActive: boolean;
}
```

---

# 16. DESIGN SYSTEM

สร้าง Design Tokens กลาง

```css
:root {
  --color-primary-950: #061B14;
  --color-primary-900: #0B2F22;
  --color-primary-800: #123F2E;

  --color-accent-500: #C4A263;

  --color-neutral-950: #17211D;
  --color-neutral-600: #68736E;
  --color-neutral-300: #DCE3DF;
  --color-neutral-100: #F4F7F5;
  --color-white: #FFFFFF;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-xl: 30px;

  --shadow-sm: 0 4px 16px rgba(11,47,34,.06);
  --shadow-md: 0 16px 40px rgba(11,47,34,.10);
  --shadow-lg: 0 24px 70px rgba(11,47,34,.14);

  --container-max: 1180px;
}
```

Spacing System:

```text
4
8
12
16
24
32
40
48
64
80
96
120
```

ใช้ระบบเดียวกันทั้งเว็บไซต์

---

# 17. INTERACTION AND MOTION

Motion ต้องมีลักษณะ:

* สุภาพ
* ช้าเล็กน้อย
* มั่นคง
* ไม่หวือหวา

ใช้ Animation เช่น:

* Fade up
* Subtle image scale
* Card elevation
* Header transition
* Button arrow movement
* Section reveal

ระยะเวลาแนะนำ:

```text
180–450ms
```

ห้ามใช้:

* Bounce
* Neon glow
* Parallax รุนแรง
* Auto-rotating carousel เร็ว
* Animation ทุก Element
* Cursor effect ที่รบกวนผู้ใช้
* Loading animation ที่ไม่จำเป็น

---

# 18. CONTENT RULES

การเขียนข้อความต้อง:

* กระชับ
* มี Authority
* ไม่กล่าวเกินจริง
* ไม่ใช้ Superlative โดยไม่มีหลักฐาน
* ไม่เขียนว่าเป็นอันดับ 1 หากไม่มีหลักฐาน
* ไม่สร้างตัวเลขขึ้นเอง
* ไม่สร้างชื่อคู่ค้าหรือลูกค้าขึ้นเอง
* ไม่ใช้ข้อความ Generic มากเกินไป
* เน้นประโยชน์ทางธุรกิจ
* เน้นความน่าเชื่อถือจากหลักฐานจริง

คำที่ควรใช้:

```text
Integrated
Reliable
Regional
Technical
Responsible
Long-term
Operational
Infrastructure
Capability
Partnership
```

คำที่ควรหลีกเลี่ยง:

```text
Best
Number One
World-class
Unmatched
Revolutionary
Guaranteed
Perfect
```

เว้นแต่มีหลักฐานรองรับ

---

# 19. DEVELOPMENT REQUIREMENTS

ก่อนเริ่มเขียนโค้ด:

1. สำรวจโครงสร้าง Repository
2. อ่าน README
3. อ่าน Coding Standard
4. ตรวจ Technology Stack
5. ตรวจ CSS Framework
6. ตรวจ Icon Library
7. ตรวจ Component ที่มีอยู่
8. ตรวจ Routing
9. ตรวจ Asset Structure
10. ตรวจระบบภาษา
11. ตรวจ API และ Form Handling
12. ตรวจ Environment Variables

ห้ามติดตั้ง Library ใหม่ทันที หากระบบเดิมมี Library ที่ทำหน้าที่เดียวกันอยู่แล้ว

หากยังไม่มี Project ให้สร้างด้วย Stack ที่เหมาะสม:

```text
Next.js
TypeScript
Tailwind CSS
Lucide Icons
React Hook Form
Zod
```

แต่หาก Repository ใช้ PHP, Laravel, WordPress หรือ Stack อื่น ให้พัฒนาตาม Stack เดิมและรักษามาตรฐานเดียวกัน

---

# 20. REQUIRED DELIVERABLES

สร้างผลลัพธ์ดังนี้:

```text
1. หน้า Homepage ที่สมบูรณ์
2. Responsive Layout
3. Header และ Mobile Navigation
4. Consultation Form UI
5. Reusable Components
6. Design Tokens
7. Mock Data แยกไฟล์
8. SEO Metadata
9. Structured Data
10. Accessibility States
11. Loading / Error / Empty States ที่เกี่ยวข้อง
12. README สำหรับวิธีใช้งาน
```

ถ้าใช้ Placeholder Image ต้องระบุไฟล์และตำแหน่งที่ต้องเปลี่ยน

สร้างเอกสาร:

```text
docs/FMK_HOMEPAGE_IMPLEMENTATION.md
```

เอกสารต้องอธิบาย:

* Brand Identity
* Page Structure
* Component Structure
* Data Source
* Placeholder Data
* Image Requirements
* SEO
* Accessibility
* Responsive Behavior
* Form Integration
* Remaining Tasks

---

# 21. QUALITY ASSURANCE CHECKLIST

ก่อนส่งงาน ให้ตรวจสอบอย่างน้อย 3 รอบ

## รอบที่ 1 — Business and Content

ตรวจ:

* ข้อมูลตรงกับธุรกิจ FMK
* ไม่มีข้อมูลแต่งขึ้น
* ไม่มีตัวเลขที่ไม่ยืนยัน
* ไม่มีโครงการปลอม
* ไม่มีชื่อคู่ค้าปลอม
* Positioning ตรงกับ The Infrastructure Partner
* CTA เหมาะกับลูกค้า B2B

## รอบที่ 2 — UX/UI and Responsive

ตรวจ:

* Desktop
* Tablet
* Mobile
* Navigation
* Hero
* Cards
* Forms
* Footer
* Spacing
* Alignment
* Typography
* Contrast
* Hover
* Focus
* Modal
* Scroll behavior

## รอบที่ 3 — Technical Quality

ตรวจ:

* ไม่มี Console Error
* ไม่มี Broken Link
* ไม่มี Missing Asset
* ไม่มี Hydration Error
* ไม่มี Duplicate ID
* HTML Semantic ถูกต้อง
* TypeScript ผ่าน
* Lint ผ่าน
* Build ผ่าน
* Form Validation ทำงาน
* SEO Metadata ครบ
* Performance ไม่มีปัญหาร้ายแรง

รันคำสั่งที่เกี่ยวข้อง เช่น:

```bash
npm run lint
npm run typecheck
npm run build
```

หาก Repository มี Test ให้รัน Test ด้วย

---

# 22. STRICT PROHIBITIONS

ห้าม:

* เปลี่ยนหน้าเว็บให้ดูเหมือนร้านขายปุ๋ย
* ใช้สีเขียวสดมากเกินไป
* ใช้ Emoji แทน Icon
* ใช้ Gradient ฉูดฉาด
* ใช้ Font หลายตระกูล
* ใส่ Animation จำนวนมาก
* สร้างข้อมูลบริษัทขึ้นเอง
* สร้าง Project Reference ปลอม
* สร้าง Client Logo ปลอม
* สร้าง Certification ปลอม
* ใช้ Stock Image แล้วอ้างว่าเป็นโครงการ FMK
* Hard-code ข้อมูลสำคัญทั่ว Component
* รวมทุกอย่างไว้ใน Component เดียว
* ใช้ Lorem Ipsum ใน Final Version
* แสดงฟอร์มส่งสำเร็จทั้งที่ไม่มี Backend
* เปลี่ยน Stack หลักของ Repository โดยไม่ได้ตรวจสอบ
* ลบโค้ดหรือ Feature เดิมที่ไม่เกี่ยวข้องกับงาน
* แก้ไฟล์ Global โดยไม่ประเมินผลกระทบ
* ทำงานเพียง Desktop แล้วละเลย Mobile

---

# 23. FINAL DESIGN EXPECTATION

เมื่อผู้บริหาร เจ้าของฟาร์ม นักลงทุน หรือฝ่ายจัดซื้อเปิดหน้าแรก ต้องรับรู้ภายในไม่กี่วินาทีว่า:

```text
FMK เป็นองค์กรที่มั่นคง
FMK เข้าใจธุรกิจเกษตรและปศุสัตว์
FMK มีทั้งสินค้า ระบบ และบริการ
FMK สามารถรองรับโครงการและลูกค้าองค์กร
FMK มีเครือข่ายระดับภูมิภาค
FMK เป็นพันธมิตรที่ทำงานระยะยาวได้
```

ผลลัพธ์สุดท้ายต้องดูเหมือนเว็บไซต์ของบริษัทองค์กรที่มีระบบ มีประสบการณ์ และพร้อมทำธุรกิจกับลูกค้าระดับ B2B และระดับภูมิภาค

---

# 24. EXECUTION INSTRUCTION

ดำเนินงานตามลำดับ:

```text
Step 1: Audit repository and current website
Step 2: Summarize verified FMK business information
Step 3: Create homepage information architecture
Step 4: Create design tokens and component plan
Step 5: Implement responsive homepage
Step 6: Add accessibility and interaction
Step 7: Add SEO and structured data
Step 8: Test desktop, tablet and mobile
Step 9: Run lint, typecheck and build
Step 10: Document completed work and remaining placeholders
```

ให้เริ่มดำเนินการทันทีโดยไม่ถามคำถามซ้ำในเรื่องที่มีข้อมูลอยู่แล้ว

หากข้อมูลบางรายการยังตรวจสอบไม่ได้:

* ห้ามเดา
* ใช้ Placeholder อย่างชัดเจน
* บันทึกไว้ใน `FMK_HOMEPAGE_IMPLEMENTATION.md`
* ทำส่วนอื่นที่สามารถพัฒนาได้ต่อไป

เมื่อเสร็จแล้วให้สรุป:

1. ไฟล์ที่สร้าง
2. ไฟล์ที่แก้ไข
3. Component ที่พัฒนา
4. ข้อมูลจริงที่นำมาใช้
5. Placeholder ที่ยังต้องได้รับข้อมูลจาก FMK
6. ผลการทดสอบ
7. คำสั่งสำหรับเปิดดูหน้าเว็บ
8. งานลำดับถัดไปที่ควรทำ

## Assistant

I'll start by analyzing the existing FMK website to extract verified business information, then build the new homepage. The brief fully specifies the design direction, so I won't ask redundant questions.

_[tool: update_todos]_

_[tool: web_fetch]_

The existing site gives me verified facts. Key confirmed data:

- **Company:** FMK Intertrade Company Limited
- **Head office:** 142/36 Suksawitthaya Soi, Silom, Bangrak, Bangkok 10500
- **Phone:** +66 2 268 1681-2 / +66 98 498 9939 · **Email:** support@fmkintertrade.com
- **TH network:** Bangkok (HQ), Chiang Mai, Nakhon Phanom, Nakhon Ratchasima · **Overseas:** Laos P.D.R. (FMK Laos Intertrade), Myanmar (Rep. Office)
- **Real business lines:** fertilizer/soil inputs, feed + feed additive + veterinary medicine, livestock equipment (swine/poultry), egg packaging; construction services: evaporative livestock housing, greenhouse, cold storage/packing, transportation & shipping agent
- **Social:** Facebook, YouTube, WhatsApp, LINE Official, Telegram

Projects, client logos, and articles have no verifiable data — I'll mark those as clearly-labeled placeholders per the brief. Now building the homepage as a single bilingual (EN/TH) Design Component.

_[tool: update_todos]_

_[tool: web_fetch]_

Now I'll build the homepage. This is a large single DC with the logic class holding all data + i18n, and the template rendering it.

_[tool: dc_write]_

_[tool: show_html]_

I need to verify the render before finishing. Let me check it loads cleanly.

_[tool: show_html]_

React error — I have a duplicate key: `network.overseas` is defined both as the label string `'OVERSEAS'` and as the offices array, so the array overwrote the string and got rendered as a child. Renaming the array key.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: show_html]_

Renders cleanly. Now I need responsive behavior — the desktop nav needs to collapse to the hamburger on smaller screens, and grids need to stack. Since media queries can't be inline, I'll add a minimal responsive block to the helmet targeting the `data-*` hooks I already placed.

_[tool: dc_html_str_replace]_

The form's 2-col grid needs the `data-form-grid` hook to collapse on mobile.

_[tool: dc_html_str_replace]_

Let me verify the key interactive states (mobile menu + consultation modal) and scrolled sections.

_[tool: multi_screenshot]_

The desktop CTA is correctly hidden at this width (hamburger showing instead). Let me verify the mobile menu and the consultation modal open properly.

_[tool: multi_screenshot]_

Modal and form render correctly with the demo badge. Let me verify validation errors, the demo success state, and the Thai toggle.

_[tool: multi_screenshot]_

Validation and the honest "demo" success state both work correctly. Everything functions. Now the implementation doc.

_[tool: update_todos]_

_[tool: write_file]_

_[tool: update_todos]_

The FMK Intertrade homepage is built and functioning. Handing off for verification.

_[tool: ready_for_verification]_

เสร็จแล้วครับ — หน้าแรกใหม่ของ FMK Intertrade อยู่ในไฟล์ `FMK Homepage.dc.html` (สองภาษา EN/TH สลับได้)

**สิ่งที่ทำ**
- ออกแบบใหม่ทั้งหมดตาม positioning "The Infrastructure Partner" — ดูเป็นบริษัท B2B ระดับองค์กร ไม่ใช่ร้านขายสินค้าเกษตร ใช้ระบบสี Deep Forest Green / Graphite / Executive Gold ตามที่กำหนด, Manrope + Noto Sans Thai, ไอคอน outline ชุดเดียว
- 12 ส่วนครบตาม IA: top bar, sticky header (ย่อเมื่อscroll + off-canvas menu), hero, trust bar, about, 6 solution cards, featured projects, why FMK, regional network, knowledge, final CTA, footer
- ฟอร์ม Request Consultation แบบ modal พร้อม validation (required / email / phone / consent) — ไม่แสดงว่าส่งสำเร็จจริง ใช้สถานะ "demo — backend integration required" ตามข้อกำหนด
- Responsive, keyboard/Esc, focus states, reduced-motion, skip link

**ข้อมูลจริงที่ใช้ (จากเว็บเดิม):** ชื่อบริษัท, ที่อยู่สำนักงานใหญ่ Silom Bangkok, เบอร์โทร/อีเมล, สาขาไทย 4 แห่ง (กรุงเทพ/เชียงใหม่/นครพนม/นครราชสีมา), ต่างประเทศ สปป.ลาว + เมียนมา, กลุ่มสินค้า/บริการจริง, ลิงก์โซเชียลจริง

**Placeholder ที่ต้องรอข้อมูลจาก FMK** (ทำเครื่องหมายชัดเจนในโค้ด + doc): ภาพจริง hero/about/projects, ชื่อและผลลัพธ์โครงการจริง, บทความจริง, และ **Partners/Certification section ที่ปิดไว้** จนกว่าจะมีโลโก้/ใบรับรองจริง — รายละเอียดทั้งหมดอยู่ใน `docs/FMK_HOMEPAGE_IMPLEMENTATION.md` พร้อมขั้นตอนต่อ (เชื่อม backend, เพิ่ม SEO/JSON-LD, routing /th /en)

เปิดดูได้ที่ `FMK Homepage.dc.html` — สลับภาษาที่มุมขวาบน, กด Request Consultation เพื่อเปิดฟอร์ม

