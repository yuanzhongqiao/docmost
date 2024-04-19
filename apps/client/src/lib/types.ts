export interface QueryParams {
  query?: string;
  page?: number;
  limit?: number;
}

export enum UserRole {
  OWNER = "owner",
  ADMIN = "admin",
  MEMBER = "member",
}

export enum SpaceRole {
  ADMIN = "admin",
  WRITER = "writer",
  READER = "reader",
}

export interface IRoleData {
  label: string;
  value: string;
  description: string;
}

export type IPaginationMeta = {
  limit: number;
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};
export type IPagination<T> = {
  items: T[];
  meta: IPaginationMeta;
};