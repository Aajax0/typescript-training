namespace TypeScriptDemo {

    function isNameOfGivenLength(name: string, length: number): boolean {
        return name.length === length;
    }

    function generateRandomScoreForName(name: string): [string, number] {
        let score = Math.random() * 5;
        return [name, score];
    }

    type RandomScore = [string, number];
    function generateScoresForNames(...names: Array<string>): Array<RandomScore> {
        return names.map(name => generateRandomScoreForName(name));
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

    export function executeSession1() {
        console.warn('executing typescript basics session');
    };
}