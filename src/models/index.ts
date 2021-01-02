export interface Genre {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Producer {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface AnimeItem {
        mal_id: number;
        url: string;
        title: string;
        image_url: string;
        synopsis: string;
        type: string;
        airing_start?: any;
        episodes?: any;
        members: number;
        genres: Genre[];
        source: string;
        producers: Producer[];
        score?: any;
        licensors: any[];
        r18: boolean;
        kids: boolean;
        continuing: boolean;
    }
    export interface From {
        day: number;
        month: number;
        year: number;
    }

    export interface To {
        day?: any;
        month?: any;
        year?: any;
    }

    export interface Prop {
        from: From;
        to: To;
    }

    export interface Aired {
        from: Date;
        to?: any;
        prop: Prop;
        string: string;
    }

    export interface Adaptation {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Prequel {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Sequel {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Related {
        Adaptation: Adaptation[];
        Prequel: Prequel[];
        Sequel: Sequel[];
    }

    export interface Producer {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Studio {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Genre {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface AnimeDetail {
        request_hash: string;
        request_cached: boolean;
        request_cache_expiry: number;
        mal_id: number;
        url: string;
        image_url: string;
        trailer_url: string;
        title: string;
        title_english: string;
        title_japanese: string;
        title_synonyms: string[];
        type: string;
        source: string;
        episodes?: any;
        status: string;
        airing: boolean;
        aired: Aired;
        duration: string;
        rating: string;
        score?: any;
        scored_by?: any;
        rank?: any;
        popularity: number;
        members: number;
        favorites: number;
        synopsis: string;
        background?: any;
        premiered?: any;
        broadcast: string;
        related: Related;
        producers: Producer[];
        licensors: any[];
        studios: Studio[];
        genres: Genre[];
        opening_themes: any[];
        ending_themes: any[];
    }