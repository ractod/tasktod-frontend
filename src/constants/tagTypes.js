import { Assignment, Bed, Call, CheckCircle, Close, MoreHoriz, Visibility, Work } from '@mui/icons-material';

const tagTypes = {
    activity: { 
        label: "Activity",
        bgColor: "bg-yellow-light", 
        textColor: "text-yellow-dark", 
        Icon: Assignment   
    },
    resting: {
        label: "Resting", 
        bgColor: "bg-purple-light", 
        textColor: "text-purple-dark", 
        Icon: Bed
    },
    review: {
        label:"Review",
        bgColor:"bg-yellow-light", 
        textColor:"text-yellow-dark", 
        Icon: Visibility
    },
    project: {
        label:"Project", 
        bgColor:"bg-purple-light", 
        textColor:"text-purple-dark", 
        Icon: Work
    },
    call: {
        label: "Call", 
        bgColor: "bg-green-light", 
        textColor: "text-green-dark", 
        Icon: Call
    },
    other: {
        label: "Other", 
        bgColor: "bg-red-light", 
        textColor: "text-red-dark", 
        Icon: MoreHoriz
    },
    completed: {
        label: "Completed", 
        bgColor: "bg-green-light", 
        textColor: "text-green-dark", 
        Icon: CheckCircle
    },
    uncompleted: {
        label: "Uncompleted", 
        bgColor: "bg-red-light", 
        textColor: "text-red-dark", 
        Icon: Close
    }
}

export default tagTypes