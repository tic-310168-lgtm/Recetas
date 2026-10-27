import { useState } from 'react';
import './App.css';

const recipes = [
  {
    name: 'Nachos con queso',
    image:
      'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Nachos servidos en un plato',
    ingredients: ['Totopos', '1 taza de queso rallado', '1 tomate picado', 'Crema al gusto'],
    steps: [
      'Coloca los totopos en un plato o recipiente para horno.',
      'Agrega el queso rallado y calienta hasta que se derrita.',
      'Añade el tomate y la crema. Sirve caliente.',
    ],
  },
  {
    name: 'Omelet de huevo',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Omelet de huevo servido para el desayuno',
    ingredients: ['2 huevos', '2 cucharadas de leche', '¼ taza de queso rallado', 'Sal y pimienta'],
    steps: [
      'Bate los huevos con la leche, la sal y la pimienta.',
      'Vierte la mezcla en una sartén caliente con un poco de aceite.',
      'Cuando el huevo esté casi cocido, agrega el queso y dobla el omelet.',
      'Cocina un minuto más y sirve caliente.',
    ],
  },
];

function App() {
  const [openRecipe, setOpenRecipe] = useState('');

  function showRecipe(name) {
    setOpenRecipe((currentRecipe) => (currentRecipe === name ? '' : name));
  }

  return (
    <main className="recipe-page">
      <header className="page-header">
        <h1><span aria-hidden="true"></span> Recetas <span aria-hidden="true"></span></h1>
      </header>

      <section className="recipe-list" aria-label="Recetas">
        {recipes.map((recipe, index) => (
          <article className={`recipe-card recipe-card-${index + 1}`} key={recipe.name}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.imageAlt} />
            <button
              className="recipe-link"
              type="button"
              aria-expanded={openRecipe === recipe.name}
              onClick={() => showRecipe(recipe.name)}
            >
              {openRecipe === recipe.name ? 'Cerrar receta' : 'Ver receta...'}
            </button>

            {openRecipe === recipe.name && (
              <div className="recipe-details">
                <h3>Ingredientes</h3>
                <ul>
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
                <h3>Preparación</h3>
                <ol>
                  {recipe.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
