---
title: HARD-HAT
pagination_label: HARD-HAT
description: Socially aware navigation for safer heavy-duty construction.
slug: /projects/hardhat
hide_title: true
---

import cv from '@site/src/data/cv.json';

export const project = cv.sections
  .find((section) => section.id === 'projects')
  .entries.find((entry) => entry.id === 'hardhat');

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

<img
src="/img/proj_hard-hat_01.png"
alt="Illustration for: Article title goes here"
style={{
    width: '60%',
    minWidth: '260px',
    borderRadius: '12px',
}}
/>
