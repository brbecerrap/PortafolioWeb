# Portafolio Web - Bryan Becerra

Portafolio profesional de Bryan Andrés Becerra Paredes, Analista Programador Computacional especializado en Microsoft Power Platform.

## Tecnologías

- **Framework**: React 18 con TypeScript
- **Build Tool**: Vite 5
- **Estilos**: Tailwind CSS 3
- **Iconos**: Lucide React
- **Despliegue**: Cloudflare Pages

## Características

- Diseño responsive (mobile-first)
- Accesibilidad WCAG 2.1 AA
- Optimizado para Core Web Vitals
- SEO optimizado con meta tags
- Navegación suave entre secciones

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/        # Header, Navigation, Footer
│   ├── sections/      # Hero, Skills, Projects, Experience, Education, Contact
│   └── ui/            # Button, Card, Badge, Timeline
├── data/              # Datos estáticos del portafolio
├── hooks/             # Custom hooks (useScrollSpy)
├── styles/            # Estilos globales con Tailwind
├── types/             # Definiciones TypeScript
├── App.tsx            # Componente principal
└── main.tsx           # Punto de entrada
```

## Inicio Rápido

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar al directorio
cd portafolio-web

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
# http://localhost:5173
```

### Construcción

```bash
# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## Despliegue en Cloudflare Pages

1. Conectar el repositorio a Cloudflare Pages
2. Configurar:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Desplegar

## Estructura de Secciones

1. **Hero** - Perfil profesional y contacto
2. **Habilidades** - Skills técnicos organizados por categoría
3. **Proyectos** - Proyectos destacados
4. **Experiencia** - Timeline de experiencia laboral
5. **Educación** - Formación académica y certificaciones
6. **Contacto** - Información de contacto

## Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-feature`)
3. Commit tus cambios (`git commit -m 'Agregar nueva feature'`)
4. Push a la rama (`git push origin feature/nueva-feature`)
5. Abrir un Pull Request

## Licencia

MIT License