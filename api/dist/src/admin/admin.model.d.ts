import { Model } from "sequelize-typescript";
interface AdminCreationAttrs {
    login: string;
    password: string;
}
export declare class AdminModel extends Model<AdminModel, AdminCreationAttrs> {
    id: number;
    login: string;
    password: string;
}
export {};
