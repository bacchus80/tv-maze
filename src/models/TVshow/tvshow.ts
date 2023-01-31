/** Model for a TV show */

interface Rating {
   average: number;
}

interface Externals {
   tvrage: number;
   thetvdb: number;
   imdb: string;
}

interface Country {
   name: string; // Should be pre-defined values
   code: string; // Should be pre-defined values
   timezone: string; // Should be pre-defined values
}

interface Network {
   id: number;
   name: string; // Should be pre-defined values
   country: Country;
   officialSite: string;
}

interface Schedule {
   time: string;
   days: string[]; // Should be pre-defined values for the days of the week
}

interface ImageUrls {
   medium: string;
   originial: string;
}

export interface TVshow {
   id: number;
   name: string;
   type: string;
   language: string;
   genres: string[]; // Should be pre-defined genres
   status: string;
   runtime: number;
   averageRuntime: number;
   premiered: string; // Date formatted as YYYY-MM-DD
   ended: string; // Date formatted as YYYY-MM-DD
   officialSite: string;
   schedule: Schedule;
   rating: Rating;
   weight: number;
   externals: Externals;
   image: ImageUrls;
   summary: string;
   updated: number;
   network: Network;
   // webChannel not implemented
   // dvdCountry not implemented
}
