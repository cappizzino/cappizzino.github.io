---
title: Loader
pagination_label: Loader
description: Loader
---

# KPI Analysis Report

## Methodology

### 1. Introduction
In this analysis, the path-tracking performance of the Loader using a localisation and navigation system built upon ROS was evaluated. The localisation framework is based on LIO-SAM (Lidar-Inertial Odometry via Smoothing and Mapping), a factor-graph-based SLAM system that provides robust and accurate pose estimation by fusing LiDAR, GNSS and IMU data. The navigation system is structured around the Move Base Flex (MBF) framework, which enables modular global and local planning, recovery behaviors, and flexible controller integration.

To quantitatively validate the robot's adherence to planned trajectories, the robot must follow the planned trajectory with a deviation less than 0.25 meters.

For this purpose, two data sources are considered:

- The planned trajectory, published by MBF's global planner (`move_base_flex/GlobalPlanner/plan`).
- The actual trajectory, derived from the odometry output of LIO-SAM, which reflects the real motion of the robot (`lio_sam/odometry`).

Since the planned path is typically published as a batch of poses without consistent time information, it was necessary to interpolate the path at a fixed frequency (e.g., 10 Hz). This resampling ensures temporal synchronization with the time-stamped odometry data from LIO-SAM and allows for pointwise comparison between the planned and executed trajectories.

The deviation at each time step is computed as the Euclidean distance between the interpolated planned position and the corresponding odometry-derived position. These deviations are then statistically analyzed to determine compliance with the defined KPI.

### 2. Procedure
- Log the Planned and Executed Paths
- Measure the Deviation
- Repeat

### 3. Formula Used

---
## Data Collection

### 1. Data Sources
Two ROS topics are extracted from the recorded bag:

- **Planned Path**: Published by the global planner of Move Base Flex on `move_base_flex/GlobalPlanner/plan`, containing a `nav_msgs/Path` message.
- **Odometry Pose Extractio**: Derived from LIO-SAM’s odometry output (`lio_sam/odometry`), published as `nav_msgs/Odometry`.

These topics are parsed and converted into time-aligned pose sequences for subsequent deviation analysis.

### 2. Path Interpolation
In order to enable time-domain comparison with the LIO-SAM odometry stream, the planned path is interpolated spatially using linear methods to have exactly odometry points.

### 3. Odometry Poses Extraction
The odometry messages from LIO-SAM are converted into a sequence of `PoseStamped` messages using the position and orientation fields from `nav_msgs/Odometry.pose.pose`. These poses are already time-stamped and spaced uniformly in time, reflecting the actual motion of the robot. Nevertheless, in order to reduce the comparison time between poses, the signal is reduced to 2Hz sampling.

---
## Results

### 1. Position A

### 1. Position B

---
## KPI Calculation

---
## Conclusion

---
import DocCardList from '@theme/DocCardList';

<DocCardList />
