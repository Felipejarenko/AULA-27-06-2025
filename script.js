document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');

    // Modal para imagens
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            modalImage.src = item.src;
            modal.classList.remove('hidden');
        });

        // Remover classe skeleton quando a imagem carrega
        item.addEventListener('load', () => {
            item.classList.remove('skeleton');
        });

        // Fallback para imagens que não carregam
        item.onerror = () => {
            console.error(`Erro ao carregar imagem: ${item.src}`);
            item.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(item.alt)}`;
            item.classList.remove('skeleton');
        };
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Garantir que checkboxes sejam read-only
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            e.preventDefault(); // Impede alterações
        });
    });
});