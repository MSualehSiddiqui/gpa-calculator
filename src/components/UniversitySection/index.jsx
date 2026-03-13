import { useState } from "react";
import "./style.css";

const gradeOptions = [
    "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "F"
];

function UniversitySection() {
    const [showTable, setShowTable] = useState(false);
    const [totalCourses, setTotalCourses] = useState('');
    const [totalCredit, setTotalCredit] = useState('');
    const [courses, setCourses] = useState([]);
    const [gpaResult, setGpaResult] = useState(null); // GPA result

    const handleSubmit = (e) => {
        e.preventDefault();
        const courseArr = [];
        for (let i = 0; i < totalCourses; i++) {
            courseArr.push({ credit: "", grade: "" });
        }
        setCourses(courseArr);
        setShowTable(true);
        setGpaResult(null);
    };

    const handleCourseChange = (index, field, value) => {
        const updated = [...courses];
        updated[index][field] = value;
        setCourses(updated);
    };

    const calculateGPA = () => {
        let totalPoints = 0;
        let totalCredits = 0;
        const gradeMap = {
            "A+": 4, "A": 3.75, "A-": 3.5,
            "B+": 3.25, "B": 3, "B-": 2.75,
            "C+": 2.5, "C": 2, "C-": 1.5,
            "F": 0
        };

        courses.forEach((c) => {
            const credit = parseFloat(c.credit) || 0;
            const points = gradeMap[c.grade] || 0;
            totalPoints += points * credit;
            totalCredits += credit;
        });

        const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
        setGpaResult(gpa);
        setShowTable(false); // hide table after calculation
    };

    return (
        <section className="university-section" id="calculator">
            <div className="section-header">
                <h2>SZABIST</h2>
                <p>Track your semester GPA easily and efficiently</p>
            </div>

            {!showTable && gpaResult === null && (
                <div className="gpa-card">
                    <h3>Enter Your Semester Details</h3>

                    <div className="input-group">
                        <label>Total Courses</label>
                        <input
                            type="number"
                            value={totalCourses}
                            onChange={(e) => setTotalCourses(e.target.value)}
                            placeholder="e.g., 5"
                        />
                    </div>

                    <div className="input-group">
                        <label>Total Credit Hours</label>
                        <input
                            type="number"
                            value={totalCredit}
                            onChange={(e) => setTotalCredit(e.target.value)}
                            placeholder="e.g., 18"
                        />
                    </div>

                    <button className="start-btn" onClick={handleSubmit}>
                        Next
                    </button>
                </div>
            )}

            {showTable && (
                <div className="course-table-wrapper">
                    <h3>Enter Credit Hours & Grades</h3>
                    <table className="course-table">
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Credit Hours</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, i) => (
                                <tr key={i}>
                                    <td>Course {i + 1}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={course.credit}
                                            onChange={(e) =>
                                                handleCourseChange(i, "credit", e.target.value)
                                            }
                                            placeholder="0"
                                        />
                                    </td>
                                    <td>
                                        <select
                                            value={course.grade}
                                            onChange={(e) =>
                                                handleCourseChange(i, "grade", e.target.value)
                                            }
                                        >
                                            <option value="">Select</option>
                                            {gradeOptions.map((grade) => (
                                                <option key={grade} value={grade}>{grade}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="start-btn" onClick={calculateGPA}>
                        Calculate GPA
                    </button>
                </div>
            )}

            {gpaResult !== null && (
                <div className="gpa-result-card">
                    <h3>🎉 Your Semester GPA</h3>
                    <p>{gpaResult}</p>
                    <p>Based on the grades and credit hours entered.</p>
                    <p className="motivation">
                        {gpaResult >= 3.5
                            ? "Excellent work! Keep it up!"
                            : gpaResult >= 3
                                ? "Good job! Aim higher next semester!"
                                : "Don't worry! Try harder next time, you can do it!"}
                    </p>
                </div>
            )}
        </section>
    );
}

export default UniversitySection;