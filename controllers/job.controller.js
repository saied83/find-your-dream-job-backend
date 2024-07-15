import db from "../config/db.js";

export const getJobs = async (req, res) => {
  try {
    const queryParams = parseInt(req.query.limit);
    let data;
    if (queryParams) {
      data = await db.query(
        `SELECT * FROM jobs j INNER JOIN companies c ON c.c_id = j.c_id ORDER BY j.c_id DESC LIMIT ?;`,
        [queryParams]
      );
    } else {
      data = await db.query(
        "SELECT * FROM jobs j INNER JOIN companies c ON c.c_id = j.c_id ORDER BY j.c_id DESC;"
      );
    }
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No records found",
      });
    }
    res.status(200).send(data[0]);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error in getJobs API", error });
  }
};

export const getSingleJob = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await db.query(
      ` SELECT * FROM jobs j INNER JOIN companies c ON c.c_id = j.c_id WHERE j.c_id = ?`,
      [id]
    );
    if (!data) {
      return res
        .status(404)
        .json({ success: true, message: "Invalid / Provide wrong job id" });
    }

    res.status(200).json(data[0]);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error in getSingleJob API", error });
  }
};

export const createJob = async (req, res) => {
  try {
    const {
      job_title,
      job_type,
      job_location,
      job_description,
      job_salary,
      c_name,
      c_description,
      c_email,
      c_phone,
    } = req.body;

    const [result, fields] = await db.query(
      `INSERT INTO companies (c_name, c_description, c_email, c_phone) VALUES (?,?,?,?)`,
      [c_name, c_description, c_email, c_phone]
    );
    const companyId = parseInt(result["insertId"]);

    const data = await db.query(
      `INSERT INTO jobs (job_title, job_type, job_description, job_location, job_salary, c_id) values (?,?,?,?,?,?)`,
      [
        job_title,
        job_type,
        job_description,
        job_location,
        job_salary,
        companyId,
      ]
    );

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Error in insert query",
      });
    }
    res.status(201).send({
      success: true,
      message: "New job Record created",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error in createJob API", error });
  }
};

export const editJob = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      job_title,
      job_type,
      job_location,
      job_description,
      job_salary,
      c_name,
      c_description,
      c_email,
      c_phone,
    } = req.body;

    const prevJobData = await db.query(
      "SELECT * FROM jobs j INNER JOIN companies c ON c.c_id = j.c_id WHERE j.c_id = ?",
      [id]
    );
    const dt = prevJobData[0][0];

    if (
      job_title === dt.job_title &&
      job_type === dt.job_type &&
      job_location === dt.job_location &&
      job_description === dt.job_description &&
      job_salary === dt.job_salary &&
      c_name === dt.c_name &&
      c_description === dt.c_description &&
      c_email === dt.c_email &&
      c_phone === dt.c_phone
    ) {
      return res.status(404).send({
        success: false,
        message: "Provide new details",
      });
    }

    const data = await db.query(
      `UPDATE jobs  SET job_title=?, job_type=?, job_description=?, job_location=?, job_salary=? WHERE c_id=?`,
      [job_title, job_type, job_description, job_location, job_salary, id]
    );
    const data2 = await db.query(
      `UPDATE companies SET c_name=?, c_description=?, c_email=?, c_phone=? WHERE c_id=?`,
      [c_name, c_description, c_email, c_phone, id]
    );

    if (!data && !data2) {
      return res.status(404).send({
        success: false,
        message: "Error in Update Query",
      });
    }
    res.status(200).send({
      success: true,
      message: "Job Record Updated",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error in editJob API", error });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Invalid job id",
      });
    }
    await db.query(`DELETE FROM jobs WHERE c_id=?`, [id]);
    await db.query(`DELETE FROM companies WHERE c_id=?`, [id]);

    res.status(200).send({
      success: true,
      message: "Job Record Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error in deleteJob API", error });
  }
};
