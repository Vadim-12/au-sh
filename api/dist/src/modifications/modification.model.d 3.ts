import { Model } from "sequelize-typescript";
import { ModificationCreationAttrs } from "types/modification";
export declare class ModificationModel extends Model<ModificationModel, ModificationCreationAttrs> {
    id: number;
    car_ID: number;
    engine_ID: number;
    price_min: number;
    price_max: number;
    capacity: number;
    power: number;
    WD_ID: number;
}
