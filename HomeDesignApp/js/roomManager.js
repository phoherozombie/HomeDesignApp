// =======================
// SIMPLE ROOM SYSTEM
// =======================
let roomObjects = [];

function clearRoom() {
  roomObjects.forEach(o => scene.remove(o));
  roomObjects = [];
}

function loadRoomLayout(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      clearRoom();

      data.forEach(el => {
        if (el.type === "floor") {
          const geo = new THREE.BoxGeometry(el.size[0], 0.1, el.size[2]);
          const mat = new THREE.MeshStandardMaterial({ color: 0xdddddd });
          const floor = new THREE.Mesh(geo, mat);
          floor.receiveShadow = true;
          scene.add(floor);
          roomObjects.push(floor);
        }

        if (el.type === "wall") {
          const geo = new THREE.BoxGeometry(el.scale[0], el.scale[1], el.scale[2]);
          const mat = new THREE.MeshStandardMaterial({ color: 0xffffff });
          const wall = new THREE.Mesh(geo, mat);
          wall.position.set(el.position[0], el.position[1], el.position[2]);
          wall.castShadow = true;
          wall.receiveShadow = true;
          scene.add(wall);
          roomObjects.push(wall);
        }
      });
    });
    alert("Room layout: " + url); // test trước xem có gọi được không
}

// 👇 DÒNG QUAN TRỌNG NHẤT 👇
window.loadRoomLayout = loadRoomLayout;
