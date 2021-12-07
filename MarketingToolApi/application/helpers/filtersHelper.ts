import express from "express";

export class filtersHelper{
    public static getFiltersFromRequestQuery(req: express.Request):any{
        let filter = {};
        Object.keys(req.query).forEach(fieldName => {
            filter = filtersHelper.addFilter(fieldName, req.query[fieldName], filter);
        });
        return filter;
    }
    static addFilter(filterField: string, fieldValue: any, filter: any): any{
        filter[filterField] = `${fieldValue}`;
        return filter;
      }
}

