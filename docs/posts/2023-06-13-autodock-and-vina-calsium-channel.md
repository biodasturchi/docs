---
title: L-tipli Ca1.1 va Ca 1.3 kanallariga ligand moddalarning biriktirilishi
author: Mirsoli Mirsultonov
date: 2023-06-13
subDate: 2023/06/13
image: https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/banner.png
description: Autodock va Autodock Autodock-Vina dasturlari yordamida L-tipli Ca 1.1 va Ca 1.3 kanallariga ligand moddalarni kiritish
category: Bio
tags:
  - docking
  - autodock
  - vina
  - pymol
  - discoverystudio
  - pdb
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

_[ {{ $frontmatter.author }} ](mailto:mirjr17@outlook.com)_ | {{ $frontmatter.subDate}}

![banner](https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/banner.png)

## Kirish

Kalsiy ionlari hujayralardagi asosiy signal ionlaridir. Ular mushaklarning qisqarishini, neyrotransmitter sekretsiyasini, hujayra o'sishini va migratsiyasini, shuningdek, fermentlar, ion kanallari va tashuvchilarni o'z ichiga olgan bir qancha oqsillarning faolligini tartibga soladi. Ular turli xil signal uzatish yo'llarida ishtirok etadilar va shu bilan asosiy fiziologik funksiyalarni tartibga soladi. Kalsiy ionlarining hujayralarga kirishi maxsus kalsiy kanallari va tashuvchilar tomonidan tartibga solinadi. Kalsiy kanallarining asosan olti turi mavjud bo'lib, ulardan faqat ikkitasi yurakda ko'zga tashlanadi. Yurak to'qimalarida ikki turdagi kalsiy kanallari L va T tipdagi kanallar mavjud. L tipidagi kanallar barcha yurak hujayralarida, T tipidagi kanallar Purkine hujayralarida, yurak stimulyatori va atriyal hujayralarda ifodalanadi. Ushbu ikkala kanal turi atrioventrikulyar o'tkazuvchanlikka, shuningdek yurak stimulyatori faoliyatiga yordam beradi. Kalsiy kanallarining yurak o'tkazuvchanligi tizimidagi hal qiluvchi rolini hisobga olgan holda, bu kanallarning mutatsiyalari va disfunksiyalari bir qancha kasalliklar va buzilishlarni keltirib chiqarishi ma'lum. Shunday qilib, kalsiy kanallarini yo'naltiruvchi dorilar turli xil yurak kasalliklarida, shu jumladan gipertoniya, angina va aritmiya bilan cheklanmagan holda qo'llaniladi. Ushbu maqolada L-tipli kalsiy kanallarigi ligand moddalar docking qilinadi va nazorat sifatida `verapamil`, `amlodipine` va `nifedipine` moddalari bilan natijalar taqqoslanadi.

<sup>_**Kalit so'zlar:** Autodock; Autodock-Autodock-Vina; DSV (Discovery Studio Visualizer); PDB (Protein Data Bank) and Pubchem: PYMOL_</sup>

<style>
    .image-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .flexible-image {
        max-width: 100%;
        height: auto;
    }
    .flexible-image img {
        display: block;
    }

    .flexible-image figcaption {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        padding: 10px;
        font-size: 14px;
        text-align: center;
    }
</style>

<div class="image-container">
    <div class="flexible-image">
        <img src="https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/6jpa.jpeg" alt="PDB ID: 6JPG">
        <figcaption>6JPA</figcaption>
    </div>
    <div class="flexible-image">
        <img src="https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/7uhg.jpeg" alt="PDB ID: 7UHG">
        <figcaption>7UHG</figcaption>
    </div>
</div>

---

