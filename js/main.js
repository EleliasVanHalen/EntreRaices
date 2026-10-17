import { products } from './data.js';
import { initCounters } from './counters.js';
import { initModal } from './modal.js';

function renderCatalog(filter = 'todos') {
  const grid = document.getElementById('product-grid');
  
  const filtered = filter === 'todos' 
    ? products 
    : products.filter(p => p.country === filter || p.country === 'todos');

  grid.innerHTML = filtered.map(p => `
    <article class="product-card group bg-brand-card rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between cursor-pointer hover:border-brand-neon/40 transition" data-id="${p.id}">
      <div>
        <div class="relative w-full aspect-video overflow-hidden bg-white/5">
          <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <span class="absolute top-3 left-3 text-[11px] font-bold bg-brand-dark/80 backdrop-blur-md px-2.5 py-1 rounded-md text-brand-neon border border-white/10">
            ${p.countryLabel}
          </span>
        </div>
        <div class="p-6">
          <span class="text-xs text-brand-muted block mb-1">${p.category}</span>
          <h4 class="text-xl font-bold mb-2">${p.title}</h4>
          <p class="text-sm text-brand-muted mb-4 line-clamp-2">${p.shortDesc}</p>
          <div class="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span class="w-2 h-2 rounded-full bg-brand-neon"></span>
            <span class="truncate">Origen: ${p.origin.split('(')[0]}</span>
          </div>
        </div>
      </div>
      <div class="p-6 pt-0">
        <div class="pt-4 border-t border-white/10 flex items-center justify-between">
          <span class="text-2xl font-black text-white">$${p.price.toFixed(2)}</span>
          <button class="bg-brand-neon hover:bg-brand-neonHover text-black text-xs font-bold uppercase px-4 py-2.5 rounded-lg transition pointer-events-none">
            Ver Detalles
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Asignar evento click a cada tarjeta para abrir el modal
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      const product = products.find(item => item.id === id);
      if (product) window.openProductModal(product);
    });
  });
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  initCounters();
  initModal();
  renderCatalog('todos');

  // Evento de filtro por país
  const filterSelect = document.getElementById('country-filter');
  filterSelect.addEventListener('change', (e) => {
    renderCatalog(e.target.value);
  });
});