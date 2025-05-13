import { Request, Response } from "express";
    import { floorService } from "./floor.service";
    import catchAsync from "../../utils/catchAsync";
    import sendResponse from "../../utils/sendResponse";
    import status from "http-status";
    
    const postFloor = catchAsync(async (req: Request, res: Response) => {
      const result = await floorService.postFloorIntoDB(req.body);
      sendResponse(res, { statusCode: status.CREATED, success: true, message: "Created successfully", data: result });
    });
    
    const getAllFloor = catchAsync(async (req: Request, res: Response) => {
      const result = await floorService.getAllFloorFromDB(req.query);
      sendResponse(res, { statusCode: status.OK, success: true, message: "Fetched successfully", data: result });
    });
    
    const getSingleFloor = catchAsync(async (req: Request, res: Response) => {
      const result = await floorService.getSingleFloorFromDB(req.params.id);
      sendResponse(res, { statusCode: status.OK, success: true, message: "Fetched successfully", data: result });
    });
    
    const updateFloor = catchAsync(async (req: Request, res: Response) => {
      const result = await floorService.updateFloorIntoDB(req.body);
      sendResponse(res, { statusCode: status.OK, success: true, message: "Updated successfully", data: result });
    });
    
    const deleteFloor = catchAsync(async (req: Request, res: Response) => {
      await floorService.deleteFloorFromDB(req.params.id);
      sendResponse(res, { statusCode: status.OK, success: true, message: "Deleted successfully",data: null });
    });

    
    export const floorController = { postFloor, getAllFloor, getSingleFloor, updateFloor, deleteFloor };
    