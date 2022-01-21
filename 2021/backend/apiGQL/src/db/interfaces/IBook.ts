enum enumStatus {
    PUBLISH,
    UNPUBLISH
}

export interface IBook {
    _id?: any;
    id: string;
    title: string;
    isbn: string;
    pageCount: number;
    publishedDate?: string;
    thumbnailUrl?: string;
    shortDescription?: string;
    longDescription?: string;
    status: enumStatus;
    authors: Array<string>;
}