let students = [
    {
        name: 'Miguel',
        grade1: 7,
        grade2: 8
    },
    {
        name: 'Pablo',
        grade1: 5,
        grade2: 5
    },
    {
        name: 'Sabrina',
        grade1: 10,
        grade2: 10
    }
]
for(i = 0; i < 4; i++) {
    let averageGrade = (students[i].grade1 + students[i].grade2) / 2;
    if(averageGrade >= 7 ) {
        alert(`Congratulations ${students[i].name} you will pass the year with an average grade of ${averageGrade}`)
    } else if(averageGrade < 7 && averageGrade >= 5) {
        alert(`It's sad ${students[i].name} you need to do a recuperation test to pass the year, your average grade was ${averageGrade}`)
    } else {
        alert(`It's very sad ${students[i].name} you are reproved with an average grade of ${averageGrade}`)
    }
}
