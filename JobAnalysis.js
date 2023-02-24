const jobs = require('./upwork_jobs.json');

function hoursToMinutes(time){
    if (time.Posted.includes("hours")){
        let hours = time.Posted.charAt(0) + time.Posted.charAt(1);
        let minutes = hours * 60;
        return minutes;
    }
    let mins = time.Posted.charAt(0) + time.Posted.charAt(1);
    return mins;
}

let maxHours = jobs.reduce((a,b)=>{
    return hoursToMinutes(a) < hoursToMinutes(b) ? b:a;
});

let jobPostings = jobs.filter(job => hoursToMinutes(job) == hoursToMinutes(maxHours));
let jobTitles = jobPostings.map(j => j.Title);
console.log(jobTitles.join("\n"));