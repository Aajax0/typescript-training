$(() => {
    const logOutputElement = document.getElementById('log-output');
    const app = new TypeScriptDemo.App(logOutputElement);
    app.boot();
});