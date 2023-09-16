import { Model, models, model, Schema, Document } from "mongoose";

interface ProductDocument extends Document {
  itemCollectionId: string;
  categories: [string];
  sellerID: string;
  title: string;
  describe: string;
  images: [Buffer];
  tags: [string];
  orientation: string;
  price: { amount: number; currency: string; formatted: string };
  discount: number;
  quantity: number;
  views: number;
  likes: number;
}

const ProductSchema = new Schema<ProductDocument>({
  sellerID: { type: String, required: true },
  title: { type: String, required: true, trim: true },
  images: { type: [Buffer] },
});

const ProductModel = models.Product || model("Product", ProductSchema);

export default ProductModel as Model<ProductDocument>;
