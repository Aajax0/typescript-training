namespace TypeScriptDemo {

    export class App {

        private logger: Logger;

        constructor(logOutputElement: HTMLElement) {
            this.logger = new Logger(logOutputElement);
        }

        public boot(): void {
            console.info('the app is loaded');

            executeSession1(); //basics
            //executeSession2(); //oop
            //executeSession3(); //namespaces/modules
        }
    }
}