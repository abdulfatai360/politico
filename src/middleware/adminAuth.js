function adminAuth(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(400).json({
      status: 400,
      error: 'Unauthorized access. Only admins can perform this function',
    });
  }

  return next();
}

export default adminAuth;
