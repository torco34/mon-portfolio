const fs = require('fs');
const path = require('path');

// Archivos a actualizar
const files = [
  'src/pages/SkillsPage.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/ExperiencePage.tsx',
  'src/pages/EducationPage.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/NotFoundPage.tsx'
];

// Reemplazos comunes
const replacements = [
  // Fondo más claro
  {
    pattern: /bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900/g,
    replacement: 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20'
  },
  // Cards más claras
  {
    pattern: /bg-gradient-to-br from-gray-800\/50 to-gray-900\/50/g,
    replacement: 'bg-gradient-to-br from-gray-800/60 to-gray-900/60'
  },
  // Bordes más visibles
  {
    pattern: /border border-white\/10/g,
    replacement: 'border border-white/15'
  },
  // Hover borders
  {
    pattern: /hover:border-pink-500\/30/g,
    replacement: 'hover:border-pink-500/40'
  },
  // Texto más claro
  {
    pattern: /text-gray-300/g,
    replacement: 'text-gray-200'
  },
  // Animaciones básicas
  {
    pattern: /class="([^"]*?)"/g,
    replacement: (match, p1) => {
      // Añadir animaciones a elementos principales
      if (p1.includes('bg-gradient-to-br from-gray-800') && !p1.includes('animate-')) {
        return `class="${p1} animate-fade-in-up hover-glow"`;
      }
      if (p1.includes('text-center') && p1.includes('mb-')) {
        return `class="${p1} animate-fade-in-up"`;
      }
      return match;
    }
  },
  // Añadir hover-glow a botones
  {
    pattern: /hover:scale-105 transition-all duration-300/g,
    replacement: 'hover:scale-105 transition-all duration-300 hover-glow'
  }
];

// Actualizar cada archivo
files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Aplicar reemplazos
    replacements.forEach(({ pattern, replacement }) => {
      if (typeof replacement === 'function') {
        content = content.replace(pattern, replacement);
      } else {
        content = content.replace(pattern, replacement);
      }
    });
    
    // Añadir partículas flotantes al fondo si no existen
    if (!content.includes('floating-particle') && content.includes('absolute inset-0 overflow-hidden')) {
      const particlesCode = `
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-400/30 to-cyan-400/30 rounded-full animate-float"
            style={{
              left: \`\${Math.random() * 100}%\`,
              top: \`\${Math.random() * 100}%\`,
              animationDelay: \`\${Math.random() * 2}s\`,
              animationDuration: \`\${3 + Math.random() * 3}s\`,
            }}
          />
        ))}
      `;
      
      content = content.replace(
        /(\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/,
        `${particlesCode}$1`
      );
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Actualizado: ${file}`);
  } else {
    console.log(`❌ No encontrado: ${file}`);
  }
});

console.log('\n🎉 Todas las páginas actualizadas con animaciones básicas!');