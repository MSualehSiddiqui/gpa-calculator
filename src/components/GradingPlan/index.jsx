import "./style.css";
import CalculatorImg from "../../assets/image.png";

function GradingPlan() {
    const grades = [
        { marks: "90-100", grade: "A+", gpa: 4 },
        { marks: "85-89", grade: "A", gpa: 3.75 },
        { marks: "80-84", grade: "A-", gpa: 3.5 },
        { marks: "75-79", grade: "B+", gpa: 3.25 },
        { marks: "70-74", grade: "B", gpa: 3 },
        { marks: "66-69", grade: "B-", gpa: 2.75 },
        { marks: "63-65", grade: "C+", gpa: 2.5 },
        { marks: "60-62", grade: "C", gpa: 2 },
        { marks: "55-59", grade: "C-", gpa: 1.5 },
        { marks: "0-54", grade: "F", gpa: 0 },
    ];

    return (
        <section className="grading-premium-section">
            <div className="grading-divider"></div>
            <div className="grading-premium-header">
                <h3>Grading Plan</h3>
                <p>Quick reference for marks, grades, and GPA points.</p>
            </div>

            <div className="grading-premium-cards">
                {grades.map((item, index) => (
                    <div className="grade-card" key={index}>
                        <div className="grade-marks">{item.marks}</div>
                        <div className="grade-letter">{item.grade}</div>
                        <div className="grade-gpa">{item.gpa}</div>
                    </div>
                ))}
            </div>

            <div className="grade-tip">
                Tip: Use these grade points to calculate your semester GPA accurately.
            </div>
            <div className="calculator-img">
                <img src={CalculatorImg} alt="CalculatorImg" />
            </div>
        </section>
    );
}

export default GradingPlan