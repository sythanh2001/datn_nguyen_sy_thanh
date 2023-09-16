import { Model, models, model, Schema, Document } from "mongoose";

interface TemplateDocument extends Document {
  artworks: [number];
  author: { avatar: string; name: string; nick: string; url: string };
  categoryNames: string;
  thumbnails: [string];
  title: string;
}

const TemplateSchema = new Schema<TemplateDocument>({});

const TemplateModel = models.Template || model("Template", TemplateSchema);

export default TemplateModel as Model<TemplateDocument>;
