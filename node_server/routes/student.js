function runQuery(sql) {
    database.query(sql, (err, rows) => {
        if (err) throw err;
        let resp = {
            status: "success",
            statusMessage: "",
            data: { "rows": rows }
        }
        return (resp);
    });
}

exports.getStudents = function (req, res) {
    const sql = "SELECT * FROM students LIMIT 0, 2";
    // let resp = runQuery(sql);
    database.query(sql, (err, rows) => {
        if (err) throw err;
        let resp = {
            status: "success",
            statusMessage: "",
            data: rows
        }
        res.send(resp)
    });
    // res.send(resp);
};

exports.getStudent = function (req, res) {
    const student_id = req.params.id;
    const sql = `SELECT * FROM students WHERE id= ${student_id}`;
    database.query(sql, (err, rows) => {
        if (err) throw err;
        let resp = {
            status: "success",
            statusMessage: "",
            data: rows[0]
        }
        res.send(resp)
    });
};

exports.getStudentsCount =function (req, res) {
    const sql = `SELECT COUNT(*) as totalRecords FROM students`;
    database.query(sql, (err, rows) => {
        if (err) throw err;
        let resp = {
            status: "success",
            statusMessage: "",
            data: {totalRecords: rows[0]['totalRecords']}
        }
        res.send(resp)
    });
};


exports.getStudentSubjects = function (req, res) {
    const student_id = req.params.id;
    const sql = `SELECT 
                    sub.name 
                FROM 
                    subjects sub 
                    JOIN 
                    student_subjects stud_sub 
                WHERE
                    stud_sub.student_id = ${student_id}
                    AND 
                    stud_sub.subject_id = sub.id
                `;
    database.query(sql, (err, rows) => {
        if (err) throw err;
        let resp = {
            status: "success",
            statusMessage: "",
            data: { "rows": rows }
        }
        res.send(resp)
    });
}