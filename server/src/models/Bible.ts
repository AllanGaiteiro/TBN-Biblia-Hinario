
export interface Bible {
    biblia: any[];
    books: Books[];
};

export interface Books {
    name: string;
    abbrev: string;
}
export interface Book {
    abbrev: string;
    chapters: string[][];
    name: string;
} 