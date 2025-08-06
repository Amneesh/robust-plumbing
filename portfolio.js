async function fetchAndShowportfolio() {
  try {
    // Step 1: Get media list
    const res = await fetch(`https://aura-snap-backend.vercel.app/api/media?bucket=${encodeURIComponent('robust-plumbing')}`);
    const files = await res.json();

    // Select portfolio container
    const portfolioContainer = document.getElementById("imageGrid");
    if (!portfolioContainer) {
      console.error('No element with class "portfolio-grid" found');
      return;
    }
    portfolioContainer.innerHTML = ''; // Clear existing images

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
  anchor.href = 'https://www.instagram.com/robustplumbing?igsh=MWliNnE5czNxYmF1eA==';
  anchor.target = "_blank";

  const img = document.createElement("img");
  img.src = item.url;
  img.alt = item.title || 'Image';;

  anchor.appendChild(img);
  gridItem.appendChild(anchor);
  portfolioContainer.appendChild(gridItem);
});


  } catch (error) {
    console.error('Error fetching portfolio:', error);
  }
}

// Call this function whenever you want to load images, e.g., after page load or button click
window.addEventListener('load', () => {
  fetchAndShowportfolio();
});