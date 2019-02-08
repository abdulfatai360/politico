"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function adminAuth(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(400).json({
      status: 400,
      error: 'Unauthorized access. Only admins can perform this function'
    });
  }

  return next();
}

var _default = adminAuth;
exports.default = _default;
//# sourceMappingURL=adminAuth.js.map