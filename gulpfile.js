var gulp=require("gulp");
// var jsx=require("gulp-jsx"); 失效
var react=require("gulp-react");
var rename=require("gulp-rename");

gulp.task("default",["jsx:watch"]);

gulp.task("jsx:watch",function(){
    gulp.watch("./**/*.jsx",["jsx:compile"])
})

gulp.task("jsx:compile",function(){
     gulp.src("./**/*.jsx")
            .pipe(react().on("error",function(err){console.log(err)}))
            .pipe(rename(function(path){
                path.extname=".js"
        }))
            .pipe(gulp.dest("./"))
})