import moment from "moment-timezone"

const validateNoEmpty = (errors, values) => {
    Object.entries(values).forEach(([key, value]) => { 
        if(!value.trim())  errors[key] = "Must Not Be Empty" 
    })
}

const validateRegisterForm = (values) => {
    let errors = {}
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const passwrodRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g
    // check the email structure
    if(!emailRegex.test(values.email.trim())) errors.email = "Email Is Not Valid"
    // check the password structure
    if(!passwrodRegex.test(values.password.trim())) errors.password = "Password Must Includes At Least 8 Characters, One Uppercase Letter, One Lowercase Letter, One Number"
    // check if inputs are empty
    validateNoEmpty(errors, values)

    return errors
}

const validateLoginForm = (values) => {
    let errors = {}
    // check if inputs are empty
    validateNoEmpty(errors, values)
    return errors
}

const validateCreateForm = (values) => {
    let errors = {}
    const { startTime, endTime } = values

    // check if inputs are empty
    validateNoEmpty(errors, values)
    // check if endtime is less or equal to startTime
    if(endTime < startTime) errors.times = "End Time Musn't Be Less Than Start Time"
    if(endTime == startTime) errors.times = "End Time Musn't Be Equal To Start Time"

    return errors
}

const generateTodayDate = () => {
    const date = new Date()
    return {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    }
}

const findByDate = (data, currentDate) => {
    return data.filter(({ date }) => (
        date.day == currentDate.day && date.month == currentDate.month && date.year == currentDate.year
    ))
}

const sortByTime = (data) => data.sort((first, second) => first.startTime.localeCompare(second.startTime))

// convert time from "HH:MM" to "HH:MM A" format
const convertTime = (time) => moment.tz(time, 'HH:mm', 'America/New_York').format('hh:mm A');

const filterTasks = (filters, tasks) => {
    if(filters.tag == "all") {
        return tasks.filter(task => task.name.includes(filters.name))
    } else {
        return tasks.filter(task => task.tags.includes(filters.tag) && task.name.includes(filters.name))
    }
}

export { 
    validateRegisterForm, 
    validateLoginForm, 
    generateTodayDate, 
    validateCreateForm, 
    convertTime, 
    findByDate, 
    sortByTime,
    filterTasks
}