![frame_1](https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/frame_1.png)

  <sup>**a** Overall structure of Cav1.3 bound to cinnarizine. The complex comprises transmembrane α1 (gray, cyan, yellow, and pale green for Repeats I–IV, respectively), extracellular α2δ-1 (light pink for α2, and green for δ), and cytosolic β3 subunits (bright orange). Cinnarizine and Ca2+ ions are shown as magenta, and green spheres. Wheat sticks indicate N-glycans on the α2δ-1 subunit. **b** Superimposition of rabbit Cav1.1 complex (colored wheat, PDB: 5GJV) and human Cav1.3 complex (colored purple). Despite treatment with 150 μM cp-PYT before cryo-sample preparation, there is no density for the drug in the EM map of Cav1.3. This structure will thus serve as a reference to study the conformational changes upon cinnarizine binding, as shown in panel f. Red circle highlights the minor structural shift at the AID. **c** Cinnarizine is accommodated in the central cavity of the PD. Chemical structure of cinnarizine is shown, with the core DPP group shaded light orange. **d** EM map for cinnarizine and surrounding residues. The densities, shown as blue meshes, are contoured at 4 σ in PyMol. **e** Molecular details for cinnarizine coordination. A potential hydrogen bond is indicated by orange dashes. **f** Local conformational changes upon cinnarizine binding. Red arrows indicate the structural shift of S6III upon cinnarizine binding. **g** The binding mode of cinnarizine is different from that of DHP drugs and other pore blockers. Shown here is an extracellular view of superimposed structures of Cav1.3 (domain-colored) bound to cinnarizine and Cav1.1 (colored wheat) bound to amlodipine (DHP drug, pink sticks, PDB: 7JPX), diltiazem (BTZ, orange sticks, PDB: 6JPB), and verapamil (PAA, light blue sticks, PDB: 6JPA). **h** Orthogonal binding pockets for cinnarizine and BTZ. i PAA partially overlaps with cinnarizine and BTZ. **i** PAA partially overlaps with cinnarizine. [1]</sup>

## Autodock natijalari

<style>
    .image-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .flexible-image {
        max-width: 100%;
        height: auto;
    }
    .flexible-image img {
        display: block;
    }

    .flexible-image figcaption {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        padding: 10px;
        font-size: 14px;
        text-align: center;
    }
</style>

<div class="image-container">
    <div class="flexible-image">
        <img src="https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/1-cynaroside.png" alt="cynaroside">
        <figcaption>Cynaroside</figcaption>
    </div>
    <div class="flexible-image">
        <img src="https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/2-turkesterone.png" alt="turkesterone">
        <figcaption>Turkesterone</figcaption>
    </div>
    <div class="flexible-image">
        <img src="https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/3-galic-acid.png" alt="galic-acid">
        <figcaption>Galic-acid</figcaption>
    </div>
    <div class="flexible-image">
        <img src="https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/4-rosavin.png" alt="rosavin">
        <figcaption>Rosavin</figcaption>
    </div>
</div>

