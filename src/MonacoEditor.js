ui.MonacoEditor = function () {
    var self = this,
        editorDiv = document.createElement('div');
    editorDiv.style.width = '100%';
    editorDiv.style.height = '100%';
    ht.ui.MonacoEditor.superClass.constructor.call(self);

    self.setContent(editorDiv);

    self._editor = monaco.editor.create(editorDiv, {
        language: 'javascript'
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

    ms_ac: ['formDataName'],

    _formDataValueProps: {
        value: true
    },

    getEditor: function () {
        return this._editor;
    },


    getFormDataProperties: function () {
        return this._formDataValueProps;
    },

    setValue: function (value) {
        var oldValue = this.getValue();
        if (oldValue !== value) {
            this._editor.setValue(value);
            this.fp('value', oldValue, value);
        }
    },

    getValue: function () {
        return this._editor.getValue();
    },

    setFormDataValue: function (value) {
        this.setValue(value);
    },

    getFormDataValue: function () {
        return this.getValue();
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
            formDataName: 1
        });
    }
});