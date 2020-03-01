export interface UserSpotifyRequest {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: string[];
  product: string;
  type: string;
  uri: string;
}

export interface User {
  country: string;
  email: string;
  displayName: string;
  id: string;
  type: string;
  uri: string;
  href: string;
  images: string[],
}