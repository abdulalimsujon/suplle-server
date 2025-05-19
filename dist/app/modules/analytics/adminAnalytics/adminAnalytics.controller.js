"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAnalyticController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const adminAnalytics_service_1 = require("./adminAnalytics.service");
const AdminAnalytics = (0, catchAsync_1.default)(async (req, res) => {
    const result = await adminAnalytics_service_1.AdminAnalyticService.allAdminAnalytic();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Admin analytics data retrieved successfully",
        data: result,
    });
});
exports.adminAnalyticController = {
    AdminAnalytics
};
