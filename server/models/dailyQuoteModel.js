import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DailyQuotesFieldNames = {
    quotes: 'quotes',
};

const dailyQuotesSchemaFields = {
    [DailyQuotesFieldNames.quotes]: { type: [String], required: true },
};

const dailyQuotesSchema = new Schema(dailyQuotesSchemaFields);

const DailyQuotes = mongoose.model("DailyQuotes", dailyQuotesSchema);
export { DailyQuotes, DailyQuotesFieldNames };
