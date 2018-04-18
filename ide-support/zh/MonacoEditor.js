/**
 * 编辑器组件
 * @constructor
 * @extends {ht.ui.HtmlView}
 */
ht.ui.MonacoEditor = function() {}

/**
 * 获取 MonacoEditor 编辑器对象
 * @return {IStandaloneCodeEditor}
 */
ht.ui.MonacoEditor.prototype.getEditor = function() {}

/**
 * 获取 MonacoEditor 编辑器的内容
 * @return {String}
 */
ht.ui.MonacoEditor.prototype.getValue = function() {}

/**
 * 设置 MonacoEditor 编辑器的内容
 * @param {String} value
 */
ht.ui.MonacoEditor.prototype.setValue = function(value) {}


/**
 * 设置组件在表单中的名称
 * @param {String} name 名称
 */
ht.ui.MonacoEditor.prototype.setFormDataName = function (name){};


/**
 * 获取组件在表单中的名称
 * @return {String} 名称
 */
ht.ui.MonacoEditor.prototype.getFormDataName = function (){};


/**
 * 获取组件在表单中的值
 * @return {String} 值
 */
ht.ui.MonacoEditor.prototype.getFormDataValue = function (){};


/**
 * 设置组件在表单中的值
 * @param {String} value 值
 */
ht.ui.MonacoEditor.prototype.setFormDataValue = function (value){};


/**
 * 获取当前编辑器中的语言
 * @return {String} 语言，默认为 javascript
 */
ht.ui.MonacoEditor.prototype.getLanguage = function (){};


/**
 * 设置当前编辑器中的语言
 * @param {String} lang 语言
 */
ht.ui.MonacoEditor.prototype.setLanguage = function (lang){};