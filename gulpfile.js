"use strict";

const gulp = require("gulp");
const del = require("del");

gulp.task("dist:cleanfolder", () => 
  del([
    "dist/*",
    "!dist/*.exe",
    "!dist/*.deb",
    "!dist/*.AppImage",
    "!dist/*.dmg",
    "!dist/*.snap"
  ])
);
