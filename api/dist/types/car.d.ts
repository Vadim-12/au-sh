export interface Car {
    name_ID: number;
    year_start: number;
    year_end?: number;
    img_name: string;
    is_new: boolean;
}
export interface CarCreationAttrs extends Car {
}
