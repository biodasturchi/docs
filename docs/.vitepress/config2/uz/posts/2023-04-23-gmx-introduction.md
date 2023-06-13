---
title: Gromacs'ni docking va dastlabki model sistemani qurish
author: Mirsoli Mirsultonov
date: 2023-04-24
subDate: 2023/04/24
image: https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-04-24/gromacs.png
description: Ushbu maqola orqali gromacs dasturini GPU'li yoki GPU'siz docking hamda dastlabki model sistemamizni qurish haqida ma'lumotga ega bo'lasiz
category: Bio
tags:
  - gromacs
  - molecular modeling
  - molecular dynamics
  - bioinformatics
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

_[{{ $frontmatter.author }}](mailto:mirjr17@outlook.com)_ | {{ $frontmatter.subDate}}

[![banner](https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-04-24/gromacs.png)](https://manual.gromacs.org/current/index.html)

## Kirish `O'zbekcha`

GROMACS molekulyar dinamikani amalga oshirish, ya'ni millionlab zarrachalar bo'lgan tizimlar uchun Nyuton harakat tenglamalarini taqlid qilish uchun ko'p qirrali paket bo'lib, jamiyat tomonidan boshqariladigan loyihadir. Hujjatlarni yaxshilash, xatolarni tuzatish uchun hujjatlar, forumlar bo'yicha maslahatlar, muammoni qayta ishlab chiqarishga imkon beruvchi xato hisobotlari va yangi funksiyalar kabi hissalar ko'p shakllarda qabul qilinadi.

GROMACS zamonaviy molekulyar dinamikani amalga oshirishdan kutgan barcha odatiy algoritmlarni qo'llab-quvvatlaydi (batafsil ma'lumot uchun onlayn ma'lumotnoma yoki qo'llanmani tekshiring), lekin uni raqobatchilardan ajratib turadigan bir nechta xususiyatlar mavjud:

- GROMACS boshqa barcha dasturlarga nisbatan juda yuqori unumdorlikni ta'minlaydi. Kodda ko'plab algoritmik optimallashtirishlar kiritilgan. Masalan, biz juftlik o'zaro ta'siri bo'yicha eng ichki halqalardan virialning hisobini chiqardik va teskari kvadrat ildizni hisoblash uchun o'z dasturiy ta'minotimizdan foydalanamiz. Hisoblash yadrolari protsessorlar uchun SIMD intrinsics va GPU uchun CUDA, OpenCL va SYCL yordamida yozilgan. Shunday qilib, barcha zamonaviy CPU va GPUlarning to'liq imkoniyatlaridan foydalanish mumkin.

- GROMACS bir vaqtning o'zida tizimda mavjud bo'lgan CPU va GPUdan foydalanishi mumkin. Turli xil resurslar o'rtasidagi yukni statik va dinamik ravishda muvozanatlash variantlari mavjud.

- GROMACS foydalanuvchilar uchun qulay, aniq matn formatida yozilgan topologiyalar va parametr fayllari bilan keladi. Ko'p izchillik tekshiruvi mavjud va biror narsa noto'g'ri bo'lsa, aniq xato xabarlari chiqariladi. C-preprotsessor ishlatilganligi sababli, topologiyalaringizda shartli qismlarga ega bo'lishingiz va boshqa fayllarni kiritishingiz mumkin. Siz hatto ko'pgina fayllarni siqib qo'yishingiz mumkin va GROMACS ularni o'qishdan keyin avtomatik ravishda gzip orqali o'tkazadi.

- Hech qanday skript talab qilinmaydi - barcha dasturlar kirish va chiqish fayllari uchun buyruq qatori opsiyalari bilan oddiy interfeysdan foydalanadi. Siz har doim `-h` opsiyasidan foydalanib variantlar bo'yicha yordam olishingiz yoki elektron yoki qog'oz formatda bepul taqdim etilgan keng qamrovli qo'llanmalardan foydalanishingiz mumkin. Simulyatsiyani sozlash, ishga tushirish va tahlil qilish uchun skript yaratish imkonini beruvchi Python API ustida ish olib borilmoqda.

