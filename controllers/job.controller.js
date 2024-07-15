import db from "../config/db.js";

export const getJobs = async (req, res) => {
  try {
    const data = await db.query(
      "SELECT * FROM jobs INNER JOIN companies ON companies.id = jobs.company_id;"
    );

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Records Found",
      });
    }
    res.status(200).send(data[0]);
  } catch (err) {
    res.status(500).json({ success: false, message: "Error On getJobs API" });
  }
};

export const getSingleJob = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await db.query(
      ` SELECT * FROM jobs INNER JOIN companies ON companies.id = jobs.company_id WHERE jobs.company_id = ?`,
      [id]
    );
    if (!data) {
      return res
        .status(404)
        .json({ success: true, message: "Invalid / Provide Wrong Job Id" });
    }
    res.status(200).json(data[0]);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Error On getSingleJob API" });
  }
};
