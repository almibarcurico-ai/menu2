// Almíbar Translation System
// Español / English

const translations = {
    es: {
        // Index page
        'hungry': 'TENGO HAMBRE',
        'hungry-desc': 'Comida • Pizzas • Tablas',
        'thirsty': 'TENGO SED',
        'thirsty-desc': 'Cócteles • Cervezas • Tragos',
        'order-from-table': 'Pide directo desde tu mesa',
        'using-digital-menu': 'usando este menú digital',
        'select-products': 'Selecciona tus productos y envía tu pedido por WhatsApp',
        'friends-club': 'CLUB DE AMIGOS',
        'view-reviews': 'VER RESEÑAS',
        'what-customers-say': 'Lo que dicen nuestros clientes',
        'leave-review': 'DEJAR RESEÑA',
        'tell-us-experience': 'Cuéntanos tu experiencia',
        'reserve-table': 'RESERVAR MESA',
        
        // Common
        'back-to-home': 'Volver al Inicio',
        'add': 'Agregar',
        'total': 'Total',
        'send-order': 'Enviar Pedido',
        
        // Menu page common
        'kitchen-menu': 'Menú Cocina',
        'bar-menu': 'Menú Barra',
        'view-cart': 'Ver Carrito',
        'happy-hour': 'Happy Hour',
        'all-day-combos': 'Combos Todo Horario',
        
        // Cart
        'my-order': 'MI PEDIDO',
        'empty-cart': 'Tu carrito está vacío',
        'back-to-menu': 'Volver al Menú',
        'send-whatsapp': 'Enviar por WhatsApp',
        
        // Days of week
        'monday': 'Lunes',
        'tuesday': 'Martes',
        'wednesday': 'Miércoles',
        'thursday': 'Jueves',
        'friday': 'Viernes',
        'saturday': 'Sábado',
        'sunday': 'Domingo'
    },
    
    en: {
        // Index page
        'hungry': "I'M HUNGRY",
        'hungry-desc': 'Food • Pizzas • Platters',
        'thirsty': "I'M THIRSTY",
        'thirsty-desc': 'Cocktails • Beers • Drinks',
        'order-from-table': 'Order directly from your table',
        'using-digital-menu': 'using this digital menu',
        'select-products': 'Select your products and send your order via WhatsApp',
        'friends-club': 'FRIENDS CLUB',
        'view-reviews': 'VIEW REVIEWS',
        'what-customers-say': 'What our customers say',
        'leave-review': 'LEAVE A REVIEW',
        'tell-us-experience': 'Tell us about your experience',
        'reserve-table': 'RESERVE A TABLE',
        
        // Common
        'back-to-home': 'Back to Home',
        'add': 'Add',
        'total': 'Total',
        'send-order': 'Send Order',
        
        // Menu page common
        'kitchen-menu': 'Kitchen Menu',
        'bar-menu': 'Bar Menu',
        'view-cart': 'View Cart',
        'happy-hour': 'Happy Hour',
        'all-day-combos': 'All Day Combos',
        
        // Cart
        'my-order': 'MY ORDER',
        'empty-cart': 'Your cart is empty',
        'back-to-menu': 'Back to Menu',
        'send-whatsapp': 'Send via WhatsApp',
        
        // Days of week
        'monday': 'Monday',
        'tuesday': 'Tuesday',
        'wednesday': 'Wednesday',
        'thursday': 'Thursday',
        'friday': 'Friday',
        'saturday': 'Saturday',
        'sunday': 'Sunday'
    }
};

// Change language function
function changeLanguage(lang) {
    // Save preference
    localStorage.setItem('almibar_language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Translate all elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('almibar_language') || 'es';
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = getCurrentLanguage();
    if (savedLang !== 'es') {
        changeLanguage(savedLang);
    }
});
