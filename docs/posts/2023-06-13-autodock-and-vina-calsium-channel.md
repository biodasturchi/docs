---
title: Autodock va Autodock Vina dasturlari yordamida L-tipli Ca 1.1 va Ca 1.3 kanaliga ligand moddalarni kiritish
author: Mirsoli Mirsultonov
date: 2023-06-13
subDate: 2023/06/13
image: https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2022-11-29/pymol2.png
description: Ushbu natijalar to'liq yakunlanmagan
category: Bio
tags:
  - docking
  - autodock
  - vina
  - pymol
  - discoverystudio
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

_[ {{ $frontmatter.author }} ](mailto:mirjr17@outlook.com)_ | {{ $frontmatter.subDate}}

![banner](https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2022-11-29/pymol2.png)

## Qisqacha

Turli xil terapevtik ahamiyatga ega kimyoviy obyektlarni aniq maqsadli joylarga joylashtirish preparatni loyihalash jarayonida juda katta hajmga ega bo'lishi mumkin bo'lgan mazmunli strategiyani taklif qiladi. Ligandning retseptorlar bilan bog'lanish kuchini aniqlaydigan strukturaviy xususiyatlarni to'liq tushunish uchun - bog'lanish geometriyalari va o'zaro ta'sirini tasavvur qilish zarur. Autodock va Autodock Vina molekulyar docking to'plamlari bilan birgalikda bioinformatika va grafik dasturiy ta'minot "PyMOL" molekulyar birikmani o'rganishga strukturaga asoslangan dorilarni loyihalash bo'yicha harakatlarni tasavvur qilish va tushunish imkonini beradi. Ushbu tadqiqotda biz Autodock va Autodock Vina yordamida molekulyar dockingni amalga oshirish uchun foydalanuvchilarga qulay usulni belgilab oldik va nihoyat natijalar PyMOL-da ikki va uch o'lchovli yo'nalishda tahlil qilindi.

<sup>_**Keywords:** Auto-Dock; Chemdraw; DSV (Discovery Studio Visualizer); PDB (Protein Data Bank) and Pubchem: PYMOL_</sup>

## Kirish

Texnika taraqqiyotining hozirgi davrida kompyuter yordamida ishning ishonchliligini, unumdorligini va eng muhimi qulayligini oshirish uchun turli operatsiyalar bajarilmoqda. Masalan, kompyuter yordamida tuzilishga asoslangan dori-darmonlarni loyihalash sohasida _molekulyar docking_ oqsil-ligand kompleksining taniqli va tan olingan geometriyasini bashorat qilish va maqsadning o'ziga xos ligandlar bilan o'zaro ta'sirini o'rganish uchun tez-tez ishlatilgan. Docking metodologiyasining autentifikatsiyasi parallel kristallografiya usullari bilan tasdiqlanishi mumkin. Bundan tashqari, virtual skrining tajribalarida ligandlarning bog'lanish yaqinligini bashorat qilish uchun ko'pincha _scoring function_ bilan bir qatorda docking ishlatiladi (1). Yangi birikmalar sintezida strukturaviy faollik munosabatlarini oʻrganishda ham muhim ahamiyatga ega (2 va 3). Docking funksiyasi tizimning energetikasini va ligand molekulasining bog'lanish samaradorligini aniqlashdan iborat, chunki u docking algoritmlariga urinishning asosini tashkil qiladi. So'nggi yillarda kichik molekulalarni ma'lum protein tuzilishiga joylashtirish uchun virtual skrining texnikasi jarayoni dori dizayni uchun kuchli vosita bo'lib, dori yaratish jarayonining ajralmas qismiga aylandi. Auto-Dock kabi turli xil hisoblash vositalari mavjud bo'lib, ular nisbatan tezroq sur'atda molekulyar dockingning afzalliklarini taklif qiladi (4). Auto-Dock - bu har xil konformatsiyalarga ega bo'lgan ligandlarni hisoblash va uning energiyasiga bog'liq bo'lgan ball funksiyasini minimallashtirish uchun Lamark tipidagi genetik algoritmdan foydalanadigan bepul docking dasturi. Biroq, virtual skriningda Auto-Dock-dan foydalanish xususiyatlari hisoblanishi mumkin bo'lgan kimyoviy birikmalar bilan cheklangan (5). Ushbu tadqiqotda biz Auto-Dock va Vina-dan foydalangan holda molekulyar docking jarayoni uchun osonroq protokolni taqdim etamiz. Usul L-tipli Ca1.1 va Ca1.3 kalsiy kanallarining 12 xil ligand bilan molekulyar birikishi misolida isbotlangan.

## Metodikasi

## Asosiy ma'lumotlar bazalaridan kerakli protein fayllarini olish.
- Quyidagi havola orqali asosiy protein ma'lumotlar bazalaridan _protein_ fayllarni olish: https://www.rcsb.org/
- Docking tadqiqotlari uchun ishlatiladigan oqsil yoki ferment nomini kiriting (masalan, Calsium channel yoki uning pdb ID-si: 6jpa).


## Foydalanilgan adabiyotlar
1. Muegge I and Rarey M. Reviews in Computational Chemistry. John Wiley & Sons, Inc., (2001), pp 1-60. http://dx.doi.org/10.1002/0471224413.ch1
2. Holloway KM et al., A priori prediction of HIV I protease inhibitors employing energy minimization in the active site. J Med Chem Vol 38 (1995), pp 305-317. http://dx.doi.org/10.1021/jm00002a012.
3. Vieth M, Cummins DJ. DoMCoSAR: a novel approach for establishing the docking mode that is consistent with the structure-activity relationship. Application to HIV-1 protease inhibitors and VEGF receptor tyrosine kinase inhibitors. J Med Chem. Vol.43, No.16, (2000), pp 3020-3032. http://dx.doi.org/10.1021/jm990609e
4. Gilbert D. Bioinformatics software resources. Brief Bioinform. Volume 3, (2004), pp 300-304. Review http://dx.doi.org/10.1093/bib/5.3.300.
5. Lazarova M. Virtual screening models, methods and software systems. International Scientific Conference Computer Science, (2008), pp 55-60.