/**
 * People-first hero imagery.
 *
 * Destination and hostel pages keep their own photography — those pages are
 * about a place. Every product page instead leads with backpackers enjoying
 * themselves, because that is what the network is actually selling.
 *
 * DEMO DATA — stock photography used for the preview build.
 */

export type VibeImage = {
  src: string;
  alt: string;
};

const unsplash = (id: string, w = 2400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const vibes = {
  rooftopFriends: {
    src: unsplash("photo-1758272134082-f7078f04fdbb"),
    alt: "A group of friends laughing together on a hostel rooftop",
  },
  laughingGroup: {
    src: unsplash("photo-1511988617509-a57c8a288659"),
    alt: "Four travellers laughing together outside in the sunshine",
  },
  commonRoom: {
    src: unsplash("photo-1716767947498-d9fdef68b550"),
    alt: "Young travellers sitting together in a hostel common room",
  },
  playingTogether: {
    src: unsplash("photo-1539635278303-d4002c07eae3"),
    alt: "Four friends messing around together on a sunny evening",
  },
  beachGroup: {
    src: unsplash("photo-1659882751445-a846ab85d6c6"),
    alt: "A group of travellers on a beach at the end of the day",
  },
  trailWithBackpacks: {
    src: unsplash("photo-1704908329640-f02cbe12b6b2"),
    alt: "Travellers with backpacks walking up a trail together",
  },
  armsAroundShoulders: {
    src: unsplash("photo-1529156069898-49953e39b3ac"),
    alt: "Friends sitting on a wall with their arms around each other",
  },
  campfire: {
    src: unsplash("photo-1619537903549-0981d6bca911"),
    alt: "Travellers sitting around a fire together in the evening",
  },
  walkingTogether: {
    src: unsplash("photo-1736282760326-be0d8f2f23a0"),
    alt: "A group of backpackers walking a road together",
  },
  rockyTrailGroup: {
    src: unsplash("photo-1667665255588-da911011fcb4"),
    alt: "A group of backpackers stopping for a photo on a rocky trail",
  },
  whiteSandGroup: {
    src: unsplash("photo-1624217695497-3a74ef728c66"),
    alt: "Travellers standing together on white sand in bright sunshine",
  },
  stringLights: {
    src: unsplash("photo-1752491027824-e9006cd14046"),
    alt: "A hostel dining area lit by string lights in the evening",
  },
} satisfies Record<string, VibeImage>;
