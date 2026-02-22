===========================================
📱 PWA DE ALMÍBAR - GUÍA COMPLETA
===========================================

¡Tu sitio web ahora es una Progressive Web App (PWA)!
Los clientes pueden instalarla como una app en su teléfono.

===========================================
✅ ARCHIVOS PWA INCLUIDOS
===========================================

📁 Nuevos archivos agregados:

1. manifest.json - Configuración de la app
2. sw.js - Service Worker (funciona offline)
3. icons/ - Carpeta con íconos en todos los tamaños
   ├── icon-192.png (192x192)
   ├── icon-512.png (512x512)
   ├── apple-touch-icon.png (180x180)
   ├── favicon.ico (32x32)
   └── logo-original.png (2000x2000)

4. index.html - Actualizado con PWA meta tags


===========================================
🚀 CÓMO INSTALAR LA APP (USUARIOS)
===========================================

ANDROID (Chrome):
━━━━━━━━━━━━━━━━━━━━
1. Entra a: https://almibarcurico-ai.github.io/menu2/
2. Aparecerá un botón "📱 Instalar App" abajo a la derecha
3. O toca los 3 puntos (⋮) → "Instalar aplicación"
4. ¡Listo! Ahora tienes Almíbar en tu pantalla de inicio


IPHONE (Safari):
━━━━━━━━━━━━━━━━━━━━
1. Entra a: https://almibarcurico-ai.github.io/menu2/
2. Toca el botón "Compartir" (⬆️)
3. Busca "Agregar a pantalla de inicio"
4. Toca "Agregar"
5. ¡Listo! Ya tienes el icono de Almíbar


ESCRITORIO (Chrome/Edge):
━━━━━━━━━━━━━━━━━━━━
1. Entra al sitio web
2. Mira la barra de direcciones, verás un icono ➕
3. Click en "Instalar Almíbar"
4. ¡Listo! Se abre como app de escritorio


===========================================
✨ CARACTERÍSTICAS DE LA PWA
===========================================

✅ Funciona sin internet
   - El menú se puede ver offline
   - Los datos se guardan en caché

✅ Instalable
   - Se instala como app nativa
   - Icono en la pantalla de inicio

✅ Fullscreen
   - Se abre sin barra del navegador
   - Experiencia de app real

✅ Rápida
   - Carga instantánea después de la primera vez
   - Service Worker precarga contenido

✅ Notificaciones Push (próximamente)
   - Podrás enviar ofertas
   - Avisos de nuevos platos
   - Recordatorios de reservas

✅ Atajos rápidos
   - Mantén presionado el icono
   - Acceso directo a:
     • Ver Menú Cocina
     • Ver Menú Barra
     • Reservar Mesa


===========================================
🔧 ACTUALIZAR LA PWA
===========================================

Cuando hagas cambios al sitio:

1. Sube los archivos normalmente a GitHub
2. Actualiza la versión en sw.js:
   
   Cambia: const CACHE_NAME = 'almibar-v1.0';
   Por:    const CACHE_NAME = 'almibar-v1.1';

3. Los usuarios verán la actualización automáticamente
   (la próxima vez que abran la app)


===========================================
📊 ANALÍTICAS DE LA PWA
===========================================

Para ver cuántas personas instalan la app:

Opción 1: Google Analytics
- Agrega el código de Google Analytics
- Ve a: Eventos → App Installation

Opción 2: Console log
- Abre Developer Tools (F12)
- Ve a Console
- Verás mensajes de instalación


===========================================
🎨 PERSONALIZAR LA PWA
===========================================

Cambiar colores:
━━━━━━━━━━━━━━━━━━━━
Edita manifest.json:

{
  "theme_color": "#E63946",        ← Color de la barra
  "background_color": "#000000"    ← Color de splash screen
}


Cambiar nombre:
━━━━━━━━━━━━━━━━━━━━
Edita manifest.json:

{
  "name": "Almíbar - Cocina y Bar",    ← Nombre completo
  "short_name": "Almíbar"              ← Nombre corto (icono)
}


Agregar más atajos:
━━━━━━━━━━━━━━━━━━━━
Edita manifest.json → "shortcuts":

{
  "name": "Ver Promociones",
  "url": "/menu2/promociones.html"
}


===========================================
🔔 ACTIVAR NOTIFICACIONES PUSH
===========================================

Para enviar notificaciones a los clientes:

1. Necesitas un servicio como:
   - Firebase Cloud Messaging (GRATIS)
   - OneSignal (GRATIS hasta 10k usuarios)
   - Pushpad
   - Web Push

2. Registro en Firebase (ejemplo):
   a) Crea cuenta en console.firebase.google.com
   b) Crea proyecto "Almibar"
   c) Agrega "Cloud Messaging"
   d) Copia las credenciales
   e) Actualiza sw.js con tus credenciales

3. Los usuarios autorizan notificaciones al instalar

4. Envías notificaciones desde el panel de Firebase


===========================================
📱 COMPARTIR LINK DE INSTALACIÓN
===========================================

Código QR:
━━━━━━━━━━━━━━━━━━━━
Crea un QR que apunte a:
https://almibarcurico-ai.github.io/menu2/

Ponlo en:
• Las mesas
• La cuenta
• Volantes
• Instagram Stories


Instagram/Facebook:
━━━━━━━━━━━━━━━━━━━━
Publica:
"📱 ¡Descarga nuestra APP!
Menú digital, reservas y más.
👉 [link]"


WhatsApp:
━━━━━━━━━━━━━━━━━━━━
Mensaje automático:
"Hola! Para ver nuestro menú completo,
descarga nuestra app: [link]"


===========================================
🐛 SOLUCIÓN DE PROBLEMAS
===========================================

La app no se instala:
━━━━━━━━━━━━━━━━━━━━
✓ Verifica que estés usando HTTPS
✓ Revisa que manifest.json esté accesible
✓ Verifica que sw.js no tenga errores
✓ Abre Developer Tools → Console → Ve errores


El icono no aparece:
━━━━━━━━━━━━━━━━━━━━
✓ Verifica que /icons/ tenga todos los archivos
✓ Comprueba las rutas en manifest.json
✓ Limpia caché del navegador


No funciona offline:
━━━━━━━━━━━━━━━━━━━━
✓ Verifica que sw.js esté registrado
✓ Abre DevTools → Application → Service Workers
✓ Ve si hay errores en Cache Storage


===========================================
📈 PRÓXIMOS PASOS
===========================================

1. ✅ PWA básica creada
2. ⏳ Agregar notificaciones push
3. ⏳ Agregar sincronización en background
4. ⏳ Agregar modo oscuro
5. ⏳ Agregar compartir en redes sociales
6. ⏳ Integrar con Google Maps
7. ⏳ Agregar modo "llamar al mesero"


===========================================
🎉 ¡FELICITACIONES!
===========================================

Tu sitio web ahora es una Progressive Web App.
Los clientes pueden instalarla y usarla como
una app nativa sin pasar por las tiendas.

Sube los archivos a GitHub y ¡pruébala!


===========================================
📞 SOPORTE
===========================================

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Ve a Application → Service Workers
3. Ve a Application → Manifest
4. Verifica errores en rojo

---

Última actualización: Febrero 2026
🍹 ¡Salud!