| Compound          | Estimated Free Energy of Binding (kcal/mol) | Estimated Inhibition Constant, Ki (micromolar) | Final Intermolecular Energy (kcal/mol) | vdW + Hbond + desolv Energy (kcal/mol) | Electrostatic Energy (kcal/mol) | Final Total Internal Energy (kcal/mol) | Torsional Free Energy (kcal/mol) | Unbound System's Energy (kcal/mol) |
|-------------------|--------------------------------------------|-----------------------------------------------|---------------------------------------|---------------------------------------|---------------------------------|--------------------------------------|----------------------------------|-----------------------------------|
| Anestezin         | -4.18                                      | 868.15                                        | -5.37                                 | -5.2                                  | -0.17                           | -0.19                                | 1.19                             | -0.19                             |
| Cynaroside        | -6.54                                      | 16.13                                         | -9.82                                 | -9.66                                 | -0.16                           | -4.57                                | 3.28                             | -4.57                             |
| Dihidroquercetin  | -5.57                                      | 83.19                                         | -7.36                                 | -6.91                                 | -0.45                           | -2.72                                | 1.79                             | -2.72                             |
| Ecdysteron        | -6.67                                      | 12.87                                         | -9.95                                 | -9.74                                 | -0.22                           | -4.73                                | 3.28                             | -4.73                             |
| Firul acid        | -3.75                                      | 1.78                                          | -5.24                                 | -4.68                                 | -0.56                           | -0.97                                | 1.49                             | -0.97                             |
| Galic acid        | -4.66                                      | 383.34                                        | -8.54                                 | -8.42                                 | -0.12                           | -4.83                                | 3.88                             | -4.83                             |
| Lutiolin          | -5.87                                      | 50                                            | -7.36                                 | -7.18                                 | -0.18                           | -1.96                                | 1.49                             | -1.96                             |
| Plantaginin       | -10.89                                     | 10.39                                         | -14.17                                | -14.17                                | 0                                | -5.51                                | 3.28                             | -5.51                             |
| Quercetin         | -5.36                                      | 118.28                                        | -7.15                                 | -6.65                                 | -0.49                           | -2.34                                | 1.79                             | -2.34                             |
| Rosavin           | -4.13                                      | 944.82                                        | -8                                    | -7.64                                 | -0.36                           | -3.99                                | 3.88                             | -3.99                             |
| Rutin             | -4.18                                      | 865.54                                        | -8.95                                 | -8.72                                 | -0.23                           | -8.18                                | 4.77                             | -8.18                             |
| Salidrodside      | -4.2                                       | 832.08                                        | -7.18                                 | -6.73                                 | -0.45                           | -2.3                                 | 2.98                             | -2.3                              |
| Turkesterone      | -7.9                                       | 1.63                                          | -11.48                                | -11.07                                | -0.41                           | -1.32                                | 3.58                             | -1.32                             |


## Vina natijalari

<style>
    .image-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .flexible-image {
        max-width: 100%;
        height: auto;
    }
    .flexible-image img {
        display: block;
    }

    .flexible-image figcaption {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        padding: 10px;
        font-size: 14px;
        text-align: center;
    }
</style>

<div class="image-container">
    <div class="flexible-image">
        <img src="https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/cynaroside.png" alt="cynaroside">
        <figcaption>Cynaroside</figcaption>
    </div>
    <div class="flexible-image">
        <img src="https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/turkesterone.png" alt="turkesterone">
        <figcaption>Turkesterone</figcaption>
    </div>
    <div class="flexible-image">
        <img src="https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/galic-acid.png" alt="galic-acid">
        <figcaption>Galic-acid</figcaption>
    </div>
    <div class="flexible-image">
        <img src="https://raw.githubusercontent.com/biodasturchi/imgs/master/bio/2023-06-13/rosavin.png" alt="rosavin">
        <figcaption>Rosavin</figcaption>
    </div>
</div>

| Ligands           | Affinity (kcal/mol) | RMSD l.b. |
|-------------------|---------------------|------------|
| rutin             | -8.67               | 2.53       |
| cynaroside        | -8.57               | 3.27       |
| turkesterone      | -8.44               | 3.6        |
| galic acid        | -7.96               | 3.5        |
| rosavin           | -7.94               | 3.789      |
| luteolin          | 7.57                | 2.6        |
| quercetin         | -7.33               | 7.77       |
| acarbose          | -7.944              | 4.34       |
| dihidroquercetin  | -7.32               | 4.57       |
| ecdysteron        | -8.5                | 4.23       |
| plantaginin       | -8.67               | 4.13       |
| verapamil         | -7.2                | 2.7        |
| nifedipine        | -6.611              | 5          |
| amlodipine        | -6.28               | 3.41       |


## Ilovalar
[1] - Yao, X., Gao, S. & Yan, N. Structural basis for pore blockade of human voltage-gated calcium channel Cav1.3 by motion sickness drug cinnarizine. Cell Res 32, 946–948 (2022). https://doi.org/10.1038/s41422-022-00663-5