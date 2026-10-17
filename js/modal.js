export function initModal() {
  const modal = document.getElementById('product-modal');
  const modalClose = document.getElementById('modal-close');
  
  const modalImg = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalOrigin = document.getElementById('modal-origin');
  const modalOriginType = document.getElementById('modal-origin-type');
  const modalImpact = document.getElementById('modal-impact');
  const modalPrice = document.getElementById('modal-price');

  window.openProductModal = (product) => {
    modalImg.src = product.img;
    modalBadge.innerText = product.countryLabel;
    modalCategory.innerText = product.category;
    modalTitle.innerText = product.title;
    modalDesc.innerText = product.fullDesc;
    modalOrigin.innerText = product.origin;
    modalOriginType.innerText = product.originType;
    modalImpact.innerText = `Impacto directo: ${product.impact}`;
    modalPrice.innerText = `$${product.price.toFixed(2)}`;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('modal-open');
  };

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}