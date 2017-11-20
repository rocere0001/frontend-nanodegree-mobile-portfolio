var gulp = require("gulp"), minifyHtml = require("gulp-htmlmin"), cleanCSS = require("gulp-clean-css")
    , imgmin = require("gulp-imagemin"), uglify = require("gulp-uglify"), inline = require('gulp-inline');


gulp.task("minify-html", function () {
    return gulp.src("*.html")
        .pipe(inline({
            base: '/',
            js: uglify,
            css: cleanCSS,
            disabledTypes: ['svg', 'img'] // Only inline css files
        }))
        .pipe(minifyHtml({collapseWhitespace: true}))
        .pipe(gulp.dest("dist/"))
});

gulp.task("inline", function () {
    return gulp.src("dist/*.html")
        .pipe(inline({
            base: '/dist/',
            js: uglify,
            css: cleanCSS,
            disabledTypes: ['svg', 'img'] // Only inline css files
        }))
        .pipe(gulp.dest("dist/"))
});

gulp.task("css", function () {
    return gulp.src("css/*.css")
        .pipe(cleanCSS({inline: ["local"]}))
        .pipe(gulp.dest("dist/css"))
});

gulp.task("jsmin", function () {
    return gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
});
//116 x 50
gulp.task("imgmin", function() {
    return gulp.src("img/*")
        .pipe(imgmin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 10,
            svgoPlugins: [{removeViewBox: true}]
        }))
        .pipe(gulp.dest("dist/img"));
});


gulp.task("minify-views-html", function () {
    return gulp.src("views/*.html")
        .pipe(inline({
            base: '/views/',
            js: uglify,
            css: cleanCSS,
            disabledTypes: ['svg', 'img'] // Only inline css files
        }))
        .pipe(minifyHtml({collapseWhitespace: true}))
        .pipe(gulp.dest("dist/views/"))
});

gulp.task("minify-views-css", function () {
    return gulp.src("views/css/*")
        .pipe(cleanCSS({inline: ["local"]}))
        .pipe(gulp.dest("dist/views/css"))
});

gulp.task("minify-views-js", function () {
    return gulp.src("views/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/views/js"))
});
//360(w)x270(h)
gulp.task("views-img", function() {
    return gulp.src("views/images/*")
        .pipe(imgmin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 10,
            svgoPlugins: [{removeViewBox: true}]
        }))
        .pipe(gulp.dest("dist/views/images"));
});
gulp.task("optimize",["minify-html"/*,"css","jsmin"*/,"imgmin","minify-views-html"/*,"minify-views-css","minify-views-js"*/,"views-img"]);
gulp.task("default",["optimize"]);