- Ishlaydigan kirish fayllari ham, traektoriyalari ham apparat qurilmasiga bog'liq emas va shuning uchun GROMACS-ning istalgan versiyasida o'qilishi mumkin, hatto u boshqa suzuvchi nuqta aniqligidan foydalangan holda tuzilgan bo'lsa ham.

- GROMACS yo'qolgan siqilish yordamida koordinatalarni yozishi mumkin, bu traektoriya ma'lumotlarini saqlashning juda ixcham usulini ta'minlaydi. Aniqlik foydalanuvchi tomonidan tanlanishi mumkin.

- GROMACS traektoriyani tahlil qilish uchun moslashuvchan asboblarning katta tanlovi bilan birga keladi va chiqish formatlari barcha asosiy tahlil va vizualizatsiya paketlari tomonidan qo'llab-quvvatlanadi.

- GROMACS standart MPI aloqa protokoli yordamida yoki bitta tugunli ish stantsiyalari uchun o'zimizning "Thread MPI" kutubxonamiz orqali parallel ravishda ishga tushirilishi mumkin.

- GROMACS bir nechta zamonaviy algoritmlarni o'z ichiga oladi, ular vaqt bosqichlarini simulyatsiya qilish vaqtini sezilarli darajada uzaytirishga imkon beradi va shu bilan aniqlik va tafsilotlarni yo'qotmasdan ishlashni yanada oshiradi.

- Paket oqsillar, hatto multimerik tuzilmalar uchun to'liq avtomatlashtirilgan topologiya quruvchisini o'z ichiga oladi. 20 ta standart aminokislota qoldiqlari, shuningdek ba'zi o'zgartirilganlar, 4 nukleotid va 4 deoksinukleotid rezidentlari, bir nechta shakar va lipidlar, shuningdek, gemlar va bir nechta kichik molekulalar kabi ba'zi maxsus guruhlar uchun qurilish bloklari mavjud.

- GROMACS modullar orqali MDModules deb ataladigan interfeys orqali kengaytiriladi. Bu hozirda qo'shimcha kuchlar uchun yo'l beradi va u doimiy ravishda yangi funksiyalar bilan kengaytiriladi.

GROMACS - bu to'g'ri nom. Bu hech narsaning qisqartmasi emas.

## GROMACS'ni GPU'siz docking

Grmocas faqat  `Linux` va `MacOS` operatsion sistemalarida ishlaydi. Ushbu maqolada GROMACS'ni dockingni linux distributivi bo'lmish `Ubuntu`ning `22.04` versiyasidan foydalanamiz.

1. Avval paketlarni yangilab olamiz
```bash
sudo apt update && sudo apt upgrade
```

2. Endi GROMACS'ni o'rnatamiz
```bash
sudo apt install gromacs
```

> Ushbu usulda GROMACS' dasturini docking oson, lekin uning ishlash samaradorligi juda ham kam

## GROMACS'ni GPU'li docking

1. Avval ushbu saytdan bizga kerak bo'lgan GMX dasturini yuklab olamiz: https://manual.gromacs.org/current/download.html

2. Endi kompyuterimiz sistemasiga mos `CUDA TOOLKIT`ni yuklab olamiz: https://developer.nvidia.com/cuda-downloads
  
    Saytda ko'rsatilgan ko'dlarni nusxalab terminalingizga tashlang va ishlating

3. Endi Gromacs kompilyatsiya jarayoni boshlaymiz, quyidagi kodlarni birma-bir nusxalab terminalingizda ishlating:
```bash
tar xfz gromacs-2020.2.tar.gz
cd gromacs-2020.2
mkdir build
cd build
cmake .. -DGMX_GPU=CUDA -DCUDA_TOOLKIT_ROOT_DIR=/usr/local/cuda -DGMX_BUILD_OWN_FFTW=ON -DREGRESSIONTEST_DOWNLOAD=ON
make
make check
sudo make install

# Ushbu kodni nusxalab .bashrc yoki .bashrc_profile fayliga tashlab qo'ying:
source /usr/local/gromacs/bin/GMXRC
```
> Ushbu usulda docking kompyuterning kuchiga qarab 1 soatdan ko'proq vaqt olishi mumkin


