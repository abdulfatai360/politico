function adminAuth(req, res, next) {
  if (req.user.is_admin !== true) {
    return res.status(400).json({
      status: 400,
      error: 'Unauthorized access. Only admins can perform this function',
    });
  }

  return next();
}

export default adminAuth;
