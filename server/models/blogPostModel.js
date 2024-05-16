import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogPostFieldNames = {
    publicationDate: 'publicationDate',
    lastEditedDate: 'lastEditedDate',
    title: 'title',
    author: 'author',
    coverImageSource: 'coverImageSource',
    textContent: 'textContent',
    imageContentSources: 'imageContentSources',
    category: 'category'
};

const blogPostSchemaFields = {
    [BlogPostFieldNames.publicationDate]: { type: Date, required: true },
    [BlogPostFieldNames.lastEditedDate]: {type: Date, required: false},
    [BlogPostFieldNames.title]: { type: String, required: true },
    [BlogPostFieldNames.author]: { type: String, required: true },
    [BlogPostFieldNames.coverImageSource]: { type: String, required: false },
    [BlogPostFieldNames.textContent]: {type: String, required: true},
    [BlogPostFieldNames.imageContentSources]: {type: [String], required: false},
    [BlogPostFieldNames.category]: {type: String, required: false}
};

const blogPostSchema = new Schema(blogPostSchemaFields);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);
export { BlogPost, BlogPostFieldNames };
