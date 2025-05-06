---
title: Loader
pagination_label: Loader
description: Loader
---

# KPI Analysis Report

## Methodology

### 1. Introduction
This KPI directly reflects the robot’s capacity to maintain a collision-free path in the presence of dynamically appearing obstacles, while adhering to strict timing constraints.

### 2. System Overview
- **Navigation Stack**: Move Base Flex (MBF)
- **Sensor Input**: 3D Point Cloud from LIDAR (cropped field of view)
- **Obstacle Integration**: Spatio-temporal voxel layer updating the costmap
- **Path Planning**: Global and local planners triggered dynamically

### 2. Procedure
1. Select a goal pose on the map.
2. Execute GoTo Action Server.
3. Verify if MBF created both global and local paths.
4. In order to simulate an obstacle, a person moves towards the robot.
5. Repeat from 2 to 4.

### 3. Mathematical Formulas
1. Mean ($$\mu$$)

$$\mu = \frac{1}{n} \sum_{i=1}^{n} x_i$$

where $x_i$ is the $i^{th}$ data point, $$n$$ is the total number of data points, and $$\mu$$ is the arithmetic mean.

2. Standard Deviation (Sample) ($$\sigma$$)

$$\sigma = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n} (x_i - \mu)^2}$$

---
## Data Collection

### 1. Data Sources
- rosbag: Recorded all the necessary topics.

### 2. Collection Process
- The detection time is recorded upon receiving the first point cloud cluster identified as a new obstacle.
- The replan start time is captured when MBF is triggered to generate a new global or local path.

---
## Results

| Device Name | Type     | Abstracted | ROS Msg Type         | Standard Msg Used  | Verified |
|-------------|----------|------------|----------------------|--------------------|----------|

---

## Conclusion

---
import DocCardList from '@theme/DocCardList';

<DocCardList />
