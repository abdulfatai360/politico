import db from '../models/dbconfig';

async function checkIfDeleted(req, res, next) {
  const id = Number(req.params.id);
  const queryStr = `SELECT name FROM party WHERE id = '${id}'`;

  const { rowCount } = await db.query(queryStr);
  if (rowCount === 0) {
    return res.status(400).json({
      status: 400,
      message: 'This entity had already been deleted',
    });
  }

  return next();
}

export default checkIfDeleted;
