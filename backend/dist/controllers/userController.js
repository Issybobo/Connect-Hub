"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["password"],
  _excluded2 = ["blockList"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var _require = require("../middlewares/error"),
  CustomError = _require.CustomError;
var User = require("../models/User");
var Post = require("../models/Post");
var Comment = require("../models/Comment");
var Story = require("../models/Story");
var getUserController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var userId, user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // id of the user to get
          userId = req.params.userId; // get the user from the database
          _context.next = 4;
          return User.findById(userId);
        case 4:
          user = _context.sent;
          if (user) {
            _context.next = 7;
            break;
          }
          throw new CustomError("User not found!", 404);
        case 7:
          // send the user as a response
          res.status(200).json(user);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error("Error in getUserController:", _context.t0); // Log the error
          next(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getUserController(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// Update user controller
var updateUserController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var userId, _req$body, password, rest, updatedUser;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // user id to update
          userId = req.params.userId;
          _req$body = req.body, password = _req$body.password, rest = _objectWithoutProperties(_req$body, _excluded); // Exclude password from the update
          //update the user in the database
          _context2.next = 5;
          return User.findByIdAndUpdate(userId, rest, {
            "new": true
          });
        case 5:
          updatedUser = _context2.sent;
          if (updatedUser) {
            _context2.next = 8;
            break;
          }
          throw new CustomError("User not found!", 404);
        case 8:
          // send the updated user as a response
          res.status(200).json(updatedUser);
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error("Error in updateUserController:", _context2.t0); // Log the error
          next(_context2.t0);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function updateUserController(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// follow user controller
var followUserController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var userId, _id, userToFollow, loggedInUser;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // id of the user to follow
          userId = req.params.userId; // id of the logged in user
          _id = req.body._id; //check if the user is trying to follow himself
          if (!(userId === _id)) {
            _context3.next = 5;
            break;
          }
          throw new CustomError("You can not follow yourself", 500);
        case 5:
          _context3.next = 7;
          return User.findById(userId);
        case 7:
          userToFollow = _context3.sent;
          _context3.next = 10;
          return User.findById(_id);
        case 10:
          loggedInUser = _context3.sent;
          if (!(!userToFollow || !loggedInUser)) {
            _context3.next = 15;
            break;
          }
          console.log("User to follow:", userToFollow);
          console.log("Logged-in user:", loggedInUser);
          throw new CustomError("User not found!", 404);
        case 15:
          if (!loggedInUser.following.includes(userId)) {
            _context3.next = 17;
            break;
          }
          throw new CustomError("Already following this user!", 400);
        case 17:
          // add the user to follow to the logged in user's following list
          loggedInUser.following.push(userId);

          // add the logged in user to the user to follow's followers list
          userToFollow.followers.push(_id);

          // save the changes to the database
          _context3.next = 21;
          return loggedInUser.save();
        case 21:
          _context3.next = 23;
          return userToFollow.save();
        case 23:
          // send a success response

          res.status(200).json({
            message: "Successfully followed user!"
          });
          _context3.next = 29;
          break;
        case 26:
          _context3.prev = 26;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 29:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 26]]);
  }));
  return function followUserController(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var unfollowUserController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var userId, _id, userToUnfollow, loggedInUser;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          //userId of the user to unfollow
          userId = req.params.userId; //id of the logged in user
          _id = req.body._id;
          _context4.prev = 2;
          if (!(userId === _id)) {
            _context4.next = 5;
            break;
          }
          throw new CustomError("You can not unfollow yourself", 500);
        case 5:
          _context4.next = 7;
          return User.findById(userId);
        case 7:
          userToUnfollow = _context4.sent;
          _context4.next = 10;
          return User.findById(_id);
        case 10:
          loggedInUser = _context4.sent;
          if (!(!userToUnfollow || !loggedInUser)) {
            _context4.next = 13;
            break;
          }
          throw new CustomError("User not found!", 404);
        case 13:
          if (loggedInUser.following.includes(userId)) {
            _context4.next = 15;
            break;
          }
          throw new CustomError("Not following this user", 400);
        case 15:
          //remove the user to unfollow from the logged in user's following list
          loggedInUser.following = loggedInUser.following.filter(function (id) {
            return id.toString() !== userId;
          });

          //remove the logged in user from the user to unfollow's followers list
          userToUnfollow.followers = userToUnfollow.followers.filter(function (id) {
            return id.toString() !== _id;
          });

          //save the changes to the database
          _context4.next = 19;
          return loggedInUser.save();
        case 19:
          _context4.next = 21;
          return userToUnfollow.save();
        case 21:
          res.status(200).json({
            message: "Successfully unfollowed user!"
          });
          _context4.next = 27;
          break;
        case 24:
          _context4.prev = 24;
          _context4.t0 = _context4["catch"](2);
          next(_context4.t0);
        case 27:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 24]]);
  }));
  return function unfollowUserController(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

// block user controller
var blockUserController = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var userId, _id, userToBlock, loggedInUser;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          //userId of the user to block
          userId = req.params.userId; //id of the logged in user
          _id = req.body._id;
          _context5.prev = 2;
          if (!(userId === _id)) {
            _context5.next = 5;
            break;
          }
          throw new CustomError("You can not block yourself", 500);
        case 5:
          _context5.next = 7;
          return User.findById(userId);
        case 7:
          userToBlock = _context5.sent;
          _context5.next = 10;
          return User.findById(_id);
        case 10:
          loggedInUser = _context5.sent;
          if (!(!userToBlock || !loggedInUser)) {
            _context5.next = 13;
            break;
          }
          throw new CustomError("User not found!", 404);
        case 13:
          if (!loggedInUser.blockList.includes(userId)) {
            _context5.next = 15;
            break;
          }
          throw new CustomError("This user is already blocked!", 400);
        case 15:
          //add the user to block to the logged in user's block list
          loggedInUser.blockList.push(userId);

          //remove the user to block from the logged in user's following list
          loggedInUser.following = loggedInUser.following.filter(function (id) {
            return id.toString() !== userId;
          });

          //remove the logged in user from the user to block's followers list
          userToBlock.followers = userToBlock.followers.filter(function (id) {
            return id.toString() !== _id;
          });

          //save the changes to the database
          _context5.next = 20;
          return loggedInUser.save();
        case 20:
          _context5.next = 22;
          return userToBlock.save();
        case 22:
          //send a success response
          res.status(200).json({
            message: "Successfully blocked user!"
          });
          _context5.next = 28;
          break;
        case 25:
          _context5.prev = 25;
          _context5.t0 = _context5["catch"](2);
          next(_context5.t0);
        case 28:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 25]]);
  }));
  return function blockUserController(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

// unblock user controller
var unblockUserController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    var userId, _id, userToUnblock, loggedInUser;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          //userId of the user to unblock
          userId = req.params.userId; //id of the logged in user
          _id = req.body._id; //check if the user is trying to unblock himself
          if (!(userId === _id)) {
            _context6.next = 5;
            break;
          }
          throw new CustomError("You can not unblock yourself", 500);
        case 5:
          _context6.next = 7;
          return User.findById(userId);
        case 7:
          userToUnblock = _context6.sent;
          _context6.next = 10;
          return User.findById(_id);
        case 10:
          loggedInUser = _context6.sent;
          if (!(!userToUnblock || !loggedInUser)) {
            _context6.next = 13;
            break;
          }
          throw new CustomError("User not found!", 404);
        case 13:
          if (loggedInUser.blockList.includes(userId)) {
            _context6.next = 15;
            break;
          }
          throw new CustomError("Not blocking is user!", 400);
        case 15:
          //remove the user to unblock from the logged in user's block list
          loggedInUser.blockList = loggedInUser.blockList.filter(function (id) {
            return id.toString() != userId;
          });

          //save the changes to the database
          _context6.next = 18;
          return loggedInUser.save();
        case 18:
          res.status(200).json({
            message: "Successfully unblocked user!"
          });
          _context6.next = 24;
          break;
        case 21:
          _context6.prev = 21;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 21]]);
  }));
  return function unblockUserController(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

// get blocked users controller
var getBlockedUsersController = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
    var userId, user, blockList, data;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          //userId of the user to get the blocked users
          userId = req.params.userId;
          _context7.prev = 1;
          _context7.next = 4;
          return User.findById(userId).populate("blockList", "username fullName profilePicture");
        case 4:
          user = _context7.sent;
          if (user) {
            _context7.next = 7;
            break;
          }
          throw new CustomError("User not found!", 404);
        case 7:
          //get the block list from the user
          blockList = user.blockList, data = _objectWithoutProperties(user, _excluded2); //send the block list as a response
          res.status(200).json(blockList);
          _context7.next = 14;
          break;
        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](1);
          next(_context7.t0);
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 11]]);
  }));
  return function getBlockedUsersController(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

// delete user controller

var deleteUserController = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
    var userId, userToDelete, replyComments;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          //userId of the user to delete
          userId = req.params.userId;
          _context9.prev = 1;
          _context9.next = 4;
          return User.findById(userId);
        case 4:
          userToDelete = _context9.sent;
          if (userToDelete) {
            _context9.next = 7;
            break;
          }
          throw new CustomError("User not found!", 404);
        case 7:
          _context9.next = 9;
          return Post.deleteMany({
            user: userId
          });
        case 9:
          _context9.next = 11;
          return Post.deleteMany({
            "comments.user": userId
          });
        case 11:
          _context9.next = 13;
          return Post.deleteMany({
            "comments.replies.user": userId
          });
        case 13:
          _context9.next = 15;
          return Comment.deleteMany({
            user: userId
          });
        case 15:
          _context9.next = 17;
          return Story.deleteMany({
            user: userId
          });
        case 17:
          _context9.next = 19;
          return Post.updateMany({
            likes: userId
          }, {
            $pull: {
              likes: userId
            }
          });
        case 19:
          _context9.next = 21;
          return User.updateMany({
            _id: {
              $in: userToDelete.following
            }
          }, {
            $pull: {
              followers: userId
            }
          });
        case 21:
          _context9.next = 23;
          return Comment.updateMany({}, {
            $pull: {
              likes: userId
            }
          });
        case 23:
          _context9.next = 25;
          return Comment.updateMany({
            "replies.likes": userId
          }, {
            $pull: {
              "replies.likes": userId
            }
          });
        case 25:
          _context9.next = 27;
          return Post.updateMany({}, {
            $pull: {
              likes: userId
            }
          });
        case 27:
          _context9.next = 29;
          return Comment.find({
            "replies.user": userId
          });
        case 29:
          replyComments = _context9.sent;
          _context9.next = 32;
          return Promise.all(replyComments.map(/*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(comment) {
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    comment.replies = comment.replies.filter(function (reply) {
                      return reply.user.toString() != userId;
                    });
                    _context8.next = 3;
                    return Comment.save();
                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }));
            return function (_x25) {
              return _ref9.apply(this, arguments);
            };
          }()));
        case 32:
          _context9.next = 34;
          return userToDelete.deleteOne();
        case 34:
          //send a success response
          res.status(200).json({
            message: "Everything associated with user is deleted successfully!"
          });
          _context9.next = 40;
          break;
        case 37:
          _context9.prev = 37;
          _context9.t0 = _context9["catch"](1);
          next(_context9.t0);
        case 40:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 37]]);
  }));
  return function deleteUserController(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

// search users controller
var searchUsersController = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res, next) {
    var query, users;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          //query to search for
          query = req.params.query;
          _context10.prev = 1;
          _context10.next = 4;
          return User.find({
            //search for users that match the query in the username or full name
            $or: [{
              "username": {
                $regex: new RegExp(query, "i")
              }
            }, {
              "fullName": {
                $regex: new RegExp(query, "i")
              }
            }]
          });
        case 4:
          users = _context10.sent;
          //send the users as a response
          res.status(200).json(users);
          _context10.next = 11;
          break;
        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](1);
          next(_context10.t0);
        case 11:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 8]]);
  }));
  return function searchUsersController(_x26, _x27, _x28) {
    return _ref10.apply(this, arguments);
  };
}();

// generate file url controller
var generateFileUrl = function generateFileUrl(filename) {
  //generate the file url
  return process.env.URL + "/uploads/".concat(filename);
};

// update profile picture controller
var updateProfilePictureController = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res, next) {
    var userId, file, user;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          //userId of the user to update the profile picture
          userId = req.params.userId; //profile picture of the user to update
          file = req.file;
          if (file) {
            _context11.next = 4;
            break;
          }
          return _context11.abrupt("return", next(new CustomError("No file uploaded!", 400)));
        case 4:
          _context11.prev = 4;
          _context11.next = 7;
          return User.findByIdAndUpdate(userId, {
            profilePicture: generateFileUrl(file.filename)
          }, {
            "new": true
          });
        case 7:
          user = _context11.sent;
          if (user) {
            _context11.next = 10;
            break;
          }
          throw new CustomError("User not found!", 404);
        case 10:
          //send the updated user as a response
          res.status(200).json({
            message: "Profile picture updated successfully!",
            user: user
          });
          _context11.next = 16;
          break;
        case 13:
          _context11.prev = 13;
          _context11.t0 = _context11["catch"](4);
          next(_context11.t0);
        case 16:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[4, 13]]);
  }));
  return function updateProfilePictureController(_x29, _x30, _x31) {
    return _ref11.apply(this, arguments);
  };
}();

// update cover picture controller

var uploadCoverPictureController = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res, next) {
    var userId, file, user;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          //userId of the user to update the cover picture
          userId = req.params.userId; //cover picture of the user to update
          file = req.file;
          if (file) {
            _context12.next = 4;
            break;
          }
          return _context12.abrupt("return", next(new CustomError("No file uploaded!", 400)));
        case 4:
          _context12.prev = 4;
          _context12.next = 7;
          return User.findByIdAndUpdate(userId, {
            coverPicture: generateFileUrl(file.filename)
          }, {
            "new": true
          });
        case 7:
          user = _context12.sent;
          if (user) {
            _context12.next = 10;
            break;
          }
          throw new CustomError("User not found!", 404);
        case 10:
          //send the updated user as a response
          res.status(200).json({
            message: "Cover picture updated successfully!",
            user: user
          });
          _context12.next = 16;
          break;
        case 13:
          _context12.prev = 13;
          _context12.t0 = _context12["catch"](4);
          next(_context12.t0);
        case 16:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[4, 13]]);
  }));
  return function uploadCoverPictureController(_x32, _x33, _x34) {
    return _ref12.apply(this, arguments);
  };
}();
module.exports = {
  getUserController: getUserController,
  updateUserController: updateUserController,
  followUserController: followUserController,
  unfollowUserController: unfollowUserController,
  blockUserController: blockUserController,
  unblockUserController: unblockUserController,
  getBlockedUsersController: getBlockedUsersController,
  deleteUserController: deleteUserController,
  searchUsersController: searchUsersController,
  updateProfilePictureController: updateProfilePictureController,
  uploadCoverPictureController: uploadCoverPictureController
};