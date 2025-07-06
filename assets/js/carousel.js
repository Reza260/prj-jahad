
  const track = document.getElementById("carouselTrack");
  const totalItems = 8;
  const visibleItems = 3;
  const itemWidth = 420;
  let index = 0;

  setInterval(() => {
    index++;
    if (index > totalItems - visibleItems) {
      index = 0; // بازگشت به اول
    }
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }, 3000); // هر ۱۰ ثانیه
