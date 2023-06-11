export default function handler(req, res) {
  const time = new Date().toLocaleString();
  return res.status(200).json(time);
}