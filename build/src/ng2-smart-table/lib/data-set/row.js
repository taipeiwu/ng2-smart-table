"use strict";
var cell_1 = require('./cell');
var Row = (function () {
    function Row(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    Row.prototype.getCell = function (column) {
        return this.cells.find(function (el) { return el.getColumn() === column; });
    };
    Row.prototype.getCells = function () {
        return this.cells;
    };
    Row.prototype.getData = function () {
        return this.data;
    };
    Row.prototype.getNewData = function () {
        var values = Object.assign({}, JSON.parse(JSON.stringify(this.data)));
        this.getCells().forEach(function (cell) { return values[cell.getColumn().id] = cell.newValue; });
        return values;
    };
    Row.prototype.setData = function (data) {
        this.data = data;
        this.process();
    };
    Row.prototype.setInEditing = function (status) {
        var _this = this;
        if (!status)
            this.getCells().forEach(function (cell) { return cell.newValue = _this.data[cell.getColumn().id]; });
        this.isInEditing = status;
        return false;
    };
    Row.prototype.process = function () {
        var _this = this;
        this.cells = [];
        this._dataSet.getColumns().forEach(function (column) {
            var cell = _this.createCell(column);
            _this.cells.push(cell);
        });
    };
    Row.prototype.createCell = function (column) {
        var value = typeof this.data[column.id] === 'undefined' ? '' : this.data[column.id];
        return new cell_1.Cell(value, this, column, this._dataSet);
    };
    return Row;
}());
exports.Row = Row;