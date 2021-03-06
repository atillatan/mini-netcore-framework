/*
 * @Author: Atilla Tanrikulu
 * @Date: 2018-04-16 10:10:45
 * @Last Modified by:   Atilla Tanrikulu
 * @Last Modified time: 2018-04-16 10:10:45
 */
export class ServiceResponse<T> {

    public IsSuccess: boolean;

    public ResultType: ResultType;

    public Message: string;

    public TotalCount: number;

    public Data: T;
}

export enum ResultType {

    Information = 1,

    Validation = 2,

    Success = 3,

    Warning = 4,

    Error = 5,
}

export class BaseDto {

    constructor() {
    }

    public Id: number;

    public CreateDate: Date;

    public CreatedBy: number;

    public UpdateDate: Date;

    public UpdatedBy: number;

    public IsActive: boolean;
}

export class PagingDto {

    constructor() {
        this.pageNumber = 1;
        this.pageSize = 10; // TODO: Atilla DefaultPagingSize parametresinden alinacak
        this.orderBy = 'Id';
        this.order = 'desc';
        this.count = 0;
    }


    public pageNumber: number;

    public pageSize: number;

    public orderBy: string;

    public order: string;

    public count: number;
}

export class User extends BaseDto {

    public Name: string;

    public LastName: string;

    public Age: number;

    public BirthDate: Date;

    public GenderCodeId: number;

    public NationalityCodeId: number;
}
