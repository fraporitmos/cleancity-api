import { Driver } from "./Driver";

export interface DriverResponse {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: Driver[];
  }