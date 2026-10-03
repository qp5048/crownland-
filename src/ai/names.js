// Plausible .io-style nicknames for bots. Mixed casing, numbers and a few
// localized names so the leaderboard looks like a real lobby.
export const BOT_NAMES = [
  'Luna', 'Mango', 'kiwi_kat', 'PixelPro', 'Orbit', 'sunny', 'FoxyRox', 'Nova',
  'xXDarkXx', 'Blaze', 'Tofu', 'Zephyr', 'mr.square', 'Ninja42', 'Bubbles', 'Rex',
  'Gizmo', 'Toasty', 'Vortex', 'Mila', 'Kenji', 'Sasha', 'Dimon', 'Ivan_TheBold',
  'Oleg', 'Katya', 'Pumpkin', 'Waffle', 'Comet', 'Ghosty', 'Turbo', 'LuckyCat',
  'Pepper', 'Echo', 'Atlas', 'Bean', 'ZigZag', 'Cupcake', 'Raven', 'Sparky',
  'Noodle', 'Panda', 'Jinx', 'Maverick', 'Hugo', 'Lola', 'Ziggy', 'Marshmallow',
  'Doodle', 'Frost', 'Nacho', 'Pickle', 'Shadow', 'Taco', 'Yuki', 'Kai',
  'Rocket', 'Poppy', 'Bolt', 'Biscuit', 'Captain', 'Draco', 'Peanut', 'Storm',
  'Muffin', 'Ace', 'Clover', 'Nugget', 'Spike', 'Vika', 'Artem', 'Leo',
  'Zara', 'ProGamer', 'NoobMaster', 'paper_king', 'Crown', 'Squarey', 'Maxim', 'Elsa',
];

export function pickName(rng, used) {
  for (let k = 0; k < 20; k++) {
    const n = rng.pick(BOT_NAMES);
    if (!used.has(n)) return n;
  }
  return `${rng.pick(BOT_NAMES)}${rng.int(2, 99)}`;
}
