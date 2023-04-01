export interface Modification {
    car_ID: number;
    engine_ID: number;
    price_min: number;
    price_max: number;
    capacity: number;
    power: number;
    WD_ID: number;
}
export interface ModificationCreationAttrs extends Modification {
}
