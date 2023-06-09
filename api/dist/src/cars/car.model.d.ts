import { Model } from "sequelize-typescript";
import { CarCreationAttrs } from "types/car";
export declare class CarModel extends Model<CarModel, CarCreationAttrs> {
    id: number;
    name_ID: number;
    year_start: number;
    year_end?: number;
    img_name: string;
    is_new: boolean;
}
