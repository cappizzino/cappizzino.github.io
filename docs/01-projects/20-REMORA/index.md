---
title: REMORA
pagination_label: REMORA
description: Robótica de Enxame para Melhoria e Observação de Recursos Aquáticos.
slug: /projects/remora
hide_title: true
---

import cv from '@site/src/data/cv.json';

export const project = cv.sections
.find((section) => section.id === 'projects')
.entries.find((entry) => entry.id === 'remora');

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
