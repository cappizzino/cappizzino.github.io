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

The analysis covers all CAN-enabled sensors and actuators integrated within the system. The Hardware Abstraction Layer translates device-specific protocols into standardized ROS message formats using `rosserial` or related ROS packages.

### 2. Procedure
- Identify systems and components involved.
- Read the message type information for each element.
- Verify if the element uses a ROS standard message.
- Fill in the table with the information, namely **Device Name**, **Type**, **Abstracted**, **ROS Msg Type**, **Standard Msg Used**.
- Use the formula to evaluate the KPI.

### 3. Formula Used

$$KPI = \frac{ST}{TI} × 100$$

where $$ST$$ is the number of Standard Messages used and $$TI$$ is the number of Total itens.

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
| Lidar Leishen C16 (front) | Sensor   | ✅         | sensor_msgs/PointCloud2     | ✅                 | ✅       |
| Lidar Leishen C16 (back)  | Sensor   | ✅         | sensor_msgs/PointCloud2     | ✅                 | ✅       |
| Emlid Reach M2 RTK GNSS module    | Sensor   | ✅         | sensor_msgs/NavSatFix     | ✅                 | ✅       |
| Camera ZED    | Sensor   | ✅         | sensor_msgs/Image      | ✅                 | ✅       |
| Camera RealSense D435 (right)    | Sensor   | ✅         | sensor_msgs/Image      | ✅                 | ✅       |
| Camera RealSense D435 (left)    | Sensor   | ✅         | sensor_msgs/Image      | ✅                 | ✅       |
| Camera RealSense D435 (center)    | Sensor   | ✅         | sensor_msgs/Image      | ✅                 | ✅       |
| Vehicle Steering    | Actuator   | ✅         | geometry_msgs/Twist      | ✅                 | ✅       |
| Lift and Tilt Arm   | Actuator   | ✅         | std_msgs/Int8MultiArray      | ✅                 | ✅       |
---
## KPI Calculation

According to the KPI definition

$$KPI = \frac{ST}{TI} × 100$$

$$KPI = \frac{100}{100} × 100$$

$$KPI = 100$$%

## Conclusion
The results of this analysis confirm that the current implementation of the Hardware Abstraction Layer (HAL) meets the defined KPI target. A total of 10 devices—including sensors and actuators—were evaluated, all of which successfully utilized standard ROS message types such as `sensor_msgs/Imu`, `sensor_msgs/Image`, and `geometry_msgs/Twist`. This led to a KPI score of 100%, surpassing the required 90% compatibility threshold.

The successful abstraction and standardization of data formats indicate a robust and scalable system design. By adhering to ROS communication conventions, the project ensures high integration efficiency, reduces development complexity for downstream processing, and increases maintainability across different hardware configurations.

---
import DocCardList from '@theme/DocCardList';

<DocCardList />
