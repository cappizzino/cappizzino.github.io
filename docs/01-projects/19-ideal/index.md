---
title: I-DEAL
pagination_label: I-DEAL
description: I-DEAL
slug: /projects/ideal
hide_title: true
---

import cv from '@site/src/data/cv.json';

export const project = cv.sections
  .find((section) => section.id === 'projects')
  .entries.find((entry) => entry.id === 'ideal');

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
src="/img/proj_ideal_20260911_091141.jpg"
alt="Illustration for: Article title goes here"
style={{
    width: '60%',
    minWidth: '260px',
    borderRadius: '12px',
}}
/>

---

## Overview

The one-month secondment, conducted within the EU-funded I-DEAL project (Marie Skłodowska-Curie Actions – Staff Exchanges), focused on investigating and developing a modular, trust-aware multimodal SLAM architecture for reliable robotic localisation and geospatial data acquisition.

The research combined LiDAR, IMU, stereo vision and GNSS-RTK, with particular emphasis on evaluating sensor reliability, comparing odometry methods and establishing a framework for adaptive sensor fusion.

## Main Activities

1. **Multimodal Dataset Preparation:** Prepared three ROS 2 Jazzy datasets using an autonomous robotic loader equipped with 3D LiDARs, IMU, stereo camera and GNSS-RTK, including repeated trajectories and figure-of-eight manoeuvres.
2. **SLAM Algorithm Evaluation:** Reviewed, configured and compared LIO-SAM, FAST-LIO, EllipseLIO and COLMAP-SLAM, assessing localisation performance, trajectory continuity and suitability for multimodal integration.
3. **Multimodal Architecture Design:** Investigated the integration of LiDAR-inertial and stereo-visual odometry through STELVIO, using fixed-lag factor-graph optimisation.
4. **Sensor Trust Modelling:** Defined and developed preliminary diagnostic components to assess sensor availability, estimation quality, observability and consistency through modular ROS 2 interfaces.

## Learning Outcomes

The secondment provided important technical and collaborative insights:

- **Sensor reliability:** Understanding that covariance alone is insufficient to characterise estimation reliability, particularly under changing environmental conditions.
- **Multimodal fusion:** Recognising that combining multiple odometry estimators does not automatically improve accuracy; temporal synchronisation, uncertainty modelling and consistency are essential.
- **SLAM methodologies:** Strengthening practical knowledge of LiDAR-inertial odometry, stereo-visual odometry, factor graphs and fixed-lag optimisation.
- **Experimental methodology:** Reinforcing the importance of sensor calibration, coordinate-frame consistency, reproducible datasets and appropriate reference trajectories.
- **Knowledge exchange:** Strengthening collaboration between Ingeniarius' field robotics expertise and FBK's research in photogrammetry, visual odometry and multimodal spatial estimation.
