"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createCourseService = /** @class */ (function () {
    function createCourseService() {
    }
    createCourseService.prototype.execute = function (name, duration, educator) {
        console.log(name, duration, educator);
    };
    return createCourseService;
}());
exports.default = new createCourseService();
