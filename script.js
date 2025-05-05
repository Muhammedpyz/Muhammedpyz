document.addEventListener('DOMContentLoaded', function() {
    // Menü Açma/Kapama İşlevi
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Sayfa kaydırıldığında header stilini değiştirme
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Yetenek çubuklarını animasyonla doldurma
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
        });
    }
    
    // Yetenekler bölümü görünür olduğunda animasyonu başlat
    const skillsSection = document.querySelector('.skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Proje filtreleme işlevi
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aktif filtre butonunu değiştir
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Projeleri filtrele
            const filter = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // İletişim formu gönderimi
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Normalde burada bir API'ye form verilerini gönderirsiniz
            // Şimdilik sadece konsola yazdıralım
            console.log('Form gönderildi:', { name, email, subject, message });
            
            // Başarılı gönderim mesajı
            alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
            
            // Formu sıfırla
            contactForm.reset();
        });
    }
    
    // Bülten aboneliği
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Normalde burada bir API'ye e-posta adresini gönderirsiniz
            console.log('Bülten aboneliği:', email);
            
            // Başarılı abonelik mesajı
            alert('Bültenimize başarıyla abone oldunuz!');
            
            // Formu sıfırla
            newsletterForm.reset();
        });
    }
    
    // Sayfa içi bağlantılar için yumuşak kaydırma
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Mobil menüyü kapat
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
                
                // Hedef elemana kaydır
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Yazı animasyonu
    const animateText = document.querySelector('.animate-text');
    
    if (animateText) {
        const text = animateText.textContent;
        animateText.innerHTML = '';
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.animationDelay = `${i * 0.1}s`;
            animateText.appendChild(span);
        }
    }
});