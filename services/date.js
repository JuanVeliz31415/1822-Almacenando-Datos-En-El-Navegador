export const uniqueDates=(tasks)=>{
    const unique=[]
    tasks.forEach(task => {
        if(!unique.includes(task.dateFormart)){
            unique.push(task.dateFormart);
        }

    });
    return unique;
};

export const orderDates=(dates)=>{
    return dates.sort((a,b) => {
        const firstDate=moment(a,"DD/MM/YYYY");
        const secondDate=moment(b,"DD/MM/YYYY");
        return firstDate - secondDate;
    })

}