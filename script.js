function calculatePercentage() {
    const subjects = [
        parseFloat(document.getElementById('subject1').value) || 0,
        parseFloat(document.getElementById('subject2').value) || 0,
        parseFloat(document.getElementById('subject3').value) || 0,
        parseFloat(document.getElementById('subject4').value) || 0,
        parseFloat(document.getElementById('subject5').value) || 0,
        parseFloat(document.getElementById('subject6').value) || 0,
    ];

    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i] > 100) {
            alert(`Marks for Subject ${i + 1} cannot be greater than 100.`);
            return;
        }
    }

    const totalMarks = subjects.reduce((a, b) => a + b, 0);
    let percentage = (totalMarks / 600) * 100;

    document.getElementById('result').innerText = "Result is " + percentage;
    document.getElementById('percentage').innerText = "Percentage is " + percentage;
    document.getElementById('total').innerText = "Total is " + totalMarks;

    if (percentage >= 90) {
        document.getElementById('grade').innerText = "Grade is A";
    } else if (percentage >= 80) {
        document.getElementById('grade').innerText = "Grade is B";
    } else if (percentage >= 70) {
        document.getElementById('grade').innerText = "Grade is C";
    } else if (percentage >= 60) {
        document.getElementById('grade').innerText = "Grade is D";
    } else {
        document.getElementById('grade').innerText = "Grade is F";
    }
        
}


