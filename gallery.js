async function fetchAndShowGallery() {
  try {
    // Step 1: Get media list
    const res = await fetch(`https://aura-snap-backend.vercel.app/api/media?bucket=${encodeURIComponent('fanbhangrede')}`);
    const files = await res.json();

    // Select gallery container
    const galleryContainer = document.getElementById("imageGrid");
    if (!galleryContainer) {
      console.error('No element with class "gallery-grid" found');
      return;
    }
    galleryContainer.innerHTML = ''; // Clear existing images

    // Step 2: For each file, fetch real signed URL
    const mediaWithUrls = await Promise.all(
      files.map(async (file) => {
        const signedRes = await fetch(`https://aura-snap-backend.vercel.app${file.signedUrl}`);
        const signedData = await signedRes.json();
        return {
          key: file.key,
          title: file.title,
          url: signedData.signedUrl,
        };
      })
    );

    

mediaWithUrls.forEach((item) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const anchor = document.createElement("a");
  anchor.href = 'https://www.instagram.com/rpd_events?igsh=MWp5dzlpbWF5NzBuag==';
  anchor.target = "_blank";

  const img = document.createElement("img");
  img.src = item.url;
  img.alt = item.title || 'Image';;

  anchor.appendChild(img);
  gridItem.appendChild(anchor);
  galleryContainer.appendChild(gridItem);
});


  } catch (error) {
    console.error('Error fetching gallery:', error);
  }
}

// Call this function whenever you want to load images, e.g., after page load or button click
window.addEventListener('load', () => {
  fetchAndShowGallery();
});