## `pdb2gmx` modulini ishlatish
`pdb2gmx` ning maqsadi uchta faylni yaratishdir:
1. Molekula uchun topologiya
2. Joylashuvni cheklash (position restraint) fayli.
3. Qayta ishlangan (post-processed) struktura fayli.

Topologiya (sukut bo'yicha topol.top) simulyatsiya doirasida molekulani aniqlash uchun zarur bo'lgan barcha ma'lumotlarni o'z ichiga oladi. Ushbu ma'lumotlar bog'lanmagan parametrlarni (atom turlari va zaryadlari), shuningdek bog'langan parametrlarni (bog'lar, burchaklar) o'z ichiga oladi.

Avval biz 216 ta suvni o'z ichiga olgan, gromacs bilan birga keladigan spc216.gro faylini ishlayotgan joyimizga ko'chirib olib kelishimiz kerak.

- Avval spc216.gro faylini joylashgan manzilini aniqlaymiz:

```bash
locate spc216.gro
> /usr/local/gromacs/share/gromacs/top/spc216.gro
```

- Endi ushbu faylni ko'chirib olamaiz:

```bash
cp /usr/local/gromacs/share/gromacs/top/spc216.gro ./
```

Quyidagi buyruqni berish orqali pdb2gmx ni bajaring

```bash
gmx pdb2gmx -f spc216.gro

> default OPLS
> default SPC
```

## Box o'lchamlarini oshirish orqali sistemadagi suv molekulalar sonini oshirish:

```bash
gmx solvate -cs conf.gro -o out_conf.gro -box 2.5 -p topol.top
```
> `topol.top` faylini text editorda ochib, eng pastdagi `HOH` qatorini o'chirib, `SOL` qatorini 510 ga tenglashtirib qo'ying

## Suv energiyasini minimallashtirish uchin `min.mdp` dan foydalanamiz. Ushbu faylni [bu yerdan](https://raw.githubusercontent.com/biodasturchi/docs/main/docs/sources/files/gmx/files/min.mdp) ko'chirib olishingiz mumkin.

```bash
gmx grompp -f min.mdp -c out_conf.gro -p topol.top -o min -maxwarn 2
gmx mdrun -deffnm min -v
```

## Joylashuvni cheklash (position restraint), ushbu faylni fayli [bu yerdan](https://raw.githubusercontent.com/biodasturchi/docs/main/docs/sources/files/gmx/files/pr.mdp) ko'chirib olishingiz mumkin.

```bash
gmx grompp -v -f pr.mdp -c min.gro -p topol.top -o pr -maxwarn 2
gmx mdrun -v -deffnm pr   
```

## NVT, ushbu faylni fayli [bu yerdan](https://raw.githubusercontent.com/biodasturchi/docs/main/docs/sources/files/gmx/files/nvt.mdp) ko'chirib olishingiz mumkin.

```
gmx grompp -v -f nvt.mdp -c pr.gro -p topol.top -o nvt -maxwarn 2
gmx mdrun -v -deffnm nvt
```

## NPT, ushbu faylni fayli [bu yerdan](https://raw.githubusercontent.com/biodasturchi/docs/main/docs/sources/files/gmx/files/npt.mdp) ko'chirib olishingiz mumkin.

```bash
gmx grompp  -f npt.mdp -c nvt.gro -p topol.top -o npt -maxwarn 2 
gmx mdrun -deffnm npt
```

## Oxirgi `prodaction` jarayoni, bunda sistemamizga 1 ns vaqt beramiz, ushbu faylni fayli [bu yerdan](https://raw.githubusercontent.com/biodasturchi/docs/main/docs/sources/files/gmx/files/prod.mdp) ko'chirib olishingiz mumkin.

```bash
gmx grompp -f prod.mdp -c npt.gro -p topol.top -o prod -maxwarn 2
gmx mdrun -deffnm prod
```

## Trayektoriyani hisoblash

```bash
gmx trjconv -s prod.tpr -f prod.trr -o frames.pdb -pbc mol
```

## Natijalarni analiz qilish

```bash
gmx energy -f prod.edr -o temp.xvg
xmgrace temp.xvg

gmx energy -f prod.edr -o press.xvg
xmgrace press.xvg
```