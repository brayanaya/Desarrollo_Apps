"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
@(0, core_1.Component)({
    selector: 'app-root',
    standalone: true, // <--- IMPORTANTE
    imports: [forms_1.FormsModule, common_1.CommonModule], // <--- IMPORTANTE
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
class AppComponent {
    titulo = 'lista de compras clase 2';
    producto = '';
    lista = [];
    agregar() {
        if (this.producto === '') {
            return;
        }
        this.lista.push(this.producto);
        this.producto = '';
    }
    eliminar(i) {
        this.lista.splice(i, 1);
    }
}
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map