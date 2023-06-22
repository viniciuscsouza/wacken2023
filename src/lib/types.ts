export interface Artist {
    assets: Asset[];
    country: Country[];
    pathSegment: string;
    title: string;
    uid: number;
  }

export interface Country {
    nameLocalized?: string | null;
    uid?: number | null;
}
  
export interface Festival {
    title: string;
    uid: number;
  }
  
export interface FestivalDay {
    end: string;
    start: string;
    title: string;
    uid: number;
  }
  
export interface Image {
    originalResource: {
      alternative?: string | null;
      description?: string | null;
      name: string;
      publicUrl: string;
      title?: string | null;
      type: number;
      uid: number;
    };
  }
  
export interface NetworkUri {
    socialnetwork?: {
      title: string;
      uid: number;
    } | null;
    uid: number;
    uri: string;
  }
  
export interface Asset {
    artist: {
      origUid: undefined | any;
      pathSegment: string;
      pid: number;
      title: string;
      uid: number;
    };
    biography: string;
    detailLink: string;
    externalMediaRatio: string;
    externalMediaSource: string;
    extraDay: boolean;
    festival?: Festival | null;
    firsttime: boolean;
    images: Image[];
    isExtraDay: boolean;
    isFirsttime: boolean;
    networkuri: NetworkUri[];
    pid: number;
    spotifyalbum: string;
    spotifyartist: string;
    subtitle: string;
    thumbnail?: string | boolean;
    uid: number;
  }
  
export  interface Stage {
    description: string;
    latitude: string;
    longitude: string;
    pid: number;
    sorting: string;
    subtitle: string;
    title: string;
    uid: number;
  }
  
export interface Performance {
    title: string;
    uid: number;
  }
  
export interface Event {
    artists: Artist[];
    end: string;
    festival: Festival;
    festivalday: FestivalDay;
    images: any;
    media: any;
    performance: Performance;
    stage: Stage;
    start: string;
    subtitle: string;
    sysLanguageUid: string;
    teaser: string;
    title: string;
    uid: number;
  }

  