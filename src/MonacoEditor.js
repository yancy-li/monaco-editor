ui.MonacoEditor = function (monaco) {
    var self = this,
        editorDiv = document.createElement('div');
    editorDiv.style.width = '100%';
    editorDiv.style.height = '100%';
    ht.ui.MonacoEditor.superClass.constructor.call(self);

    if (!monaco) monaco = window.monaco;
    
    self.monacoPkg = monaco;

    self.setContent(editorDiv);

    var editor = self._editor = monaco.editor.create(editorDiv, {
        language: 'javascript'
    });

    editor.onDidChangeModelContent(function(e) {
        self._syncToHT = true;
        self.setValue(editor.getValue());
        self._syncToHT = false;
    });

    // 组件宽度和高度变化时要设置一个标记通知 Editor 更新
    self.addPropertyChangeListener(function (e) {
        var property = e.property;
        if (property === 'width' || property === 'height') {
            self._resizeEditor = true;
        }
    });
};

def(ui.MonacoEditor, ht.ui.HtmlView, {

    ms_ac: ['formDataName', 'value'],

    _formDataValueProps: {
        value: true
    },

    getEditor: function () {
        return this._editor;
    },

    getFormDataProperties: function () {
        return this._formDataValueProps;
    },

    onPropertyChanged: function(e) {
        var self = this;
        ui.MonacoEditor.superClass.onPropertyChanged.call(self, e);
        if (!self._syncToHT && e.property === 'value') {
            self.getEditor().setValue(e.newValue);
        }
    },

    setFormDataValue: function (value) {
        this.setValue(value);
    },

    getFormDataValue: function () {
        return this.getValue();
    },

    getLanguage: function() {
        return this.getEditor().getModel().getLanguageIdentifier().language;
    },

    setLanguage: function(lang) {
        this.monacoPkg.editor.setModelLanguage(this.getEditor().getModel(), lang);
    },

    validateImpl: function (x, y, width, height) {
        var self = this,
            editor = self._editor;

        ht.ui.MonacoEditor.superClass.validateImpl.call(self, x, y, width, height);

        if (self._resizeEditor) {
            editor.layout();
            delete self._resizeEditor;
        }
    },

    getSerializableProperties: function () {
        var parentProperties = ui.MonacoEditor.superClass.getSerializableProperties.call(this);
        return ht.Default.addMethod(parentProperties, {
            value: 1,
            formDataName: 1,
            language: 1
        });
    }
});