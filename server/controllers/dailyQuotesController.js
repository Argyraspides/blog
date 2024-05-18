import { DailyQuotes, DailyQuotesFieldNames } from "../models/dailyQuoteModel.js";
import { LogError } from "../loggers/errorLoggers/errorLogger.js";
import { LogRequest } from "../loggers/reqResLoggers/requestLogger.js"



export const addDailyQuote = async (req, res) => {

    LogRequest(req.body, "addDailyQuote")
    const { quote } = req.body;

    try {
        let dailyQuotes = await DailyQuotes.findOne();
        if (!dailyQuotes) {
            dailyQuotes = new DailyQuotes({
                [DailyQuotesFieldNames.quotes]: []
            });
        }

        const result = await DailyQuotes.findOneAndUpdate(
            {},
            { $push: { [DailyQuotesFieldNames.quotes]: quote } },
            { new: true, upsert: true } // Upsert to create the document if not found
        );

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ error: "Failed to add quote" });
        }
    } catch (error) {
        console.error("Error adding quote:", error);

        // Determine status code based on the type of error
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(400).json({ error: "Invalid quote data" });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }

}


export const getDailyQuote = async (req, res) => {
    try {
        const dailyQuotes = await DailyQuotes.findOne();
        
        if (!dailyQuotes || dailyQuotes[DailyQuotesFieldNames.quotes].length === 0) {
            res.status(404).json({ error: "No quotes found" });
            return;
        }

        const quotes = dailyQuotes[DailyQuotesFieldNames.quotes];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        res.status(200).json({ quote: randomQuote });
    } catch (error) {
        console.error("Error fetching random quote:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};