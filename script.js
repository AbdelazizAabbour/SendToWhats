document.getElementById("whatsapp-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var product = document.getElementById("product").value;
    var address = document.getElementById("address").value;
    
    
    var number = "+212777996998";
    
   
    var message = `Bonjour !\n\nNom : ${name}\nTéléphone : ${phone}\nProduit : ${product}\nAdresse : ${address}\n\nMerci pour votre commande.`;
    
    
    var url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
   
    let button = document.querySelector(".btn-whatsapp");
    button.innerHTML = '<i class="fas fa-check me-2"></i>Envoyé!';
    button.classList.add("bg-success");
    
    setTimeout(() => {
        button.innerHTML = '<i class="fab fa-whatsapp fa-lg me-2"></i>Envoyer via WhatsApp';
        button.classList.remove("bg-success");
        document.getElementById("whatsapp-form").reset();
    }, 3000);
});