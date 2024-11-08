document.addEventListener('DOMContentLoaded', function() {
    // يمكنك إضافة حركات أو وظائف هنا لاحقًا
});

function openModal(image, link) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalLink = document.getElementById("modalLink");

    modal.style.display = "flex";
    modalImage.src = image.src;
    modalLink.href = link;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
