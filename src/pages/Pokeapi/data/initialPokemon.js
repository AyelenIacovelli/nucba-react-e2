export const initialPokemon = {
    name: "Ejemplo Pokemon",
    order: 14,
    types: [{ slot: 1, type: { name: "Detective" } }],
    sprites: {
      other: {
        home: {
          front_default:
            "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/M4MX3SBAXNADVBEXGM7YTTVYQM.jpg",
        },
      },
    },
    stats: [
      {
        base_stat: 92,
        effort: 0,
        stat: {
          name: "Vida",
        },
      },
      {
        base_stat: 91,
        effort: 0,
        stat: {
          name: "Ataque",
        },
      },
      {
        base_stat: 95,
        effort: 0,
        stat: {
          name: "Defensa",
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "Ataque Especial",
        },
      },
    ],
  };