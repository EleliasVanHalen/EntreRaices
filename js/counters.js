export function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const step = Math.ceil(target / 45);

    const updateCounter = () => {
      count += step;
      if (count < target) {
        counter.innerText = count.toLocaleString();
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    
    updateCounter();
  });
}