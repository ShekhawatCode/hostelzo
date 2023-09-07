export interface StaticContentType {
    id: string;
    key:string,
    short_description: string;
    title: string;
    description: string;
    createdAt: number;
    createdBy: string;
}

export interface StaticContentCreateRequestType {
    user: any;
    originalUrl: any;
    body: {
        id:string;
        title: string;
        description: string;
    }
}
