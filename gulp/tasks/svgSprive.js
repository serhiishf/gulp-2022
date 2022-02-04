import svgSprite from "gulp-svg-sprite";
export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>",
            }))
        )
        .pipe(svgSprite({
            
            shape: {
                dimension: {
                    maxWidth: 500,
                    maxHeight: 500
                },
                spacing: {
                    padding: 0
                },
                transform: [{
                    "svgo": {
                        "plugins": [
                            { removeViewBox: false },
                                    { removeUnusedNS: false },
                                    { removeUselessStrokeAndFill: true },
                                    { cleanupIDs: false },
                                    { removeComments: true },
                                    { removeEmptyAttrs: true },
                                    { removeEmptyText: true },
                                    { collapseGroups: true },
                                    { removeAttrs: { attrs: '(fill|stroke|style)' } }
                        ]
                    }
                }]
            },
            

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