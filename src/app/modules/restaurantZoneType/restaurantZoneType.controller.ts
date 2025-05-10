import { Request, Response } from "express";
    import { restaurantZoneTypeService } from "./restaurantZoneType.service";
    import catchAsync from "../../utils/catchAsync";
    import sendResponse from "../../utils/sendResponse";
    import status from "http-status";
    
    const postRestaurantZoneType = catchAsync(async (req: Request, res: Response) => {
      const result = await restaurantZoneTypeService.postRestaurantZoneTypeIntoDB(req.body);
      sendResponse(res, { statusCode: status.CREATED, success: true, message: "Created successfully", data: result });
    });
    
    const getAllRestaurantZoneType = catchAsync(async (req: Request, res: Response) => {
      const result = await restaurantZoneTypeService.getAllRestaurantZoneTypeFromDB(req.query);
      sendResponse(res, { statusCode: status.OK, success: true, message: "Fetched successfully", data: result });
    });
    
    const getSingleRestaurantZoneType = catchAsync(async (req: Request, res: Response) => {
      const result = await restaurantZoneTypeService.getSingleRestaurantZoneTypeFromDB(req.params.id);
      sendResponse(res, { statusCode: status.OK, success: true, message: "Fetched successfully", data: result });
    });
    
    const updateRestaurantZoneType = catchAsync(async (req: Request, res: Response) => {
      const result = await restaurantZoneTypeService.updateRestaurantZoneTypeIntoDB(req.body);
      sendResponse(res, { statusCode: status.OK, success: true, message: "Updated successfully", data: result });
    });
    
    const deleteRestaurantZoneType = catchAsync(async (req: Request, res: Response) => {
      await restaurantZoneTypeService.deleteRestaurantZoneTypeFromDB(req.params.id);
      sendResponse(res, { statusCode: status.OK, success: true, message: "Deleted successfully",data: null });
    });

    
    export const restaurantZoneTypeController = { postRestaurantZoneType, getAllRestaurantZoneType, getSingleRestaurantZoneType, updateRestaurantZoneType, deleteRestaurantZoneType };
    