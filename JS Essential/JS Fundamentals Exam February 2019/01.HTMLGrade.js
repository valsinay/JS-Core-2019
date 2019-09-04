function exam(examPoints,completedHomework,totalHomework){

    if(examPoints === 400){
        console.log("6.00");
        return;
    }
    let points = (examPoints / 400) * 0.9 * 100;
    let bonus =0;

    if(completedHomework ===totalHomework){
      bonus = 10;
    }
    else{
        bonus = (completedHomework/totalHomework)*10;
    }

    let grade = 3 + 2 *(points+bonus- 100 / 5) / (100 / 2);

    if(grade < 3.00){
        console.log('2.00');
    } else if (grade > 6.00){
        console.log('6.00');
    } else {
        console.log(grade.toFixed(2));
    }
}
