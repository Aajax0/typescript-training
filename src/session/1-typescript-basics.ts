let a: string;
let b: number;
let c: boolean;
enum Directions {
    Up,
    Down,
    Left,
    Right
}
let x: any;
let exampleFunc: (name: string, length: number) => boolean;

namespace ExampleTypes {
    export type ExampleFunc1 = (name: string, length: number) => boolean;
    export type ExampleFunc2 = (name: string) => [string, number];
    
    export type RandomScore = [string, number];

    export type ExampleFunc3 = (names: Array<string>) => Array<RandomScore>;
    export type ExampleFunc4 = (...names: Array<string>) => Array<{ name: string, score: number }>;

    export type NameApiResponse = {
        name: string,
        score: number,
        languages: {
            list: Array<string>
        }
    };

    export type ExampleFunc5 = () => Promise<NameApiResponse>;

    export class Bird {
        fly() {};
    };
    export class Fish {
        swim() {};
    }

    export type ExampleFunc6 = () => Bird | Fish;
    export type ExampleFunc7 = (pet: Bird | Fish) => pet is Bird;
}

namespace TypeScriptDemo {
    let example1: ExampleTypes.ExampleFunc1;
    let example2: ExampleTypes.ExampleFunc2;
    let example3: ExampleTypes.ExampleFunc3;
    let example4: ExampleTypes.ExampleFunc4;
    let example5: ExampleTypes.ExampleFunc5;
    let example6: ExampleTypes.ExampleFunc6;
    let example7: ExampleTypes.ExampleFunc7;

    export function executeSession1() {
        console.warn('executing typescript basics session');
    };
}



namespace TypeScriptDemoAnswers {
    function isNameOfGivenLength(name: string, length: number): boolean {
        return name.length === length;
    }

    function generateRandomScoreForName(name: string): [string, number] {
        let score = Math.random() * 5;
        if (isNameOfGivenLength(name, 5)) {
            score = Math.exp(1 + score);
        }
        return [name, score];
    }

    type RandomScore = [string, number];
    function generateScoresForNames(names: Array<string>): Array<RandomScore> {
        return names.map(name => generateRandomScoreForName(name));
    }

    function generateNameScoreObj(...names: Array<string>): Array<{ name: string, score: number }> {
        return names.map(name => {
            return {
                name,
                score: generateRandomScoreForName(name)[1]
            }
        });
    }

    type NameApiResponse = {
        name: string,
        score: number,
        languages: {
            list: Array<string>
        }
    };

    function getPerson(): Promise<NameApiResponse> {
        const response = {
            name: 'Rob',
            score: 5,
            languages: {
                list: ['TypeScript']
            }
        }
        return new Promise<NameApiResponse>((resolve, reject) => {
            setTimeout(() => {
                resolve(response);
            }, 1000);
        });
    }

    function getPet(): ExampleTypes.Fish | ExampleTypes.Bird {
        const score = generateNameScoreObj('Rob')[0].score;
        if (score > 2.5) {
            return new ExampleTypes.Bird();
        }
        return new ExampleTypes.Fish();
    }

    function isPetABird(pet: ExampleTypes.Bird | ExampleTypes.Fish): pet is ExampleTypes.Bird {
        return (<any>pet).fly !== undefined;
    }
}