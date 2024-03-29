import fs from "fs";
import path from "path";

const readDirectoryContents = (folderPath) => {
    return fs.existsSync(folderPath) ? fs.readdirSync(folderPath) : [];
};

const randomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const getRandomProblem = () => {
    const qualsDirectory = path.join(process.cwd(), "data/quals/analysis/exams");

    const quals = readDirectoryContents(qualsDirectory);
    const randomQual = quals[randomInt(quals.length)];

    const problemsDirectory = path.join(qualsDirectory, randomQual);
    const problems = readDirectoryContents(problemsDirectory);
    const randomProblem = problems[randomInt(problems.length)];

    return {
        qual: randomQual,
        problem: randomProblem.split(".")[0],
    };
};

const quarterMap = {
    s: "Spring",
    f: "Fall",
};

const { qual, problem } = getRandomProblem();

const match = qual.match(/([0-9]+)([fs])/);
const year = match[1];
const quarter = quarterMap[match[2]];

console.log(`${quarter} 20${year} - Problem ${problem}`);
