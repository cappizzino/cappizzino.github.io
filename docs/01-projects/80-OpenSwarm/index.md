---
title: OpenSwarm
pagination_label: OpenSwarm
description: Orchestration and Programming Energy-aware and Collaborative Swarms.
slug: /projects/openswarm
hide_title: true
---

import cv from '@site/src/data/cv.json';

export const project = cv.sections
  .find((section) => section.id === 'projects')
  .entries.find((entry) => entry.id === 'openswarm');

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

## EU Swarm Workshop​
* Brussels, 26-27 November 2025

<img
src="/img/proj_openswarm1.jpg"
alt="Illustration for: Article title goes here"
style={{
    width: '60%',
    minWidth: '260px',
    borderRadius: '12px',
}}
/>
Meeting with European Commission auditors.

---
