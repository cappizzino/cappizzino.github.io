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

---

## Overview

The EU-funded euROBIN project, through the HARD-HAT initiative, focused on improving the safety and human–robot interaction capabilities of autonomous heavy-duty machinery operating in construction environments.

The work involved integrating and validating two complementary technologies on Ingeniarius' autonomous robotic loader: socially aware navigation, using the CoHAN framework to improve pedestrian safety, and a Natural Language Understanding (NLU) system for voice-based robot commands.

The research emphasised real-world experimentation, quantitative performance evaluation and reproducible validation using ROS Noetic.

## Main Activities

1. **Socially Aware Navigation Integration:** Integrated the CoHAN framework, combining Human-Aware TEB (HATEB), pedestrian motion prediction and social constraints into the robotic loader's navigation system.
2. **Pedestrian Detection and Tracking:** Integrated stereo-camera-based pedestrian perception with the navigation framework, enabling the robot to account for human presence and motion during trajectory planning.
3. **Navigation Benchmarking:** Designed and conducted controlled experiments comparing CoHAN against the conventional TEB planner, evaluating pedestrian clearance, close-contact events and collisions across repeated trials.
4. **Voice Command Recognition:** Developed and evaluated a ROS-integrated speech interaction pipeline combining audio acquisition, Automatic Speech Recognition (ASR) and rule-based NLU for operator commands.
5. **Experimental Validation and Data Collection:** Conducted outdoor navigation tests and voice recognition experiments under different acoustic conditions and operator distances, recording ROS bags and system logs for subsequent analysis.

## Learning Outcomes

The project provided important technical and experimental insights:

- **Human-aware navigation:** Strengthened practical knowledge of socially aware motion planning, pedestrian prediction, social costmaps and human–robot interaction for heavy-duty mobile robots.
- **Safety-oriented evaluation:** Demonstrated the importance of assessing pedestrian clearance and close-contact events alongside collision avoidance, particularly for large robotic platforms.
- **ROS system integration:** Improved experience integrating perception, localisation, navigation, pedestrian tracking and speech processing into a modular robotic system.
- **Speech recognition under noise:** Identified the influence of diesel-engine noise, microphone positioning, signal-to-noise ratio and operator distance on ASR and NLU performance.
- **Experimental methodology:** Reinforced the importance of repeatable testing, consistent benchmarking conditions, quantitative performance indicators and structured data collection.
- **Operational reliability:** Highlighted the need for clearly defined operating conditions, robust perception and fail-safe command handling before deploying autonomous systems in human-shared environments.
