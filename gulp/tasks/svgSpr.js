import svgSprite from "gulp-svg-sprite";
import svgmin from "gulp-svgmin"; 
import cheerio from "gulp-cheerio";
import replace from "gulp-replace";

export const svgSpr = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        /*
        .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SVG",
            message: "Error: <%= error.message %>",
            }))
        )
            */
        .pipe(app.plugins.svgmin({
			js2svg: {
				pretty: true
			}
		}))
        .pipe(app.plugins.cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
        .pipe(app.plugins.replace('&gt;', '>'))
		// build svg sprite
        .pipe(app.plugins.svgSprite({
			mode: {
				symbol: {
                    sprite: `../icons/icons.svg`,
                    //создавать страницу с перечнем иконок
                    example: true,
				}
			}
		}))
        .pipe(app.gulp.dest(`${app.path.build.images}`));



}