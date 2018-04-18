
索引

* [概述](#ref_description)

---

!(#ref_description)

### 概述

`ht.ui.MonacoEditor` 从 `ht.ui.HtmlView` 继承，内嵌了 [Monaco Editor](https://microsoft.github.io/monaco-editor)，可实现代码编辑功能

使用本插件需要先引入 `Monaco Editor` 相关类库：

    <link rel="stylesheet" data-name="vs/editor/editor.main" href="./package/min/vs/editor/editor.main.css">
    <script>
        var require = {
            paths: {
                'vs': './package/min/vs'
            }
        };
    </script>
    <script src="./package/min/vs/loader.js"></script>
    <script src="./package/min/vs/editor/editor.main.nls.js"></script>
    <script src="./package/min/vs/editor/editor.main.js"></script>

> `Monaco Editor` 支持多种引入方式，我们这里采用了先下载类库，然后通过 `script` 直接引入；其它引入方式请参考这里：[Monaco Editor Samples](https://github.com/Microsoft/monaco-editor-samples/)

然后引入 `HT` 类库：

    <script src='ht.js'></script>
    <script src='ht-ui.js'></script>
    <script src='ht-ui-monaco-editor.js'></script>

示范例子：

!(#example_demo@500)

`ht.ui.MonacoEditor` 类提供了 `getEditor` 函数获取 [IStandaloneCodeEditor](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandalonecodeeditor.html) 做业务处理，如：

    monacoEditor.getEditor().getValue() // 获取内容
    monacoEditor.getEditor().setValue(value) // 设置内容

    // 使用全局函数改变 Editor 的语言
    monaco.editor.setModelLanguage(monacoEditor.getEditor().getModel(), 'plaintext')

为了方便起见，组件上也封装了 `value` 属性，所以下面的方式也是可以的：

    monacoEditor.getValue() // 获取内容
    monacoEditor.setValue(value) // 设置内容
