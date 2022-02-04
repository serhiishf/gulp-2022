//основной модуль
import gulp from "gulp";
//импорт путей
import { path } from "./gulp/config/path.js";
//импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js"

//передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}


//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";

//наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy)
}

export { svgSprive }

//построение сценариев выполнения задач
const dev = gulp.series(reset, copy, watcher);

//выполнение сценария по умолчанию
gulp.task('default', dev);