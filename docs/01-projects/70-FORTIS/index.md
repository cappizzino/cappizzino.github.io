---
title: FORTIS
pagination_label: FORTIS
description: Multi-Modal and Multi-Aspect Holistic Human-Robot Interaction.
slug: /projects/fortis
hide_title: true
---

import cv from '@site/src/data/cv.json';

export const project = cv.sections
  .find((section) => section.id === 'projects')
  .entries.find((entry) => entry.id === 'fortis');

<header>
  <h1>{project.acronym.replace(/:\s*$/, '').trim()}</h1>
  <p><strong>{project.title}</strong></p>
  <p>{project.funding}</p>
  <p><strong>{project.organisation}</strong></p>

  <p>{project.date} · {project.location}</p>
  {project.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
  {project.bullets?.length > 0 && (
    <ul>
      {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
    </ul>
  )}
</header>

---
## Material handling in construction

The loader robot employs a multimodal sensing toolkit, including multiple 3D LiDARs, stereo cameras, GNSS with RTK corrections over LoRa, and IMU, enabling it to perceive its environment in intricate detail.

<img
src="/img/proj_action_servers-Loader.png"
alt="Illustration for: Article title goes here"
style={{
    width: '60%',
    minWidth: '260px',
    borderRadius: '12px',
}}
/>

---
## Participation in consortium meetings

### 4th ​​Consortium Meeting – Trento​ (Italy)
* 02-03 October 2025 

<img
src="/img/proj_fortis_02.jpg"
alt="Illustration for: Article title goes here"
style={{
    width: '60%',
    minWidth: '260px',
    borderRadius: '12px',
}}
/>

### 3rd Consortium Meeting - Ljubljana (Slovenia) 
*  18-19 February 2025 

<img
src="/img/proj_fortis_01.jpg"
alt="Illustration for: Article title goes here"
style={{
    width: '60%',
    minWidth: '260px',
    borderRadius: '12px',
}}
/>

### 2nd Consortium Meeting - Ankara (Turkey) 
*  9-10 July 2024 
