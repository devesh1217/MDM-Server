import mongoose from 'mongoose';

const RegisteredStudentSchema = new mongoose.Schema({
    standard: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    division: {
        type: String,
        required: true,
        enum: ['A', 'B', 'C', 'D']
    },
    academicYear: {
        type: String,
        required: true,
        default: () => {
            const currYear = new Date().getFullYear();
            const currMonth = new Date().getMonth();

            return currMonth < 5 ? `${currYear - 1}-${currYear}` : `${currYear}-${currYear + 1}`;
        }
    },
    counts: {
        general: {
            male: {
                type: Number,
                required: true,
                default: 0
            },
            female: {
                type: Number,
                required: true,
                default: 0
            },
        },
        obc: {
            male: {
                type: Number,
                required: true,
                default: 0
            },
            female: {
                type: Number,
                required: true,
                default: 0
            },
        },
        sc: {
            male: {
                type: Number,
                required: true,
                default: 0
            },
            female: {
                type: Number,
                required: true,
                default: 0
            },
        },
        st: {
            male: {
                type: Number,
                required: true,
                default: 0
            },
            female: {
                type: Number,
                required: true,
                default: 0
            },
        },
    },
}, {
    timestamps: true,
});

const RegisteredStudent = mongoose.model('RegisteredStudent', RegisteredStudentSchema);
export default RegisteredStudent;