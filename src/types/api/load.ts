export interface IResponse<D, EX, ER> {
    data: D;
    extra: EX;
    error: ER;
}