import { Model, models, model, Schema, Document } from "mongoose";

interface CollectionDocument extends Document {
  sellerID: string;
  name: string;
  description: string;
  images: [Buffer];
  price: number;
  discount: number;
  quantity: number;
  views: number;
  likes: number;
}

const CollectionSchema = new Schema<CollectionDocument>({
  sellerID: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  images: { type: [Buffer] },
});

const CollectionModel =
  models.Collection || model("Collection", CollectionSchema);

export default CollectionModel as Model<CollectionDocument>;
