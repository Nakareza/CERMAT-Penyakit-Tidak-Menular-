document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".disease-card, .prevention-card, .treatment-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.08)";
            card.style.boxShadow = "0px 0px 25px rgba(0, 255, 127, 0.9)"; // Glow hijau
            card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0px 0px 15px rgba(0, 255, 127, 0.5)";
        });
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.textShadow = "0px 0px 12px rgba(0, 255, 127, 0.9)";
            link.style.transition = "text-shadow 0.3s ease";
        });

        link.addEventListener("mouseout", () => {
            link.style.textShadow = "none";
        });
    });
});
