import db from "../db/db.js";

export const getJobs = async (req, res) => {
  try {
    const data = await db.query(
      "select * from jobs inner join companies on companies.id = jobs.company_id;"
    );

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Records found",
      });
    }
    res.status(200).send({
      jobs: data[0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
