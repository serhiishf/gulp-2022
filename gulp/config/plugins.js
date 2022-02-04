import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //обработка ошибок
import notify from "gulp-notify"; // сообщения (подсказки)

/* for svgSpr
import svgmin from "gulp-svgmin"; //SVG minification
import cheerio from "gulp-cheerio"; //removal of unnecessary atributes from svg
*/





//экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber, 
    notify: notify,
    /* for svgSpr
    svgmin: svgmin,
    cheerio: cheerio,
    */
}