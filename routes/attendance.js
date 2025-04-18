import express from 'express';
import {
    getAttendance,
    getAttendanceByClass,
    createAttendance,
    updateAttendance,
    saveAttendance,
    getDailyReport,
    getMonthlyReport,
    getSemiMonthlyReport,
    getCustomRangeReport,
    downloadDailyReportExcel,
    downloadDailyReportPDF,
    downloadSemiMonthlyReportExcel,
    downloadSemiMonthlyReportPDF
} from '../controllers/attendanceController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/attendance/report/daily/:date
// @desc    Get daily attendance report
// @access  Private
router.get('/report/daily/:date', authenticate, getDailyReport);
router.get('/report/pdf/daily/:date', authenticate, downloadDailyReportPDF);
router.get('/report/excel/daily/:date', authenticate, downloadDailyReportExcel);

// @route   GET /api/attendance/report/monthly/:year/:month
// @desc    Get monthly attendance report
// @access  Private
router.get('/report/monthly/:year/:month', authenticate, getMonthlyReport);

// @route   GET /api/attendance/report/semi-monthly/:year/:month/:half
// @desc    Get semi-monthly attendance report (half: 1 or 2)
// @access  Private
router.get('/report/semi-monthly/:year/:month/:half', authenticate, getSemiMonthlyReport);
router.get('/report/excel/semi-monthly/:year/:month/:half', authenticate, downloadSemiMonthlyReportExcel);
router.get('/report/pdf/semi-monthly/:year/:month/:half', authenticate, downloadSemiMonthlyReportPDF);

// @route   GET /api/attendance/report/custom/:startDate/:endDate
// @desc    Get custom date range attendance report
// @access  Private
router.get('/report/custom/:startDate/:endDate', authenticate, getCustomRangeReport);

// @route   GET /api/attendance/:date
// @desc    Get all attendance for a specific date
// @access  Private
router.get('/:date', authenticate, getAttendance);

// @route   GET /api/attendance/:date/:standard/:division
// @desc    Get attendance by class for a specific date
// @access  Private
router.get('/:date/:standard/:division', authenticate, getAttendanceByClass);

// @route   POST /api/attendance
// @desc    Create a new attendance record
// @access  Private
router.post('/', authenticate, createAttendance);

// @route   PUT /api/attendance/:id
// @desc    Update an attendance record
// @access  Private
router.put('/:id', authenticate, updateAttendance);

// @route   POST /api/attendance/save
// @desc    Create or update attendance record
// @access  Private
router.post('/save', authenticate, saveAttendance);

export default router;
