---
title: Loader
pagination_label: Loader
description: Loader
---

# KPI Analysis Report

## Methodology

### 1. Introduction
In ROS, messages serve as the fundamental data containers for communication between nodes. Both topics and services utilize these messages to transmit structured data. Each message adheres to a predefined message type, which defines its internal data schema.

For example, sensor readings from a laser scanner are typically transmitted using the message type `sensor_msgs/LaserScan`. This message type specifies all relevant fields such as range data, angle increments, and timestamps.

The analysis covers all CAN-enabled sensors and actuators integrated within the system. The HAL layer translates device-specific protocols into standardized ROS message formats using `rosserial`.

### 2. Procedure
- Identify systems and components involved.
- Read the message type information for each element.
- Verify if the element uses a ROS standard message.
- Fill in the table with the information, namely **Device Name**, **Type**, **Abstracted**, **ROS Msg Type**, **Standard Msg Used**.
- Use the formula to evaluate the KPI.

### 3. Formula Used

$$KPI = \frac{ST}{TI} × 100$$

where $$ST$$ is the number of Standard Messages used and $$TI$$ is the number of Total itens.

## 

---
## Data Collection

### 1. Data Sources
- ROS topics via `rostopic info`

### 2. Collection Process

- Each device was tested within a controlled test bench.
- Topic message conformity was logged.
- Compatibility was recorded based on usage of ROS standard messages

---
## Results

| Device Name | Type     | Abstracted | ROS Msg Type         | Standard Msg Used  | Verified |
|-------------|----------|------------|----------------------|--------------------|----------|
| IMU Rion    | Sensor   | ✅         | sensor_msgs/Imu      | ✅                 | ✅       |
| Front Lidar | Sensor   | ✅         | sensor_msgs/PointCloud2     | ✅                 | ✅       |
| Back Lidar  | Sensor   | ✅         | sensor_msgs/PointCloud2     | ✅                 | ✅       |
| GNSS RTK    | Sensor   | ✅         | sensor_msgs/NavSatFix     | ✅                 | ✅       |
| Camera ZED    | Sensor   | ✅         | sensor_msgs/Image      | ✅                 | ✅       |

---
## KPI Calculation



## Conclusion
Summary of findings


import DocCardList from '@theme/DocCardList';

<DocCardList />
