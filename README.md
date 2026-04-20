# MovieApp

Aplicación web de películas construida con React y TypeScript como proyecto de portafolio. Consume la API pública de [TMDB (The Movie Database)](https://www.themoviedb.org/) para mostrar películas populares, permitir búsqueda en tiempo real y gestionar una lista de favoritos persistida en `localStorage`.

## Funcionalidades

- Listado de películas populares con paginación
- Buscador con debounce (500ms) para evitar llamadas innecesarias a la API
- Página de detalle con backdrop, géneros, duración, rating y sinopsis
- Favoritos gestionados con Redux Toolkit y persistidos en `localStorage`
- Skeleton loading en todas las vistas durante la carga
- Tema oscuro con identidad visual propia
- Diseño responsivo (mobile-first)

## Stack

| Tecnología | Uso |
|-----------|-----|
| React 19 + TypeScript | UI y tipado estático |
| Vite | Bundler y dev server |
| Material UI (MUI v6) | Componentes y sistema de diseño |
| Redux Toolkit | Estado global (películas, búsqueda, favoritos) |
| React Router v6 | Navegación SPA |
| Axios | Cliente HTTP |
| TMDB API | Fuente de datos de películas |

## Estructura del proyecto

```
src/
├── api/                  # Cliente Axios configurado para TMDB
├── components/ui/        # Componentes reutilizables (Navbar, skeletons)
├── features/movies/      # Feature principal
│   ├── api/              # Endpoints de TMDB
│   ├── components/       # MovieCard, MovieGrid, MovieDetailHero
│   ├── hooks/            # useMovies, useMovieDetail
│   ├── store/            # moviesSlice (Redux)
│   └── types/            # Interfaces TypeScript de TMDB
├── hooks/                # Hooks globales (useDebounce)
├── layouts/              # MainLayout con Navbar persistente
├── pages/                # HomePage, MovieDetailPage, FavoritesPage
├── router/               # Configuración de rutas
└── store/                # Store raíz + persistencia en localStorage
```

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/jhonatanGe146/movie-app-react.git
cd movie-app-react

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env y agregar tu API key de TMDB

# Iniciar servidor de desarrollo
npm run dev
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```env
VITE_TMDB_ACCESS_TOKEN=tu_token_de_acceso_de_lectura
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

Obtén tu token gratuito en [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción
npm run preview   # Preview del build
npm run lint      # Linter
```

---

> This product uses the TMDB API but is not endorsed or certified by TMDB.
