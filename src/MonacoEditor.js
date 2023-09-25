ui.MonacoEditor = function (monaco) {
    var self = this,
        editorDiv = document.createElement('div');
    editorDiv.style.width = '100%';
    editorDiv.style.height = '100%';
    ui.MonacoEditor.superClass.constructor.call(self, monaco && monaco.editor ? NULL : monaco);

    if (!monaco || !monaco.editor) monaco = window.monaco;
    
    self.monacoPkg = monaco;

    self.setContent(editorDiv);

    // 组件宽度和高度变化时要设置一个标记通知 Editor 更新
    self.addPropertyChangeListener(function (e) {
        var property = e.property;
        if (property === 'width' || property === 'height') {
            self._resizeEditor = true;
        }
    });
};

def(ui.MonacoEditor, ht.ui.HtmlView, {

    ms_ac: ['formDataName', 'value', 'language'],

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
            self.getEditor() && self.getEditor().setValue(e.newValue);
        }
        if (e.property == 'language') {
            if (self.getEditor()) {
                (self.monacoPkg || window.monaco).editor.setModelLanguage(this.getEditor().getModel(), e.newValue);
            }
        }
    },

    setFormDataValue: function (value) {
        this.setValue(value);
    },

    getFormDataValue: function () {
        return this.getValue();
    },

    figureScrollSize: function(contentDiv) {
        var firstChild = contentDiv.firstChild;
        return {
            width: firstChild.offsetWidth,
            height: firstChild.offsetHeight
        }
    },
    validateImpl: function (x, y, width, height) {
        var self = this,
            editor = self._editor;
        if (!editor) {
            editor = self._editor = monaco.editor.create(self.getContent(), {
                language: self.getLanguage() || 'javascript'
            });
            
            editor.setValue(self.getValue());
            editor.onDidChangeModelContent(function(e) {
                self._syncToHT = true;
                self.setValue(editor.getValue());
                self._syncToHT = false;
            });
        }
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