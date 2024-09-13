export interface ImageTypes {
  png: string;
  webp: string;
}

export interface DestinationTypes {
  name: string;
  images: ImageTypes;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewTypes {
  name: string;
  images: ImageTypes;
  role: string;
  bio: string;
}

export interface TechnologyImages {
  portrait: string;
  landscape: string;
}

export interface TechnologyTypes {
  name: string;
  images: TechnologyImages;
  description: string;
}

export interface DataTypes {
  destinations: DestinationTypes[];
  crew: CrewTypes[];
  technology: TechnologyTypes[];
}
