# memo和children

对于react的函数组件来说，`memo`是一种非常有效的性能优化手段，但是当被memo的组件有`props.children`的时候，就需要格外小心了。

<iframe src="https://codesandbox.io/embed/github/awmleer/react-practices/tree/master/code/memo-with-children?codemirror=1&view=split&expanddevtools=1&fontsize=14&module=/src/app.js" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

在上面的例子中，`A`、`B`、`C`都是被memo的组件，当点击按钮时，父组件的state会更新，此时，哪些组件会被触发重渲染呢？
