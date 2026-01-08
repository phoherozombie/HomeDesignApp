# 🏠 3D Home Design Application

An interactive web application that allows users to design and arrange interior layouts in a realistic 3D space. Users can visualize their rooms, change positions, sizes, rotation, and customize furniture colors before making real-world purchasing decisions.

---

## 🚀 Key Features

### 1. 3D Environment (R1)
* **Scene & Lighting:** Flexible lighting setup including Ambient Light and Point Light. Uses HDR (Pisa) environment maps for realistic material reflections.
* **Camera:** Integrated `OrbitControls` allowing users to orbit, zoom, and pan to explore every angle of the room.
* **Grid Helper:** Visual floor grid for precise object alignment and spatial awareness.

### 2. Interaction & Customization (R2)
* **Raycasting:** High-precision mouse picking to select 3D furniture models.
* **Transform Controls:** On-screen gizmos for Translating (moving), Rotating, and Scaling objects via keyboard shortcuts.
* **Color Customization:** Real-time color/material updates on specific meshes using a UI Color Picker.

### 3. Logic & Feedback (R3)
* **Object Management:** Dynamically Add/Delete furniture from a categorized catalog.
* **HUD/UI:** Modern user interface featuring an item menu, lighting control panel, and furniture customization settings.
* **Save/Load:** Integrated `localStorage` to persist design states, allowing users to resume their work later.

### 4. Advanced Features (Bonus)
* **Grid Snapping:** Automatically snaps objects to the grid (0.5-unit increments) for neat and organized layouts.
* **Sound Effects:** Immersive audio feedback when adding, deleting, selecting, or snapping objects.
* **Smooth Animations:** Powered by the **GSAP** library for fluid transitions when objects appear or move.
* **Multiple room layouts (Small / Medium / Large)** 

---

## 🎮 User Guide

### Controls

| Shortcut | Action |
| :--- | :--- |
| **Left Click** | Select object or interact with UI |
| **Q Key** | Switch to Move mode (Translate) |
| **W Key** | Switch to Rotate mode |
| **E Key** | Switch to Scale mode |
| **Delete Key** | Remove the selected object |
| **L Key** | Quickly add a new light source |

### How to Use
1. **Add Furniture:** Click the **Category** icon at the bottom to open the menu, then select an item to spawn it in the room.
2. **Edit:** Click directly on an object in the 3D scene. Use the navigation arrows/gizmos to transform it.
3. **Change Color:** Once an object is selected, the **Furniture Color** panel will appear on the right. Choose your preferred color.
4. **Save:** Click the **Save** button to store your design in the browser's local storage.

---

## 🛠 Setup & Installation

### System Requirements
* A modern web browser (Chrome, Edge, Firefox).
* A Local Server environment (e.g., **Live Server** extension for VS Code) due to ES Modules and external asset loading (.glb/.json).

### Steps to Run
1. Clone or download this repository.
2. Open the project folder in **VS Code**.
3. Right-click `index.html` and select **Open with Live Server**.
4. Navigate to `http://127.0.0.1:5500` in your browser.

---

## 📚 Libraries & Resources

* **Three.js**: Core 3D rendering engine.
* **GSAP (GreenSock)**: Smooth animation handling.
* **GLTFLoader & DRACOLoader**: Loading and optimizing 3D models (.glb).
* **OrbitControls & TransformControls**: Camera and object interaction utilities.

---

## 📝 Technical Report

### 1. Design Approach
The application follows a lightweight Object-Oriented Programming (OOP) model. Each furniture item is wrapped in a `THREE.Group` named 'group' to ensure that Raycasting and TransformControls operate correctly on the entire model hierarchy rather than individual sub-meshes.

### 2. Technical Challenges
* **Selection Management:** Distinguished between clicking to select an object vs. clicking to orbit the camera by tracking the `isDragging` state.
* **Material Cloning:** When changing an object's color, the material is `.clone()`-ed. This prevents "mass-coloring" where all objects of the same type change color simultaneously.
* **Interaction Logic:** Implemented a Raycaster to project a ray from the mouse position into 3D space, identifying intersections with objects in the `clickableObjects` array.

---

### Student Information
* **Student Name:** Do Hoang Phuc
* **Student ID:** 22090014
