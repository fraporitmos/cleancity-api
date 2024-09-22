import { Citizen } from "./Citizen";

export type CitizenResponse = {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: Citizen[];
};