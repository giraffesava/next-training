export default function getById(req, res) {
  res.status(200).json({ number: req.query.id });
}
