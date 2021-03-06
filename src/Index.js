const Readline = require(`readline`)
const FileSystem = require(`fs`)
const Http = require(`http`)

const Words = [...new Set(FileSystem.readFileSync("./Words.txt", "utf8").toLowerCase().split(","))]

const MatchLimit = 10
const MaxWordLength = 9

async function FindWordsForSubstring(Substring) {
    const Matches = []

    if (Substring.length > 0) {
        for (const Word of Words) {
            if (Word.includes(Substring) && (Matches.length < MatchLimit) && (Word.length < MaxWordLength)) {
                console.log(Word)
                Matches.push(Word)
            }
        }
    }
}

// async function RequestListener(Request, Response) {
//     const Substring = Request.url.slice(1)

//     FindWordsForSubstring(Substring)
//     Response.end()
// }

// const Server = Http.createServer(RequestListener)

// Server.listen(12345)

const Interface = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

Interface.on("line", FindWordsForSubstring)
