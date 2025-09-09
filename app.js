const images = [
    {desc: "Inspiration Point", src: "images/DJI_0296.JPG"},
    {desc: "Point Dume", src: "images/DJI_0266.JPG"},
    {desc: "Hollywood", src: "images/DJI_0165.JPG"},
    {desc: "Santa Monica Pier", src: "images/DJI_0150.JPG"}
];

const gallery = document.getElementById("gallery");

images.forEach(img => {
  const div = document.createElement("div");
  div.classList.add("image");
  div.innerHTML = `
    <img src="${img.src}" alt="${img.desc}">
    <div class="image-description">${img.desc}</div>
    `;
    gallery.appendChild(div);
});